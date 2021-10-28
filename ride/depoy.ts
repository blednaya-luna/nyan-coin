import {
  setScript,
  broadcast,
  invokeScript,
  waitForTx,
} from '@waves/waves-transactions';
import fs from 'fs';
import fetch from 'node-fetch';

const nodeUrl = 'https://nodes-testnet.wavesnodes.com';
const chainId = 84;

const compileResultScript = (script: string) =>
  fetch(`${nodeUrl}/utils/script/compileCode`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: script,
  })
    .then((res) => res.json())
    .then((json) => {
      if ('error' in json) {
        return { error: json.message };
      }
      return { compiledScript: json.script };
    })
    .catch((error) => ({ error: error.message }));

const getCLIArgs = () => {
  const seedArg = process.argv.find((arg) => arg.includes('-seed'));
  if (!seedArg) {
    return { error: 'seed not provided, call with -seed="your seed"' };
  }
  const [_, seed] = seedArg.split('=');

  const isDAppUpdateArg = process.argv.find((arg) => arg.includes('-update'));
  const isDAppUpdate = Boolean(isDAppUpdateArg);

  return { seed, isDAppUpdate };
};

const deployScript = (
  compiledScript: string,
  seed: string,
  isDAppUpdate = false,
) =>
  broadcast(
    setScript(
      {
        script: compiledScript,
        chainId,
        fee: isDAppUpdate ? 1400000 : 1000000,
      },
      seed,
    ),
    nodeUrl,
  )
    .then((res) => ({
      tx: res.id,
      dApp: res.sender,
    }))
    .catch((error) => ({ error: error.message }));

const issueToken = (dApp: string, seed: string) =>
  broadcast(
    invokeScript(
      {
        dApp,
        call: {
          function: 'issueNyanToken',
          args: [
            {
              type: 'integer',
              value: 0,
            },
          ],
        },
        chainId,
        fee: 100900000,
      },
      seed,
    ),
    nodeUrl,
  )
    .then((res) => ({ tx: res.id }))
    .catch((error) => ({ error: error.message }));

const getDAppTokenId = (dApp: string) =>
  fetch(`${nodeUrl}/addresses/data/${dApp}/dApp_<${dApp}>_tokenId`)
    .then((res) => res.json())
    .then((json) => {
      if ('error' in json) {
        return { error: json.message };
      }
      return { tokenId: json.value };
    })
    .catch((error) => ({ error: error.message }));

fs.readFile('dApp.ride', 'utf8', async (_, script) => {
  const compileResult = await compileResultScript(script);
  if ('error' in compileResult) {
    console.error('compileResultScript error:', compileResult.error);
    return;
  }

  const getCLIArgsResult = getCLIArgs();
  if ('error' in getCLIArgsResult) {
    console.error('getSeed error:', getCLIArgsResult.error);
    return;
  }

  const deployResult = await deployScript(
    compileResult.compiledScript,
    getCLIArgsResult.seed,
    getCLIArgsResult.isDAppUpdate,
  );
  if ('error' in deployResult) {
    console.error('deployScript error:', deployResult.error);
    return;
  }

  await waitForTx(deployResult.tx, { apiBase: nodeUrl });

  if (getCLIArgsResult.isDAppUpdate) {
    console.info('dApp successfully updated');
  } else {
    const issueTokenResult = await issueToken(
      deployResult.dApp,
      getCLIArgsResult.seed,
    );
    if ('error' in issueTokenResult) {
      console.error('issueToken error:', issueTokenResult.error);
      return;
    }

    await waitForTx(issueTokenResult.tx, { apiBase: nodeUrl });

    const getDAppTokenIdResult = await getDAppTokenId(deployResult.dApp);
    if ('error' in getDAppTokenIdResult) {
      console.error('getDAppTokenId error:', getDAppTokenIdResult.error);
      return;
    }

    console.table({
      dApp: deployResult.dApp,
      tokenId: getDAppTokenIdResult.tokenId,
    });
  }
});

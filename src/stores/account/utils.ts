import copyToClipboard from 'copy-to-clipboard';

import { notify } from 'utils/notify';

export const copyAddressToClipboard = (address: string) => {
  const copied = copyToClipboard(address);
  if (copied) {
    notify.info({
      title: 'Address copied',
    });
  } else {
    notify.error({
      title: 'Failed to copy address',
    });
  }
};

import { forward, guard } from 'effector';

import { signUpFx, toggleOpenSignUpModal } from 'features/SignUp/model';

import { $address, getUserDataFx, setIsAuthorized } from '.';

guard({
  clock: setIsAuthorized,
  source: $address,
  filter: (address): address is string => address !== null,
  target: getUserDataFx,
});

guard({
  source: getUserDataFx.doneData,
  filter: (userData) => userData.length === 0,
  target: toggleOpenSignUpModal,
});

forward({
  from: signUpFx.doneData,
  to: toggleOpenSignUpModal,
});

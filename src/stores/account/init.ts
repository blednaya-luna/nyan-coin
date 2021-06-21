import { forward, guard } from 'effector';

import { toggleOpenSignInModal } from 'features/Auth/SignIn/model';
import { signUpFx, toggleOpenSignUpModal } from 'features/Auth/SignUp/model';

import { $address, getUserDataFx, setIsAuthorized } from '.';

forward({
  from: setIsAuthorized,
  to: toggleOpenSignInModal,
});

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

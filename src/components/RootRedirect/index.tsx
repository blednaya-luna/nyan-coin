import React, { FC } from 'react';
import { Redirect } from 'react-router';

import { APP_LOCATION } from 'routes';

const RootRedirect: FC = () => {
  return <Redirect to={APP_LOCATION.assets} />;
};

export default RootRedirect;

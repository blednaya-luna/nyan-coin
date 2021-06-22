import React, { FC } from 'react';
import { Redirect } from 'react-router';

import { APP_LOCATION } from 'routes/constants';

const RootRedirect: FC = () => {
  return <Redirect to={APP_LOCATION.home} />;
};

export default RootRedirect;

import { Tab } from '@material-ui/core';
import React, { FC } from 'react';

import { AppBar } from 'containers/AppBar';

import { Assets } from './assets';
import { AdminTabs, AdminTabPanel } from './components';
import { Users } from './users';

const Admin: FC = () => {
  return (
    <>
      <AppBar title="Admin panel" />
      <AdminTabs>
        <Tab label="Users" />
        <Tab label="Assets" />
      </AdminTabs>
      <AdminTabPanel index={0}>
        <Users />
      </AdminTabPanel>
      <AdminTabPanel index={1}>
        <Assets />
      </AdminTabPanel>
    </>
  );
};

export default Admin;

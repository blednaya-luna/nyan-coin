import { Tab } from '@material-ui/core';
import React, { FC } from 'react';

import { AppBar } from 'containers/AppBar';

import { AdminTabs, AdminTabPanel } from './components';
import { Assets } from './tabs/assets';
import { Users } from './tabs/users';

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

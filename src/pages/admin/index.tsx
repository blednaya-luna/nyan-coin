import { Tab, AppBar as MuiAppBar } from '@material-ui/core';
import {
  Person,
  Redeem,
  AccountBalanceWallet,
  FormatListBulleted,
  EmojiEvents,
} from '@material-ui/icons';
import React, { FC } from 'react';

import { AppBar } from 'containers/AppBar';

import { Assets } from './assets';
import { AdminTabs, AdminTabPanel } from './components';
import { Users } from './users';

const Admin: FC = () => {
  return (
    <>
      <AppBar title="Admin panel" />
      <MuiAppBar position="static" color="inherit">
        <AdminTabs centered>
          <Tab label="Users" icon={<Person />} wrapped />
          <Tab label="Assets" icon={<Redeem />} wrapped />
          <Tab
            label="Balance"
            icon={<AccountBalanceWallet />}
            wrapped
            disabled
          />
          <Tab label="Orders" icon={<FormatListBulleted />} wrapped disabled />
          <Tab label="Achievements" icon={<EmojiEvents />} wrapped disabled />
        </AdminTabs>
      </MuiAppBar>
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

import { reflect } from '@effector/reflect';
import { Tabs } from '@material-ui/core';

import { TabPanel } from 'components/TabPanel';
import { $tab, setTab } from 'stores/pages/admin';

export const AdminTabs = reflect({
  view: Tabs,
  bind: {
    value: $tab,
    onChange: (_, tab) => setTab(tab),
  },
});

export const AdminTabPanel = reflect({
  view: TabPanel,
  bind: {
    value: $tab,
  },
});

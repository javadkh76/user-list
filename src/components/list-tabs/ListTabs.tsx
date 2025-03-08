import Box from '@mui/material/Box';
import { Tab, Tabs } from '@mui/material';
import React from 'react';
import TabPanel from './TabPanel';
import Favorites from '@/components/list-tabs/favorites/Favorites';
import Users from '@/components/list-tabs/users/Users';

const ListTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Users" />
          <Tab label="Favorite users" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Users />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Favorites />
      </TabPanel>
    </Box>
  );
};
export default ListTabs;

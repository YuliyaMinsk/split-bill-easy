import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { Restore, Favorite, LocationOn } from '@mui/icons-material';

const Footer = (): JSX.Element => {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<Restore />} />
        <BottomNavigationAction label="Favorites" icon={<Favorite />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
      </BottomNavigation>
    </Box>
  );
};

export { Footer };

import { Box, Typography } from '@mui/material';
import { DashboardCard } from './DashboardCard';
import { Logout } from './Logout';

const DashBoard = () => {
  return (
    <Box pt={2} pl={4} sx={{ position: 'relative' }}>
      <Typography variant='h2' color='primary'>
        Dashboard
      </Typography>
      <DashboardCard />
      <Logout />
    </Box>
  );
};

export default DashBoard;

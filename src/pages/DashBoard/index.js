import { Box, Typography } from '@mui/material';
import { DashboardCard } from './DashboardCard';

const DashBoard = () => {
  return (
    <Box pt={2} pl={4}>
      <Typography variant='h2' color='primary'>
        Dashboard
      </Typography>
      <DashboardCard />
    </Box>
  );
};

export default DashBoard;

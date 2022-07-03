import { MuiCard } from '../../components/MuiCard';
import { MuiText } from '../../components/MuiText';

export const DashboardCard = () => {
  return (
    <MuiCard sx={{ mt: 5, width: '300px' }}>
      <MuiText text='Exam result' size='15px' weight={600} color='primary' />
      <MuiText text='Your score is' size='13px' color='text.secondary' />
      <MuiText text='9 of 10' size='24px' />
      <MuiText text='passed' size='13px' color='text.secondary' />
    </MuiCard>
  );
};

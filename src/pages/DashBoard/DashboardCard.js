import { useEffect, useState } from 'react';
import { MuiCard } from '../../components/MuiCard';
import { MuiText } from '../../components/MuiText';

export const DashboardCard = () => {
  const [score, setScore] = useState(0);
  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:5000/dashboard');
      const { data } = await response.json();
      setScore(data);
    })();
  }, []);

  return (
    <MuiCard sx={{ mt: 5, width: '300px' }}>
      <MuiText text='Exam result' size='15px' weight={600} color='primary' />
      <MuiText text='Your score is' size='13px' color='text.secondary' />
      <MuiText text={`${score} of 10`} size='24px' />
      <MuiText
        text={`${score > 4 ? 'passed' : 'failed'}`}
        size='13px'
        color='text.secondary'
      />
    </MuiCard>
  );
};

import { Box, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SignInForm from './SignInForm';
import SignInHeader from './SignInHeader';
import { handleSubmit } from './utils';

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Stack spacing={2} sx={{ width: '400px' }}>
        <SignInHeader />
        <SignInForm handleSubmit={(e) => handleSubmit(e, navigate)} />
      </Stack>
    </Box>
  );
};

export default SignIn;

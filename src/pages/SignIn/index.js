import { Box, Stack } from '@mui/material';
import SignInForm from './SignInForm';
import SignInHeader from './SignInHeader';

const SignIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (
      data.get('email') !== 'user@mail.com' ||
      data.get('password') !== 'user'
    ) {
      alert('user does not exist');
    } else
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
  };

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
        <SignInForm handleSubmit={handleSubmit} />
      </Stack>
    </Box>
  );
};

export default SignIn;

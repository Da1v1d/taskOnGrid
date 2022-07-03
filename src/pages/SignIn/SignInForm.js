import Input from '../../components/Input';
import { Box, Button, Stack } from '@mui/material';

const SignInForm = ({ handleSubmit }) => {
  return (
    <Box component='form' onSubmit={handleSubmit}>
      <Input label='Email Address' name='email' />
      <Input name='password' label='Password' type='password' />
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
    </Box>
  );
};

export default SignInForm;

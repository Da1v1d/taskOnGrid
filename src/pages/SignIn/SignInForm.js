import { MuiInput } from '../../components/MuiInput';
import { Box, Button } from '@mui/material';

const SignInForm = ({ handleSubmit }) => {
  return (
    <Box component='form' onSubmit={handleSubmit}>
      <MuiInput label='Email Address' name='email' />
      <MuiInput name='password' label='Password' type='password' />
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
    </Box>
  );
};

export default SignInForm;

import { TextField } from '@mui/material';

const Input = ({ ...props }) => {
  return <TextField margin='normal' required fullWidth {...props} />;
};

export default Input;

import { TextField } from '@mui/material';

export const MuiInput = ({ ...props }) => {
  return <TextField margin='normal' required fullWidth {...props} />;
};
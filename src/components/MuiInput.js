import { TextField } from '@mui/material';

export const MuiInput = ({ ...rest }) => {
  return <TextField margin='normal' required fullWidth {...rest} />;
};
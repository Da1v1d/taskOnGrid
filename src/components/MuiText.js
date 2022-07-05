import { Typography } from '@mui/material';

export const MuiText = ({ text, size, weight, ...rest }) => {
  return (
    <Typography {...rest} sx={{ fontSize: size, fontWeight: weight }}>
      {text}
    </Typography>
  );
};

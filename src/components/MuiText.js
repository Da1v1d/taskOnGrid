import { Typography } from '@mui/material';

export const MuiText = ({ text, size, weight, ...props }) => {
  return (
    <Typography {...props} sx={{ fontSize: size, fontWeight: weight }}>
      {text}
    </Typography>
  );
};

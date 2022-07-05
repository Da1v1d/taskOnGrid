import { Card, CardContent } from '@mui/material';

export const MuiCard = ({ children, ...rest }) => {
  return (
    <Card {...rest}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};


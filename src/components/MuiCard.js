import { Card, CardContent } from '@mui/material';

export const MuiCard = ({ children, ...props }) => {
  return (
    <Card {...props}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};


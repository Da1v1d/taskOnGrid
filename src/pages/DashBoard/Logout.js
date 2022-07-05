import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.setItem('isAuth', 'false');
    navigate('/');
  };

  return (
    <Button
      variant='contained'
      sx={{ position: 'absolute', right: 20, top: 35 }}
      onClick={logoutHandler}
    >
      Logout
    </Button>
  );
};

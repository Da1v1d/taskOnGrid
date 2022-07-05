import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import DashBoard from '../pages/DashBoard';
import SignIn from '../pages/SignIn';

export const RoutesComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('isAuth') === 'false') {
      navigate('/');
    } else navigate('/dashboard');
  }, []);

  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/dashboard' element={<DashBoard />} />
    </Routes>
  );
};

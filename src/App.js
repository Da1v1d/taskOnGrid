import './App.css';
import DashBoard from './pages/DashBoard';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className='App'>
      {localStorage.getItem('isAuth') === 'true' ? <DashBoard /> : <SignIn />}
    </div>
  );
}

export default App;

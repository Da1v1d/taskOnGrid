import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { RoutesComponent } from './Routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <RoutesComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;

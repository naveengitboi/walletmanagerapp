import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import SideNav from './components/SideNav';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="appContainer">
          <SideNav />
          <div className="routesContainer ">
            <div className="insideRoutesContainer glassBg">
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/transactions' element={<Transactions />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<Profile />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

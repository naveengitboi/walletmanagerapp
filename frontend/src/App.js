import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import SideNav from './components/SideNav';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import PasswordUpdate from './settings/settingsApps/PasswordUpdate';
import TwoFa from './settings/settingsApps/TwoFa';
import Analytics from './pages/Analytics';
import AddMoneyType from './components/AddMoneyType';
import Authenticated from './api/Authenticated';

function App() {

    const receivedType = {
      type:'from',
      btn:'Credit Amount',
      btnColorCode:true
    }
  const paidType = {
    type: 'to',
    btn: 'Debit Amount',
    btnColorCode:false
  }
  return (
    <>
      <div className="App">
        <Header />
        <div className="appContainer">
          <SideNav />
          <div className="routesContainer ">
            <div className="insideRoutesContainer glassBg">
              <Routes>
                <Route path='/' element={<Dashboard />} >
                  <Route index element={<AddMoneyType type={receivedType} />}/>
                  <Route path='received' element={<AddMoneyType type={receivedType} />}/>
                  <Route path='paid' element={<AddMoneyType type={paidType} />}/>
                </Route>
                <Route path='/transactions' element={<Authenticated><Transactions /></Authenticated>} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/profile/passwords' element={<PasswordUpdate />} />
                <Route path='/profile/2fa' element={<TwoFa />} />
                <Route path='/analytics' element={<Analytics />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

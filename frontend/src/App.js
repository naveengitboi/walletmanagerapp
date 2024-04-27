import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import AddMoneyType from "./components/AddMoneyType";
import Loader from "./components/Loader";

const Analytics = lazy(() => import('./pages/Analytics'))
const Logout = lazy(() => import('./pages/Logout'))
const Authenticated = lazy(() => import('./api/Authenticated'))
const Profile = lazy(() => import('./pages/Profile'))
const Transactions = lazy(() => import('./pages/Transactions'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const PasswordUpdate = lazy(() => import('./settings/settingsApps/PasswordUpdate'))
const TwoFa = lazy(() => import('./settings/settingsApps/TwoFa'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Guides = lazy(() => import('./GuidesPage/Guides'))
const Beta = lazy(() => import('./pages/Beta'))

function App() {
  const receivedType = {
    type: "from",
    btn: "Credit Amount",
    btnColorCode: true,
  };
  const paidType = {
    type: "to",
    btn: "Debit Amount",
    btnColorCode: false,
  };
  return (
    <>
      <div className="App">
        <Header />
        <div className="appContainer">
          <SideNav />
          <div className="routesContainer ">
            <div className="insideRoutesContainer glassBg">
              <Suspense fallback={<Loader/>}> 
              <Routes>
                <Route path="/" element={<Authenticated>
                  <Dashboard />
                </Authenticated>}>
                  <Route index element={<AddMoneyType type={receivedType} />} />
                  <Route
                    path="received"
                    element={<AddMoneyType type={receivedType} />}
                  />
                  <Route
                    path="paid"
                    element={<AddMoneyType type={paidType} />}
                  />
                </Route>
                <Route
                  path="/transactions"
                  element={
                    <Authenticated>
                      <Transactions />
                    </Authenticated>
                  }
                />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Authenticated>
                  <Logout />
                </Authenticated>} />
                <Route
                  path="/profile"
                  element={
                    <Authenticated>
                      <Profile />
                    </Authenticated>
                  }
                />
                <Route
                  path="/profile/passwords"
                  element={
                    <Authenticated>
                      <PasswordUpdate />
                    </Authenticated>
                  }
                />
                <Route
                  path="/profile/2fa"
                  element={
                    <Authenticated>
                      <TwoFa />
                    </Authenticated>
                  }
                />
                <Route
                  path="/analytics"
                  element={
                    <Authenticated>
                      <Analytics />
                    </Authenticated>
                  }
                />
                <Route path='/guide' element={<Guides/>} />
                <Route path='/beta' element={<Beta/>} />
              </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

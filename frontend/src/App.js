import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PasswordUpdate from "./settings/settingsApps/PasswordUpdate";
import TwoFa from "./settings/settingsApps/TwoFa";
import Analytics from "./pages/Analytics";
import AddMoneyType from "./components/AddMoneyType";
import Authenticated from "./api/Authenticated";
import Logout from "./pages/Logout";
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
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

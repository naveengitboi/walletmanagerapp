import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import SideNav from './components/SideNav';
import Dashboard from './pages/Dashboard';
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
              <Route path='/' element={<Dashboard/>} />
            </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

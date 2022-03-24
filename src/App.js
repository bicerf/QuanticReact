import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import HomePage from './pages/HomePage';
import UserLoginPage from './pages/UserLoginPage';
import { Outlet } from 'react-router';


function App() {
  return (
    <div>
      {
        // localStorage.getItem('isAuthenticated')=='true' ? (<HomePage></HomePage> ) : (<UserLoginPage></UserLoginPage>)
        <Outlet></Outlet>
      }
    </div>
  );
}

export default App;

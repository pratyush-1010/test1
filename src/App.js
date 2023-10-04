import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Design.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AppBar from './Comp/AppBar'
import UserList from './Comp/UserList'
import AddUser from './Comp/AddUser'
function App() {
  return (
    <div className="App">
      <Router>
        <AppBar/>
        <Routes>
          <Route path='/' element={<UserList/>}/>
          <Route path='/adduser' element={<AddUser/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;

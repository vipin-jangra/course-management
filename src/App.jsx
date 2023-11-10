import {BrowserRouter as Router, Routes,Route, Outlet} from 'react-router-dom'
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Course from './Components/Course/Course';
import Login from './Components/Signup/Login';
import ProtectedOutlet from './Components/ProtectedOutlet';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  
  return (
      <>
          <Router>
          <Navbar />
              <Routes>
                  <Route path='/login' exact element={<Login />} />
                  <Route element={<ProtectedOutlet />}>
                    <Route path ='' index element={<Home />}></Route>
                    <Route path="/dashboard" exact element={<Dashboard />}></Route>
                    <Route path="/course" element={<Outlet />}>

                      <Route path='/course/:id' exact element={<Course />}></Route>
                    </Route>
                  </Route>
                
              </Routes>
          </Router>
    </>
  );
}

export default App;
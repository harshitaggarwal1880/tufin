import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Student_dashboard from './components/Student_dashboard';
import Edit_student from './components/Edit_student';
import Home from './components/Home';
import TutorDisplay from './components/TutorDisplay';
import { LoginProvider } from './components/LoginProvider';
import Tutor_dashboard from './components/Tutor_dashboard';
import Tutor_form from './components/Tutor_form';
import Edit_tutor from './components/Edit_tutor';
import Admin from './components/Admin';
import Admin_dashboard from './components/Admin_dashboard';
import Search from './components/Search';


function App() {
  return (
    <>
      {/* <Navbar/>
    <Login/> */}
    <LoginProvider>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Student_dashboard/logout' element={<Home/>}/>
        <Route path='/Student_dashboard/edit' element={<Edit_student />}></Route>
        <Route path='/Student_dashboard/:name' element={<Student_dashboard />}/>
        <Route path='/TutorDisplay' element={<TutorDisplay />}/>
        <Route path='/Searchtut' element={<Search/>}/>
        <Route path='/Tutor_dashboard/edit' element={<Edit_tutor/>}/>
        <Route path="/Tutor_dashboard/:name" element={<Tutor_dashboard/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Admin_dashboard/:name" element={<Admin_dashboard/>}/>
      </Routes>
    </LoginProvider>
      

    </>
  );
}

export default App;

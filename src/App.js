import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Studentdash from './components/Studentdash';
import Topic from './components/Topic';
import Facultydash from './components/Facultydash';
import Mycourse from './components/Mycourse';
import Admindash from './components/Admindash';
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/student" element={<Studentdash/>}/>
      <Route path="/student/subtopic" element={<Topic/>}/>
      <Route path="/faculty" element={<Facultydash/>}/>
      <Route path="/faculty/mycourses" element={<Mycourse/>}/>
      <Route path="/admin" element={<Admindash />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

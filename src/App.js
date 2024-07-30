import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Layout from './Layouts';
import Course from './pages/Course';
import Profile from './pages/Profile';
import MyLearning from './pages/MyLearning';
import Detail from './pages/Detail';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Content from './pages/Content';
import './App.css';
import Quiz from './pages/Quiz';


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/course' element={<Course />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgot' element={<ForgotPassword />} />
          <Route path='/reset/:token' element={<ResetPassword />} />
          <Route path='/mylearning' element={<MyLearning />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/content/:id' element={<Content />} />
          <Route path='/quiz/:id' element={<Quiz />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

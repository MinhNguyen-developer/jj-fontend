import './App.css';
import { useEffect, useState } from 'react';
import Planet from './Planet/Planet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Home from './component/Home/Home';
import MenuBar from './component/MenuBar/MenuBar';
import About from './component/About/About';
import Company from './component/company/Company';
import NotFound from './component/NotFound/NotFound';
import Job from './component/job/Job';
import User from './component/User/User';
import Addmin from './Addmin/Addmin';


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])
  return (
    <>
      {
        loading ?
          <div className='Planet'>
            <Planet />
          </div>
          : <><div className="App">
            <Router>
              <MenuBar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/company' element={<Company />} />
                <Route path='/job' element={<Job />} />
                <Route path='/user' element={<User />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/addmin' element={<Addmin />} />
              </Routes>
            </Router>
          </div>
          </>
      }
    </>

  );
}

export default App;

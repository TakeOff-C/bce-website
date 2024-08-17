
import './App.css';
// components
import Header from './components/Header'
import Footer from './components/Footer'
// pages
import Home from './pages/Home'
import About from './pages/About'
import Policy from './pages/Policy'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ContactUs from './pages/ContactUs'
import Autoliability from './pages/Autoliability'
import Generalliability from './pages/Generalliability'
import Motortruck from './pages/Motortruck'
import Physicaldamage from './pages/Physicaldamage'
import Comments from './pages/Comments'


// routes
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Header />

<Routes>
<Route path='/' element={ <Home /> } />
<Route path='/Home' element={ <Home /> } />
<Route path='/About' element={ <About /> } />
<Route path='/Policy' element={ <Policy /> } />

<Route path='/Login' element={ <Login /> } />
<Route path='/Signup' element={ <Signup /> } />
<Route path='/ContactUs' element={ <ContactUs /> } />
<Route path='/Autoliability' element={ <Autoliability /> } />
<Route path='/Generalliability' element={ <Generalliability /> } />
<Route path='/Motortruck' element={ <Motortruck /> } />
<Route path='/Physicaldamage' element={ <Physicaldamage /> } />
<Route path="/Comments" element={<Comments /> } />



</Routes>

<Footer />

    </div>
  );
}

export default App;

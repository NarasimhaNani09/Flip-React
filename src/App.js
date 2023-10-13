import logo from './logo.svg';
import './App.css';
import './css/bootstrap.css'
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Slider } from './components/Slider';
import { Add } from './components/Add';
import { User } from './components/User';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Form from './components/Form';
import Error from './components/Error';
function App() {
  return (
    <>
    <BrowserRouter>
    <div className='container-fluid'>
      
      
      
      <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='/' element={<Menu/>} />
        <Route path='/' element={<Slider/>  } />


        <Route path='/Form' element={<Form/>} />
        <Route path='*' element={<Error/> } />
      </Routes>
      <div>Sri Vasavi Engineering College</div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;

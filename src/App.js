
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import Header from './Header';
import AddProduct from './AddProduct';
import ViewProduct from './ViewProduct';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Header/>
          <div className='background'>
          <Routes>
              <Route path="/" element={<ViewProduct/>}></Route>
              <Route path="add" element={<AddProduct/>}></Route>
              <Route path="view" element={<ViewProduct/>}></Route>
                        {/* pathvariable */}
              <Route path='edit/:id' element={<AddProduct/>}></Route>
          </Routes>
          </div>
       </BrowserRouter>
    </div>
  );
}

export default App;

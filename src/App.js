
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import OrderList from './components/OrderList/OrderList';
import Products from './components/Products/Products';
import UploadProduct from './components/UploadProduct/UploadProduct';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='products' element={<Products></Products>}></Route>
        <Route path='uploadPd' element={<PrivateRoute>
          <UploadProduct></UploadProduct>
        </PrivateRoute>}></Route>
        <Route path='orders' element={<PrivateRoute>
          <OrderList></OrderList>
        </PrivateRoute>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;

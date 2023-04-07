/* eslint-disable */
import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import Home from './client/Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListProduct from './client/Pages/Products/ListProduct';
import ProductDetail from './client/Pages/Product-Detail/Product-Detail';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route exact path="/admin/*" name="Home" element={<DefaultLayout />} />
            <Route exact path="/" name="Home" element={<Home />} />
            <Route exact path="/products" name="Products" element={<ListProduct />} />
            <Route exact path="/product/:id" name="Product_detail" element={<ProductDetail />} />

          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App

import './App.css';
import React from 'react';
import Post from './components/Post/Post';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Createpost from './components/Createpost/Createpost';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
    <Provider store={store}>
        
    <BrowserRouter>
    <Header />
    <Routes>
  <Route path='/' element= {<Home />} />
  <Route path='/post-details/:id' element= {<Post />} />
  <Route path='/createpost' element= {<Createpost />} />
    </Routes>
    <ToastContainer />
    </BrowserRouter>
    </Provider>

    </>
  );
}

export default App;

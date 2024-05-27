import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Page from './Components/Page';
import Blog from './Components/Blog';
import './App.css';

function App() {
  useEffect(() => {
    // Show toast notification when the component mounts
    toast.success('Welcome To Aman Blog Page', {
      bodyClassName: 'toast-body',
    });
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <header className='w-full h-12 bg-orange-800 flex justify-center items-center fixed top-0 '>
        <h1 className='text-center font-bold text-3xl  underline text-white '>Aman Blog </h1>
      </header>
      <Blog />
      <Page />
      <ToastContainer />
    </div>
  );
}

export default App;

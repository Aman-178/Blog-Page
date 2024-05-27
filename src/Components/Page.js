import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const Page = () => {
  const { page, totalPages,pageHandler} = useContext(AppContext);

  return (
    <div className='fixed bottom-0 left-0 w-full bg-gray-100 border-t border-gray-300 p-4 h-16'>
      <div className='max-w-4xl mx-auto flex items-center justify-between'>
        <div className='flex gap-5'>
          {page > 1 && (
            <button
              onClick={() => pageHandler(page - 1)} 
              className='px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              onClick={() => pageHandler(page + 1)} 
              className='px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'
            >
              Next
            </button>
          )}
        </div>
        <div className='flex items-center'>
          <p className='text-gray-700 font-semibold text-lg mr-2'>{page}</p>
          <p className='text-gray-700 font-semibold text-lg mx-2'>Page of</p>
          <p className='text-gray-700 font-semibold text-lg'>{totalPages}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;

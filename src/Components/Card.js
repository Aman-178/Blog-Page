import React from 'react';

const Card = ({ post }) => {
  return (
    <div className='max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-md '>
      <div className='md:flex '>
        <div className='md:flex-shrink-0'>
          <img className='h-64 w-full object-cover md:h-full md:w-48' src={post.img} alt='sorry' />
        </div>
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>{post.category}</div>
          <p className='mt-2 text-gray-900 text-3xl font-bold'>{post.title}</p>
          <p className='mt-2 text-gray-600'>{post.content}</p>
          <div className='mt-4 flex justify-between items-center'>
            <div>
              <p className='text-lg font-semibold text-gray-800'>{post.author}</p>
              <p className='text-sm text-gray-600'>{post.date}</p>
            </div>
            <div>
              {post.tags.map((tag, index) => (
                <span key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

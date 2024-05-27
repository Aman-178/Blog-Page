import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import Spinner from './Spinner';
import Card from './Card'; // Assuming you have a Card component

const Blog = () => {
  const { loading, posts } = useContext(AppContext);

  return (
    <div className=' mt-10 mb-10'>
      {loading ? (
        <Spinner ></Spinner>
      ) : posts.length === 0 ? (
        <div>No Post Found</div>
      ) : (
        posts.map((post) => <Card key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Blog;

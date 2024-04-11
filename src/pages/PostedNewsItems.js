import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import Spinner from '../components/Spinner';

const PostedNewsItems = () => {
  const [loading, setLoading] = useState(false);
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Retrieve user from localStorage
        const user = localStorage.getItem('user');

        if (user) {
          const userData = JSON.parse(user);

          const response = await axios.post(
            `https://newsappbackend-ashishmisal.up.railway.app/api/newsitems/getnewsitemsbyemail/${userData.email}`
          );
          setNewsItems(response.data);
        }
      } catch (error) {
        console.log('Error Fetching Posted News items:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {newsItems.map((item) => (
            <div key={item._id} className="p-5 m-5 w-1/2 box-border border-solid">
              <h1 className="my-3 text-4xl font-semibold">{item.title}</h1>
              <hr />
              <p className='my-2 text-1xl font-serif'>{item.description}</p>
              <hr />
              <p>{item.content}</p>
              <hr />
              <p>Posted By: {item.postedBy.email}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default PostedNewsItems;

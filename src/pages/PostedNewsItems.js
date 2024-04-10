import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import Spinner from '../components/Spinner';

const PostedNewsItems = () => {
  const [userData, setUserData] = useState({}); // Initialize with null or {}
  const [loading, setLoading] = useState(false);
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Retrieve user data from localStorage
        const user = localStorage.getItem('user');
        console.log(user);
        if (user) {
          setUserData({ email: user }); // Set userData directly to the email retrieved from localStorage
          const response = await axios.post(
            `https://newsappbackend-ashishmisal.up.railway.app/api/getnewsitemsbyemail/${userData}`
          );
          setNewsItems(response.data);
        }
      } catch (error) {
        console.error('Error fetching news items:', error);
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
            <div key={item._id} className="p-5">
              <h1 className="my-3 text-2xl font-semibold">{item.title}</h1>
              <hr />
              <p>{item.description}</p>
              <hr />
              <p>{item.content}</p>
              <hr />
              <p>{item.postedBy.email}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default PostedNewsItems;

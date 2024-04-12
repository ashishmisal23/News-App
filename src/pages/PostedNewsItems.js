import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';


const PostedNewsItems = () => {
  const [loading, setLoading] = useState(false);
  const [newsItems, setNewsItems] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Retrieve user from localStorage
        const user = localStorage.getItem('user');

        if (user) {
          const userData = JSON.parse(user);

          const response = await axios.post(
            `https://newsappbackend-ashishmisal.up.railway.app/api/newsitems/getnewsitemsbyemail/${userData.email}`,
            { "email": userData.email }
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
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-5 mx-20 sm:mx-5 my-5">
          {newsItems.map((item) => {
            return (
              <div
                className="shadow-md p-3 border cursor-pointer"
                onClick={() => navigate(`/newsdesc/${item._id}`)}
                key={item._id}
              >
                <h1 className="text-primary text-lg font-semibold">
                  {item.title}
                </h1>
                <p>{item.description}</p>
                <div className="flex justify-end flex-col items-end">
                  <span className="text-gray-500 text-sm">
                    Posted By : {item.postedByemail}
                  </span>
                  <span className="text-gray-500  text-sm">
                    On : {item.createdAt.slice(0, 10)}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

      )}
    </Layout>
  );
};

export default PostedNewsItems;

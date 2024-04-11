import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Spinner from '../components/Spinner'

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const user = await localStorage.getItem('user');
        setUserData(JSON.parse(user));

      } catch (error) {
        console.error('Error fetching user Details :', error);

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
        <div className="p-5">
          <h1>{userData ? `Name: ${userData.name}` : ("User Details not available Found")}</h1>
          <h1>{userData ? `Email: ${userData.email}` : (" ")}</h1>

        </div>
      )}
    </Layout>
  )
}

export default Profile
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import Spinner from '../components/Spinner'

function NewsDesc() {
  const [loading, setLoading] = useState(false)
  const [newsItem, setNewsItem] = useState(null)
  const params = useParams()

  const getData = async () => {
    setLoading(true)
    try {
      const result = await axios.post(`https://newsappbackend-ashishmisal.up.railway.app/api/newsitems/getnewsitembyid/${params.newsid}`, { "_id": params.newsid.toString() });
      setNewsItem(result.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <div className="p-5">
          <h1 className="my-3 text-2xl font-semibold">
            {newsItem && newsItem.title}
          </h1>
          <hr />
          <p>{newsItem && newsItem.description}</p>
          <hr />
          <p>{newsItem && newsItem.content}</p>
          <hr />
          {/* Check if 'postedBy' exists before accessing 'email' */}
          <p>Posted By: {newsItem && newsItem.postedByemail}</p>
          <hr />
        </div>
      )}
    </Layout>
  )
}

export default NewsDesc

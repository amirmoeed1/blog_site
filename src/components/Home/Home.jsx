import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adddata } from '../../store/sliceblog/sliceblog'
import { Link } from 'react-router-dom'


const Home = () => {

  let dispatch = useDispatch()

  let data = useSelector((store)=>{
    return store.blogs.newblog
  })
  useEffect(()=>{

    axios.get('/home')
    .then((res)=>{
    dispatch(adddata(res.data.blogs))
    

    }).catch((error)=>{
      console.error('error fetching data', error)
    })
  })

  return <> 
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
        {data.map((item) => (
        <article className="d-flexflex mx-5 mb-8 bg-white transition hover:shadow-xl">
           
  
            <div className="d-flex flex-1 flex-col justify-content-between">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <img className='w-25 h-75' src={item.images} alt="" />
            
                <a href="/">
                  <h3 className="font-bold uppercase text-gray-900">
                    {item.title}
                  </h3>
                </a>
  
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  {item.blog}
                </p>
              </div>
              <div className="sm:flex sm:items-end sm:justify-end">
              <Link to={`/post-details/${item._id}`}
               
              >
                Read Blog
              </Link>
            </div>

            </div>
          </article>
        ))}
      </div>
       
    
    </>
}


export default Home
import React from 'react'
import "./Post.css"
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


const Post = () => {

  const {id} = useParams();

  let blogs = useSelector((store)=>{
    return store.blogs.newblog;
  })
  console.log(blogs)

  let thisblog = blogs.find((item)=> item._id === id);

  console.log(thisblog);

return <>
    
   <div className="flex justify-center px-10 text-left items-center flex-col">
      <img className="w-1/2" src={thisblog.images} alt={thisblog.title} />
      <h1 className="text-2xl font-bold sm:text-3xl">{thisblog.title}</h1>
     
      <p className="text-lg">{thisblog.blog}</p>
    </div>

</>


}

export default Post
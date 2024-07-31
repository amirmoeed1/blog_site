import axios from 'axios'
import './Createpost.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Createpost = () => {

  let navigate = useNavigate()

  let {register, handleSubmit} = useForm()

  function savedata(data){

    let formdata = new FormData();
    formdata.append("title", data.title);
    formdata.append("blog", data.blog);
    formdata.append("images", data.images[0]);

  console.log(formdata);

    axios.post('/createpost', formdata).then((res) => {
      if(res.data.success){
        navigate('/')
        toast.success("Blog created successfully");
      } else {
        toast.error("Blog not Created!")
      }
    })
  }

 
  return (
    <>
     <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Create New Blog</h1>
      </div>

      <form
        onSubmit={handleSubmit(savedata)}
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
        <div>
          <label htmlFor="email" className="sr-only">
            Title
          </label>

          <div className="relative">
            <input
              type="text"
              {...register("title")}
              className="w-full rounded-lg border-gray-200 border p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter Blog Title"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Content
          </label>

          <div className="relative">
            <textarea
              type="text"
              {...register("blog")}
              className="w-full h-40 rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter Content"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Thumbnail
          </label>

          <div className="relative">
            <input
              type="file"
              {...register("images")}
              className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Save Blog
          </button>
        </div>
      </form>
    </div>
  
  
    {/* <div classname="container">
  <h1>Create Post</h1>
  <form onSubmit={handleSubmit(savedata)} id="form">
    <div classname="input-group">
      
      <label htmlfor="name">Title</label>
      <input {...register('title')}  type='text' placeholder="Enter Blog Title" />
    </div>
    <div classname="input-group pt-3">
      <label htmlfor="name">Blog Content</label>
      <textarea {...register('blog')} className='w-100' type='text' placeholder="Enter Content" />
    </div>
    <div classname="input-group">
      
      <label htmlfor="name">Choose file</label>
      <input {...register('images')}  type='file' />
    </div>

    <button classname="submit-btn" type="submit">
      Create Post
    </button>
    
  </form>
</div> */}

    
    </>
  )
}

export default Createpost;
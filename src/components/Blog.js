import React from 'react'

const Blog = () => {
  return (
    <div className='blog_main' id='blog'>
<span className='blog_hp'>
    <h1 className='blog_h'>Blog </h1>
    <p className='blog_p'>
        lorem rab Emirates E Both locally owned and branches of mul requirements overnight in the pas
    </p>
</span>
<div className='blog_content'>
    <span className='blog_1'>
        <img className='blog_i' src='../images/b1.jpg'/>
        <p className='blog_1p'>Blog-1</p>
        <button className='blog_btn'>
            Read More
        </button>
    </span>
    <span className='blog_1'>
        <img className='blog_i' src='../images/b2.jpg'/>
        <p className='blog_1p'>Blog-2 </p>
       
        <button className='blog_btn'>
            Read More
        </button>
    </span>
</div> 
    </div>
  )
}

export default Blog
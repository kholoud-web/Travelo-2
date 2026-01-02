import React from 'react'
import Hero from '../../../components/restaurant/Hero'
import ShopBody from './../shop/ShopBody';
import BlogProfile from './BlogProfile';
import BlogCart from './BlogCart';

function Blog() {
  return (
    <div>
      <Hero title="Blog List" page="Blog"/>
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          <div className="py-7">
            <BlogCart/>
            <BlogCart/>
            <BlogCart/>
            <BlogCart/>
            <BlogCart/>
            <BlogCart/>
            <BlogCart/>
          </div>
          <BlogProfile/>
        </div>
    </div>
  )
}

export default Blog

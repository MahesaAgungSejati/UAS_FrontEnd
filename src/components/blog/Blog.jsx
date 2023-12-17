import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/team2.jpg"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Team' title='Team Grid - Our Craftmans' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Blog

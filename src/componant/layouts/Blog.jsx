import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Logo from "../../assets/banner.png"
import "../../scss/pages/blog.scss"


function Blog() {
    return (
        <>
            <Header />
            <section className="container">
                <h1 className="blog text-center text-warning">Blogs</h1>
                <div className="row row-lg-2 d-flex  gap-5 justify-content-between">
                    <div className="col-lg-7  ">
                        <div class="card mt-5">
                            <div class="card-body">
                                <img src="https://dlmak.droitlab.com/wp-content/uploads/2018/10/blog_img_1-1.png" alt="" />
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-transparant">Read More...</a>
                            </div>
                        </div>
                        <div class="card my-3">
                            <div class="card-body">
                                <img src="" alt="" />
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-transparant">Read More...</a>
                            </div>
                        </div>


                    </div>
                    <div className="col ">
                        <form action="">
                            <label htmlFor="search" className='search mb-2 fw-2'>Search</label>
                            <div className="d-flex gap-3">
                                <input type="text" className='p-3' />
                                <button className="btn btn-warning text-light">Search</button>
                            </div>

                            <div className="recent-post">
                                <h2 className="recent mt-4">Recent Post</h2>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Blog

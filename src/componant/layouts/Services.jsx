import React from 'react'

function Services() {
    return (
        <>
            <section className="services" id='services'>
                <div className="services-section container">
                    <h2 className='text-center pt-5  srv-heading '> services </h2>
                    <p className='text-center service-sub-heading pb-5'>
                        Modern, responsive front-end development using React.js for fast, scalable web applications and custom WordPress design and development, from sleek themes to seamless functionality
                    </p>
                    <div className="row gy-4">
                        <div className="col-lg-6 col-md-12">
                            <div className="card text-bg-success">
                                <div className="card-body ">
                                    <div className=' icon'>
                                    <i class="bi bi-front"></i>
                                    </div>
                                    <h5 className="card-title card-heading">Front-End Development</h5>
                                    <p className="card-text card-dec">I craft fast, modern websites using HTML, CSS, JS, jQuery & React. With clean code and React Hooks, I build responsive, interactive sites for any device. Let’s create!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="card text-bg-primary">
                                <div className="card-body ">
                                    <div className=' icon'>
                                    <i class="bi bi-wordpress"></i>
                                    </div>
                                    <h5 className="card-title card-heading">Wordpress Development</h5>
                                    <p className="card-text card-dec">I design fast, responsive WordPress websites with custom themes, seamless UX, and easy-to-manage CMS. Let's build your perfect site together!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services

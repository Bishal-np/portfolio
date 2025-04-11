import React from 'react'

function Services() {
    return (
        <>
            <section className="services" id='services'>
                <div className="services-section container">
                    <h2 className='text-center pt-5  srv-heading '> What I Offer</h2>
                    <p className='text-center service-sub-heading pb-5'>
                        Modern, responsive front-end development using React.js for fast, scalable web applications and custom WordPress design and development, from sleek themes to seamless functionality
                    </p>
                    <div className="row gy-4">
                        <div className="col-lg-6 col-md-12">
                            <div className="card border-0 ">
                                <div className="card-body text-bg-success">
                                    <div className=' icon'>
                                    <i className="bi bi-phone-vibrate"></i>
                                    </div>
                                    <h5 className="card-title card-heading">Front-End Development</h5>
                                    <p className="card-text card-dec">I craft fast, modern websites using HTML, CSS, JS, jQuery & React. With clean code and React Hooks, I build responsive, interactive sites for any device. Let’s create!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="card ">
                                <div className="card-body text-bg-warning">
                                    <div className=' icon'>
                                        <i className="bi bi-phone-vibrate"></i>
                                    </div>
                                    <h5 className="card-title card-heading text-light">Wordpress Design</h5>
                                    <p className="card-text card-dec-1 text-light">I design fast, responsive WordPress websites with custom themes, seamless UX, and easy-to-manage CMS. Let's build your perfect site together!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="card border-0">
                                <div className="card-body text-bg-primary">
                                    <div className=' icon'>
                                        <i className="bi bi-phone-vibrate"></i>
                                    </div>
                                    <h5 className="card-title card-heading text-light">UI/UX Design</h5>
                                    <p className="card-text card-dec-2 text-light">I design intuitive UI/UX in Figma, crafting user-friendly interfaces with sleek visuals and seamless workflows. Let’s elevate your digital experience!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="card border-0">
                                <div className="card-body text-bg-danger">
                                    <div className=' icon'>
                                        <i className="bi bi-phone-vibrate"></i>
                                    </div>
                                    <h5 className="card-title card-heading text-light">Freelance Work</h5>
                                    <p className="card-text card-dec-3 text-light">Freelance web & UI/UX solutions: React development, WordPress sites, and Figma designs—all tailored to your needs. Let's collaborate!</p>
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

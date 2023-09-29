import React from 'react'
import '../component/Portfolio.css'
import { Link } from 'react-router-dom'



const About = () => {
  return (
    <div className='contact-row-1'>
      <img src="./image/about-us-baner.webp"  className="img-fluid" alt="top-img" />
     <div className="container-fluid ">
     
    {/* //////////////////////////////////////////////top-row end//////////////////////////////////////// */}
    <div className="row ">
    <div class="d-flex upper-strip justify-content-Start">
      <Link className='border mx-1 px-2 text-decoration-none fs-4' href="">Home</Link>
      <Link className='border mx-1 px-2 text-decoration-none fs-4' href="">Services</Link>
      <Link className='border mx-1 px-2 text-decoration-none fs-4' href="">Portfolio</Link>
    </div>
   </div>
   </div>
    {/* /////////////////////////////////sec-row-End///////////////////////////////////////////////// */}
    <div className="row mt-5 mb-3 d-flex justify-content-start" id='frame'>
      <div className="col-lg-6 ">
      <img src="./image/Port-top2.png"  className="img-fluid" alt="top-img" />

      </div>
      <div className="col-lg-6">
        <div className="fs-2 text-primary">Engaging New Audiences Through Smart Approach</div>
        <div className=" pen01">
        <div className='ball'></div>
      </div>
        <p className=" text-align">Alobha Technologies is an established software and application development company with advantageous and proven accomplishments engaged in catering Mobile Apps Development, CMS Development, Web Development, IT Outsourcing solutions & Digital marketing Services to globally. We are the best software development service provider in India. We have successfully conceptualized, developed and launched many web portals across the diverse industries. We are continuously investing in the latest technologies, processes, and technical nerds to help our customers to achieve their business goals and stay ahead from competitors. With finite resources and infinite expertise in Agile methodology that ensures the great fusion of a high level of customer satisfaction and cost-effective services.</p>
  <Link to="#" className="btn btn-primary mt-3" >Our Certificates</Link>

      </div>
    </div>
    {/* /////////////////////////////////3rd-row-End///////////////////////////////////////////////// */}
    <div className="row mt-5 mb-3 mt-5 d-flex justify-content-start"  id='frame' >
    <div className="col-sm-6 col-md-4 mb-3">
        <div className="card"  >
        <img src="./image/2.webp" className=" height card-img-top img-fluid" alt="..."/>
        <h5 className="card-title text-center bg-primary py-2 ">Card title</h5>

<div className="card-body">
  <p className='height01 text-align  '>Alobha technologies is one of the protuberant software development companies that transform other businesses by innovatively connecting dots from design to development. It differentiates you from the market and provides healthier engagement with clienteles & partners.</p>
</div>
</div>
      </div>

      <div className="col-sm-6 col-md-4 mb-3">
        <div className="card" >
        <img src="./image/2.webp" className="height img-fluid card-img-top" alt="..."/>
        <h5 className="card-title text-center bg-primary py-2 ">Card title</h5>

<div className="card-body">
  <p className='height01 text-align  '>Our mission is to augment business growth of our clients with creative design & Development to deliver their idea with high quality solutions which transform data into knowledge across the globe.</p>
</div>
</div>
      </div>

      <div className="col-sm-6 col-md-4 mb-3">
        <div className="card" >
        <img src="./image/2.webp" className=" height img-fluid card-img-top" alt="..."/>
        <h5 className="card-title text-center bg-primary py-2 ">Card title</h5>
<div className="card-body">
  <p className='height01 text-align  '>Great builds come from organized teams that are responsible for themselves. We Focus on the client requirements and all else will follow. It’s best to do one thing really, really well. Integrity, Boldness and Honesty are our three pillars.</p>
</div>
</div>
      </div>
    </div>

    {/* ////////////////////////////////////////////////////////////////////////////////////////// */}

    <div className="row mt-5 mb-3 ">
      <div className="col-12 fs-2 text-center text-primary">Our Products</div>
      <div className=" pen">
        <div className='ball'></div>
      </div>
    </div>

    <div className="row mt-5 mb-3 d-flex justify-content-start" id='frame'>
      
      <div className="col-md-6">
        <div className="fs-2 text-primary mt-5">The Launch Year</div>
        <p className="col-12 text-align mt-3">Alobha Technologies is an established software and application development company with advantageous and proven accomplishments engaged in catering Mobile Apps Development, CMS Development, Web Development, IT Outsourcing solutions </p>

      </div>
      <div className="col-md-6 ">
      <img src="./image/Port-top2.png"  className="img-fluid" alt="top-img" />

      </div>
    </div>

  {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className="row mt-5 mb-3">
<div className="col-12 fs-2 text-center text-primary">Application Development Solutions</div>
      <div className=" pen">
        <div className='ball'></div>
      </div>
</div>
{/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className="row mt-5 mb-3 d-flex justify-content-center" id='frame' >
     <div className="col-sm-6 col-md-4 mb-3">
        <div className="card border-0" >  
        <img src="./image/2.webp" className="card-img-top p-2 image-fluid" style={{height:"150px"}} alt="Rashmika"/>    
<div className="card-body">
  <h5 className="card-title text-center ">Media Streaming</h5>
</div>
</div>
      </div>
      <div className="col-sm-6 col-md-4 mb-3">
        <div className="card border-0" >  
        <img src="./image/2.webp" className="card-img-top p-2 image-fluid" style={{height:"150px"}} alt="Rashmika"/>    
<dDigital Content Distributionme="card-body">
  <h5 className="card-title text-center ">Digital Content Distribution</h5>
</dDigital>
</div>
      </div>
      <div className="col-sm-6 col-md-4 mb-3">
        <div className="card border-0" >  
        <img src="./image/2.webp" className="card-img-top p-2 image-fluid" style={{height:"150px"}} alt="Rashmika"/>    
<div className="card-body">
  <h5 className="card-title text-center ">mCommerce</h5>
</div>
</div>
      </div>
      <div className="col-sm-6 col-md-4 mb-3">
        <div className="card border-0" >  
        <img src="./image/2.webp" className="card-img-top p-2 image-fluid" style={{height:"150px"}} alt="Rashmika"/>    
<div className="card-body">
  <h5 className="card-title text-center ">Mobile Healthcare</h5>
</div>
</div>
      </div>
      <div className="col-sm-6 col-md-4 mb-3">
        <div className="card border-0" >  
        <img src="./image/2.webp" className="card-img-top p-2 image-fluid" style={{height:"150px"}} alt="Rashmika"/>    
<div className="card-body">
  <h5 className="card-title text-center ">Workflow & Asset Management</h5>
</div>
</div>
      </div>
      <div className="col-sm-6 col-md-4 mb-3">
        <div className="card border-0" >  
        <img src="./image/2.webp" className="card-img-top p-2 image-fluid" style={{height:"150px"}} alt="Rashmika"/>    
<div className="card-body">
  <h5 className="card-title text-center ">Mobile Games</h5>
</div>
</div>
      </div>
      <div className="col-sm-6 col-md-4 mb-3">
        <div className="card border-0" >  
        <img src="./image/2.webp" className="card-img-top p-2 image-fluid" style={{height:"150px"}} alt="Rashmika"/>    
<div className="card-body">
  <h5 className="card-title text-center ">Digital Content Distribution</h5>
</div>
</div>
      </div>
      <div className="col-sm-6 col-md-4 mb-3">
        <div className="card border-0" >  
        <img src="./image/2.webp" className="card-img-top p-2 image-fluid" style={{height:"150px"}} alt="Rashmika"/>    
<div className="card-body">
  <h5 className="card-title text-center ">Digital Content Distribution</h5>
</div>
</div>
      </div>
     


    </div>

    {/* ////////////////////////////////////////////////////////////////////////////////////// */}

   <div className='container'>
   <div className="row mt-5 mb-3 d-flex justify-content-center" >
     <div className="col-sm-6 col-md-3 mb-3">
        <div className="card border-0 " >  
        <img src="./image/2.webp" className=" card-img-top p-2 image-fluid" style={{height:"400px"}} alt="Rashmika"/>    
</div>
      </div>
      <div className="col-sm-6 col-md-3 mb-3">
        <div className="card border-0" >  
        <img src="./image/2.webp" className="card-img-top  p-2 image-fluid" style={{height:"400px"}} alt="Rashmika"/>    
</div>
      </div>
      <div className="col-sm-6 col-md-3 mb-3">
        <div className="card border-0" >  
        <img src="./image/2.webp" className="card-img-top  p-2 image-fluid" style={{height:"400px"}} alt="Rashmika"/>    
</div>
      </div>
      <div className="col-sm-6 col-md-3 mb-3">
        <div className="card border-0" >  
        <img src="./image/2.webp" className="card-img-top  p-2 image-fluid" style={{height:"400px"}} alt="Rashmika"/>    
</div>
      </div>
      <div className="col-sm-6 col-md-3 mb-3">
        <div className="card border-0" >  
        <img src="./image/2.webp" className="card-img-top  p-2 image-fluid" style={{height:"400px"}} alt="Rashmika"/>    
</div>
      </div>
      <div className="col-sm-6 col-md-3 mb-3">
        <div className="card border-0" >  
        <img src="./image/2.webp" className="card-img-top  p-2 image-fluid" style={{height:"400px"}} alt="Rashmika"/>    
</div>
      </div>
      <div className="col-sm-6 col-md-3 mb-3">
        <div className="card border-0" >  
        <img src="./image/2.webp" className="card-img-top  p-2 image-fluid" style={{height:"400px"}} alt="Rashmika"/>    
</div>
      </div>
       <div className="col-sm-6 col-md-3 mb-3">
        <div className="card border-0" >  
        <img src="./image/2.webp" className="card-img-top  p-2 image-fluid" style={{height:"400px"}} alt="Rashmika"/>    
</div>
      </div>
    </div>
   </div>
    
{/* /////////////////////////////////////////////////////////////////////////////////////////// */}
<div className="row mt-5 mb-3">
<div className="col-12 fs-2 text-center text-primary">Our Director Message</div>
      <div className=" pen">
        <div className='ball'></div>
      </div>
</div>

{/* ////////////////////////////////////////////carousel//////////////////////////////////////////////// */}
<div className="row mt-5 mb-3 ">
<div id="carouselExampleIndicators" className="carousel  slide border-0" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
  <div className="carousel-item active" data-bs-interval="1000">
      <img src="./image/slider-1.png" className="d-block  box m-auto" alt="..."/>
    </div>
    <div className="carousel-item">
    <div className="card mb-3 d-block box m-auto" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src="./image/1.webp" class="img-fluid next rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
        Alobha technologies is a dynamic and fast-growing, performance- based agency. Our primary goal as a team is to provide the best value possible to every organizationwe work with and for us that begins by providing.
        
      </p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
    <div className="carousel-item">
    <div className="card mb-3 d-block box m-auto" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src="./image/4.webp" class="img-fluid rounded-start " alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">It is our endeavor to become of the top IT software solution while still remaining grounded in moral values. We are moving ahead with innovative ideas, strategies and technologies and have achieved. important milestone in our journey.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

{/* ////////////////////////////////////Carousel-End///////////////////////////////////////// */}
<div className="row mt-5 mb-3">
<div className="col-12 fs-2 text-center text-primary">Our Director Message</div>
      <div className=" pen">
        <div className='ball'></div>
      </div>
</div>
<div className="col-12  text-center mb-4">We believe in bringing together the professionals having vast experiences, different Skill Sets and passion for providing your business with the best experience.</div>

<div className="row mt-5 mb-3 d-flex justify-content-center">

      <div className="col-sm-5 col-md-3 mb-3">
        <div className="card" >
        <img src="./image/2.webp" className="height02 p-4 m-auto rounded-circle img-fluid card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title text-center bg-primary py-2 ">Ashish Kumar <br /> <span style={{fontSize:"14px"}}>Chief Operating Officer (COO)</span></h5>

  <p className='height01 text-align'>It is great to work for a company that encourages new ideas and talents. At Alobha, It is very satisfying that we are helping people to find jobs, and promoting the new talents to come forward and learn new skills of trending Technologies on Web &amp; Mobile App Development.</p>
</div>
</div>
      </div>
      <div className="col-sm-5 col-md-3  mb-3">
        <div className="card" >
        <img src="./image/2.webp" className="height02 p-4 m-auto rounded-circle img-fluid card-img-top" alt="..."/>
<div className="card-body">
  
<h5 className="card-title text-center bg-primary py-2 ">Sandeep Gupta <br /> <span style={{fontSize:"14px"}}>BPM and Product Manager</span></h5>


  <p className='height01 text-align'>As a Software development company, we are responsible for driving our business.We serve our customers, quality, reliability, durability, vocational value. Alobha Technologies is committed to Serve Better Solution and set a high standard of development</p>
</div>
</div>
      </div>
</div>

{/* ///////////////////////////////////Our Partners////////////////////////////////////////////////// */}
<div className="row mt-5 mb-3">
<div className="col-12 fs-2 text-center text-primary">Our Director Message</div>
      <div className=" pen">
        <div className='ball'></div>
      </div>
</div>

<div className="row mt-5 mb-3">
<div className="col-sm-6 col-md-3 mb-3">
        <div className="card  border-0" >
        <img src="./image/2.webp" className="team-image height03 m-auto rounded-circle  img-fluid card-img-top" alt="..."/>
<div className="card-body team-content">
  <h5 className="card-title text-center text-light">Ernest M. Roberts</h5>
  <h5 className="card-title text-center text-light">
Director (UA Washington)</h5>
</div>
</div>
      </div>
      <div className="col-sm-6 col-md-3 mb-3">
        <div className="card border-0" >
        <img src="./image/2.webp" className="team-image height03 m-auto rounded-circle  img-fluid card-img-top" alt="..."/>
<div className="card-body team-content">
<h5 className="card-title text-center text-light">Fx Mallen</h5>
  <h5 className="card-title text-center text-light">
Director (France)</h5>
</div>
</div>
      </div>
      <div className="col-sm-6 col-md-3 mb-3">
        <div className="card border-0 " >
        <img src="./image/2.webp" className="team-image height03 m-auto rounded-circle  img-fluid card-img-top" alt="..."/>
<div className="card-body team-content">
<h5 className="card-title text-center text-light">Afnawi Neba</h5>
  <h5 className="card-title text-center text-light">
Director (Cameroon)</h5>
</div>
</div>
      </div>
      <div className="col-sm-6 col-md-3 mb-3">
        <div className="card border-0" >
        <img src="./image/2.webp" className="team-image height03 m-auto rounded-circle  img-fluid card-img-top" alt="..."/>
<div className="card-body team-content">
<h5 className="card-title text-center text-light">Derreck Landon</h5>
  <h5 className="card-title text-center text-light">Director (USA)</h5>
</div>
</div>
      </div>
</div>

{/* //////////////////////////Our Associate Channel Partners/////////////////////// */}
<div className="row mt-5 mb-3">
<div className="col-12 fs-2 text-center text-primary">Our Associate Channel Partners</div>
      <div className=" pen">
        <div className='ball'></div>
      </div>
</div>

<div className="row mt-5 mb-3">
<div className="col-sm-6 col-md-3 mb-3">
        <div className="card  border-0" >
        <img src="./image/2.webp" className="team-image height03 m-auto rounded-circle  img-fluid card-img-top" alt="..."/>
<div className="card-body team-content">
  <h5 className="card-title text-center text-light">Lawal Rahman Artbeat</h5>
  <h5 className="card-title text-center text-light">Nigeria</h5>
</div>
</div>
      </div>
      <div className="col-sm-6 col-md-3 mb-3">
        <div className="card border-0" >
        <img src="./image/2.webp" className="team-image height03 m-auto rounded-circle  img-fluid card-img-top" alt="..."/>
<div className="card-body team-content">
<h5 className="card-title text-center text-light">Hassan Rucyemangabo
</h5>
  <h5 className="card-title text-center text-light">Rwanda</h5>
</div>
</div>
      </div>
      <div className="col-sm-6 col-md-3 mb-3">
        <div className="card border-0 " >
        <img src="./image/2.webp" className="team-image height03 m-auto rounded-circle  img-fluid card-img-top" alt="..."/>
<div className="card-body team-content">
<h5 className="card-title text-center text-light">Johann Bain</h5>
  <h5 className="card-title text-center text-light">Bahamas</h5>
</div>
</div>
      </div>
      <div className="col-sm-6 col-md-3 mb-3">
        <div className="card border-0" >
        <img src="./image/2.webp" className="team-image height03 m-auto rounded-circle  img-fluid card-img-top" alt="..."/>
<div className="card-body team-content">
<h5 className="card-title text-center text-light">Arun Luthra</h5>
  <h5 className="card-title text-center text-light">Chandigarh</h5>
</div>
</div>
      </div>
</div>
{/* //////////////////////////////////Alobha Group/////////////////////////////////////// */}
<div className="row mt-5 mb-3">
<div className="col-12 fs-2 text-center text-primary">Alobha Group</div>
      <div className=" pen">
        <div className='ball'></div>
      </div>
</div>
<div className="row mt-5 mb-3 d-flex justify-content-center">
  <div className='last-w img-fluid'><img src="./image/golde.webp" alt="" /> </div>
  <div className='last-w img-fluid'><img src="./image/golde.webp" alt="" /> </div>
  <div className='last-w img-fluid'><img src="./image/golde.webp" alt="" /> </div>
  <div className='last-w img-fluid'><img src="./image/golde.webp" alt="" /> </div>
  <div className='last-w img-fluid'><img src="./image/golde.webp" alt="" /> </div>
</div>


{/* ///////////////////////////////A Unit Of Alobha Technologies Pvt Ltd.///////////////////////////// */}
<div className="row mt-5 mb-3">
<div className="col-12 fs-2 text-center text-primary">A Unit Of Alobha Technologies Pvt Ltd.</div>
      <div className=" pen">
        <div className='ball'></div>
      </div>
</div>
<div className="row mt-5 mb-3 mb-4 d-flex justify-content-center">
<div className='last-w img-fluid'><img src="./image/golde.webp" alt="" /> </div>
  <div className='last-w img-fluid'><img src="./image/golde.webp" alt="" /> </div>
  <div className='last-w img-fluid'><img src="./image/golde.webp" alt="" /> </div>
  <div className='last-w img-fluid'><img src="./image/golde.webp" alt="" /> </div>
  <div className='last-w img-fluid'><img src="./image/golde.webp" alt="" /> </div>
</div>


{/* //////////////////////////////////////////////////////////// */}





     </div>
    
  )
}

export default About

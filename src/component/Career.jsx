import React from 'react'

const Career = () => {
  return (
    <div className='container-fluid'>
     <div className="row">
      <img src="./image/Port-top.png"  className="img-fluid" alt="top-img" />
    </div>


    {/* /////////////////////////////////////////////////////////////////////////////////////////// */}

    <div className="row ">
    <div class="d-flex upper-strip justify-content-Start">
      <a className='border mx-1 px-2 text-decoration-none fs-4' href="">Home</a>
      <a className='border mx-1 px-2 text-decoration-none fs-4' href="">Services</a>
      <a className='border mx-1 px-2 text-decoration-none fs-4' href="">Portfolio</a>
    </div>
   </div>

{/* ////////////////////////////////////////////////////////////////////////////////////////// */}
<div className="row d-flex justify-content-start" id='frame'>
      <div className="col-lg-6 ">
      <img src="./image/Port-top2.png"  className="img-fluid" alt="top-img" />

      </div>
      <div className="col-lg-6">
        <div className="fs-2 text-primary">Information</div>
        <div className=" pen01">
        <div className='ball'></div>
      </div>
        <p className=" text-align">The main thrust of the Human Resources function is to foster individual development, career development and thereby organizational development. We believe measuring performance is the key to success. A Performance Management System driven by the company helps us focus on the important task and hit our targets. We interview experienced professionals and also freshers continuously across locations in order to seek top talent – to drive growth of our organization. We believe in developing a motivating work culture that encourages responsibility and to work in team. We focus on success of every individual by ensuring meaningful jobs that allow our employees to make a difference. “Our mission is to guide companies through the process of strategic change. We support strategic and tactical corporate responses to the challenges and opportunities posed by globalization, technology and competition”. We take forward our core values and respect for diversity with the hope to become an employer of choice.</p>
      </div>
    </div>
{/* /////////////////////////////////////////////////////////////////////////////////////// */}

<div className="row " style={{backgroundColor:"#f0f8ff"}}>
  <div className="col-12 fs-1 d-flex justify-content-center">Company Recruitment Test  </div>
  <div className="col-12 d-flex justify-content-center mb-4"> <a href="#" className="btn btn-primary mt-3" >Our Certificates</a></div>
</div>
{/* ///////////////////////////////////////////////////////////////////////////// */}
<div className="row">
  <div className='col-md-6'>
  <table class="table table-striped">
    
  <tbody>
    <tr>
      <th scope="row"><a href="">mobile</a></th>
      <td>Mark</td>
      <td>Otto</td>
   
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
    
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
 
    </tr>
  </tbody>
</table>
  </div>

  <div className='col-md-6'></div>
</div>
    </div>
  )
}

export default Career

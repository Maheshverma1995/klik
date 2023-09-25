import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <img className='img-fluid' src="./Image/slider-4.png" alt="" />
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <h1>Get In Touch With Us</h1>
            <div className='col-lg-6'>
              <img className='img-fluid' src="" alt="" />
            </div>
            <div className='col-lg-6'>
              <div>
                <form action="">
                  <h1>Anything in your mind. We'll Be Glad To Assist You!</h1>
                  <div className='col-12'>
                  <div className='col-sm-6'>
                    <input type="text" placeholder='name' />
                    <input type="text" placeholder='name' />
                  </div>
                  <div className='col-sm-6'>
                    <input type="text" placeholder='name' />
                    <input type="text" placeholder='name' />
                  </div>
                  </div>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

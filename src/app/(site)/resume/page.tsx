import React from 'react'
import './page.css'
import Form from './Form'

const page = () => {
  return (
    <>
      <div className="resume">
        <div className="resume-hero">
          <p style={{ fontSize: 25, fontWeight: 550 }}>Fast.Easy.Effective</p>
          <p style={{ fontSize: 50, fontWeight: 700 }}>Generate Your CV now</p>
          <p style={{ fontSize: 19 }}>
            Transform your career with our simple resume generator. With a sleek
            template, effortlessly input your details and get a standout resume
            that catches the eye of employers. Quick, easy, and effective—your
            professional future starts here!
          </p>
        </div>
        <div className="content">
          <Form />

          <img
            className="img"
            src="https://cdn.enhancv.com/single_column_traditional_resume_template_84a04707cf.png"
            alt=""
            style={{ height: 700 }}
          />
        </div>

        <button>GENERATE RESUME</button>
      </div>
    </>
  );
}

export default page

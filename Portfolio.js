import React from 'react'

function Portfolio() {
  return (
    <>
       <nav id="navbar">
        <a href="#welcome-section" id="nav-items">About</a>
        <a href="#pro" id="nav-items">Work</a>
        <a href="#bottom" id="nav-items">Contact</a>
        <button className='btn btn-dark' id='nav-items'>Dark Mode</button>
    </nav>
    <div class="mn">
    <div id="welcome-section">
        <h1>Hello World!</h1>
        <h2>This is Nijanshu Singh</h2>
        <i><h3>A Web Developer</h3></i>
        <p></p>
    </div>
    <div class="so" id="pro"><div class="pr">Here are Some of My Pojects</div>
    <div id="projects"> 
        <div class="project-tile"><a id="profile-link" href="https://codepen.io/Nijanshu/full/poOdaOv" target="_blank"><img src="https://i.ibb.co/XFNJvmT/tribute.png" alt=""/> Tribute Page</a></div>
        <div class="project-tile"><a id="profile-link" href="https://biblelibrary.netlify.app/" target="_blank"><img src="https://i.ibb.co/DgP40S6/Screenshot-2023-08-08-173248.png" alt="Screenshot-2023-08-08-173248"/></a>   </div>  
        <div class="project-tile"><a id="profile-link" href="https://codepen.io/Nijanshu/full/ExevGXa" target="_blank"><img src="https://i.ibb.co/qNc0gst/landingpage.png" alt=""/> Landing Page</a></div>
        <div class="project-tile"><a id="profile-link" href="https://codepen.io/Nijanshu/full/LYJOQqO" target="_blank"><img src="https://i.ibb.co/7RgbSsc/suvey.png" alt=""/>Survey Form</a> </div>
        <div class="project-tile"><a id="profile-link" href="https://codepen.io/Nijanshu/full/MWqOQZK" target="_blank"><img src="https://i.ibb.co/mCGhs2Q/techdoc.png" alt=""/>Technical Documentation</a> </div>
        <div class="project-tile"><a id="profile-link" href="https://codepen.io/Nijanshu/full/XWPzZGp" target="_blank"><img src="https://i.ibb.co/zmMS38h/portfolio.png" alt=""/>Portfolio(This Page)</a> </div>
    </div>
 <a href="https://codepen.io/your-work" target="_blank" class="link-light link-underline-info"> <button class="btn btn-info">Show all
 </button>
 </a>
 </div>

    <div id="bottom">
    <h1>Let's Work Together for Better</h1>
    <div class="cnt">
    <a href="mailto: nijanshusingh@gmail.com" target="_blank" class="ctc">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUTvwVgGbvMcof1uKdd4htCqrBjHzH1sZMg&usqp=CAU" alt=""/>
        E-mail me
    </a>
    <a href="tel: +916377399317"> 
        <img src="https://img.freepik.com/free-icon/auricular-phone_318-1028.jpg?w=360" alt=""/>
        Call me
    </a>
</div>
    </div>
    </div>
    </>
  )
}

export default Portfolio

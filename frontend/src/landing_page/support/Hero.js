import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className=" p-3 " id="supportWrapper">
        <h3 className="mt-5">Support Portal</h3>
        <a href="" className="mt-5 fs-5">Track Tickets</a>
      </div>
      <div className=" row p-3" id="search-row">
      <div className="col-6 p-2" >
        <h1 className="fs-3 mb-5">Search for an answer or browse help topics to create a<br></br> ticket</h1>
      <input className="mb-3" placeholder="Eg: how do i activate f@O, why is my order getting rejected...."/><br></br>
      <a href="" style={{marginRight:"32px"}}>Track account opening</a>
      <a href=""style={{marginRight:"32px"}}>Track segment activation</a>
      <a href=""style={{marginRight:"32px"}}>Intraday margins</a> <br></br><br></br>
      <a href="" >Kite user manual</a>
      </div>
    
      <div className="col-6 " id="featured">
      <h1 className="fs-3 ">Featured</h1>
      <ol>
        <li>   <a href="">Surveillance measure on scrips - January 2025</a> </li>
        <li>  <a href="">Latest Intraday leverages and Square-off timings</a></li>
      </ol>
   
    
      </div>
      </div>
    </section>
  );
}

export default Hero;

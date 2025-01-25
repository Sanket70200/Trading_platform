import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-3  border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1rem" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/photo-mi.jpg (3).jpg"
            alt="my_image"
            style={{ borderRadius: "100%", width: "45%", height: "60%" }}
          />
          <h4 className="mt-5">Sanket Patil</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Sanket bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            {" "}
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p> Playing basketball is his zen.</p>
          <p>Connect on <a href="" style={{color: 'blue'}}>Homepage</a>  / <a href=""style={{color: 'blue'}}>TradingQnA</a>  / <a href="" style={{color: 'blue'}}> Twitter</a> </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

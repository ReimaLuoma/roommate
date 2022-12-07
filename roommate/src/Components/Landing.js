import React from "react";
import LoginRegister from "./LoginRegister";

const Landing = () => {
    return (
        <section className="container">
            <div className="row mb-5">
            
            <div className="col-6 logo pt-3">ROOMMATE</div>

            <div className="col-6 align-self-center d-flex justify-content-end">
                <LoginRegister />
            </div>

            </div>
      </section>
    )
}

export default Landing;
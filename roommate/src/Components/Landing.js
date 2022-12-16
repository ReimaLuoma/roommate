import React from "react";
import LoginRegister from "./LoginRegister";
import Logo from "./Logo";

const Landing = () => {
    return (
        <section>
            <div className="row mb-5">
            
            <Logo />

            <div className="col-6 align-self-center d-flex justify-content-end">
                <LoginRegister />
            </div>

            </div>
      </section>
    )
}

export default Landing;
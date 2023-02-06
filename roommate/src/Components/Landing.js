import React from "react";
import LoginRegister from "./LoginRegister";
import Logo from "./Logo";

const Landing = () => {
    return (
        <section>
            <div className="row">
            
                <Logo />

                <div className="col-md-7 col-sm-12 align-self-center d-flex justify-content-end">
                    <LoginRegister />
                </div>

            </div>
      </section>
    )
}

export default Landing;
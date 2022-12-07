import React from "react";
import Account from "./Account";
import Add from "./Add";
import Remove from "./Remove";
import Logo from "./Logo";

const Admin = () => {
    return (
        <section>
            <div className="row mb-5">
                <Logo />

                <div className="col-6 d-flex justify-content-end">
                    <Add />
                    <Remove />
                    <Account userName={'Reima'}/>
                </div>
            </div>
        </section>
    )
}

export default Admin;
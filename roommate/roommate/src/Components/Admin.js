import React from "react";
import Account from "./Account";
import Add from "./Add";
import Remove from "./Remove";
import Logo from "./Logo";

const Admin = ({user}) => {
    return (
        <section>
            <div className="row mb-5">
                <Logo />

                <div className="col-6 d-flex justify-content-end">
                    <Add />
                    <Remove />
                    <Account userName={user.userName}/>
                </div>
            </div>
        </section>
    )
}

export default Admin;
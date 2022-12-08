import React from "react";
import Account from "./Account";
import Loans from "./Loans";
import Logo from "./Logo";

const User = ({user}) => {
    return (
        <section>
            <div className="row mb-5">
                <Logo />

                <div className="col-6 d-flex justify-content-end">
                    <Loans />
                    <Account userName={user.userName}/>
                </div>
            </div>
        </section>
    )
}

export default User;
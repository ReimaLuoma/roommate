import React from "react";
import Account from "./Account";
import Add from "./Add";
import Remove from "./Remove";

const Admin = () => {
    return (
        <section>
            <div className="row mb-5">
                <div className="col-6 logo">ROOMMATE</div>

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
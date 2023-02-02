import React from "react";
import Account from "./Account";
import Loans from "./Loans";
import Logo from "./Logo";
import SignOutButton from "./SignOut";
import Add from "./Add";
import Remove from "./Remove";

const User = ({user}) => {

    //console.log(user.signInUserSession.idToken.payload['cognito:groups']);
    const userGroup = user.signInUserSession.idToken.payload['cognito:groups'];

    //console.log(user.attributes);

    if(userGroup.includes('admin')){
        return (
            <section>
                <div className="row mb-5">
                    <Logo />
    
                    <div className="col-7 d-flex justify-content-end align-items-center">
                        <Loans />
                        <Add />
                        <Remove />
                        <Account userInfo={user.attributes}/>
                        <SignOutButton />
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section>
            <div className="row mb-5">
                <Logo />

                <div className="col-6 d-flex justify-content-end align-items-center">
                    <Loans />
                    <Account userName={user.attributes.name}/>
                    <SignOutButton />
                </div>
            </div>
        </section>
    )
}

export default User;
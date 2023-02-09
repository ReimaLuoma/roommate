import React from "react";
import Account from "./Account";
import Loans from "./Loans";
import Logo from "./Logo";
import SignOutButton from "./SignOut";
import Add from "./Add";
import Remove from "./Remove";

const User = ({ user }) => {
  //console.log(user.signInUserSession.idToken.payload['cognito:groups']);
  const userGroup = user.signInUserSession.idToken.payload["cognito:groups"];

  if (userGroup !== undefined && userGroup.includes("admin")) {
    return (
      <section>
        <div className="row mb-5">
            <Logo />

          <div className="col-lg-7 d-flex justify-content-end align-items-center">
            <Loans user={user} admin={true}/>
            <Add />
            <Remove />
            <Account user={user.attributes} />
            <SignOutButton />
          </div>
        </div>
      </section>
    );
  }else {
    return (
      <section>
        <div className="row mb-5">
          <Logo />

          <div className="col-lg-7 d-flex justify-content-end align-items-center">
            <Loans user={user} admin={false}/>
            <Account user={user.attributes} />
            <SignOutButton />
          </div>
        </div>
      </section>
    );
  }  
};

export default User;

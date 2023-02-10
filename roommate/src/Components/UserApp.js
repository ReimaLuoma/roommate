import Filters from "./Filters";
import Display from "./Display";
import User from './User';
import { useSetRecoilState } from "recoil";
import { userData } from "../Atoms/login";

// NOTE! Display component removed from rendered components in UserApp

import { Amplify } from "aws-amplify";
import { withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsmobile from '../aws-exports';
import About from "./About";
import { useEffect } from "react";
Amplify.configure(awsmobile);

const UserApp = ({ user }) => {

  const setUserInfo = useSetRecoilState(userData);
  

  useEffect(() => {
    setUserInfo(user.attributes);
  },[])

  return (
    <div className="container">
      <User user = {user}/>
      <Filters />
      <Display/>
      <About />
    </div>
  )
}

export default withAuthenticator(UserApp);

import Filters from "./Filters";
import Display from "./Display";
import User from './User';

// NOTE! Display component removed from rendered components in UserApp

import { Amplify } from "aws-amplify";
import { withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsmobile from '../aws-exports';
Amplify.configure(awsmobile);

const UserApp = ({ signout, user }) => {
  return (
    <div className="container">
      <User user={user}/>
      <Filters />
    </div>
  )
}

export default withAuthenticator(UserApp);

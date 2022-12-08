import Filters from "./Components/Filters";
import Display from "./Components/Display";
import User from './Components/User';

import { withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const UserApp = ({ signout, user }) => {
  return (
    <div className="container">
      <User />
      <Filters />
      <Display />
    </div>
  )
}

export default withAuthenticator(UserApp);

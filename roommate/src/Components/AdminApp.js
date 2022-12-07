import Filters from "./Components/Filters";
import Display from "./Components/Display";
import Admin from "./Admin";

import { withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const AdminApp = ({ signOut, user }) => {
  return (
    <>
    <div className="container">
      <Admin user={user}/>

      <Filters />

      <Display />
    </div>
    </>
  );
}

export default withAuthenticator(AdminApp);

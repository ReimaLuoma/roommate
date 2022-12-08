import UserApp from "./UserApp";
import Base from "./Components/Base";
import { atom, useRecoilValue } from 'recoil';

const App = () => {

// state to whether user is logged in or not
const loginState = atom({
  key: 'userLoginInfo',
  default: false,
});

  const isLoggedIn = useRecoilValue(loginState);

  if(isLoggedIn){
    return <UserApp />;
  }

  return <Base />;

}

export default App;

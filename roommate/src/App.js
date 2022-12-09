import UserApp from "./Components/UserApp";
import Base from "./Components/Base";
import { atom, useRecoilValue } from 'recoil';
import { loginState } from "./Atoms/login";

const App = () => {

  const isLoggedIn = useRecoilValue(loginState);

  if(isLoggedIn){
    return <UserApp />;
  }

  return <Base />;

}

export default App;
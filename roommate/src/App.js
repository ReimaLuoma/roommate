import UserApp from "./Components/UserApp";
import Base from "./Components/Base";
import { useRecoilValue } from 'recoil';
import { loginState } from "./Atoms/login";
import { AmplifyProvider } from "@aws-amplify/ui-react";

const App = () => {

  const isLoggedIn = useRecoilValue(loginState);

  if(isLoggedIn){
    return <AmplifyProvider><UserApp /></AmplifyProvider>;
  }

  return <Base />;

};

export default App;
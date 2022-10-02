import { observer } from "mobx-react-lite";

import Header from "../components/Header";
import Main from "../components/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default observer(App);

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { getToken } from "./Auth/user";
import Allroutes from "./Component/Allroutes";
import loginContext from "./Component/Context/Context";
import Login from "./Pages/Login/Login";
function App() {
  // const context = useContext(loginContext);
  const [IsAuth, setAuth] = useState(false);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    handle();
  }, [setAuth]);

  async function handle() {
    const a = await getToken();
    setData(a.data);
    console.log("aweae", data);
    if (data.auth) {
      setAuth(() => true);
      navigate("/");
    } else {
      console.log("false");
      setAuth(() => false);
    }
  }

  return (
    <div className="App">
      <loginContext.Provider value={{ setData, setAuth, IsAuth, data }}>
        <Allroutes />
      </loginContext.Provider>
    </div>
  );
}

export default App;

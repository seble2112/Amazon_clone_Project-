import { useEffect, useContext } from "react";
import "./App.css";
import Routing from "./Router";
import { Type } from "./Utility/action.type";
import { auth } from "./Utility/Firebase"; // ✅ fixed import
import { DataContext } from "./Componets/DataProvider/DataProvider";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return <Routing />;
}

export default App;

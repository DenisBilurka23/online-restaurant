'use client'

import Dashboard from "./Dashboard";
import { useStateValue } from "../../context/StateProvider";
import { isAdmin } from "../../utils/functions";

const Admin = () => {
  const [{user}] = useStateValue()
  return (
     <>
     {/*{isAdmin(user) ? <Dashboard /> : <Home />}*/}
         temp
     </>
  );
};

export default Admin;

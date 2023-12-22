import { useState } from 'react';
import {Stats} from "@/app/components";
import Sidenav from "@/app/components/Admin/Sidenav";
import Content from "@/app/components/Admin/Content";


const Dashboard = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const [element, setElement] = useState<JSX.Element>(<Stats />);
  return (
    <div className="h-screen flex w-full gap-2 items-start">
      <Sidenav activePage={activePage} setActivePage={setActivePage} setPageContent = {setElement} />
      <Content pageTitle={activePage} Element = {element} />
    </div>
  );
}


export default Dashboard;
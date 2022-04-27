import React from "react";

import Header from "../components/admin/header";
import Nav from "../components/admin/nav";
const AdminLayout = (props) => {
  console.log(props)
  return (
      <div >
        <Header />
        <div className="">
          <div className=""></div>
          <Nav></Nav>
          <main className="">
            {props.children}
          </main>
        </div>
      </div>
  );
};

export default AdminLayout;

import React from "react";
import { Helmet } from "react-helmet";

function Dashboard() {
  return (
    <>
      <Helmet>
        <title> User Dashboard </title>
        <meta name="description" content="user dashboard" />
      </Helmet>
      <div style={{marginTop:"150px"}}>
      <h1>This is dashboard</h1>
      </div>
    </>
  );
}

export default Dashboard;

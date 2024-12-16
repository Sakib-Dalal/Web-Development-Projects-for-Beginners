import React from "react";
import Card from "./Card";

import contacts from "../contacts";
import Avatar from "./Avatar"; // reusing Avatar image component

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Avatar image="https://yt3.ggpht.com/a/AATXAJzsHPys1EoSnxprcPapwsQsb1gr97KzKfnRBw=s900-c-k-c0xffffffff-no-rj-mo" />
      
      <Card name="Ryan Gosling" 
      image="https://th.bing.com/th?id=OSK.osc489B89BEBC1872E1AA573ACEC2E22924C561C6C8&w=312&h=200&c=15&rs=2&o=6&dpr=2&pid=SANGAM"
      tel="+0934894324"
      email="ryan@gmail.com" />

      <Card name={contacts[0].name}
      image={contacts[0].imgURL}
      tel={contacts[0].phone}
      email={contacts[0].email} />

      <Card name={contacts[1].name}
      image={contacts[1].imgURL}
      tel={contacts[1].phone}
      email={contacts[1].email} />

      <Card name={contacts[2].name}
      image={contacts[2].imgURL}
      tel={contacts[2].phone}
      email={contacts[2].email} />

    </div>
  );
}

export default App;

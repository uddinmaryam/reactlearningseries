import React from "react";
import Button from "./components/Button";
import Counter from "./components/Counter"; // Import Counter component
import ProfileCard from "./components/Profile";
import Card from "./components/Card";
import Status from "./components/Status";
import user from "./components/UserList";
import { UserList } from "./components/UserList";
import LikeButton from "./components/LikeButton";
import Toggle from "./components/Toggle";
import Hide from "./components/Hide";
import ShapeCycler from "./components/ShapeCycler";
import MenuGenerator from "./components/MenuGenerator";

function App() {
  const todos = [
    "Learn React",
    "Build a React App",
    "Deploy the App",
    "Celebrate Success"
  ];

  // Button functions
  function like() {
    console.log("Liked");
  }

  function subscribe() {
    console.log("Subscribed");
  }

  function share() {
    console.log("Shared");
  }

  return (

    <div className="App">
      <button classname='micon'>&#9776;</button>
      <div classname='menu'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Gallery</li>
        </ul>
      </div>
    <div>
      {/* Counter */}
      <Counter />

      {/* Todo List */}
      <h1>My Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      {/* Buttons */}
      <div style={{ marginTop: "20px" }}>
        <Button label="Like" onClick={like} />
        <Button label="Subscribe" onClick={subscribe} />
        <Button label="Share" onClick={share} />
      </div>
    </div>

    <section>
      <ProfileCard name="John Doe" title="Software Engineer" age={30} />
      <ProfileCard name="Ram" title="Designer" age={20} />
    </section>
    <ProfileCard name="Sita" title="HR" age={25} />
    
       
      <section>
        <Card heading="Success" text="Task completed" color="lightgreen" />
        <Card heading="Warning" text="Check your input" color="orange" />
        <Card heading="Error" text="Operation failed" color="red" />  
      </section>

      
      
      <section>
        <Status isOnline={true} />
        <Status isOnline={false} />
      </section>

      
      <section>
    
     <UserList />

      </section>

      <section>
        <LikeButton />
      </section>

      <Toggle />
      <Hide />
      <ShapeCycler />
      <MenuGenerator />
     </div> 
  );
}

export default App;

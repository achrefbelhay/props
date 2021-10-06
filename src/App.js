import React from "react";
import Profile from "./Profile/Profile";
import "./App.css";
function App() {
  const handleAlert = (name) => alert(`Hi i am ${name}`);
  return (
    <div className="App">
      <Profile
        fullName=" Belhay achref"
        bio=" studying in go my code "
        profession=" Full stack Web developper "
        handleName={handleAlert}
      >
        <img src="/John-Doe.jpg" alt="It's me :)" />
      </Profile>
    </div>
  );
}

export default App;

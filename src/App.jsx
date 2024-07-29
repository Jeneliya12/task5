import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Button from "./Button";

function App() {
  return (
    <div>
      <Header title="Welcome to React Props Example" />
      <Profile
        name="Jeneliya Gurung"
        age={26}
        bio="In the heart of the ancient forest, where the sunlight barely touches the moss-covered ground, a symphony of nature unfolds. The whispering leaves tell tales of forgotten times, and the gentle rustle of the underbrush reveals the presence of elusive creatures. The air is crisp and filled with the earthy aroma of pine and damp soil, creating a serene and almost magical atmosphere. Here, the world slows down, allowing one to reconnect with the tranquility of the natural world and find solace in its timeless beauty."
      />
      <Button label="Click Me" />
    </div>
  );
}

export default App;

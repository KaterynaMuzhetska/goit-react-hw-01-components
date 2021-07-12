import React from "react";

import SocialProfile from "./SocialProfile/SocialProfile.js";
import user from "./SocialProfile/user.json";

import Statistics from "./Statistics/Statistics.js";
import statisticalData from "./Statistics/statistical-data.json";

function App() {
  return (
    <div className="App">
      <SocialProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
    </div>
  );
}

export default App;

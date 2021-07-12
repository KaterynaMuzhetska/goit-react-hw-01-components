import React from "react";

import SocialProfile from "./SocialProfile/SocialProfile.js";
import user from "./SocialProfile/user.json";

import Statistics from "./components/statistics/Statistics";
import statisticalData from "./components/statistics/statistical-data.json";

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

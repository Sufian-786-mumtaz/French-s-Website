import React from "react"
import Header from "./components/Header";
import Banner from "./components/Banner";
function App() {
  return (
    <div className="App">
      <Header>
        <Banner path='/images/banner.png' />
      </Header>
    </div>
  );
}

export default App;

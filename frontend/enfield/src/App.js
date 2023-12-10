import React from "react";
import Header from "./header/header";
import Footer from "./Footer/footer";
import Main from "./main/main";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Header />
      </div>
      <div className="my-5">
        <Main />
      </div>
      <div className="bg-neutral-300 border">
        <Footer />
      </div>
    </div>
  );
}

export default App;

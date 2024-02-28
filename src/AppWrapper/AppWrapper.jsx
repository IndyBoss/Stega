import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function AppWrapper(props) {
  console.log(this?.props);
  return (
    <div className="app-wrapper">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

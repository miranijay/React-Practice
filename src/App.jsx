import React from "react";
import './index.css';
import Components from "./components/main.jsx";
import Forms from "./forms/main_form.jsx";

export default function BookList() {
  
  return(
    <>
      <div>
        <Components />
      </div>
      <div>
        <Forms />
      </div>
    </>
  )
};
import React from "react";
import Input from "./Input";
function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />

      {props.regis ? (
        <button type="submit">Login</button>
      ) : (
        <div>
          <Input type="password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
        </div>
      )}
    </form>
  );
}

export default Form;

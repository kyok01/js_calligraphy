import React from "react";

export const LoginForm = () => {
  const onClickPost = () => {alert('sss')};
  return (
    <div>
      <form>
        <label htmlFor="">id
        <input type="text" />
        </label><br />
        <label htmlFor="">password
        <input type="text" />
        </label>
      </form>
      <button onClick={onClickPost}>Login</button>
    </div>
  );
};

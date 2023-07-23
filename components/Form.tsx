"use client"

import { use, useEffect, useState } from "react";
import PasswordStrengthMeter from "./password-strength-meter";
import PasswordStrengthBar from "react-password-strength-bar";
import PasswordMessage from "./password-message";


const Form = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    const toggleVisibility = (e:any) => {
        setVisible(!visible);
        e.preventDefault();
    }

    const toggleCLear = (e:any) => {
        setUsername("");
        setPassword("");
        e.preventDefault();
    }


  return (
    <div className="p-4 bg-slate-300 text-black rounded-lg">
      <form action="" className="flex flex-col flex-1 w-96 h-98 p-4">
        <h1 className="text-3xl font-bold pb-10 text-center">Login</h1>
        <input
          className="p-2 rounded-xl mb-5 outline-sm"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Name"
        />
        <PasswordMessage password={password} />
        <input
          className="p-2 rounded-xl mb-5 outline-sm"
          type={visible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="flex items-center justify-around">
          <button
            onClick={toggleVisibility}
            className="w-auto bg-black text-white px-16 py-2 border border-transparent font-semibold hover:opacity-75 transition rounded-xl mb-4"
          >
            {!visible ? "Show" : "Hide"}
          </button>
          <button
            onClick={toggleCLear}
            className="w-auto bg-black text-white px-16 py-2 border border-transparent font-semibold hover:opacity-75 transition rounded-xl mb-4"
          >
            Clear
          </button>
        </div>
        <button
          className="w-auto bg-black text-white px-5 py-2 border border-transparent font-semibold hover:opacity-75 transition rounded-xl mb-4"
          type="submit"
        >
          Submit
        </button>

        <PasswordStrengthMeter password={password} />
        <PasswordStrengthBar password={password} />
      </form>
    </div>
  );
}

export default Form


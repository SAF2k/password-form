"use client"

import { useEffect } from "react"

interface PasswordStrengthMeterProps {
    password: string
}

interface calcProps {
  text: string,
  color: string
}


const PasswordStrengthMeter = ({password} : PasswordStrengthMeterProps) => {

  const calculateScore = () => {
    if (password.length === 0) {
      return {text: "week", color: "red"}
    }

    if (password.length < 3) {
      return { text: "week", color: "red" };
    }

    if (password.length < 8) {
      return { text: "moderate", color: "orange" };
    }

    if (password.length < 12) {
      return { text: "Strong", color: "green" };
    }
    return { text: "Strongest", color: "green" };
  }

  return (
    <div className=" justify-center items-center">
      {password.length > 0 && (
        <div
          className="py-3 border text-center font-bold uppercase rounded-xl"
          style={{ backgroundColor: calculateScore().color }}
        >
          {calculateScore().text}
        </div>
      )}
    </div>
  );
}

export default PasswordStrengthMeter
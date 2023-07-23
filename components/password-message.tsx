interface PasswordMessageProps {
    password: string
}

const PasswordMessage = ({password}: PasswordMessageProps) => {
    const msg = () => {
        var regularExpression =
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
       
        if (!password.match(regularExpression)) {
          return { text: "Add number Uppercase & Special Char", color: "red" };
        }
        return { text: "Good To Goo", color: "green" };
    }
    console.log(msg()?.text);
    
  return (
    <div className="justify-center items-center">
       <h2 style={{color: msg().color}}>{msg().text}</h2>
    </div>
  )
}

export default PasswordMessage
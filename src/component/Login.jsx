import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isFromSignIn, setIsFromSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = () => {
    setIsFromSignIn(!isFromSignIn);
  };

  const handleButtonClick = () => {
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;
    if (!isFromSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("User signed up successfully:", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(`${errorCode}   ${errorMessage}`);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(auth,  email.current.value,
        password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed in successfully:", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}   ${errorMessage}`);
        });
    }
  };

  return (
    <div>
      <img
        className="absolute top-0 left-0 w-full h-full"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_medium.jpg"
        alt="Background"
      />
      <Header />
      <p className=" absolute font-bold red-500 text-2xl text-center mt-4 items-center justify-center w-full">
      ⚠️ This is a personal project built for educational purposes only. Not affiliated with Netflix.
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 p-12 rounded-lg w-3/12 text-white"
      >
        <h1 className="text-3xl font-bold py-4 text-white">
          {" "}
          {isFromSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isFromSignIn && (
          <input
            className="p-4 my-2 bg-gray-700 w-full rounded-lg"
            type="text"
            placeholder="Full name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-2 bg-gray-700 w-full rounded-lg"
          type="text"
          placeholder="Email or mobile number"
        />
        <input
          ref={password}
          className="p-4 my-2  bg-gray-700 w-full rounded-lg"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="bg-red-600 p-4 my-4 rounded-lg hover:bg-red-700 w-full"
          onClick={handleButtonClick}
        >
          {isFromSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isFromSignIn ? (
          <h4 className="text-gray-400 text-sm">
            New to Netflix?{" "}
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={handleSignIn}
            >
              Sign up now.
            </span>
          </h4>
        ) : (
          <h4 className="text-gray-400 text-sm">
            Already have an account?{" "}
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={handleSignIn}
            >
              Sign in now.
            </span>
          </h4>
        )}
      </form>
    </div>
  );
};
export default Login;

import React, { useState } from "react";
import validateFormDetail from "../Utils/validation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [newUser, setNewUser] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    const validationMessage = validateFormDetail(email, password);
    console.log(validationMessage);

    if (validationMessage) {
      // Show an alert if there's a validation message (invalid email or password)
      alert(validationMessage);
      return; // Do not proceed further if validation failed
    }

    if (newUser) {
      console.log("Name:", name);
      console.log("Password:", password);
      // Add your signup logic here
    } else {
      console.log("Password:", password);
      // Add your login logic here
    }
  };

  const handleNewUser = () => {
    setNewUser(!newUser);
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">
          {newUser ? "Create your Account" : "Login"}
        </h2>
        <form onSubmit={handleSubmit}>
          {newUser && (
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {newUser ? "Sign-up" : "Login"}
          </button>
        </form>
        <p className="cursor-pointer text-blue-700" onClick={handleNewUser}>
          {newUser
            ? "Already have an account? Login now!"
            : "New user, create your free account now!"}
        </p>
      </div>
    </div>
  );
};

export default Login;

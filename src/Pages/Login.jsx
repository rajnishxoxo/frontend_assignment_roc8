import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [newUser, setNewUser] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Username:", username);

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
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
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

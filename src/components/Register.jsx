import React, { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const validationErrors = {};
    if (!formData.username) validationErrors.username = 'Username is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.password) validationErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) validationErrors.confirmPassword = 'Passwords do not match';

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully:', formData);
    }
  };

  return (
    <div className="w-full h-screen max-w-2xl mx-auto p-8 bg-transparent rounded-lg shadow-lg bg-transparent text-black flex justify-center items-center flex-col">
      <h2 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-t from-gray-800 via-black
       to-gray-600 transform hover:scale-110 hover:text-white transition-all duration-300">
        HEY USER! REGISTER HERE
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div className="relative flex flex-col">
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="peer px-4 py-2 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
          <label
            htmlFor="username"
            className="absolute left-4 top-2 text-sm text-zinc-600 transition-all duration-300 transform scale-75 peer-placeholder-shown:top-2
             peer-placeholder-shown:scale-100
             peer-focus:scale-100 peer-focus:text-zinc-900 peer-focus:left-[-200px] peer-focus:text-lg"
          >
            Username:
          </label>
          {errors.username && <p className="text-sm text-red-600 mt-1">{errors.username}</p>}
        </div>

        <div className="relative flex flex-col">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="peer px-4 py-2 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 peer-focus:left-[-120px] transition-all duration-300"
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-2 text-sm text-zinc-600 transition-all duration-300 transform scale-75 peer-placeholder-shown:top-2
             peer-placeholder-shown:scale-100  peer-focus:scale-100 peer-focus:text-zinc-900 peer-focus:left-[-200px] peer-focus:text-lg"
          >
            Email:
          </label>
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div className="relative flex flex-col">
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="peer px-4 py-2 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-2 text-sm text-zinc-600 transition-all duration-300 transform
             scale-75 peer-placeholder-shown:left-120 peer-placeholder-shown:scale-100 peer-focus:scale-100 peer-focus:left-2 peer-focus:text-zinc-900 peer-focus:left-[-200px] peer-focus:text-lg"
          >
            Password:
          </label>
          {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password}</p>}
        </div>

        <div className="relative flex flex-col">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="peer px-4 py-2 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
          <label
            htmlFor="confirmPassword"
            className="absolute left-4 top-2 text-sm text-zinc-600 transition-all duration-300 transform scale-75 peer-placeholder-shown:top-2
             peer-placeholder-shown:scale-100  peer-focus:scale-100 peer-focus:left-2 peer-focus:text-zinc-900 peer-focus:left-[-200px] peer-focus:text-lg"
          >
            Confirm Password:
          </label>
          {errors.confirmPassword && <p className="text-sm text-red-600 mt-1">{errors.confirmPassword}</p>}
        </div>

        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;

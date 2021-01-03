import './App.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import ErrorMessage from './ErrorMessage';

export default function App() {
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm();
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const onSubmit = (data, e) => {
    // await sleep(1000);
    // console.log(data);
    alert(JSON.stringify(data));
    e.target.reset();
  };

  const validateUserName = async value => {
    await sleep(1000);
    if (value === '') return false;
    return true;
  };

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <label>First Name:</label>
      <input
        name="firstName"
        ref={register({
          required: true,
          minLength: 2,
          maxLength: 16,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      <ErrorMessage error={errors.firstName} />

      <label>Last Name:</label>
      <input
        name="lastName"
        ref={register({
          required: true,
          minLength: 2,
          maxLength: 16,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      <ErrorMessage error={errors.lastName} />

      <label>Gender</label>
      <select name="gender" ref={register({ required: true })}>
        <option value="">Select...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <ErrorMessage error={errors.gender} />

      <label>Username</label>
      <input
        name="username"
        onBlur={e => validateUserName(e.target.value)}
        ref={register({ required: true, validate: validateUserName })}
      />
      <ErrorMessage error={errors.username} />

      <label>Email</label>
      <input
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <ErrorMessage error={errors.email} />

      <label>About you</label>
      <textarea name="aboutYou" ref={register({ required: true })} />

      <input type="submit" disabled={isSubmitting} />
    </form>
  );
}

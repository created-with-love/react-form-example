import React from 'react';

export default function ErrorMessage({ error }) {
  if (error) {
    switch (error.type) {
      case 'required':
        return <p>This is required</p>;
      case 'minLength':
        return <p>Your name need minmium 2 charcaters</p>;
      case 'maxLength':
        return <p>Your name should contain max 18 charcaters</p>;
      case 'pattern':
        return <p>Enter a valid data</p>;
      case 'min':
        return <p>Minmium age is 18</p>;
      case 'validate':
        return <p>Username is already used</p>;
      default:
        return null;
    }
  }

  return null;
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Enter your email'),
  password: Yup.string().required('Enter your password'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Type your email" />
        <Input
          name="password"
          type="password"
          placeholder="Type your password"
        />

        <button type="submit">Enter</button>
        <Link to="/register">Create new account</Link>
      </Form>
    </>
  );
}

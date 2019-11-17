import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Enter full name'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Enter a email'),
  password: Yup.string()
    .min(6, 'Enter at least 6 characters')
    .required('Enter a password'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Type your full name" />
        <Input name="email" type="email" placeholder="Type your email" />
        <Input
          name="password"
          type="password"
          placeholder="Type your password"
        />

        <button type="submit">Create account</button>
        <Link to="/">I already have an account</Link>
      </Form>
    </>
  );
}

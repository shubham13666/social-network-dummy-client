import React from 'react';
import { Form } from "semantic-ui-react";


const RegisterForm = () => {
    return (
        <Form>
            <Form.Input label="Name" type="text" name="name" placeholder="Name"></Form.Input>
            <Form.Input label="Username" type="text" name="username" placeholder="Username"></Form.Input>
            <Form.Input label="Email" type="email" name="email" placeholder="Email"></Form.Input>
            <Form.Input label="Password" type="password" name="password" placeholder="Password"></Form.Input>

        </Form>
    );
}
export default RegisterForm;
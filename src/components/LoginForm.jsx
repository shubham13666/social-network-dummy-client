import React from 'react';
import { Form } from "semantic-ui-react";
const LoginForm = () => {
    return (
        <Form>
            <Form>
                <Form.Input label="Username" type="text" name="username" placeholder="Username"></Form.Input>
                <Form.Input label="Email" type="email" name="email" placeholder="Email"></Form.Input>
                <Form.Input label="Password" type="password" name="password" placeholder="Password"></Form.Input>
            </Form>
        </Form>
    );
}
export default LoginForm;
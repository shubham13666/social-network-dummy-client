import React, { useState } from 'react';
import { Button, Card, Form, Grid } from 'semantic-ui-react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';


const Retgister = () => {
    const [action, changeAction] = useState("register");
    const registerAction = () => changeAction("register");
    const loginAction = () => changeAction("login");


    return (
        // <Grid columns={2} stretched>
        //     <Grid.Row stretched>
        //         <Grid.Column>
        //             <Image src="/assets/group-friends-jumping-top-hill.jpg"></Image>
        //         </Grid.Column>
        //         <Grid.Column>
        //             <Grid columns={1}>
        //                 <Grid.Row>
        //                 </Grid.Row>
        //                 <Grid.Row>
        //                     <Grid.Column>
        //                         <Card raised color='brown' fluid>
        //                             <Form>

        //                             </Form>
        //                         </Card>
        //                     </Grid.Column>
        //                 </Grid.Row>
        //             </Grid>
        //         </Grid.Column>
        //     </Grid.Row>
        // </Grid>
        <Grid columns={1} centered>
            <Grid.Row></Grid.Row>
            <Grid.Row stretched>
                <Card raised color='brown' >
                    <Card.Content >
                        <Card.Header textAlign='left'>
                            <div className='ui two buttons'>
                                <Button basic={action !== "register"} active={action === "register"} color='brown' onClick={registerAction}>Register</Button>
                                <Button basic={action !== "login"} active={action === "login"} color='brown' onClick={loginAction}>Login</Button>
                            </div>
                        </Card.Header>
                    </Card.Content>
                    <Card.Content textAlign="left">
                        {action === "register"
                            ?
                            <RegisterForm />
                            :
                            <LoginForm />
                        }
                    </Card.Content>
                </Card>
            </Grid.Row>
        </Grid>

    );
}

export default Retgister;
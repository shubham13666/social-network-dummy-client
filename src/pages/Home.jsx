import React from 'react';
import Posts from '../components/Posts';
import Suggestions from '../components/Suggestions';
import { Grid } from 'semantic-ui-react';

const Home = () => {
    return (
        <Grid columns={2}>
            <Grid.Row></Grid.Row>
            <Grid.Row>
                <Grid.Column width={10}>
                    <Posts></Posts>
                    <Posts></Posts>
                    <Posts></Posts>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Suggestions></Suggestions>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default Home;
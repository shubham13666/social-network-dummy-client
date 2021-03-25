import React from 'react';
import Post from '../components/Post';
import Suggestions from '../components/Suggestions';
import { Grid } from 'semantic-ui-react';
import queries from '../graphql/queries';
import { useQuery } from '@apollo/client'

const Home = () => {
    const { loading, error, data } = useQuery(queries.GET_POSTS);
    if (error) {
        console.error(error)
        return (
            <p>{error}</p>
        );
    }
    if (loading) {
        console.log("loading...");
        return (
            <p>Loading...</p>
        );
    }
    // let posts = data.getPosts;
    // console.log("--");
    return (
        <Grid columns={2}>
            <Grid.Row></Grid.Row>
            <Grid.Row>
                <Grid.Column width={10}>
                    {
                        data.getPosts.map((post, id) => <Post key={id} post={post} />)
                    }
                </Grid.Column>
                <Grid.Column width={6}>
                    <Suggestions></Suggestions>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default Home;
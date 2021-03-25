import React from 'react'
import { Button, Comment, Form, TextArea } from 'semantic-ui-react'

const Comments = () => {

    return (
        <Comment.Group minimal size="tiny">
            {/* <Header as='h3' dividing>Comments</Header> */}
            <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>Matt</Comment.Author>
                    <Comment.Metadata>
                        <span>Today at 5:42PM</span>
                    </Comment.Metadata>
                    <Comment.Text>How artistic!</Comment.Text>
                    <Comment.Actions>
                        <a>Reply</a>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>

            <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>Elliot Fu</Comment.Author>
                    <Comment.Metadata>
                        <span>Yesterday at 12:30AM</span>
                    </Comment.Metadata>
                    <Comment.Text>
                        <p>This has been very useful for my research. Thanks as well!</p>
                    </Comment.Text>
                    <Comment.Actions>
                        <a>Reply</a>
                    </Comment.Actions>
                </Comment.Content>

                <Comment.Group>
                    <Comment>
                        <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                        <Comment.Content>
                            <Comment.Author as='a'>Jenny Hess</Comment.Author>
                            <Comment.Metadata>
                                <span>Just now</span>
                            </Comment.Metadata>
                            <Comment.Text>Elliot you are always so right :)</Comment.Text>
                            <Comment.Actions>
                                <a>Reply</a>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                </Comment.Group>
            </Comment>

            <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                <Comment.Content>
                    <Comment.Text>
                        <Form size="mini">
                            <TextArea rows={1} placeholder="Add a comment" />
                            <Button content='Add Reply' labelPosition='left' icon='edit' primary size="mini" />
                        </Form>
                    </Comment.Text>
                    <Comment.Actions>
                        <a>Reply</a>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
        </Comment.Group>
    );
}

export default Comments;
import React from 'react';
import { Card, Button, Label, Icon } from 'semantic-ui-react';
import Comments from './Comments';

const Posts = (props) => {
  return (
    <Card raised={true} color="brown" fluid={true}>
      <Card.Content header={props.post.username} />
      <Card.Content description={props.post.body} />
      <Card.Content extra>
        <Button as="div" labelPosition="right">
          <Button color='brown' basic>
            <Icon name='heart' size="small" />
          </Button>
          <Label basic color="brown" pointing='left' size="mini">2</Label>
        </Button>
        <Comments></Comments>
      </Card.Content>
    </Card>
  )
}
export default Posts;
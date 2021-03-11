import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const Posts = () => {
  const description = ["Amy is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.",
    "Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."]
  return (
    description.map(post =>
      <Card raised={true} color="brown" fluid={true}>
        <Card.Content header='About Amy' />
        <Card.Content description={post} />
        <Card.Content extra>
          <Icon name='user' />4 Friends
        </Card.Content>
      </Card>
    )

  );
}
export default Posts;
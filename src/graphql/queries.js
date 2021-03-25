import { gql } from "@apollo/client";

const queries = {
  GET_POSTS: gql`
    {
      getPosts{
      id
      body
      createdAt
      username
      comments{
        body
        username
      }
      likes{
        username
      }
    }
  }
 `
}




export default queries;

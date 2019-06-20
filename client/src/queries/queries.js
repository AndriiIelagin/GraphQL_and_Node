import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
  {
    authors{
      name
      id
    }
  }
`

const getBooksQuery = gql`
  {
    books{
      name
      genre
    }
  }
`

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId){
      name
      id
    }
  }
`

const getBookQuery = gql`
  query($id: String!){
    book(id: $id){
      name
      genre
      author{
        name
        age
        books{
          name
        }
      }
    }
  }
`

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery }
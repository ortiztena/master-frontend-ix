## Ricky & Morti API based on React-Typescritp with GraphQL

#### Instructions

    open the terminal in the source project folder
    npm install
    npm start

#### Character List

    - the list of the organization members will be displayed.
    - click on the character to see the details.
    - write a comment and save it.

## Sending query to the server

Apollo Client is a library that allows you to send queries to the server and get the response. This is how it works:

1. the query will be sent to the server.
2. the server will return the data.
   try it on GraphQL Playground served by default on http://localhost:3000/graphql.

- Getting a list of characters with only id, name and image:

```
query {
    characters {
        id
        name
        image
    }
}
```

- Saving a Comment:

```
mutation {
    saveComment(character: {
        id:1
        comment: "Hi, I'm Rick!"
    })
  }
```

- Getting a Character by Id:

```
query {
     character(id: 1){
        id
        name
        image
        status
        species
        gender
        type
        comment
    }
}
```

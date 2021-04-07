import './App.css';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, from } from '@apollo/client';
import { onError } from "@apollo/client/link/error"
import GetUsers from './components/GetUsers';

const errorLink = onError(({
  graphqlErrors, networkError
})=> {if(graphqlErrors) {
    graphqlErrors.map(({message, location, path})=> {
      alert(`GraphQL Error ${message}`)
    })
  }
})

const link = from([
  new HttpLink({uri: "http://localhost:6969/graphql/"})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})


function App() {

  return (
    <div>
      <ApolloProvider client={client}>
        <GetUsers></GetUsers>
      </ApolloProvider>
    </div>
  );
}

export default App;

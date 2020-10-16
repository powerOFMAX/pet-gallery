import React from 'react'
import ReactDom from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Home } from './pages/Home'
import { Router } from '@reach/router'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'

const client = new ApolloClient({
  uri: 'https://test-api-okz6z0yf7.vercel.app/graphql'
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <NavBar />
    </ApolloProvider>
  )
}

ReactDom.render(<App />, document.getElementById('app'))

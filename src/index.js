import React from 'react'
import ReactDom from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NavBar } from './components/NavBar'
import Context from './Context'

const client = new ApolloClient({
  uri: 'https://test-api-okz6z0yf7.vercel.app/graphql'
})

const App = () => {
  return (
    <Context.Provider>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Logo />
        <Router>
          <Home path='/' />
          <Home path='/pet/:id' />
          <Detail path='/detail/:detailId' />
        </Router>
        <Context.Consumer>
          {({ isAuth }) =>
            isAuth ? (
              <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
            ) : (
              <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
              </Router>
            )}
        </Context.Consumer>
        <NavBar />
      </ApolloProvider>
    </Context.Provider>
  )
}

ReactDom.render(<App />, document.getElementById('app'))

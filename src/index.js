import React from 'react'
import ReactDom from 'react-dom'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

const client = new ApolloClient({
  uri: 'https://test-api-okz6z0yf7.vercel.app/graphql'
})

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={2} />
          </>
      }
    </ApolloProvider>
  )
}

ReactDom.render(<App />, document.getElementById('app'))

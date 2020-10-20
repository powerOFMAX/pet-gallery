import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export const Favs = () => {
  return (
    <Layout title='Your favorites' subtitle='Here you can find your favorites pictures'>
      <FavsWithQuery />
    </Layout>
  )
}

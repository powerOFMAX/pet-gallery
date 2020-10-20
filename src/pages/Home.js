import React from 'react'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'
import { Layout } from '../components/Layout'

export const Home = ({ id }) => (
  <Layout title='Pet pictures' description='Here you can find cute pictures of pets'>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </Layout>
)

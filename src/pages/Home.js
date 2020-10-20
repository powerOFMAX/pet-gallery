import React from 'react'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'
import { Layout } from '../components/Layout'

const HomePage = ({ id }) => (
  <Layout title='Pet pictures' description='Here you can find cute pictures of pets'>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </Layout>
)

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})

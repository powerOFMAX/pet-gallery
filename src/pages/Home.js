import React from 'react'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'

export const Home = ({ id }) => (
  <>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </>
)

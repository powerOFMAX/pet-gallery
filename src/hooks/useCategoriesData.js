import { useEffect, useState } from 'react'

export function useCategoriesData () {
  const [categories, setCategoriesData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const url = process.env.REACT_APP_ENDPOINT ? `${process.env.REACT_APP_ENDPOINT}/categories` : 'https://pet-gallery-api.powerofmax.vercel.app/categories'
  useEffect(function () {
    setLoading(true)
    window.fetch(url)
      .then(res => res.json())
      .then(categories => {
        setCategoriesData(categories)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { error, loading, categories }
}

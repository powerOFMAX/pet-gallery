import { useEffect, useState } from 'react'

export function useCategoriesData () {
  const [categories, setCategoriesData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(function () {
    setLoading(true)
    setTimeout(function () {
      window.fetch('https://test-api-okz6z0yf7.vercel.app/categories')
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
    }, 2000)
  }, [])

  return { error, loading, categories }
}

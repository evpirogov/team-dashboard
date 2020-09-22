import {useCallback, useState} from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true)

    try {
      if (body)  {
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json'
      }

      const response = await fetch(url, {method, body, headers})
      const data = await response.json()

      if (response.status === 401) throw new Error('Wrong username or password')
      if (response.status === 403) throw new Error('Доступ запрещен')
      if (!response.ok) throw new Error( data.message || 'Что-то пошло не так')

      setLoading(false)
      return data
    } catch (e) {

      console.log(e.message)
      setLoading(false)
      setError(e.message)

      throw e
    }
  },[])

  const clearError = useCallback(() => setError(null), [])

  return {loading, request, error, clearError}
}


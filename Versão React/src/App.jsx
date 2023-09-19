import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import NewsCard from './components/NewsCard'

function App() {
  const [news, setNews] = useState([])
  const [category, setCategory] = useState('general')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    async function fetchNews() {
      const apiKey = 'd6d046b6d96c4f7580870c1144776ba0'
      const country = 'us'
      const pageSize = '16'
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`
  
      try {
        const response = await axios.get(apiUrl)
        const data = response.data
  
        if (data && data.articles) {
          setNews(data.articles)
        } else {
          console.error('Nenhuma notícia encontrada')
        }
      } catch (error) {
        console.error('Erro ao buscar notícias: ', error)
      }
    }

    fetchNews()
  }, [category])

  function updateCategory(newCategory) {
    setCategory(newCategory)
  }

  async function handleSearch(e) {
    e.preventDefault()

    if (searchQuery) {
      const apiKey = 'd6d046b6d96c4f7580870c1144776ba0'
      const pageSize = '16'
      const apiUrl = `https://newsapi.org/v2/top-headlines?q=${searchQuery}&pageSize=${pageSize}&apiKey=${apiKey}`

      try {
        const response = await axios.get(apiUrl)
        const data = response.data

        if (data && data.articles) {
          setNews(data.articles)
        } else {
          console.error('Nenhuma notícia encontrada.')
        }
      } catch (error) {
        console.error('Erro ao buscar notícias: ', error)
      }
    }
  }

  return (
    <div>
      <Header 
        updateCategory={updateCategory} 
        handleSearch={handleSearch} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} 
      />
      <div className='container-fluid my-2'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-3'>
          {news.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
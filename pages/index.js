import Head from 'next/head'

import Header from '../components/Header'
import Allnews from '../components/Allnews'
export default function Home({news}) {
  const articles = news.articles
  console.log(articles)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
       <Allnews articles={articles} />
      </main>

      <footer>
       
      </footer>
    </div>

    
  )
}

const url = "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4d7f71ef30fa40d28c65d23f96c51052"
const ustopheadlines= "https://newsapi.org/v2/top-headlines?country=us&apiKey=4d7f71ef30fa40d28c65d23f96c51052"
const topheadlinesTeth =""

export const getServerSideProps= async () => {
  const res = await fetch(url)
  const news = await res.json();
  
  return {
    props:{news}
  }
  
}
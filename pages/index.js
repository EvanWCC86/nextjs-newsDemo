import Head from 'next/head'

import Header from '../components/Header'
import News from '../components/News'

import Navbar from '../components/Navbar'
export default function Home({news, businessNews, healthData, TechData}) {
  const newsData = news.articles.filter((item) => item.urlToImage !== null )
  
  const someBusinessNews = businessNews.articles.filter((item) => item.urlToImage !== null )
  const someHealthNews = healthData.articles.filter((item) => item.urlToImage !== null )
  const someTechnologyNews = TechData.articles.filter((item) => item.urlToImage !== null )

  const featureNews = newsData.slice(0, 4)
  const healthNews = someHealthNews.slice(0, 6)
  const businessNews1 = someBusinessNews.slice(0,2)
  const businessNews2 = someBusinessNews.slice(2, 8)

  
  
  return (
    <div>
      <Head>
        <title>EvanWeb News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <main className="homePage">
      <div className="featureNews container">
        <News news={featureNews} textOnImage />
      </div>
      <div className="categoryNews container">
        <div className="homePage_left">
          <section className="healthNews">
            <h3 className="headline healthHeadline">Health News</h3>
            <div className="underline"></div>
            <div className="healthNews_container">
                <News news={healthNews} largeCard />
            </div>
          </section>

          <section className="businessNews">
              <h3 className="headline businessHeadline">Business News</h3>
              <div className="underline businessUnderline"></div>
              <div className="businessNews1">
                  <News news={businessNews1} largeCard />
              </div>
              
              <div className="businessNews2">
                  <News news={businessNews2} smallCard />
              </div>
          </section>
        </div>
        
        {/* right side */}
        <div className="homePage_right">
            <h3 className="headline TechHeadline">Technology News</h3>
            <div className="underline TechUnderline"></div>
            <News news={someTechnologyNews} smallCard  />
        </div>
        
  
      </div>
    </main>

      
    </div>

    
  )
}

  const url = `http://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${process.env.APIKEY}`

  const businessUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.APIKEY}`;
  const healthUrl = `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${process.env.APIKEY}`
  const technologyUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.APIKEY}`


  

  


export const getServerSideProps= async () => {
  const res = await fetch(url)
  const news = await res.json()

  const res1 = await fetch(businessUrl)
  const businessNews = await res1.json();

  const resHealth = await fetch(healthUrl)
  const healthData = await resHealth.json();

  const resTech = await fetch(technologyUrl)
  const TechData = await resTech.json();
  
  
  
  return {
    props:{news,businessNews,healthData, TechData}
  }
}


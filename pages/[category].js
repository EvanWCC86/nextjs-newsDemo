
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import News from '../components/News'
const category = ({categoryNews}) => {
//     const router = useRouter()
//   const { category } = router.query

const newsData = categoryNews.articles.filter((item) => item.urlToImage !== null )
   


return (
  <div className="categoryPage">
      <Header />
      <Navbar />
   
     <main className="categoryPage_main container">
        <News news={newsData} image_zoneToBottom  />
        
     </main>
     
     
  </div>
)


}

// getServersideProps....Start
export const getServerSideProps = async (context) => {
    
    const { category } = context.query;
    const categoryUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.APIKEY}`
    const res = await fetch(categoryUrl);
    const categoryNews = await res.json();
  
   
    return { props: {categoryNews} };}
  
//   getserversideProps......End

export default category


  

  



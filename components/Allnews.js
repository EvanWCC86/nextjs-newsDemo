import News from './News';

const Allnews = ({articles}) => {
    
    return (
        <div>
            {articles.map(article => (
                <News key={article.title} article={article} />
            ))}
            
        </div>
    )
}

export default Allnews



const News = ( {article}) => {
    const { urlToImage, author, source, title, publishedAt } = article
    return (
        <div>
            <div>
                <div>
                    <img src={urlToImage} alt={author} />
                </div>
                <div>
                    <p>{source.name}</p>
                    <h3>{title}</h3>
                    <div className="article-footer">
                        <p>{publishedAt}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News

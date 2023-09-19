import React from 'react'

function NewsCard({ article }) {
    return (
        <div className='col'>
            <div className='card h-100'>
                <img src={article.urlToImage} className='card-img-top object-fit-cover' height={250} alt={article.title} />
                <div className='card-body'>
                    <h5 className='card-title'>{article.title}</h5>
                    <h6 className='card-subtitle mb-2 text-body-secondary'>{article.source.name}</h6>
                    <p className='card-text'>{article.description}</p>
                </div>
                <div className='card-footer'>
                    <a href={article.url} className='btn btn-primary' target="_blank" rel="noopener noreferrer">
                        Read more
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
import React from 'react'

const NewsListItem = ({ n, webUrl, thumb, date }) => {

    return (
        <li className="list-group-item">
            <a href={webUrl}>
                <div className="row">
                    <div className="col-xs-4">
                        <img className="news-image" src={thumb} />
                    </div>
                    <div className="col-xs-8">
                        <h2>{n}</h2>
                        <p>Date: {date}</p>
                    </div>
                </div>
            </a>
        </li>
    )
}

export default NewsListItem
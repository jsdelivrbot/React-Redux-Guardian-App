import React, { Component } from 'react';
import NewsListItem from './news_list_item'

const NewsList = (props) => {
    console.log(props)
    const newsItems = props.newsData.map((news) => {
        news.webPublicationDate = news.webPublicationDate.split(/T(.+)/)[0];

        return (
            <NewsListItem key={news.id}
                n={news.webTitle}
                webUrl={news.webUrl}
                thumb={news.fields.thumbnail}
                date={news.webPublicationDate} />
        )
    })


    return (
        <ul className="list-group">
            {newsItems}
        </ul>
    )
}


export default NewsList
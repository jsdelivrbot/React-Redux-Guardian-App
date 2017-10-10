import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewsList from './news_list'

class NewsItems extends Component {


    render() {

        //if there are no props
        if (this.props.news.articles.length < 1) {
            return <span />
        }
        let index = this.props.news.display;


        const newsData = this.props.news.articles[index];

        return (
            <div>
                <NewsList newsData={newsData} />
            </div>

        )

    }
}

function mapStateToProps({ news }) {
    return { news }
}


export default connect(mapStateToProps)(NewsItems);
import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchList from './search_list'

class SearchedItems extends Component {


    render() {

        const searchTerms = this.props.news
        return (
            <div>
                <SearchList searchTerms={searchTerms} />
            </div>

        )

    }
}

function mapStateToProps({ news }) {
    return { news }
}

export default connect(mapStateToProps)(SearchedItems);
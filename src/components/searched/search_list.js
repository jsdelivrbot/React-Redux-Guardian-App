import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setNews, deleteNews } from '../../actions/index'


class SearchList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: ''
        }
    }

    searchTermDelete(event, i) {
        event.stopPropagation();
        this.props.deleteNews(i)
    }

    searchTermClick(event, i) {
        this.props.setNews(i)
    }

    render() {

        const searchItems = this.props.searchTerms.searches.map((term, i) => {

            return (
                <a
                    className={this.props.searchTerms.display === i ? 'list-group-item active' : 'list-group-item'}
                    key={i}
                    href="#"
                    onClick={(e) => this.searchTermClick(e, i)}>
                    {term}
                    <span className="list-group-item--delete" onClick={(e) => this.searchTermDelete(e, i)}><i>X</i></span>
                </a>
            )
        })


        return (
            <div className="list-group">
                {searchItems}
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setNews, deleteNews }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchList)
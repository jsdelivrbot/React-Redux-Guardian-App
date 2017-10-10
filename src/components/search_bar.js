import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchNews } from '../actions/index'
import { setNews } from '../actions/index'


class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    fetchNews() {
        this.props.fetchNews(this.state.term)
    }

    render() {

        return (
            <form onSubmit={this.onFormSubmit} className="form-group">
                <div className="input-group">
                    <input
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onInputChange} type="text"
                        placeholder="Search Guardian News" />
                    <span className="input-group-btn"><button className="btn btn-secondary">Go</button></span>
                </div>
            </form>
        )
    }

    onInputChange(event) {
        this.setState({ term: event.target.value })
    }

    onFormSubmit(event) {
        event.preventDefault()
        this.fetchNews(this.state.term)
        this.props.setNews(0)

        this.setState({ term: '' });
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setNews, fetchNews }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)

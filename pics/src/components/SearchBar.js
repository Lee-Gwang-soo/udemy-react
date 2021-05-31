import React from 'react';

class SearchBar extends React.Component {
    state = {
        text : ''
    }
    onInputChange = (e) => {
        this.setState({text : e.target.value})
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.text)
        this.setState({text : ''})
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="filed"></div>
                    <label>Image Search</label>
                    <input type="text" onChange={this.onInputChange} value={this.state.text}/>
                </form>
            </div>
        )
    }
}

export default SearchBar
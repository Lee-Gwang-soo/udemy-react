import React from 'react';

class SearchBar extends React.Component {
    
    state={ text: '' }

    onInputHandler = (e) => {
        this.setState({text : e.target.value})
    }
    
    onFormHandler = (e) => {
        e.preventDefault()

        //TODO : Make sure we call, callback from parent component
        this.props.onTextSubmit(this.state.text)
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormHandler} className="ui form">
                    <div className="filed">
                        <label>Search Bar </label>
                        <input onChange={this.onInputHandler}type="text" value={this.state.text}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
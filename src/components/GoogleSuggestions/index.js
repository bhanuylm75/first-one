import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  fun = suggestion => {
    this.setState({searchInput: suggestion})
  }

  change = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg">
        <div className="con">
          <img
            className="img"
            alt="img"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
          <div className="card">
            <input type="search" onChange={this.change} value={searchInput} />
            <ul className="un-order">
              {searchResults.map(each => (
                <SuggestionItem
                  suggestionItem={each}
                  key={each.id}
                  fun={this.fun}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions

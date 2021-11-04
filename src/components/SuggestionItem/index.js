import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, fun} = props
  const {suggestion} = suggestionItem
  const click = () => {
    fun(suggestion)
  }

  return (
    <li className="list">
      <p>{suggestion}</p>
      <img
        onClick={click}
        className="img1"
        alt="google logo"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}
export default SuggestionItem

import {Component} from 'react'
import './index.css'

class LettersCaluclator extends Component {
  state = {count: 0}

  onChangeSearchInput = event => {
    const {count} = this.state
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="left-container">
            <h1 className="heading">
              Calculate the <br /> Letters you enter
            </h1>
            <label htmlFor="hai" className="label">
              Enter the Phrase
            </label>
            <input
              id="hai"
              onChange={this.onChangeSearchInput}
              className="search"
              type="search"
              placeholder="Enter the phrase"
            />
            <p className="para"> No.of letters: {count} </p>
          </div>

          <div className="right-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              className="img"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCaluclator

import {v4} from 'uuid'

import {Component} from 'react'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    list: [],
    searchInput: '',
  }

  addBtn = () => {
    const {searchInput} = this.state
    const value = {
      id: v4(),
      name: searchInput,
      count: searchInput.length,
    }
    console.log(searchInput)
    this.setState(prevState => ({
      list: [...prevState.list, value],
      searchInput: '',
    }))
  }

  changeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {list} = this.state
    return (
      <div className="main-container">
        <div className="left-container">
          <div className="top-section">
            <h1 className="head">Count the Characters like a Boss...</h1>
          </div>
          <ul>
            {list.length === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            ) : (
              list.map(each => (
                <li className="head" key={each.id}>
                  <p>
                    {each.name}: {each.count}
                  </p>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="right-container">
          <h1 className="para">Character Counter</h1>
          <form>
            <input
              type="text"
              className="inputEl"
              placeholder="Enter the Characters here"
              onChange={this.changeSearch}
            />
            <button type="button" className="button" onClick={this.addBtn}>
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App

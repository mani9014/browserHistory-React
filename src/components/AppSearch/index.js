import {Component} from 'react'
import AppListItem from '../AppListItem'
import './index.css'

class AppSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchEvent = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteApp = id => {
    const {initialHistoryList} = this.props
    const filterUserData = initialHistoryList.filter(each => each.id !== id)
    this.setState({initialHistoryList: filterUserData})
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const searchResults = initialHistoryList.filter(eachList =>
      eachList.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-logo"
          />

          <div className="search-bg">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-logo"
              />
            </div>

            <input
              type="search"
              className="input-search"
              placeholder="Search History"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <div className="bottom-container">
          <ul className="list-container">
            {searchResults.map(eachList => (
              <AppListItem
                key={eachList.id}
                appDetails={eachList}
                deleteApp={this.deleteApp}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default AppSearch

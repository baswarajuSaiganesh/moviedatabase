import {Link} from 'react-router-dom'
import GlobalContext from '../GlobalContext'

import './index.css'

const GlobalNavbar = () => (
  <GlobalContext.Consumer>
    {value => {
      const {searchInput, getSearchInput} = value
      const onChangeSearchInput = event => {
        getSearchInput(event.target.value)
      }

      return (
        <nav className="nav-container">
          <h1>movieDB</h1>
          <ul className="unordered-list">
            <li>
              <Link to="/">
                <button type="button">Popular</button>
              </Link>
            </li>
            <li>
              <Link to="/top-rated">
                <button type="button">Top Rated</button>
              </Link>
            </li>
            <li>
              <Link to="/upcoming">
                <button type="button">UPcoming</button>
              </Link>
            </li>
          </ul>
          <div>
            <input
              type="search"
              value={searchInput}
              onChange={onChangeSearchInput}
            />

            <button type="button">search</button>
          </div>
        </nav>
      )
    }}
  </GlobalContext.Consumer>
)

export default GlobalNavbar

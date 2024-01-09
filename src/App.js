import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import './App.css'

import PopularMovies from './components/PopularMovies'
import TopRatedMovies from './components/TopRatedMovies'
import UpcomingMovies from './components/UpcomingMovies'
import SingleMovieDetails from './components/SingleMovieDetails'

import GlobalNavbar from './components/GlobalNavbar'
import GlobalContext from './components/GlobalContext'

// write your code here
class App extends Component {
  state = {searchInput: ''}

  getSearchInput = word => {
    this.setState({searchInput: word})
  }

  render() {
    const {searchInput} = this.state
    return (
      <GlobalContext.Provider
        value={{
          searchInput,
          getSearchInput: this.getSearchInput,
        }}
      >
        <GlobalNavbar />
        <Switch>
          <Route exact path="/" component={PopularMovies} />
          <Route exact path="/top-rated" component={TopRatedMovies} />
          <Route exact path="/upcoming" component={UpcomingMovies} />
          <Route exact path="/movie/:id" component={SingleMovieDetails} />
        </Switch>
      </GlobalContext.Provider>
    )
  }
}

export default App

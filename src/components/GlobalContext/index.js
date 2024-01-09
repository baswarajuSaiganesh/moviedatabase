import React from 'react'

const GlobalContext = React.createContext({
  searchInput: '',
  getSearchInput: () => {},
})

export default GlobalContext

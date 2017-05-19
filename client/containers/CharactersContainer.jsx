import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

// import { deleteCharacter } from '../actions/character-actions'
import Characters from '../components/Characters.jsx'

class CharactersPage extends React.Component {
  render () {
    return (
      <div>
        <Helmet title='Characters' />
        <Characters {...this.props} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    // domains: state.domain.domains
  }
}

function mapDispatchToProps (dispatch) {
  return {
    // decrement: () => {
    //   dispatch(decrement())
    // }
  }
}

module.exports = {
  CharactersContainer: connect(mapStateToProps, mapDispatchToProps)(CharactersPage),
  CharactersPage
}

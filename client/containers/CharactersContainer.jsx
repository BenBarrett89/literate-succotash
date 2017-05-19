import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import { addCharacter, deleteCharacter } from '../actions/character-actions'
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
    characters: state.characters.characters
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addCharacter: character => {
      dispatch(addCharacter(character))
    },
    deleteCharacter: id => {
      dispatch(deleteCharacter(id))
    }
  }
}

module.exports = {
  CharactersContainer: connect(mapStateToProps, mapDispatchToProps)(CharactersPage),
  CharactersPage
}

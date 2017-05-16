import { put } from 'redux-saga/effects'
import { loadDomains } from '../actions/domain-actions'

const initSagas = () => {
  function* initSaga () {
    yield put(loadDomains())
  }

  return {
    initSaga
  }
}

module.exports = {
  init: initSagas
}

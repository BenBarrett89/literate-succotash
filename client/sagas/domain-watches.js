import { takeEvery } from 'redux-saga/effects'
import { typeRandom, typeLoadDomains } from '../constants/action-constants'

const domainWatches = domainSagas => {
  function* watchLoadDomains () {
    yield takeEvery(typeLoadDomains, domainSagas.loadDomains)
  }

  function* watchRandom () {
    yield takeEvery(typeRandom, domainSagas.randomSaga)
  }

  function* root () {
    yield [
      watchLoadDomains(),
      watchRandom()
    ]
  }

  return root
}

module.exports = {
  init: domainWatches
}

import { takeEvery } from 'redux-saga/effects'
import { typeLoadDomains, typePostDomain, typeRandom } from '../constants/action-constants'

const domainWatches = domainSagas => {
  function* watchLoadDomains () {
    yield takeEvery(typeLoadDomains, domainSagas.loadDomainsSaga)
  }

  function* watchPostDomain () {
    yield takeEvery(typePostDomain, domainSagas.postDomainSaga)
  }

  function* watchRandom () {
    yield takeEvery(typeRandom, domainSagas.randomSaga)
  }

  function* root () {
    yield [
      watchLoadDomains(),
      watchPostDomain(),
      watchRandom()
    ]
  }

  return root
}

module.exports = {
  init: domainWatches
}

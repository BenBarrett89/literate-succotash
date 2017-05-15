import { takeEvery } from 'redux-saga/effects'
import { typeRandom } from '../constants/action-constants'

const domainWatches = domainSagas => {
  function* watchRandom () {
    yield takeEvery(typeRandom, domainSagas.randomSaga)
  }

  function* root () {
    yield [
      watchRandom()
    ]
  }

  return root
}

module.exports = {
  init: domainWatches
}

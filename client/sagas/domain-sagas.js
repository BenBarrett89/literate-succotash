import { call, put } from 'redux-saga/effects'
import { decrement, increment } from '../actions/domain-actions'

const domainSagas = (randomService) => {
  function* randomSaga () {
    const value = yield call(() => randomService.random() > 0.5)
    if (value) {
      yield put(increment())
    } else {
      yield put(decrement())
    }
  }

  return {
    randomSaga
  }
}

module.exports = {
  init: domainSagas
}

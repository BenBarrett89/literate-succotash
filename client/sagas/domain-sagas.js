import { call, put } from 'redux-saga/effects'
import { decrement, increment, setDomains } from '../actions/domain-actions'

const domainSagas = (randomService, domainService) => {
  function* loadDomains () {
    try {
      const domains = yield call(domainService.loadDomains)
      yield put(setDomains(domains))
    } catch (error) {
      console.log(error)
    }
  }

  function* randomSaga () {
    const value = yield call(() => randomService.random() > 0.5)
    if (value) {
      yield put(increment())
    } else {
      yield put(decrement())
    }
  }

  return {
    loadDomains,
    randomSaga
  }
}

module.exports = {
  init: domainSagas
}

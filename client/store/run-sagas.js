export default function (sagaMiddleware, db) {
  // domain
  const randomService = require('../services/random-service').init()
  const domainSagas = require('../sagas/domain-sagas').init(randomService)
  const domainWatches = require('../sagas/domain-watches').init(domainSagas)
  sagaMiddleware.run(domainWatches)
}

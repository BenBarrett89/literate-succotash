export default function (sagaMiddleware, db) {
  // services
  const randomService = require('../services/random-service').init()
  const domainService = require('../services/domain-service').init(db)

  // sagas
  const initSagas = require('../sagas/init-sagas').init()
  const initWatches = require('../sagas/init-watches').init(initSagas)
  sagaMiddleware.run(initWatches)
  const domainSagas = require('../sagas/domain-sagas').init(randomService, domainService)
  const domainWatches = require('../sagas/domain-watches').init(domainSagas)
  sagaMiddleware.run(domainWatches)
}

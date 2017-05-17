const domainService = db => {
  const loadDomains = () => {
    return new Promise((resolve, reject) => {
      resolve(db.domains.toArray())
    })
  }

  const postDomain = domain => {
    return new Promise((resolve, reject) => {
      const now = new Date().toString()
      resolve(db.domains.put({
        time: now,
        value: domain
      }))
    })
  }

  return {
    loadDomains,
    postDomain
  }
}

module.exports = {
  init: domainService
}

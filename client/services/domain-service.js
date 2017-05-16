const domainService = db => {
  const loadDomains = () => {
    return new Promise((resolve, reject) => {
      resolve(db.domains.toArray())
    })
  }

  return {
    loadDomains
  }
}

module.exports = {
  init: domainService
}

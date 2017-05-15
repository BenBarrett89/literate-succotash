import Dexie from 'dexie'

const db = new Dexie('literate-succotash')
db.version(1).stores({
  domains: `++id, value, time`
})

export default db

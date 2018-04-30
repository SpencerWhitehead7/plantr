const db = require("./models")

db.sync({force: true})
.then(()=>{
  console.log("Sync successful")
})
.catch(error=>{
    console.log("Sync failed")
    console.log(error)
})
.finally(()=>{
  db.close()
})
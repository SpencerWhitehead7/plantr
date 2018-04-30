const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/plantr')
module.exports = db

const Gardener = db.define("gardeners", {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
})

const Plot = db.define("plots", {
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN
})

const Vegetable = db.define("vegetables", {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  planted_on: Sequelize.DATE
})

// const Vegetable_Plot = db.define("vegetable_plot")

Plot.belongsTo(Gardener)
Gardener.hasOne(Plot)

Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'})
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'})

Gardener.belongsTo(Vegetable, {through: 'favorite_vegetable'})

// Vegetable.create({
//   name: "red pepper",
//   color: "red",
//   planted_on: new Date()
// })
// .then(vegetable=>{
//   return Gardener.create({
//     name: "Spencer",
//     age: 24,
//     vegetableId: vegetable.id
// })})
// .then(gardener=>{
//   return Plot.create({
//     size: 10,
//     shaded: true,
//     gardenerId: gardener.id
// })})
// .catch(error=>{
//   console.log("We fucked up!")
//   console.log(error)
// })
// .finally(()=>{
//   db.close()
// })



// Vegetable.create({
//   name: "white pepper",
//   color: "blue",
//   planted_on: new Date()
// })

// Vegetable.create({
//   name: "blue pepper",
//   color: "blue",
//   planted_on: new Date()
// })

//This lab represents my most abject failure in this course, possibly as a human being.
//I believe literally no part of it works.
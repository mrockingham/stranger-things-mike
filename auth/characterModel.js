const db = require('../database/dbconfig.js')


module.exports={
add,
find,
findBy,
findById,
update,
remove,

}

async function add(character){
    const{id} = await db('characters')
    .insert(character)
    return findById(id)
}
function find(){
    return db('characters')
}
function findBy(filter){
    return db('characters').where(filter)
}
function findById(id){
    return db('characters')
    .where({id})
    .first()
}
function update(changes, id) {
    return db('characters')
      .where('id', id)
      .update(changes)
}
function remove(id){
    return db('characters')
    .where('id', Numner(id)).del()
}
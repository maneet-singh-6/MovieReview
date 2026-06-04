/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments('id')
    table.string('name')
    table.string('date')
    table.integer('movie_id').references('id').inTable('movies') //same as .references('movie.id')
    table.string('description')
  })
}

export function down(knex) {
  return knex.schema.dropTable('reviews')
}

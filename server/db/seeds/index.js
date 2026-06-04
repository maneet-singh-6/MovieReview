export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('reviews').del() // delete the table pointing to anotehr table, first
  await knex('movies').del() // delete the parent/main table

  // Inserts movies entry first, then second table which references this table
  await knex('movies').insert([
    { id: 1, name: 'Kung Fu Panda', category: 'Family', duration: 92 },
    { id: 2, name: 'Ready Player One', category: 'Sci-fi', duration: 140 },
    { id: 3, name: 'Avatar', category: 'Sci-fi', duration: 162 },
  ])

  await knex('reviews').insert([
    {
      id: 1,
      name: 'Young',
      date: '4th April 2025',
      movie_id: 1,
      description:
        'Horrible movie! It is not a productive movie for society. I can code better animation than this!',
    },
    {
      id: 2,
      name: 'Henry',
      date: '5th June 2024',
      movie_id: 2,
      description:
        "My kids can't stop raving about this! They even told me to create the haptic suit through my coding bootcamp somehow!",
    },
    {
      id: 3,
      name: 'Maneet',
      date: '4th June 2026',
      movie_id: 2,
      description:
        "I want to leave reality and live in this world...for 19 seconds. Good movie. I'm waiting for the sequel!",
    },
    {
      id: 4,
      name: 'Maneet',
      date: '6th May 2025',
      movie_id: 3,
      description: 'Meh. Not bad.',
    },
    {
      id: 5,
      name: 'Young',
      date: '3rd May 2026',
      movie_id: 3,
      description:
        "I seriously don't understand why this is the highest grossing film in the world. Their accents are so weird and I don't understand why everyone is blue! What happened to diversity?!!?",
    },
    {
      id: 6,
      name: 'Henry',
      date: '6th January 2025',
      movie_id: 3,
      description:
        "2 stars if I could rate on this site! Don't watch this movie! You will get addicted to it! I've already watched it 10 times in a row...HELP ME!!!",
    },
  ])
}

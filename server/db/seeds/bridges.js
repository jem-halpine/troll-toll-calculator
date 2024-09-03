export async function seed(knex) {
  // Deletes ALL existing entries

  await knex('bridges').del()
  await knex('tolls').del()
  await knex('favourites').del()

  await knex('bridges').insert([
    {
      id: 1,
      name: 'Auckland Harbour Bridge',
      location: 'Auckland Harbour',
      type: 'Motorway bridge',
      year_built: 1959,
      length_meters: 1020,
      lanes: 8,
      active_by_users: '0auth|4321',
      image_path: process.env.IMAGE_PATH,
    },
    {
      id: 2,
      name: 'Grafton Bridge',
      location: 'Grafton Gully',
      type: 'Road bridge',
      year_built: 1910,
      length_meters: 100,
      lanes: 4,
      active_by_users: '0auth|4321',
      image_path: process.env.IMAGE_PATH,
    },
    {
      id: 3,
      name: 'Jacobs Ladder Bridge',
      location: 'Somewhere',
      type: 'Pedestrian bridge',
      year_built: 2000,
      length_meters: 50,
      lanes: null,
      active_by_users: null,
      image_path: process.env.IMAGE_PATH,
    },
    {
      id: 4,
      name: 'Māngere Bridge',
      location: 'Māngere',
      type: 'Road bridge',
      year_built: 1965,
      length_meters: 300,
      active_by_users: null,
      image_path: process.env.IMAGE_PATH,
    },
    {
      id: 5,
      name: 'Newmarket Viaduct',
      location: 'Newmarket',
      type: 'Viaduct',
      year_built: 1980,
      length_meters: 500,
      active_by_users: null,
      image_path: process.env.IMAGE_PATH,
    },
    {
      id: 6,
      name: 'Onehunga Harbour Road Bridge',
      location: 'Onehunga Harbour Road',
      type: 'Road bridge',
      year_built: 1995,
      length_meters: 150,
      lanes: 2,
      active_by_users: null,
      image_path: process.env.IMAGE_PATH,
    },
    {
      id: 7,
      name: 'Onepoto Bridge',
      location: 'Someplace',
      type: 'Bridge type',
      year_built: 2010,
      length_meters: 80,
      active_by_users: null,
      image_path: process.env.IMAGE_PATH,
    },
    {
      id: 8,
      name: 'Panmure Bridge',
      location: 'Panmure',
      type: 'Bridge type',
      year_built: 2005,
      length_meters: 120,
      active_by_users: null,
      image_path: process.env.IMAGE_PATH,
    },
    {
      id: 9,
      name: 'Tāmaki Bridge',
      location: 'Tāmaki',
      type: 'Bridge type',
      year_built: 2015,
      length_meters: 90,
      active_by_users: null,
      image_path: process.env.IMAGE_PATH,
    },
    {
      id: 10,
      name: 'Upper Harbour Bridge',
      location: 'Upper Harbour',
      type: 'Bridge type',
      year_built: 2008,
      length_meters: 200,
      active_by_users: null,
      image_path: process.env.IMAGE_PATH,
    },
    {
      id: 11,
      name: 'Victoria Park Viaduct',
      location: 'Victoria Park',
      type: 'Viaduct',
      year_built: 1988,
      length_meters: 350,
      active_by_users: null,
    },
    {
      id: 12,
      name: 'Westgate Pedestrian and Cycle Bridge',
      location: 'Westgate',
      type: 'Pedestrian and Cycle Bridge',
      year_built: 2018,
      length_meters: 120,
      active_by_users: null,
    },
    {
      id: 13,
      name: 'Wynyard Crossing',
      location: 'Wynyard Quarter',
      type: 'Bascule Bridge',
      year_built: 2012,
      length_meters: 60,
      active_by_users: null,
      image_path: process.env.IMAGE_PATH,
    },
  ])

  await knex('favourites').insert([
    { id: 1, bridges_id: 1, users_token: '0auth|1234' },
    { id: 2, bridges_id: 2, users_token: '0auth|4321' },
  ])

  const date = new Date().getTime()

  await knex('tolls').insert([
    {
      id: 1,
      users_token: '0auth|1234',
      candies: 99,
      time_stamp: `${date}`,
      bridges_id: 1,
    },
    {
      id: 2,
      users_token: '0auth|4321',
      candies: 55,
      time_stamp: `${date}`,
      bridges_id: 2,
    },
  ])
}

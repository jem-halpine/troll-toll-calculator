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
      active_by_users: 'auth0|4321',
      image_path: 'auckland-harbour-bridge.jpg',
      latitude: -36.830291,
      longitude: 174.745348,
    },
    {
      id: 2,
      name: 'Grafton Bridge',
      location: 'Grafton Gully',
      type: 'Road bridge',
      year_built: 1910,
      length_meters: 100,
      lanes: 4,
      active_by_users: 'auth0|4321',
      image_path: 'grafton-bridge.jpg',
      latitude: -36.8586623,
      longitude: 174.7598789,
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
      image_path: 'jacobs-ladder-bridge.jpg',
      latitude: -36.84413,
      longitude: 174.7458869,
    },
    {
      id: 4,
      name: 'Māngere Bridge',
      location: 'Māngere',
      type: 'Road bridge',
      year_built: 1965,
      length_meters: 300,
      active_by_users: null,
      image_path: 'mangere-bridge.jpg',
      latitude: -36.9513925,
      longitude: 174.7908623,
    },
    {
      id: 5,
      name: 'Newmarket Viaduct',
      location: 'Newmarket',
      type: 'Viaduct',
      year_built: 1980,
      length_meters: 500,
      active_by_users: null,
      image_path: 'newmarket-viaduct.jpg',
      latitude: -36.8737293,
      longitude: 174.7747643,
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
      image_path: 'onehunga-roadbridge.jpg',
      latitude: -36.9315866,
      longitude: 174.782292,
    },
    {
      id: 7,
      name: 'Onepoto Bridge',
      location: 'Someplace',
      type: 'Bridge type',
      year_built: 2010,
      length_meters: 80,
      active_by_users: null,
      image_path: 'onepoto-bridge.jpg',
      latitude: -36.8119543,
      longitude: 174.7425438,
    },
    {
      id: 8,
      name: 'Panmure Bridge',
      location: 'Panmure',
      type: 'Bridge type',
      year_built: 2005,
      length_meters: 120,
      active_by_users: null,
      image_path: 'panmure-bridge.jpg',
      latitude: -36.9083093,
      longitude: 174.8557075,
    },
    {
      id: 9,
      name: 'Tāmaki Bridge',
      location: 'Tāmaki',
      type: 'Bridge type',
      year_built: 2015,
      length_meters: 90,
      active_by_users: null,
      image_path: 'tamaki-bridge.jpg',
      latitude: null,
      longitude: null,
    },
    {
      id: 10,
      name: 'Upper Harbour Bridge',
      location: 'Upper Harbour',
      type: 'Bridge type',
      year_built: 2008,
      length_meters: 200,
      active_by_users: null,
      image_path: 'upper-harbour-bridge.jpg',
      latitude: -36.787006,
      longitude: 174.6584125,
    },
    {
      id: 11,
      name: 'Victoria Park Viaduct',
      location: 'Victoria Park',
      type: 'Viaduct',
      year_built: 1988,
      length_meters: 350,
      active_by_users: null,
      image_path: 'victoria-park-viaduct.jpg',
      latitude: -36.8462052,
      longitude: 174.7526055,
    },
    {
      id: 12,
      name: 'Westgate Pedestrian and Cycle Bridge',
      location: 'Westgate',
      type: 'Pedestrian and Cycle Bridge',
      year_built: 2018,
      length_meters: 120,
      active_by_users: null,
      image_path: 'westgate-bridge.jpg',
      latitude: -36.82214,
      longitude: 174.6138863,
    },
    {
      id: 13,
      name: 'Wynyard Crossing',
      location: 'Wynyard Quarter',
      type: 'Bascule Bridge',
      year_built: 2012,
      length_meters: 60,
      active_by_users: null,
      image_path: 'wynward-crossing.jpg',
      latitude: -36.8411838,
      longitude: 174.7569321,
    },
  ])

  await knex('favourites').insert([
    { id: 1, bridges_id: 1, users_token: 'auth0|1234' },
    { id: 2, bridges_id: 2, users_token: 'auth0|4321' },
  ])

  const date = new Date().getTime()

  await knex('tolls').insert([
    {
      users_token: '0auth|1234',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 1,
    },
    {
      users_token: '0auth|1234',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 1,
    },
    {
      users_token: '0auth|1234',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 1,
    },
    {
      users_token: '0auth|1234',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 1,
    },
    {
      users_token: '0auth|1234',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 8,
    },
    {
      users_token: '0auth|4321',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 3,
    },
    {
      users_token: '0auth|4321',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 12,
    },
    {
      users_token: '0auth|4321',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 3,
    },
    {
      users_token: '0auth|4321',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 3,
    },
    {
      users_token: '0auth|4321',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 3,
    },
    {
      users_token: '0auth|4321',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 3,
    },
    {
      users_token: '0auth|4321',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 3,
    },
    {
      users_token: '0auth|4321',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 3,
    },
    {
      users_token: '0auth|1234',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 1,
    },
    {
      users_token: '0auth|4321',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 3,
    },
  ])
}

'use strict'
const bcrypt = require('bcryptjs')
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      account: 'root',
      email: 'root@example.com',
      password: await bcrypt.hash('12345678', 10),
      role: 'admin',
      name: 'root',
      introduction: faker.lorem.text(),
      created_at: new Date(),
      updated_at: new Date(),
      avatar: 'https://i.imgur.com/vdw7dQ1.png',
      background: 'https://i.imgur.com/iH11x1t.jpeg'
    }, {
      account: 'user1',
      email: 'user1@example.com',
      password: await bcrypt.hash('12345678', 10),
      role: 'user',
      name: 'user1',
      introduction: faker.lorem.text(),
      created_at: new Date(),
      updated_at: new Date(),
      avatar: 'https://i.imgur.com/vdw7dQ1.png',
      background: 'https://i.imgur.com/iH11x1t.jpeg'
    }, {
      account: 'user2',
      email: 'user2@example.com',
      password: await bcrypt.hash('12345678', 10),
      role: 'user',
      name: 'user2',
      introduction: faker.lorem.text(),
      created_at: new Date(),
      updated_at: new Date(),
      avatar: 'https://i.imgur.com/vdw7dQ1.png',
      background: 'https://i.imgur.com/iH11x1t.jpeg'
    },
    {
      account: 'user3',
      email: 'user3@example.com',
      password: await bcrypt.hash('12345678', 10),
      role: 'user',
      name: 'user3',
      introduction: faker.lorem.text(),
      created_at: new Date(),
      updated_at: new Date(),
      avatar: 'https://i.imgur.com/vdw7dQ1.png',
      background: 'https://i.imgur.com/iH11x1t.jpeg'
    },
    {
      account: 'user4',
      email: 'user4@example.com',
      password: await bcrypt.hash('12345678', 10),
      role: 'user',
      name: 'user4',
      introduction: faker.lorem.text(),
      created_at: new Date(),
      updated_at: new Date(),
      avatar: 'https://i.imgur.com/vdw7dQ1.png',
      background: 'https://i.imgur.com/iH11x1t.jpeg'
    },
    {
      account: 'user5',
      email: 'user5@example.com',
      password: await bcrypt.hash('12345678', 10),
      role: 'user',
      name: 'user5',
      introduction: faker.lorem.text(),
      created_at: new Date(),
      updated_at: new Date(),
      avatar: 'https://i.imgur.com/vdw7dQ1.png',
      background: 'https://i.imgur.com/iH11x1t.jpeg'
    }], {})

    await queryInterface.bulkInsert('Users', [{
      account: 'user6',
      email: 'user6@example.com',
      password: await bcrypt.hash('12345678', 10),
      role: 'user',
      name: 'user6',
      introduction: faker.lorem.text(),
      created_at: new Date(),
      updated_at: new Date(),
      avatar: 'https://i.imgur.com/vdw7dQ1.png',
      background: 'https://i.imgur.com/iH11x1t.jpeg'
    }, {
      account: 'user7',
      email: 'user7@example.com',
      password: await bcrypt.hash('12345678', 10),
      role: 'user',
      name: 'user7',
      introduction: faker.lorem.text(),
      created_at: new Date(),
      updated_at: new Date(),
      avatar: 'https://i.imgur.com/vdw7dQ1.png',
      background: 'https://i.imgur.com/iH11x1t.jpeg'
    },
    {
      account: 'user8',
      email: 'user8@example.com',
      password: await bcrypt.hash('12345678', 10),
      role: 'user',
      name: 'user8',
      introduction: faker.lorem.text(),
      created_at: new Date(),
      updated_at: new Date(),
      avatar: 'https://i.imgur.com/vdw7dQ1.png',
      background: 'https://i.imgur.com/iH11x1t.jpeg'
    },
    {
      account: 'user9',
      email: 'user9@example.com',
      password: await bcrypt.hash('12345678', 10),
      role: 'user',
      name: 'user9',
      introduction: faker.lorem.text(),
      created_at: new Date(),
      updated_at: new Date(),
      avatar: 'https://i.imgur.com/vdw7dQ1.png',
      background: 'https://i.imgur.com/iH11x1t.jpeg'
    },
    {
      account: 'user10',
      email: 'user10@example.com',
      password: await bcrypt.hash('12345678', 10),
      role: 'user',
      name: 'user10',
      introduction: faker.lorem.text(),
      created_at: new Date(),
      updated_at: new Date(),
      avatar: 'https://i.imgur.com/vdw7dQ1.png',
      background: 'https://i.imgur.com/iH11x1t.jpeg'
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', {})
  }
}

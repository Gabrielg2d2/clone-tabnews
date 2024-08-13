import { database } from 'infra/database'

async function cleanDatabase() {
    await database.query('drop schema public cascade; create schema public;')
}

beforeAll(cleanDatabase)

test('POST to /api/v1/migrations/get, should return 200', async () => {
    const response1 = await fetch('http://localhost:3000/api/v1/migrations', {
        method: 'POST'
    })

    expect(response1.status).toBe(201)

    const data = await response1.json()

    expect(Array.isArray(data)).toBe(true)
    expect(data.length).toBeGreaterThan(0)

    const response2 = await fetch('http://localhost:3000/api/v1/migrations', {
        method: 'POST'
    })

    expect(response2.status).toBe(200)

    const data2 = await response2.json()

    expect(data2.length).toBe(0)
})

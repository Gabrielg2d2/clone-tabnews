import { database } from 'infra/database'

test('GET to /api/v1/migrations/get, should return 200', async () => {
    const response = await fetch('http://localhost:3000/api/v1/migrations')

    expect(response.status).toBe(200)

    const data = await response.json()
    expect(Array.isArray(data)).toBe(true)

    expect(data.length).toBeGreaterThan(0)
})

test('GET to /api/v1/migrations/get, should return 200', async () => {
    const response = await fetch('http://localhost:3000/api/v1/migrations')

    expect(response.status).toBe(200)

    const data = await response.json()
    console.log(data)

    // [
    //     {
    //         path: 'infra/migrations/1721596001832_test.js',
    //         name: '1721596001832_test',
    //         timestamp: 1721596001832
    //     }
    // ]

    expect(Array.isArray(data)).toBe(true)
})

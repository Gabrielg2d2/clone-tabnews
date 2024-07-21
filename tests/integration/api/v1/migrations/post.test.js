test('GET to /api/v1/migrations/post, should return 200', async () => {
    const response = await fetch('http://localhost:3000/api/v1/migrations')

    expect(response.status).toBe(200)
})

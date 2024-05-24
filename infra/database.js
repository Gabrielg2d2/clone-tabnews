import { Client } from 'pg'

async function query(queryObject){
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        database: 'postgres',
        password: 'mypassword',
    })

    try {
        await client.connect()
        console.log('Connected to database')
    } catch (error) {
        console.error('Error connecting to database: ')
    }

    const result = await client.query(queryObject)
    await client.end()

    return result
}


export const database =  {
    query: query
}

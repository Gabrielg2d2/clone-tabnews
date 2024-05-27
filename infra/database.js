import { Client } from 'pg'

async function query(queryObject){
    const client = new Client({
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        user: process.env.POSTGRES_USER,
        database: process.env.POSTGRES_DB,
        password: process.env.POSTGRES_PASSWORD
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

import Redis from 'ioredis'
import dotenv from 'dotenv'
dotenv.config()


const redis = new Redis()

redis.on("connect", () => console.log("Redis Connected"))

redis.on("error", (error) => console.log(error, "Redis not connected"))

export default redis
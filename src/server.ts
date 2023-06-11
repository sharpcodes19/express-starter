import express from 'express'
import http from 'http'
import cors from 'cors'
import ws from '@/ws'
import routes from '@/routes'
import env from '@/types/env'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: env.CORS_ORIGIN }))

const server = new http.Server(app)
const io = ws(server)

app.use('/api', routes({ io }))

export default server.listen(env.PORT, () => {
	console.log('Listening at port', env.PORT)
})

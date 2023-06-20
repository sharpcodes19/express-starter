import express from 'express'
import http from 'http'
import cors from 'cors'
import ws from '@/ws'
import routes from '@/routes'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: process.env.CORS_ORIGIN }))

const server = new http.Server(app)
const io = ws(server)

app.use('/api', routes({ io }))

export default server.listen(process.env.PORT, () => {
	console.log('Listening at port', process.env.PORT)
})

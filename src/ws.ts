import { Server } from 'socket.io'
import http from 'http'
import { ServerSocket } from '@/schemas/socket'
import env from '@/schemas/env'

const ws = (server: http.Server) => {
	const io: ServerSocket = new Server(server, {
		cors: {
			origin: process.env.CORS_ORIGIN
		}
	})

	return io
}

export default ws

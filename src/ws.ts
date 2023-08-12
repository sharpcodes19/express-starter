import http from 'http'
import { Server } from 'socket.io'
import { ServerSocket } from '@/schemas/socket'

const ws = (server: http.Server) => {
	const io: ServerSocket = new Server(server, {
		cors: {
			origin: process.env.CORS_ORIGIN
		}
	})

	return io
}

export default ws

import { Server } from 'socket.io'
import http from 'http'
import { ServerSocket } from '@/types/socket'
import env from '@/types/env'

const ws = (server: http.Server) => {
	const io: ServerSocket = new Server(server, {
		cors: {
			origin: env.CORS_ORIGIN
		}
	})

	return io
}

export default ws

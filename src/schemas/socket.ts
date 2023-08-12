import { z } from 'zod'
import { Server, Socket } from 'socket.io'

export const clientToServerEvents = z.object({})
export const serverToClientEvents = z.object({})

export type ClientToServerEvents = z.infer<typeof clientToServerEvents>
export type ServerToClientEvents = z.infer<typeof serverToClientEvents>

export type ServerSocket = Server<ClientToServerEvents, ServerToClientEvents>
export type ClientSocket = Socket<ServerToClientEvents, ClientToServerEvents>

export type WithWs = { io: ServerSocket; socket?: ClientSocket }

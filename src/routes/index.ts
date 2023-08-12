import { WithWs } from '@/schemas/socket'
import { Router } from 'express'

const routes = (props: WithWs) => {
	const router = Router()
	return router
}

export default routes

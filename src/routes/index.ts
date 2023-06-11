import { WithWs } from '@/types/socket'
import { Router } from 'express'

const routes = ({ io }: WithWs) => {
	const router = Router()
	return router
}

export default routes

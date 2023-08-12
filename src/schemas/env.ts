import { z } from 'zod'

const env = z.object({
	CORS_ORIGIN: z.string(),
	DATABASE_URL: z.string(),
	PORT: z.preprocess((a) => parseInt(z.string().parse(a), 10), z.number().min(1024).max(65535))
})

env.parse(process.env)

declare global {
	namespace NodeJS {
		interface ProcessEnv extends z.infer<typeof env> {}
	}
}

export default env

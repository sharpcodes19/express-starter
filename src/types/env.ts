import z from 'zod'

// prettier-ignore
const asNumber = z.string().regex(/^\\d+$/).transform(Number)
const asBoolean = z.enum(['true', 'false']).transform(Boolean)

const env = z
	.object({
		CORS_ORIGIN: z.string().nonempty(),
		DATABASE_URL: z.string().nonempty(),
		PORT: z.preprocess((a) => parseInt(z.string().parse(a), 10), z.number().min(3000).max(65535))
	})
	.parse(process.env)

export default env

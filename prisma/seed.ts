import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
	// your seed here...
}

main().finally(() => prisma.$disconnect())

import { PrismaClient } from "@prisma/client";
import seedProduct from "./productSeeder";
import seedReview from "./reviewSeeder";
import seedUsers from "./userSeeder";


const primsa = new PrismaClient();
const seeders = [ seedProduct, seedReview, seedUsers ]

const seed = async () => {
  for (const seeder of seeders) {
    await seeder(primsa)
  }
}

seed()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await primsa.$disconnect()
  })
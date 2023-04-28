import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const seedUsers = async (prisma: PrismaClient): Promise<void> => {
  const users: any[] = [];
  for (let i = 0; i < 100; i++) {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password(),
      name: faker.name.firstName(),
      last_name: faker.name.lastName(),
    };
    users.push(user);
  }

  await prisma.users.createMany({
    data: users,
  });

  console.log("users created!");
}

export default seedUsers;
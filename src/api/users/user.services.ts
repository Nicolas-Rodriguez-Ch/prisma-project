import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// gets all the users from the db
export const getAllUsers = () => {
  return prisma.users.findMany({
    select: {
      name: true,
      last_name: true,
      user_id: true,
      email: true,
      password: true,
      createdAt: true,
      updatedAt: true
    }
  });
}


// get a single user by the id 
export const getUserById = (id: string) => {
  return prisma.users.findUnique({
    where: {
      user_id:id
    },
    select: {
      name: true,
      last_name: true,
      user_id: true,
      email: true,
      password: true,
      createdAt: true,
      updatedAt: true
    }
  });
}

export const createUser = async (input: any) => {
  const { email, password, name, last_name } = input;
  return prisma.users.create({ 
    data: {
      name,
      last_name,
      email,
      password,
    }
  });
}

// update user
export const updateUser = (id: string | undefined, input: any) => {
  const { email, password, name, last_name } = input;

  return prisma.users.update({
    where: {
      user_id: id
    },
    data: {
      email: email && { set: email },
      password: password && { set: password },
      name: name && { set: name },
      last_name: last_name && { set: last_name },
    }
  });
}

// delete user 
export const deleteUser = (id: string) => {
  return prisma.users.delete({
    where: {
      user_id: id
    }
  });
}
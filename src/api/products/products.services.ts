import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();
// Crear

//Leer - get
export const getAllProducts = () => {
  return prisma.product.findMany({
    select:{
      id: true,
      name: true,
      description: true,
      price: true,
      reviews: {
        select: {
          text: true,
          rating: true
        }
      },
      createdAt: true,
      updatedAt: true
    }
  });
}

// crate - post

export const createProduct = (input: any) => {
  return prisma.product.create({
    data: {
      name: input.name,
      description: input.description,
      price: parseInt(input.price),
    }
  })
}


// get one
export const getProductById = (id: string) => {
  return prisma.product.findUnique({
    where: {
      id : id
    }
  })
}

//update one

export const updateProduct = (id: string, input: any) => {
  return prisma.product.update({
    where: {
      id: id
    },
    data : {
      name: input.name,
      description: input.description,
      price: parseInt(input.price),
    }
  });
}

export const deleteProduct = (id: string) => {
  return prisma.product.delete({
    where: {
      id: id
    }
  });
}
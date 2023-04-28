"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.createProduct = exports.getAllProducts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Crear
//Leer - get
const getAllProducts = () => {
    return prisma.product.findMany({
        select: {
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
};
exports.getAllProducts = getAllProducts;
// crate - post
const createProduct = (input) => {
    return prisma.product.create({
        data: {
            name: input.name,
            description: input.description,
            price: parseInt(input.price),
        }
    });
};
exports.createProduct = createProduct;
// get one
const getProductById = (id) => {
    return prisma.product.findUnique({
        where: {
            id: id
        }
    });
};
exports.getProductById = getProductById;
//update one
const updateProduct = (id, input) => {
    return prisma.product.update({
        where: {
            id: id
        },
        data: {
            name: input.name,
            description: input.description,
            price: parseInt(input.price),
        }
    });
};
exports.updateProduct = updateProduct;
const deleteProduct = (id) => {
    return prisma.product.delete({
        where: {
            id: id
        }
    });
};
exports.deleteProduct = deleteProduct;

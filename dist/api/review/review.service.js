"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReview = exports.updateReview = exports.createReview = exports.getReviewById = exports.getAllReviews = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllReviews = () => {
    return prisma.review.findMany();
};
exports.getAllReviews = getAllReviews;
const getReviewById = (id) => {
    return prisma.review.findUnique({
        where: {
            id: id,
        },
    });
};
exports.getReviewById = getReviewById;
const createReview = (input) => {
    return prisma.review.create({
        data: {
            text: input.text,
            rating: parseInt(input.rating),
            product: {
                connect: {
                    id: input.productId
                }
            }
        }
    });
};
exports.createReview = createReview;
const updateReview = (id, review) => {
    return prisma.review.update({
        where: {
            id: id
        },
        data: {
            text: review.text,
            rating: parseInt(review.rating)
        }
    });
};
exports.updateReview = updateReview;
const deleteReview = (id) => {
    return prisma.review.delete({
        where: {
            id: id
        }
    });
};
exports.deleteReview = deleteReview;

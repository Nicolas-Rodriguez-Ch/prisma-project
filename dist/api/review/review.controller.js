"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReviewController = exports.updateReviewController = exports.createReviewController = exports.getReviewByIdController = exports.getAllReviewsController = void 0;
const review_service_1 = require("./review.service");
const getAllReviewsController = async (req, res, next) => {
    try {
        const reviews = await (0, review_service_1.getAllReviews)();
        res.status(200).json({ message: 'these be reviews', data: reviews });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getAllReviewsController = getAllReviewsController;
const getReviewByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await (0, review_service_1.getReviewById)(id);
        res.status(200).json({ message: 'Review found', data: review });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getReviewByIdController = getReviewByIdController;
const createReviewController = async (req, res, next) => {
    try {
        const review = await (0, review_service_1.createReview)(req.body);
        res.status(201).json({ message: 'review created', data: review });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
exports.createReviewController = createReviewController;
const updateReviewController = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await (0, review_service_1.updateReview)(id, req.body);
        res.status(200).json({ message: 'Review updated', data: review });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.updateReviewController = updateReviewController;
const deleteReviewController = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await (0, review_service_1.deleteReview)(id);
        res.status(200).json({ message: 'Review Deleted', data: review });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.deleteReviewController = deleteReviewController;

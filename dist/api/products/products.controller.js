"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductController = exports.updateProductController = exports.getProductByIdController = exports.createProductController = exports.getAllProductsContoller = void 0;
const products_services_1 = require("./products.services");
const getAllProductsContoller = async (req, res, next) => {
    try {
        const products = await (0, products_services_1.getAllProducts)();
        res.status(200).send({ message: 'We got em! We fucking got em!', data: products });
    }
    catch (error) {
        next(error);
    }
};
exports.getAllProductsContoller = getAllProductsContoller;
const createProductController = async (req, res, next) => {
    try {
        const product = await (0, products_services_1.createProduct)(req.body);
        res.status(201).send({ message: 'I made it and i am so proud', data: product });
    }
    catch (error) {
        next(error);
    }
};
exports.createProductController = createProductController;
const getProductByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await (0, products_services_1.getProductById)(id);
        res.status(201).send({ message: 'This what you looking for?', data: product });
        if (!product) {
            return res.status(404).json({ message: 'sorry bb, we aint got that' });
        }
    }
    catch (error) {
        next(error);
    }
};
exports.getProductByIdController = getProductByIdController;
// put
const updateProductController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await (0, products_services_1.updateProduct)(id, req.body);
        if (!product) {
            return res.status(404).json({ message: 'sorry bb, we aint got that' });
        }
        res.status(201).send({ message: 'We did it Joe, we updated it!', data: product });
    }
    catch (error) {
        next(error);
    }
};
exports.updateProductController = updateProductController;
// delete
const deleteProductController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await (0, products_services_1.deleteProduct)(id);
        res.json(product);
    }
    catch (error) {
        res.status(500).json({ message: 'Bye felicia' });
    }
};
exports.deleteProductController = deleteProductController;

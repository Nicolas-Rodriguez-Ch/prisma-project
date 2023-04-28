import { Request, Response, NextFunction } from "express";
import { getAllProducts, createProduct, getProductById, updateProduct, deleteProduct } from "./products.services";

export const getAllProductsContoller = async (
  req: Request,
  res: Response,
  next: NextFunction 
) => {
  try {
    const products = await getAllProducts()
    res.status(200).send({message : 'We got em! We fucking got em!', data: products})
  } catch(error) {
    next(error)
  }
}

export const createProductController = async (
  req: Request,
  res: Response,
  next: NextFunction 
) => {
  try {
    const product = await createProduct(req.body)
    res.status(201).send({message : 'I made it and i am so proud', data: product})

  } catch(error) {
    next(error)
  }
}

export const getProductByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction 
) => {
  try {
    const { id }  = req.params;
    const product = await getProductById(id);
    res.status(201).send({message : 'This what you looking for?', data: product})
    if (!product) {
      return res.status(404).json({ message: 'sorry bb, we aint got that'})
    }
  } catch(error) {
    next(error)
  }
}

// put
export const updateProductController = async(
  req: Request,
  res: Response,
  next: NextFunction 
) => {
  try {
    const { id } = req.params;
    const product = await updateProduct(id, req.body);
    if (!product) {
      return res.status(404).json({ message: 'sorry bb, we aint got that'})
    }
    res.status(201).send({message : 'We did it Joe, we updated it!', data: product})

  } catch (error) {
    next(error)
  }
}

// delete

export const deleteProductController = async (
  req: Request, 
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const product = await deleteProduct(id);
    res.json(product);
  } catch (error: any) {
    res.status(500).json({ message: 'Bye felicia' })
  }
}
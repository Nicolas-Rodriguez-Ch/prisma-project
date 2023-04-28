import { Router } from "express";
import { 
  getAllReviewsController,
  createReviewController,
  getReviewByIdController,
  updateReviewController,
  deleteReviewController
} from "./review.controller";

const router = Router();

router.get('/', getAllReviewsController);
router.get('/:id', getReviewByIdController);
router.post('/', createReviewController);
router.patch('/:id', updateReviewController);
router.delete('/:id', deleteReviewController);

export default router;
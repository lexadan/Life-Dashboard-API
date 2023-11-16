import { Router } from 'express';
import MealController from '../../controllers/Food/meal.controller';

const router: Router = Router();

router.post('/', MealController.create);
router.get('/:id', MealController.readOne);
router.get('/', MealController.readAll);
router.patch('/:id', MealController.update);
router.delete('/:id', MealController.delete);

export default router;

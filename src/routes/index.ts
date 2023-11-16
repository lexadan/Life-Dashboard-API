import { Router } from 'express';
import mealRoutes from './Food/meal.routes';
import recipeRoutes from './Food/recipe.routes';
const router: Router = Router();

router.use('/meal', mealRoutes);
router.use('/recipes', recipeRoutes);
export default router;

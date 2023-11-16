import { Router } from 'express';
import RecipeController from '../../controllers/Food/recipe.controller';

const router: Router = Router();

router.get('/:id', RecipeController.readOne);
router.get('/', RecipeController.readAll);
router.post('/', RecipeController.create);
router.patch('/:id', RecipeController.update);
router.delete('/:id', RecipeController.delete);

export default router;

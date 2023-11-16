import { NextFunction, Response, Request } from 'express';
import Controller from '../controller';
import CustomError from '../../interfaces/error';
import { validate } from 'class-validator';
import RecipeModel from '../../models/Food/recipe.model';

export default class RecipeController {
  public static readonly collectionName: string = 'recipe';

  public static create(req: Request, res: Response, next: NextFunction): void {
    const controller: Controller = new Controller(
      RecipeController.collectionName
    );
    let recipe: RecipeModel = new RecipeModel();
    recipe = req.body;
    validate(recipe).then((errors) => {
      if (errors.length > 0) {
        const err: CustomError = new Error(
          'The body was not validated'
        ) as CustomError;
        err.status = 400;
        next(err);
        return;
      }
      controller.create(req, res, next);
      return;
    });
  }

  public static readAll(req: Request, res: Response, next: NextFunction): void {
    const controller: Controller = new Controller(
      RecipeController.collectionName
    );
    controller.readAll(req, res, next);
    return;
  }
  public static readOne(req: Request, res: Response, next: NextFunction): void {
    const controller: Controller = new Controller(
      RecipeController.collectionName
    );
    controller.readOne(req, res, next);
    return;
  }

  public static delete(req: Request, res: Response, next: NextFunction): void {
    const controller: Controller = new Controller(
      RecipeController.collectionName
    );
    controller.delete(req, res, next);
    return;
  }

  public static update(req: Request, res: Response, next: NextFunction): void {
    const controller: Controller = new Controller(
      RecipeController.collectionName
    );
    controller.update(req, res, next);
    return;
  }
}

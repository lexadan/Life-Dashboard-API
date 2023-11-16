import { NextFunction, Response, Request } from 'express';
import Controller from '../controller';
import MealModel from '../../models/Food/meal.model';
import CustomError from '../../interfaces/error';
import { validate } from 'class-validator';

export default class MealController {
  public static readonly collectionName: string = 'meal';

  public static create(req: Request, res: Response, next: NextFunction): void {
    const controller: Controller = new Controller(
      MealController.collectionName
    );
    let meal: MealModel = new MealModel();
    meal = req.body;
    validate(meal).then((errors) => {
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
      MealController.collectionName
    );
    controller.readAll(req, res, next);
    return;
  }
  public static readOne(req: Request, res: Response, next: NextFunction): void {
    const controller: Controller = new Controller(
      MealController.collectionName
    );
    controller.readOne(req, res, next);
    return;
  }

  public static delete(req: Request, res: Response, next: NextFunction): void {
    const controller: Controller = new Controller(
      MealController.collectionName
    );
    controller.delete(req, res, next);
    return;
  }

  public static update(req: Request, res: Response, next: NextFunction): void {
    const controller: Controller = new Controller(
      MealController.collectionName
    );
    controller.update(req, res, next);
    return;
  }
}

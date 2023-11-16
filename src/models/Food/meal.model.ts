import { IsNotEmpty, IsString } from 'class-validator';
import { Nutrients, ShoppingItem } from './recipe.model';

interface segmentMeal {
  recipes: string[];
  nutrients: Nutrients;
  shoppingList: ShoppingItem[];
}
export interface IMeal {
  date?: string;
  morning?: segmentMeal;
  noon?: segmentMeal;
  evening?: segmentMeal;
}

export default class MealModel implements IMeal {
  @IsNotEmpty()
  @IsString()
  public date?: string;

  public morning?: segmentMeal;

  public noon?: segmentMeal;

  public evening?: segmentMeal;
}

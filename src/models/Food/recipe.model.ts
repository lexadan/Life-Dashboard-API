import { IsAlpha, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export interface Nutrients {
  proteins?: number;
  carbohydrates?: number;
  fat?: number;
}

export interface ShoppingItem {
  name?: string;
  quantity?: number;
  unit?: string;
}

export enum RecipeType {
  FRUIT,
  SNACK,
  DESERT,
  LUNCH,
}

export interface IRecipe {
  name?: string;
  type?: RecipeType;
  prepTime?: number; // in Min
  nutrients?: Nutrients;
  shoppingList?: ShoppingItem[];
}

export default class RecipeModel implements IRecipe {
  @IsNotEmpty()
  @IsAlpha()
  @IsString()
  public name?: string;

  @IsNotEmpty()
  public type?: RecipeType;

  @IsNumber()
  public prepTime?: number;

  public nutrients?: Nutrients;

  public shoppingList?: ShoppingItem[];
}

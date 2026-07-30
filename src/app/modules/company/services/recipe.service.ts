import { Injectable } from '@angular/core';
import { CrudService } from '@wawjs/ngx-crud';
import { Recipe } from '../interfaces/recipe.interface';

@Injectable({ providedIn: 'root' })
export class RecipeService extends CrudService<Recipe> {
	constructor() { super({ name: 'companydeliverrecipe' }); }
}

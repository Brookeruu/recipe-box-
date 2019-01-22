export class Recipe {
  public served: boolean = false;
  constructor(public title: string, public description: string, public ingredients: string[], public priority: number) { }
}

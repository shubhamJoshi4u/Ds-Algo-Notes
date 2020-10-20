import { Ingridient } from '../shared/ingridient.model';

export class RecipeModel {
    public name: string;
    public type: string;
    public imgPath: string;
    public ingridients: Array<Ingridient>;

    constructor(name: string, type: string, imgPath: string, ingridients: Array<Ingridient>) {
        this.name = name;
        this.type = type;
        this.imgPath = imgPath;
        this.ingridients = ingridients;
    }

}
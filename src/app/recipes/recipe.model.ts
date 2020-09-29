export class RecipeModel {
    public name: string;
    public type: string;
    public imgPath: string;

    constructor(name: string, type: string, imgPath: string) {
        this.name = name;
        this.type = type;
        this.imgPath = imgPath;
    }

}
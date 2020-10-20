import { Ingridient } from '../shared/ingridient.model';
import { Subject } from 'rxjs';

export class ShoppingService {

    onIngridientAdd = new Subject<Array<Ingridient>>();
    onShoppingItemSelect: Subject<number> = new Subject();

    private ingridients: Array<Ingridient> = [
        new Ingridient("Almonds", 12),
        new Ingridient("Apples", 2)
    ];

    getIngridients() {
        return this.ingridients.slice();
    }

    addIngridient(ingrName: string, ingrCount: number) {
        const ingridient = new Ingridient(ingrName, ingrCount);
        this.ingridients.push(ingridient);
        this.onIngridientAdd.next(this.ingridients.slice());
    }

    updateIngridient(index: number, ingrName: string, ingrCount: number) {
        const ingridient = new Ingridient(ingrName, ingrCount);
        this.ingridients[index] = ingridient;
        this.onIngridientAdd.next(this.ingridients.slice());
    }

    addIngridients(ingridients: Ingridient[]) {
        this.ingridients.push(...ingridients);
        this.onIngridientAdd.next(this.ingridients.slice());
    }

    getIngridientByIndex(index: number) {
        return this.ingridients[index];
    }

    deleteIngridient(index: number) {
        this.ingridients.splice(index, 1);
        this.onIngridientAdd.next(this.ingridients.slice());
    }
}
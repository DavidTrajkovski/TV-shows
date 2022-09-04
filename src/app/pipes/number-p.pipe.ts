import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberP'
})
export class NumberPPipe implements PipeTransform {

    transform(value: number, ...args: unknown[]): string {
        let newValue = ""+value;
        if(newValue.length === 1) {
            return "0" + newValue;
        } else {
            return newValue;
        }
    }

}

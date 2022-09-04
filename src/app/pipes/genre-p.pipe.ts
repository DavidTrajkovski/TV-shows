import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'genre'
})
export class GenrePPipe implements PipeTransform {

    transform(value: string[] | null, ...args: unknown[]): string | null {
        if(value !== null) {
            return value.join(' | ');
        } else {
            return null;
        }
    }

}

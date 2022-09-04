import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'datumP'
})
export class DatumPPipe implements PipeTransform {

    transform(value: string, ...args: unknown[]): string {
        let rez = "";
        let tmp = value.split("-");
        rez = rez+this.getDayString(tmp[2])+"th "+this.getMonthString(tmp[1])+" "+tmp[0];
        return rez;
    }

    getDayString(day: string): string {
        if(day.startsWith("0")) {
            return day[1];
        } else {
            return day;
        }
    }

    getMonthString(month: string): string {
        switch (month) {
            case "01":
                return "January";
            case "02":
                return "February";
            case "03":
                return "March";
            case "04":
                return "April";
            case "05":
                return "May";
            case "06":
                return "June";
            case "07":
                return "July";
            case "08":
                return "August";
            case "09":
                return "September";
            case "10":
                return "October";
            case "11":
                return "November";
            case "12":
                return "December";
            default:
                return "";
        }
    }

}

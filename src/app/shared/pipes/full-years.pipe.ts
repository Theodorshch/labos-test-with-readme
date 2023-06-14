import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'fullYears'
})
export class FullYearsPipe implements PipeTransform {
  transform(value: Date | string | number | null | undefined): string {
    if (value) {
      const dateOfBirth = new Date(value);
      const today = new Date();
      const years = today.getFullYear() - dateOfBirth.getFullYear();
      const months = today.getMonth() - dateOfBirth.getMonth();
      const days = today.getDate() - dateOfBirth.getDate();
      if (months < 0 || (0 === months && days < 0)) {
        return `${years - 1}`;
      }

      return `${years}`;
    }
    return '';
  }
}

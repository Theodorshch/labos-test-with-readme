import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "memoMethod",
})
export class MemoMethodPipe implements PipeTransform {
  transform<Method extends (...args: Parameters<any>) => ReturnType<Method>>(value: Method, thisValue: any, ...args: Parameters<Method>): ReturnType<Method> {
    return value.bind(thisValue)(...args);
  }
}

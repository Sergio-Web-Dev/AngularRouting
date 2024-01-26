export class Numbers {
  public static isNumber(value : any) : boolean {
    return Number(value) === +value;
  }
}


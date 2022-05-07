export interface Countries {
    countries?: (Country)[] | null;
}

export class Country {
    code: string;
    name: string;
  
    constructor(name?: string, code?: string) {
      this.name = name || '';
      this.code = code || '';
    }
  }
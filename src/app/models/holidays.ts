export interface Holidays {
    holidays?: (Holidays)[] | null;
  }
  export interface Holiday {
    date: string;
    name: string;
    local_name: string;
    country_code: string;
    regions?: (string | null)[] | null;
    types?: (string)[] | null;
  }
  
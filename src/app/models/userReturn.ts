export interface UserReturn {
    session: Session;
  }
  export interface Session {
    id: string;
    userId: string;
    created: string;
    expires: string;
  }
  
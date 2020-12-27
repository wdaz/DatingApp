import { User } from './user';

export class UserParams {
  gender: string;
  minAge: number = 18;
  maxAge: number = 99;
  pageNumber: number = 1;
  pageSize = 6;
  orderBy = 'lastActive';

  constructor(user: User) {
    this.gender = user.gender === 'female' ? 'male' : 'female';
  }
}

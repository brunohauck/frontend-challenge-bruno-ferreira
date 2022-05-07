import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../models/user';
import { addUser } from '../store/actions/user.action';
import { UserState } from '../store/reducers/user.reducers';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  constructor(private store: Store<UserState>) { }

  ngOnInit() {
  }

  async login(form){
    console.log('entrou 01');
    let newUser: User = new User(form.value.email, form.value.password);
    console.log(newUser)
    await this.store.dispatch(addUser(newUser));
    let user$ = this.store.select('user');
    console.log(user$)
  }
}

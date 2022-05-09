import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../models/user';
import { addUser } from '../store/actions/user.action';
import { UserReturnState } from '../store/reducers/user.reducers';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  constructor(private store: Store<UserReturnState>) { }

  ngOnInit() {
  }

  async login(form){
    let newUser: User = new User(form.value.email, form.value.password);
    await this.store.dispatch(addUser(newUser));
    let user$ = this.store.select('userReturn');
    
    this.store.select(state => state).subscribe( val => 
      { 
        let attributes = Object.keys(val)
        console.log(attributes)
        for (const k in val) {
          console.log(val[k]);
        }
      });
  }
}

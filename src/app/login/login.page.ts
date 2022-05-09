import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../models/user';
import { addUser } from '../store/actions/user.action';
import { UserReturnState } from '../store/reducers/user.reducers';
import {
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @Output() loggedIn = new EventEmitter<User>();
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<UserReturnState>
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)]],
    });
  }

  async login(){
    let newUser: User = new User(  
      this.form.value.email,
      this.form.value.password);

    this.loggedIn.emit(
      new User(
        this.form.value.email,
        this.form.value.password
      )
    );  
    await this.store.dispatch(addUser(newUser));
    await this.store.select(state => state).subscribe( val => 
      { 
        for (const k in val) {
          if(k=="user"){
            if(val[k]){
              this.router.navigate(['/home'])
            }else
            console.log('Login password wrong')
          }
        }
      });
  }
}

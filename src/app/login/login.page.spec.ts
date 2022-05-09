import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LoginPage } from './login.page';
import { User} from '../models/user'
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../store/reducers/user.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../store/effects/user.effects';
import { RouterTestingModule } from '@angular/router/testing';
describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  /*
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });*/



  beforeEach(() => {

      // refine the test module by declaring the test component
      TestBed.configureTestingModule({
          imports: [
            IonicModule.forRoot(), 
            ReactiveFormsModule, 
            FormsModule,
            RouterTestingModule,
            HttpClientModule,
            StoreModule.forRoot({  user: userReducer  }),
            EffectsModule.forRoot([ UserEffects])
          ],
          declarations: [LoginPage]

          
      });

      // create component and test fixture
      fixture = TestBed.createComponent(LoginPage);

      // get test component from the fixture
      component = fixture.componentInstance;
      component.ngOnInit();
  });

  it('form invalid when empty', () => {
      expect(component.form.valid).toBeFalsy();
  });

  it('email field validity', () => {
      let errors = {};
      let email = component.form.controls['email'];
      expect(email.valid).toBeFalsy();

      // Email field is required
      errors = email.errors || {};
      expect(errors['required']).toBeTruthy();

      // Set email to something
      email.setValue("test");
      errors = email.errors || {};
      expect(errors['required']).toBeFalsy();
      expect(errors['pattern']).toBeTruthy();

      // Set email to something correct
      email.setValue("joe@example.com");
      errors = email.errors || {};
      expect(errors['required']).toBeFalsy();
      expect(errors['pattern']).toBeFalsy();
  });

  it('password field validity', () => {
      let errors = {};
      let password = component.form.controls['password'];

      // Email field is required
      errors = password.errors || {};
      expect(errors['required']).toBeTruthy();

      // Set email to something
      password.setValue("123456");
      errors = password.errors || {};
      expect(errors['required']).toBeFalsy();
      expect(errors['minlength']).toBeTruthy();

      // Set email to something correct
      password.setValue("Password1");
      errors = password.errors || {};
      expect(errors['required']).toBeFalsy();
      expect(errors['minlength']).toBeFalsy();
  });

  it('submitting a form emits a user', () => {
      expect(component.form.valid).toBeFalsy();
      component.form.controls['email'].setValue("joe@example.com");
      component.form.controls['password'].setValue("Password1");
      expect(component.form.valid).toBeTruthy();

      let user: User;
      // Subscribe to the Observable and store the user in a local variable.
      component.loggedIn.subscribe((value) => user = value);

      // Trigger the login function
      component.login();

      // Now we can check to make sure the emitted value is correct
      expect(user.email).toBe("joe@example.com");
      expect(user.password).toBe("Password1");
  });
});


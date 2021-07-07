import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/user.model';
import { updateUser } from './store/actions/counter';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  count$: Observable<number>;
  user$: Observable<any>;
  showModal = false
  name = "";
  email = "";
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    isactive: new FormControl(false),
  });
  constructor(private store: Store<{ count: number }>) {
    this.user$ = this.store.pipe(select('user'));
  }

  editUSer(user: User) {
    this.showModal = true;
    this.form.patchValue(user)
  }

  updateUser() {
    this.showModal = false;
    this.store.dispatch(updateUser(this.form.value));
    setTimeout(() => {
      this.user$ = this.store.pipe(select('user'));
    }, 3000);

  }
  cancel() {
    this.showModal = false
  }

}

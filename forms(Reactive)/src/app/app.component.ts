import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  genders = ['Male', 'Female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Adam', 'Corey']

  ngOnInit()
  {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username' : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email' : new FormControl(null,[Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender' : new FormControl('Male'),
      'hobbies': new FormArray([]),
    });  

    // this.signupForm.valueChanges.subscribe(
    //   (value)=> console.log(value)
    // );

    this.signupForm.statusChanges.subscribe(
      (status)=> console.log(status)
    );

    this.signupForm.setValue({
      'userData':{
        'username': 'Namit',
        'email': 'namit@test.com'
      },
      'gender': 'Male',
      'hobbies': []
    });

    this.signupForm.patchValue({
      'userData':{
        'username': 'Kane'
      }
    });
  }

  onSubmit()
  {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby()
  {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // getControls() {
  //   return (<FormArray>this.signupForm.get('hobbies')).controls;
  // }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  //custom validators

  forbiddenNames(control: FormControl):{[s: string]:boolean}
  {
      if(this.forbiddenUsernames.indexOf(control.value) !== -1)
        {
          return {'nameIsForbidden': true}
        }
      return null;   // always should be null or omit the statement
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any>
  {
      const promise = new Promise<any>((resolve, reject)=>{
        setTimeout(()=>{
          if(control.value === 'test@test.com'){
            resolve({'emailIsForbidden':true});
          }else{
            resolve(null);
          }
        },1500);
      });
      return promise;
  }
}

import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f')signUp: NgForm;
  defaultQuestion = 'pet';
  answer: string='';
  genders=['Male', 'Female', 'Others'];
  user={
    username:'',
    mail:'',
    secret:'',
    questionAnswer:'',
    gender:''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    //not best it overrides the values you entered if you click on the suggest user button

    // this.signUp.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer:'',
    //   gender:'Male'
    // }
    // );

    this.signUp.form.patchValue({
      userData:{
        username: suggestedName,
      }
    });
  }
  // onSubmit(form :NgForm)
  // {
  //   console.log(form);
  // }
  onSubmit()
  {
    this.submitted= true;
    this.user.username=this.signUp.value.userData.username;
    this.user.mail=this.signUp.value.userData.email;
    this.user.secret=this.signUp.value.userData.secret;
    this.user.questionAnswer=this.signUp.value.userData.questionAnswer;
    this.user.gender=this.signUp.value.userData.gender;

    this.signUp.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

 userForm : any

 state = [
  {name : 'Tamil nadu'},
  {name : 'Kerala'},
  {name : 'Karnataka'},
  {name : 'AP'}

]
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {

    // this.userForm = new FormGroup({
    //   'inputEmail4' : new FormControl(null,[Validators.required, Validators.email]),
    //   'inputPassword4' : new FormControl(null),
    //   'address' : new FormGroup({
    //     'inputAddress' : new FormControl(null, Validators.required),
    //     'inputAddress2' : new FormControl(null),
    //     'inputCity' : new FormControl(null),
    //     'inputState' : new FormControl(null),
    //     'inputZip' : new FormControl(null),
    //   }),
     
    //   'gridCheck' : new FormControl(true),
    // })



    // this.userForm.setValue({

    //   'inputEmail4' : 'saha@gmail.com' ,
    //   'inputPassword4' : 'abc' ,
    //   'address' : {
  
    //     'inputAddress' : 'slkadkl',
    //     'inputAddress2' : 'sdbfkj',
    //     'inputCity' : 'jjhdajk',
    //     'inputState' :'Kerala',
    //     'inputZip' : 'sdfsdf',
  
    //   },
     
    //   'gridCheck' : true,
  
    // })

    this.userForm = this.fb.group({

      'inputEmail4' : new FormControl(null,[Validators.required, Validators.email]),
      'inputPassword4' : new FormControl(null),
      'address' : this.fb.group({

            'inputAddress' : new FormControl(null,[Validators.required, Validators.email]),
            'inputAddress2' : 'sdbfkj',
            'inputCity' : 'jjhdajk',
            'inputState' :new FormControl(this.state[1].name),
            'inputZip' : 'sdfsdf',

      }),

      'gridCheck' : true,

    })


    this.userForm.patchValue({

      'inputEmail4' : 'sahana@gmail.com' ,

    })

  }


  onSubmit(){
    console.log(this.userForm)
    console.log("Success")
  }

 setvalue(){
  this.userForm.setValue({

    'inputEmail4' : 'saha@gmail.com' ,
    'inputPassword4' : 'abc' ,
    'address' : {

      'inputAddress' : 'slkadkl',
      'inputAddress2' : 'sdbfkj',
      'inputCity' : 'jjhdajk',
      'inputState' :'Kerala',
      'inputZip' : 'sdfsdf',

    },
   
    'gridCheck' : true,

  })
 }

}

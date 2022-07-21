import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('userForm') uf:NgForm;

  states =[{
    "name": "Tamil nadu" 
  },
  {
    "name": "Kerala" 
  },
  {
    "name": "Karnataka" 
  }]

  constructor( ) { 

  }


  onSubmit(){
    console.log("")
    this.uf.reset()
  }

  ngOnInit() {

    
   

  }

  setdefaultvalue(){
    this.uf.setValue({
      inputEmail4:'saha@gmail.com',
      inputPassword4:'password',
      inputAddress:'',
      inputAddress2:'',
      inputCity:'',
      inputState:'',
      inputZip:'',
      gridCheck:true,
  
    })
  }
  

  // setdefaultvalue(){
  //   this.uf.form.patchValue({
  //     inputEmail4:'saha@gmail.com',
  //   })
  // }
}


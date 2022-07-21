import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  userForm:FormGroup;
  state = [
    {name : 'Tamil nadu'},
    {name : 'Kerala'},
    {name : 'Karnataka'},
    {name : 'AP'}

  ]

  constructor() { }

  ngOnInit(): void {

    this.userForm = new FormGroup({
      'email': new FormControl(null,[Validators.email, Validators.required]),
      'password' : new FormControl(null,[Validators.required]),
      'inputAddress': new FormControl('abc'),
      'inputAddress2': new FormControl('bjjj'),
      'inputCity': new FormControl('Erode'),
      'inputState': new FormControl(null),
      'inputZip': new FormControl('1234'),
      'gridCheck': new FormControl(true),
    })

  }

}

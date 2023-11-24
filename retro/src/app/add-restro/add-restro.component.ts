import { Component, OnInit } from '@angular/core';
import { RetroServiceService } from '../service/retro-service.service';
import { FormGroup , FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.css']
})
export class AddRestroComponent implements OnInit {

  constructor(private retro : RetroServiceService) { }

  ngOnInit(): void {
  }
  alert : boolean =false;
  item = new FormGroup({
    name : new FormControl(''),
    Address : new FormControl(''),
    pincode : new FormControl('')
  });
  sendItem(){
    this.retro.sendList(this.item.value).subscribe((result)=>{
      console.log(result);
    });
    this.item.reset({});
    this.alert=true;

  }
  closeMe(){
    this.alert=false;
  }
}

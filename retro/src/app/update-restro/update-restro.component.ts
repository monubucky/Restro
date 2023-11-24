import { Component, OnInit } from '@angular/core';
import { RetroServiceService } from '../service/retro-service.service';
import { FormGroup , FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.css']
})
export class UpdateRestroComponent implements OnInit {

    
    alert : boolean =false;
    idd:any;
    thisItem:any;
    item = new FormGroup({
      name : new FormControl(''),
      Address : new FormControl(''),
      pincode : new FormControl('')
    });
    constructor(private retro : RetroServiceService, private route : ActivatedRoute) {
        
    }

    ngOnInit(): void {
      this.idd=this.route.snapshot.params['id'];
      this.retro.getItem(this.idd).subscribe((result)=>{
        this.thisItem=result;
        console.log(result);

        this.item = new FormGroup({
          name : new FormControl(this.thisItem.name),
          Address : new FormControl(this.thisItem.Address),
          pincode : new FormControl(this.thisItem.pincode)
        });
      });
      
      
    }
    

    
    sendItem(){
      this.retro.updateList(this.thisItem.id,this.item.value).subscribe((result)=>{
        console.log(result);
      });
      this.alert=true;

    }
    closeMe(){
      this.alert=false;
    }
    

}

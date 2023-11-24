import { Component, OnInit } from '@angular/core';
import { RetroServiceService } from '../service/retro-service.service';

@Component({
  selector: 'app-list-restro',
  templateUrl: './list-restro.component.html',
  styleUrls: ['./list-restro.component.css']
})
export class ListRestroComponent implements OnInit {

  collection :any= [];
  constructor(private retro : RetroServiceService) { 
    this.retro.getList().subscribe((result)=>{
      this.collection = result;
    })
  }
  deleteItem(idx:number){
    this.collection.splice(idx,1);
    this.retro.delItem(idx).subscribe(()=>{
      console.log("Item Deleted");
    })
  }
  
  ngOnInit(): void {
  }

}

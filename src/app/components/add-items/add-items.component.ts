import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from 'src/app/services/item-service.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  constructor(private listService:ItemServiceService) { }

  title:string="";
  author:string="";

  ngOnInit(): void {
  }

  onFormSubmit(e:any){  
    e.preventDefault();
   console.log(this.author,this.title);
   this.listService.addItem({'author':this.author,'title':this.title}).subscribe(res=>{
     this.author="";
     this.title="";
   })

  }

  isSubmitable(){
    
    if(this.title.length>0 && this.author.length>0){
      return false
    }
    return  true
  }

}

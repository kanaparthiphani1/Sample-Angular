import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from 'src/app/services/item-service.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  listItems:any=[];
  checkedItems:any[]=[];
  isAllChecked=false;
  showSpinner:boolean = false;

  constructor(private listService:ItemServiceService) { }



  ngOnInit(): void {

   this.initilaLoad()
  }

  initilaLoad(){
    this.showSpinner=true
    this.listService.getList().subscribe(
      res=>{
        setTimeout(() => {
          this.listItems=res
        console.log("List ",this.listItems);
        this.checkedItems=[]
        this.listItems.forEach((ele: any) => {
          if(ele!==null){
            this.checkedItems.push({'title':false,'author':false,"isChanged":false})
          }
        });
        this.showSpinner=false
        }, 2000);
        
        
      }
    )
  }

  doChange(i:number){
    this.checkedItems[i].isChanged = true

  }

  isSubmitable(i:number){
    return !this.checkedItems[i].isChanged
  }

  changeCheck(i:number,event:any){
    this.checkedItems[i].title=event.target.checked
    this.checkedItems[i].author=event.target.checked
    if(this.checkedItems.filter(eachItem=>eachItem.title===false || eachItem.author===false).length>0){
      this.isAllChecked=false
    }
  }


  changeTitleCheck(i:number){
    this.checkedItems[i].title=!this.checkedItems[i].title
    // this.checkedItems[i].author=!this.checkedItems[i].author
    if(this.checkedItems.filter(eachItem=>eachItem.title===false || eachItem.author===false).length>0){
      this.isAllChecked=false
    }
  }

  changeAuthorCheck(i:number){
    // this.checkedItems[i].title=!this.checkedItems[i].title
    this.checkedItems[i].author=!this.checkedItems[i].author
    if(this.checkedItems.filter(eachItem=>eachItem.title===false || eachItem.author===false).length>0){
      this.isAllChecked=false
    }
  }

  isTitleChecked(i:number){
    return this.checkedItems[i].title
  }

  isAuthorChecked(i:number){
    return this.checkedItems[i].author
  }

  isChecked(i:number){
    return this.isAuthorChecked(i) || this.isTitleChecked(i)
  }


  checkAll(event:any){
    console.log(event);
    
     this.checkedItems.forEach(eachItem=>{
      
      eachItem.title = event.target.checked;
      eachItem.author = event.target.checked
    })
    this.isAllChecked=event.target.checked
  }

  doUpdate(i:number){
    this.listService.updateItem(this.listItems[i]).subscribe(res=>{
      
      if(res!==null){
        this.listItems=[]
        this.initilaLoad() 
      }
    })
  }

  doDelete(){
    this.listItems.forEach((eachItem:any,i:number)=>{
      if(this.isChecked(i)){
        this.listService.deleteItem(eachItem.id).subscribe(eahItm=>{
          if(eahItm!==null){
            this.listItems=[]
            this.initilaLoad() 
          }
        })
      }
    })
  }

}

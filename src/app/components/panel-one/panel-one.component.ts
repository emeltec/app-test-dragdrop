import { Component, Input, OnInit } from '@angular/core';
import { UsersData } from 'src/app/data/users-data';
import { of } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';
var Sortable = require('../../../assets/js/sortable.js')

@Component({
  selector: 'app-panel-one',
  templateUrl: './panel-one.component.html',
  styleUrls: ['./panel-one.component.scss']
})
export class PanelOneComponent implements OnInit {

  // @Input() users:any;
  users2:any[] = [];
  
  constructor(
    private store:StoreService
  ) { }
  
  ngOnInit() {
    this.users2 = JSON.parse(JSON.stringify(UsersData))
  }

  ngAfterViewInit(){
    const dragItems2: any = document.querySelector('#users2');
    Sortable.create(dragItems2, {
      group: 'shared2',
      animation: 150,
      fallbackOnBody: true,
      swapThreshold: 0.65,
      direction: 'horizontal',
      actionOne: this.reorderData.bind(this),
      onEnd: function (e: any) {
        console.log(e);
        let oldIndex = e.oldIndex;
        let newIndex = e.newIndex;
        this.options.actionOne(oldIndex, newIndex);
      },
    });
  }

  reorderData(oldIndex:any, newIndex:any) {
    const draggUser = this.users2[oldIndex];
    this.users2.splice(oldIndex,1);
    this.users2.splice(newIndex,0,draggUser);
    this.reorderIndex();
  }

  reorderIndex(){
    this.users2.forEach((user, index) => {
      user.order = index + 1;
    });
    this.store.users$.next(this.users2)
  }

}

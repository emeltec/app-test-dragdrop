import { Component, OnInit } from '@angular/core';
import { UsersData } from 'src/app/data/users-data';
import { of } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';
var Sortable = require('../../../assets/js/sortable.js')

@Component({
  selector: 'app-board3',
  templateUrl: './board3.component.html',
  styleUrls: ['./board3.component.scss']
})
export class Board3Component implements OnInit {
  name:string = 'Emeltec Arts';

  users:any[] = [];

  constructor(
    private store:StoreService
    ) { }

  ngOnInit() {
    this.users = JSON.parse(JSON.stringify(UsersData))
  }

  ngAfterViewInit(){
    const dragItems: any = document.querySelector('#users');
    Sortable.create(dragItems, {
      group: 'shared',
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

    this.initNestedSort();
    
  }

  reorderData(oldIndex:any, newIndex:any) {
    const draggUser = this.users[oldIndex];
    this.users.splice(oldIndex,1);
    this.users.splice(newIndex,0,draggUser);
    this.reorderIndex();
  }

  reorderIndex(){
    this.users.forEach((user, index) => {
      user.order = index + 1;
    });
    this.store.users$.next(this.users)
  }

  metodox() {
    console.log('OTRO METODO', this.name)
  }

  initNestedSort() {
    const nestedItems: any = [].slice.call(document.querySelectorAll('.container'));

    for (var i = 0; i < nestedItems.length; i++) {
      new Sortable(nestedItems[i], {
        group: {
          name: 'nested',
          put: ["groupList", "nested"],
        },
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65,
        direction: 'horizontal',
        actionTwo: this.reorderData.bind(this),
        onAdd: function (e: any) {
          console.log(e);
        },
        onEnd: function (e: any) {
          let oldIndex = e.oldIndex;
          let newIndex = e.newIndex;
          this.options.actionTwo(oldIndex, newIndex)
        }
      })
    }
  }

}

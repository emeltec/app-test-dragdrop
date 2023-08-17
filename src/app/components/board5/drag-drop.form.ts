import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
var Sortable = require('../../../assets/js/sortable.js')

@Injectable()
export class DragDropForm {

  users$ = new BehaviorSubject<any[]>([]);
  users: any[] = [];
  usersCopy: any[] = [];

  sortableChild: any[] = [];
  sortableParent: any = {};

  constructor() {
    
  }

  initSortable() {
    const dragItems: any = document.querySelector('.reports .users');
    this.sortableParent = new Sortable.create(dragItems, {
      group: 'shared',
      animation: 250,
      ghostClass: 'sortable-ghost',
      actionOne: this.reorderData.bind(this),
      onEnd: function (e: any) {
        // console.log(e);
        
        let oldIndex = e.oldIndex;
        let newIndex = e.newIndex;
        this.options.actionOne(oldIndex, newIndex);
      },
    });

    const dragItems2: any = document.querySelectorAll('.reports .telfs');
    for (let i = 0; i < dragItems2.length; i++) {
      this.sortableChild[i] = new Sortable.create(dragItems2[i], {
        group: {
          name: "shared2",
          pull: true,
          put: false,
        },
        animation: 250,
        forceFallback: true,
        filter: '.ignore',
        store: {
          set: function (data: any) {
            // console.log(data.toArray())
          }
        },
        onEnd: function (e: any) {
          // console.log(this);
        },
      });
    }
  }

  reorderData(oldIndex: any, newIndex: any) {
    this.users = this.users$.getValue();
    this.usersCopy = this.users.map(x => x);

    const draggUser = this.users[oldIndex];
    this.users.splice(oldIndex, 1);
    this.users.splice(newIndex, 0, draggUser);
    this.reorderIndex();
  }
  
  reorderIndex() {
    this.users.forEach((user: any, index: any) => {
      user.order = index + 1;
    });
    console.log('Copy',this.usersCopy);
    console.log('New',this.users);
    this.verifyOrderCbx();
  }

  verifyOrderCbx(){
    let isMoved = false;
    this.users.forEach((x,i) => {
      if(x.type == 'cbx' && !isMoved) {
        if(x.order != this.usersCopy[i].order) {
          console.info('Tipo CBX fue movido')
          isMoved = true;
        }
      }
    })
  }

  activeFilter() {
    const dragItems2: any = document.querySelectorAll('.telfs .tel');
    for (let i = 0; i < dragItems2.length; i++) {
      dragItems2[i].classList.add('ignore')
    }
  }

  removeFilter() {
    const dragItems2: any = document.querySelectorAll('.telfs .tel');
    for (let i = 0; i < dragItems2.length; i++) {
      dragItems2[i].classList.remove('ignore')
    }
  }

  enableOrDisable() {
    // let state = this.sortableJs.option("disabled");
    // this.sortableJs.option("disabled", !state);
    let state = this.sortableChild[0].option("disabled");
    // this.labelButton = state ? 'Disable' : 'Enable';

    this.sortableChild.forEach(item => {
      let state = item.option("disabled")
      item.option("disabled", !state)
    })

    let state2 = this.sortableParent.option("disabled");
    this.sortableParent.option("disabled", !state2);
  }

  
  destroySortable() {
    this.sortableChild.forEach(item => {
      item.destroy();
    })
    this.sortableParent.destroy();
  }
}
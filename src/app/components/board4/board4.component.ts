import { Component, OnInit } from '@angular/core';
var Sortable = require('../../../assets/js/sortable.js')

@Component({
  selector: 'app-board4',
  templateUrl: './board4.component.html',
  styleUrls: ['./board4.component.scss']
})
export class Board4Component implements OnInit {

  UsersData = [
    {
      order: 1, name: 'Anita',
      telfs: [
        { tid: 1, des: 'Principal', num: '12545' },
        { tid: 2, des: 'Trabajo', num: '66666' },
        { tid: 2, des: 'Casa', num: '9789797' },
      ]
    },
    {
      order: 2, name: 'Emilio',
      telfs: [
        { tid: 1, des: 'Principal', num: '33333' },
        { tid: 2, des: 'Trabajo', num: '77777' },
        { tid: 2, des: 'Casa', num: '57585' },
      ]
    },
    {
      order: 3, name: 'Ivanna',
      telfs: [
        { tid: 1, des: 'Principal', num: '44444' },
        { tid: 2, des: 'Trabajo', num: '88888' },
        { tid: 2, des: 'Casa', num: '33232' },
      ]
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const dragItems: any = document.querySelector('.reports .users');
    Sortable.create(dragItems, {
      group: 'shared',
      animation: 150,
      ghostClass: 'sortable-ghost',
      actionOne: this.reorderData.bind(this),
      onEnd: function (e: any) {
        console.log(e);
        let oldIndex = e.oldIndex;
        let newIndex = e.newIndex;
        this.options.actionOne(oldIndex, newIndex);
      },
    });

    const dragItems2: any = document.querySelectorAll('.reports .telfs');
    for (let i = 0; i < dragItems2.length; i++) {
      new Sortable(dragItems2[i], {
        group: {
          name: "nested2",
          pull: false,
          put: true,
        },
        animation: 250,
        forceFallback: true

      });
    }

    const dragItems3: any = document.querySelectorAll('.reports3 .row-sort');
    for (let i = 0; i < dragItems3.length; i++) {
      new Sortable(dragItems3[i], {
        group: {
          name: "nested3",
          pull: false,
          put: true,
        },
        animation: 250,
        forceFallback: true
      });
    }
  }

  reorderData(oldIndex: any, newIndex: any) {
    const draggUser = this.UsersData[oldIndex];
    this.UsersData.splice(oldIndex, 1);
    this.UsersData.splice(newIndex, 0, draggUser);
    this.reorderIndex();
  }

  reorderIndex() {
    this.UsersData.forEach((user, index) => {
      user.order = index + 1;
    });
    // this.store.users$.next(this.UsersData)
  }

}

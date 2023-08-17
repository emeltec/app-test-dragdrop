import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { DragDropForm } from './drag-drop.form';
import { UsersData3 } from 'src/app/data/users-data';


@Component({
  selector: 'app-board5',
  templateUrl: './board5.component.html',
  styleUrls: ['./board5.component.css'],
  providers: [DragDropForm]
})
export class Board5Component implements OnInit {

  
  labelButton: string = 'Disable';

  sortInitialized = false;
  users: any[] = [];

  constructor(
    private store: StoreService,
    public presenter: DragDropForm
  ) { }

  ngOnInit() {
    this.users = UsersData3;
  }

  initSortable() {
    this.presenter.users$.next(this.users);
    this.presenter.initSortable();
  }

}

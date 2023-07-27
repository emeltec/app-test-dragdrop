import { Component } from '@angular/core';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-test-dragdrop';

  users: any[] = [];

  constructor(
    private store: StoreService
  ) { }

  ngOnInit() {
    this.store.users$.asObservable().subscribe(data => {
      this.users = data;
    })
  }
}

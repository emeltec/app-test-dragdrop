import { Component, OnInit } from '@angular/core';
import { UID } from 'src/app/functions/uid';

@Component({
  selector: 'app-board1',
  templateUrl: './board1.component.html',
  styleUrls: ['./board1.component.css']
})
export class Board1Component implements OnInit {
  isDragActive = false;
  tools = [
    { id: 11, cols: 1, css: 'col col-12' },
    { id: 22, cols: 2, css: 'col col-6' },
    { id: 33, cols: 3, css: 'col col-4' },
    { id: 44, cols: 4, css: 'col col-3' },
  ]


  constructor() { }

  ngOnInit() {
    
  }

  getAttrib(data: any) {
    // console.log(data)
    return JSON.stringify(data)
  }

  ngAfterViewInit() {
    let items = document.querySelectorAll('.item-tools');
    items.forEach(x => {
      x.setAttribute('id', UID())
    })
  }

  onClick(e: any) {
    console.log(e)
  }

  onDragstart(e: any, data:any) {
    // e.preventDefault();
    // e.stopPropagation();
    console.log(e.target.attributes['data-item'].value)
    e.dataTransfer.setData("text/plain", e.target.id);
    e.dataTransfer.setData("data", JSON.stringify(data));

    console.log('START', e.target.attributes)
    // let c = JSON.parse(e.target.attributes.txt.value)
  }

  onDrag(e: any) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.clearData();
    e.dataTransfer.setData("text/plain", e.target.id);
  }

  onDragenter(e: any) {
    e.preventDefault();
    e.stopPropagation();
    this.isDragActive = true;
    e.dataTransfer.clearData();
    e.dataTransfer.setData("text/plain", e.target.id);
  }

  onDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    this.isDragActive = false;
    const id = e.dataTransfer.getData('text/plain');
    const data:any = JSON.parse(e.dataTransfer.getData('data'));
    const draggable:any = document.getElementById(id);
    console.log(data)

    let clone = draggable.cloneNode(true);
    clone.setAttribute('class', data.css);
    clone.addEventListener('dragstart', function(event:Event){});
    // clone.addEventListener('dragstart', dragStart);
    e.target.appendChild(clone);


    // e.target.appendChild(draggable);

  }



  onDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();
  }

  onDragleave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    this.isDragActive = false;
    console.log('LEAVE', e)
  }

  onDragend(e: any) {
    e.preventDefault();
    e.stopPropagation();
    this.isDragActive = false;
    console.log('END', e)
  }



}

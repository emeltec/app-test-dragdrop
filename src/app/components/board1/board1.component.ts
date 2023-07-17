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

  onDragstart(e: any) {
    // e.preventDefault();
    // e.stopPropagation();
    let data = e.target.attributes['data-item'].value
    e.dataTransfer.setData("text/plain", e.target.id);
    e.dataTransfer.setData("data", data);

    console.log('START', e.target.attributes)
    // let c = JSON.parse(e.target.attributes.txt.value)
  }

  

  onDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    this.isDragActive = false;
    const id = e.dataTransfer.getData('text/plain');
    
    const data:any = JSON.parse(e.dataTransfer.getData('data'));
    console.log(id)
    const draggable:any = document.getElementById(id);
    // console.log(data)
    
    let isCopy = draggable.getAttribute('data-iscopy');
    console.log(isCopy)

    if(isCopy != 'true') {
      let clone = draggable.cloneNode(true);
      clone.setAttribute('data-iscopy', 'true')
      clone.id = UID();
      clone.setAttribute('class', data.css);
      clone.addEventListener('dragstart', this.onDragstart);
      e.target.appendChild(clone);
    } else {
      e.target.appendChild(draggable);
    }
    


    // e.target.appendChild(draggable);

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

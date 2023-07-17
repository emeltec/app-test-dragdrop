import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board1',
  templateUrl: './board1.component.html',
  styleUrls: ['./board1.component.css']
})
export class Board1Component implements OnInit {
  isDragActive = false;
  tools = [
    { id: 11, cols: 1, css: 'col-12' },
    { id: 22, cols: 2, css: 'col-6' },
    { id: 33, cols: 3, css: 'col-4' },
    { id: 44, cols: 4, css: 'col-3' },
  ]


  constructor() { }

  ngOnInit() {
    console.log('oooo')
  }

  getAttrib(data: any) {
    // console.log(data)
    return JSON.stringify(data)
  }

  ngAfterViewInit() {
    let items = document.querySelectorAll('.item-tools');
    items.forEach(x => {
      x.setAttribute('id', String(Math.random()))
    })
  }

  onClick(e: any) {
    console.log(e)
  }

  onDragstart(e: any) {
    // e.preventDefault();
    // e.stopPropagation();
    e.dataTransfer.effectAllowed = "copy";
    e.dataTransfer.setData("text/plain", e.target.id);
    console.log('START', e.target.attributes)
    let c = JSON.parse(e.target.attributes.txt.value)
    console.log('START', c)
  }

  onDrag(e: any) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.clearData();
    e.dataTransfer.setData("text/plain", e.target.id);
  }

  onDragenter(e: any) {
    e.preventDefault();
    e.stopPropagation();
    this.isDragActive = true;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.clearData();
    e.dataTransfer.setData("text/plain", e.target.id);
  }

  onDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    this.isDragActive = false;
    const id = e.dataTransfer.getData('text/plain');
    const draggable:any = document.getElementById(id);

    let clone = draggable.cloneNode(true);
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

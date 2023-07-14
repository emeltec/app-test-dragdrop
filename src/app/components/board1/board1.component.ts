import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board1',
  templateUrl: './board1.component.html',
  styleUrls: ['./board1.component.css']
})
export class Board1Component implements OnInit {
  isDragActive = false;
  tools = [
    { id: 1, cols: 1, css: 'col-12' },
    { id: 2, cols: 2, css: 'col-6' },
    { id: 3, cols: 3, css: 'col-4' },
    { id: 4, cols: 4, css: 'col-3' },
  ]

  constructor() { }

  ngOnInit() {
  }

  onDragstart(e: any) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.clearData();
    e.dataTransfer.setData("text/plain", e.target.id);
    // console.log(this)
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
    e.dataTransfer.effectAllowed = "move";
    const data = e.dataTransfer.getData("text");
    const source = document.getElementById(data);
    console.log(data)
    e.target.appendChild(source);
    return false;
  }



  onDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();
  }

  onDragleave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    this.isDragActive = false;
    console.log(e)
  }

  onDragend(e: any) {
    e.preventDefault();
    e.stopPropagation();
    this.isDragActive = false;
    console.log(e)
  }



}

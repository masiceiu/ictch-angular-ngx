import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-append-to-element',
  templateUrl: './append-to-element.component.html',
  styleUrls: ['./append-to-element.component.css']
})
export class AppendToElementComponent implements OnInit {

  @ViewChild('div') div: ElementRef;
  
  constructor (private renderer: Renderer2){

  }

  ngOnInit() {
  }
  addElement() {
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML = "add new"
    this.renderer.appendChild(this.div.nativeElement, p)
  }

}

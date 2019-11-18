import { Component, OnInit, ContentChild, ElementRef, AfterContentChecked, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, AfterContentInit, AfterContentChecked {

  @ContentChild('name') name: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    // debugger
    console.log(this.name);
  }

  ngAfterContentChecked(): void {
    // debugger
    console.log(this.name);
    // debugger
  }

}

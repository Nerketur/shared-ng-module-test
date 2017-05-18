import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tester',
  template: `<p>
               tester works!
             </p>
             <p>testing component below</p>
             <app-testing></app-testing>`,
})
export class TesterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

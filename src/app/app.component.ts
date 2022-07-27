import { AfterViewInit, Component } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MyComponent from './MyComponent';

@Component({
  selector: 'app-root',
  template: '<div [id]="rootId"></div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'react-angular';
  public rootId = 'rootId'

  ngAfterViewInit(): void {
    this.render();
  }


  private render () {
    ReactDOM.render(React.createElement(MyComponent), document.getElementById(this.rootId))
  }
}

import {Component} from '@angular/core';
import * as _ from 'lodash';
import {Message} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  list: string | number;
  data: Array<string | number> = [];
  msgs: Message[] = [];


  constructor() {

  }

  ngOnInit() {
    this.data = (JSON.parse(localStorage.getItem('user')));
    const redis = require('redis');
    const client = redis.createClient();

  }

  add() {
    if (this.list === undefined || this.list === '') {
      this.msgs = [];
      this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'Cannot Post Empty String'});
    } else {
      this.data.push(this.list);
      localStorage.setItem('user', JSON.stringify(this.data));
      this.reset();
    }
  }

  delete(car) {
    this.data.splice(_.indexOf(this.data, car), 1);
    localStorage.setItem('user', JSON.stringify(this.data));
  }

  reset() {
    this.list = '';
  }

}

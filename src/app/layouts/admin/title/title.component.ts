import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-title',
  template: ''
})
export class TitleComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private titleService: Title) {
   
  }

  ngOnInit() {
  }

}

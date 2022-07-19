import { Component, OnInit } from '@angular/core';

import { GoodServiceService } from '../Good-service.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})

export class ShowDataComponent implements OnInit {
  mydata: any = [];

  constructor(private dts: GoodServiceService){
    
  }
  // Injection
  
  ngOnInit() {
    this.dts.getAllDatafromBackend().subscribe((problem) => { this.mydata = problem});
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  details:any=[];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
  
    this.commonService.getAll()
      .subscribe(
        response => {
          console.log(response);
          this.details =response;
        },
        error => {
          console.log(error);
        });
  }



}

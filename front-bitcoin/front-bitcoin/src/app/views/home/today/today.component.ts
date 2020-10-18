import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';
import { Consult } from 'src/app/shared/model/consult.model';


@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  consultToday: Consult;

  constructor(
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getToday();
  }

  getToday() {
    this.apiService.getApiCoinToday('today').subscribe(data => {
      this.consultToday = data;
      console.log(this.consultToday);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';
import { Consult } from 'src/app/shared/model/consult.model';
import { HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  consultHistorical: Consult;

  constructor(
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getHistorical();
    
  }


  getHistorical() {
    this.apiService.getApiCoinHistorical('historical', '2020-10-12', '2020-10-18').subscribe(data => {
    this.consultHistorical = data;
    console.log(this.consultHistorical);
    }
  )};

}

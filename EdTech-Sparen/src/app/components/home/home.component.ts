import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  feedback: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getFeedbackByStudentId('348a3897-0dfb-408d-80cc-2a252aac7870').subscribe(data => {
      console.log(data);
      this.feedback = data;
    }, (error => console.log(error)));
  }

  dateTimetoDate(date: Date){
    var d = new Date(Date.parse(date.toString()))
    return d
  }


}

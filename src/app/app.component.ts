import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private spinner:NgxSpinnerService) {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  updateMessage: boolean = false;
  title = 'EduTeach';
  name: string = '';
  email: string = '';
  salary: number = 0;
  imagepath: string = '';
  Inputhandle(ev: any) {
    console.log(ev.target.value);
    // console.log(this.name);
  }
  
  Clear() {
    this.name = "";
    this.email = "";
    this.salary = 0;
    this.imagepath = '';
  }

  customers: any[] = [
    {
      id: 1,
      name: 'ahmad',
      age: 20,
      city: 'irbid'
    },
    {
      id: 2,
      name: 'mohammad',
      age: 22,
      city: 'amman'
    },
    {
      id: 3,
      name: 'qais',
      age: 22,
      city: 'irbid'
    }
  ]
  clickFun() {
    this.updateMessage = !this.updateMessage;
  }
  getColor(city: string): string {
    switch (city) {
      case 'amman':
        return 'green';
      case 'irbid':
        return 'red';
      default:
        break;
    }
    return '';
  }
}


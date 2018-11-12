import { Component } from '@angular/core';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'MyApp';
  cars: any[] = [];

  ngOnInit() {
    var car  = {
      vin:"wer",
      year:"1234" ,
      brand:"werwer",
      color:"asdf"
    }
    this.cars.push(car);
}

}

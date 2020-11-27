import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cab } from 'src/app/models/cab';
import { CabService } from 'src/app/services/cab.service';

@Component({
  selector: 'app-cab-add',
  templateUrl: './cab-add.component.html',
  styleUrls: ['./cab-add.component.css']
})
export class CabAddComponent implements OnInit {

  constructor(private service:CabService) { }
  cab:Cab | undefined

  ngOnInit(): void {
  }

  addCab(form:any){
    let data = form.value;
    this.cab = new Cab(data.carType, data.perKmRate);
    let observable:Observable<Cab> = this.service.addCab(this.cab);
    observable.subscribe((addCab:Cab)=>this.cab = addCab, err => console.log("Error is " + err.message));
  }
}

import { Component } from '@angular/core';
import { RequestManagerService } from './request-manager.service';
import { People,Employee } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'deepCommunication';

  people:People;
  employee:Employee;
  
  constructor(
    private service:RequestManagerService
  ){}

  showPeople(){
    this.service.getPeople().subscribe(
      val=>this.people=val
    );
  }

  showEmployee(){
    this.service.getEmployee().subscribe(
      val=>this.employee=val
    );
  }

}

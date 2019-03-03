import { Component, OnInit, Input } from '@angular/core';
import { People, Employee } from '../model';
import { RequestManagerService } from '../request-manager.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() people:People;
  @Input() employee:Employee;

  constructor(
    private service:RequestManagerService
  ) { }

  ngOnInit() {
  }


}

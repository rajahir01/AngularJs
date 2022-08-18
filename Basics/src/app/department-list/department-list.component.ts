import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  <h3>Department List</h3>
  <ul class="items" >
    <li (click)="onSelect(department)" *ngFor="let department of departments">
      <span class="badge">{{department.id}}</span>{{department.name}}
    </li>
  </ul>`,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public departments=[
    {"id":1, "name": "Goku"},
    {"id":2, "name":"krilin"},
    {"id":3, "name":"gohan"}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSelect(department: { id: any; }){
    this.router.navigate(['/department', department.id]);
  }

}

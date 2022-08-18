import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-list-details',
  template: `
  <h3>
   Department Id is {{departmentid}} 
  </h3>
  `,
  styles: []
})
export class DepartmentListDetailsComponent implements OnInit {
 public departmentid:any;
   
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // var id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentID=id;
    // this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'));

    // this.route.paramMap.subscribe(params => {
    //   this.departmentID = params.get("id")
    // });

    // let id = parseInt(this.route.snapshot.paramMap.get('id').toString(), 10);
    // this.departmentID = id;


    // this.departmentID = parseInt(this.route.snapshot.paramMap.get('id'));

    // let id: Number = parseInt(this.activateRoute.snapshot.params['id']);
    // //  this.departmentID = id;

    this.departmentid=parseInt(this.route.snapshot.paramMap.get('id') as string);
    // this.departmentID=id;
  }

}

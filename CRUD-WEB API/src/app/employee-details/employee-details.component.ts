import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employee-det-Model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  formValue !: FormGroup; 
  employeeData !: any;
  // initialization of form value

  //creating  object to pass model to 

  employeeModelObj: EmployeeModel= new EmployeeModel;

  constructor(private formbuilder: FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      firstname:[''],
      lastname:[''],
      emaill:[''],
      phone:[''],
      salary:[''],
      
    })
    this.getAllEmployess();
  }
  postEmployeeDetails(){
    this.employeeModelObj.firstname=this.formValue.value.firstname;
    this.employeeModelObj.lastname=this.formValue.value.lastname;
    this.employeeModelObj.email=this.formValue.value.email;
    this.employeeModelObj.phone=this.formValue.value.phone;
    this.employeeModelObj.salary=this.formValue.value.salary;
    this.api.postEmployee(this.employeeModelObj)
    .subscribe(
      res=>{
      console.log(res);
      alert("Employee Added Successfully")
      let ref =document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
    }
    )
    
    // next: (res) => console.log(res),
    // error: (err) => console.error(e),
    
    
  }

  getAllEmployess(){
    this.api.getEmployee(data).
    subscribe(res=>{
      this.employeeData=res;
    })

  }

  deleteEmployee(row: any){
    this.api.deleteEmployee(data,row.id).subscribe(res=>{
      alert("Employee Deleted");
      this.getAllEmployess();
    })
  }

  updateEmployee(row: any){
    this.api.updateEmployee(data, row.id).subscribe(
      res=>{}
    )
    }

    onEdit(row:any){
  this.formValue.controls['firstName'].setValue(row.firstname)
  this.formValue.controls['lastName'].setValue(row.lastname)
  this.formValue.controls['email'].setValue(row.email)
  this.formValue.controls['phone'].setValue(row.phone)
  this.formValue.controls['salary'].setValue(row.salary)
    }

}



function data(data: any) {
  throw new Error('Function not implemented.');
}




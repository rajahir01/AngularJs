import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListDetailsComponent } from './department-list-details/department-list-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
{path:"", redirectTo: '/deparment', pathMatch: 'full'},
{ path: "department", component: DepartmentListComponent},
{path: "department/:id", component: DepartmentListDetailsComponent},
{path: "employee", component: EmployeeListComponent},
{path: "**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponant=[DepartmentListComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
  DepartmentListDetailsComponent];

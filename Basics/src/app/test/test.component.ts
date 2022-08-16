import { style } from '@angular/animations';
import { getCurrencySymbol, getLocaleCurrencyCode } from '@angular/common';
import { InterpolationConfig } from '@angular/compiler';
import { Component, OnInit ,Input} from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-test',
  template: `

  <h2 >{{"hello"+parentData}}</h2>
  
  <!-- <h2>
    In in Test Component

  </h2> -->
  <!-- <h1>
  {{name}}                       
    {{name}}
  </h1> -->
  <!-- using class attibutes -->
 <!-- <h2 class="text-sucess">Done!</h2>   
 <h2 [class]="successClass">Alert</h2>
 <h2 class="text-special" [class]="successClass">BOTH</h2>
 <h2 [class.text-danger]="hasError">Red</h2>
 <h2 [ngClass]="messageClasses"]>Multiple</h2> -->
 <!-- <button (click)="starClick($event)">Click on me</button> -->
 <!-- <button (click)="Greet='Hi user'">Click</button>
 {{Greet}} -->

 <!-- <input #myinput type="text">
 <button (click)="logmessage(myinput.value)">Log</button> -->


 <!-- two way binding -->

 <!-- <input [(ngModel)]="name" type="text" >
 {{name}} -->


 <!-- structural directives -->
 <!-- <script>
  var a = $('#togBtn').prop("checked") ? 1 : 0 ;
 </script>
 <button class="#topBtn"  (click)="starClick($event)">Hit Me!</button>
 <h2 *ngIf="bool; else elseBlock">Hey there</h2>



 <ng-template #elseBlock>
<h2>Naa here
</h2>
 </ng-template>
 -->




 <!-- ngswitch -->
 <!-- <input  (submit)="color='blue'" type="text">
 <div [ngSwitch]="color">
  <div *ngSwitchCase="'blue'">you picked blue</div>
  <div *ngSwitchCase="'red'">you picked red</div>
  <div *ngSwitchDefault>you havent picked anything</div>
 </div> -->


 <!-- ngfor -->

 <!-- <div *ngFor="let color of colors">
  <h2>{{color}}</h2>

 </div> -->

 <!-- <div *ngFor="let color of colors; index as i">
  <h2>{{i}} {{color}}</h2>

 </div> -->
<!-- to get the first element of array -->
  <!-- <div *ngFor="let color of colors; first as f">
  <h2>{{f}} {{color}}</h2>

 </div> -->

 <!-- to get last element -->

   <!-- <div *ngFor="let color of colors; last as l">
  <h2>{{l}} {{color}}</h2>

 </div>
 -->
 `,  
  styles: [`
    .text-sucess{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:Italic;
    }
  `]
})
export class TestComponent implements OnInit {
  @Input() public parentData: any;

  public successClass="text-sucess";
  public myID="TestID";
  public Greet ="";
  public hasError=true;
  public isSpecial=true;
  public bool=false;
  public colors=["blue","red","green","yellow"];

  public messageClasses={
    "text-sucess":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
  constructor() { 

  }
  

  ngOnInit(): void {
  }

 starClick(event: any): void{
   console.log(event);
  }
  logmessage(value: any){
    console.log(value);
    }


}

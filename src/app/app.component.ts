import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives';
  
  courses = ['Directive 1', 'Directive 2', 'Directive 3', 'Directive 4', 'Directive 5']; 

}

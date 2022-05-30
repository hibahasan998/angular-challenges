import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-challenges';
  
  message1: string = 'Message 1';
  name1: string = 'Button 1';
  color1: string = 'basic';

  message2: string = 'Message 2';
  name2: string = 'Button 2';
  color2: string = 'primary';

  message3: string = 'Message 3';
  name3: string = 'Button 3';
  color3: string = 'accent';

  message4: string = 'Message 4';
  name4: string = 'Button 4';
  color4: string = 'warn';
}


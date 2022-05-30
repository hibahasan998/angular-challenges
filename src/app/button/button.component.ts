import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  @Input() name: string = '';
  @Input() message: string = '';
  @Input() color: string = '';

  showMessage(){
    this.snackBar.open(this.message, '', {
      duration: 2000
    })
  }
}

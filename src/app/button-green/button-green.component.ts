import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-button-green',
  templateUrl: './button-green.component.html',
  styleUrls: ['./button-green.component.css']
})
export class ButtonGreenComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public showSuccess(): void{
    this.snackBar.open("Success!",'', {duration: 2000, panelClass: ['green-snackbar']});
  }
}

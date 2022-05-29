import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-button-red',
  templateUrl: './button-red.component.html',
  styleUrls: ['./button-red.component.css']
})
export class ButtonRedComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public showWarning(): void{
    this.snackBar.open("Warning!",'', {duration: 2000, panelClass: ['red-snackbar']});
  }
}

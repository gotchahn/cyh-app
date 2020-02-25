import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  reason = '';

  constructor() { }

  ngOnInit(): void {
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  className = "inactive"

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    if (this.className == "active")
      this.className = "inactive"
    else
      this.className = "active"
  }

}

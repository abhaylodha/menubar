import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menubar';
  className = "inactive"
  loggedIn = !false;


  toggleSideBar() {
    if (this.className == "active")
      this.className = "inactive"
    else
      this.className = "active"
  }

}

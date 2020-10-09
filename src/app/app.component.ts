import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // displayNavigation = true;

  constructor(
    // private router: Router
  ) { }

  ngOnInit(): void { 
    // this.router.navigate(['posts']);

/*     var navElement = document.getElementById('navbar');
    this.displayNavigation = ! navElement.classList.contains('removeHeader'); */
  }
  
}


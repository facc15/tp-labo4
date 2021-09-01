import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp';

  
  constructor(private router:Router) {
    
    
  }

  irAQuienSoy()
  {
    this.router.navigate(['./pages/quien-soy']);
  }

  irAHome()
  {
    this.router.navigate(['./pages/home']);
  }

  irALogin()
  {
    this.router.navigate(['./pages/login']);
  }
}

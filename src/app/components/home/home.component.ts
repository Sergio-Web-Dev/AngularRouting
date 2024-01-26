import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private router = inject(Router)
  private activeRouter = inject(ActivatedRoute)
  private authService = inject(AuthService)

  onGoTo(){
    this.router.navigate(['/category', '562'], { relativeTo: this.activeRouter })
  }

  login(){
    this.authService.login();
    this.router.navigate(['/about'])
  }

  logout(){
    this.authService.logout();
  }
}

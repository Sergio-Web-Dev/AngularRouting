import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-erro-page',
  standalone: true,
  imports: [],
  templateUrl: './erro-page.component.html',
  styleUrl: './erro-page.component.css'
})
export class ErroPageComponent implements OnInit {
  errorMessage : string = ''
  private activatedRouter = inject(ActivatedRoute)

  ngOnInit(){
    this.activatedRouter.data.subscribe((data: Data) => {
      this.errorMessage = data['message'];
    });
  }
}

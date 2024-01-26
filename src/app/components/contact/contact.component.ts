import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnDestroy{
  name : string = ''
  private router = inject(ActivatedRoute)
  subscription : Subscription

  constructor() {
    this.subscription = this.router.queryParamMap.subscribe((queryParam: ParamMap) => {
        this.name = queryParam.get("name") ?? 'Not found';
    });
    // let value = this.router.snapshot.queryParamMap.get("name");
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(){

  }
}

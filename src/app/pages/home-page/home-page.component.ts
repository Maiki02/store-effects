import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { appState } from '../../shared/interfaces';
import { setCount } from '../../store/actions/count';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit,OnDestroy {
  public count:number=0;
  private count$!:Subscription;
  constructor(private store:Store<appState>){

  }

  ngOnInit(): void {
    this.count$ = this.store.select('countR', 'count').subscribe(res => {
      console.log(res)
      this.count = res
    });
  }

  ngOnDestroy(): void {
    this.count$?.unsubscribe();
  }

  add(){
    this.store.dispatch(setCount({count: this.count+1}))
  }

  less(){
    this.store.dispatch(setCount({count: this.count-1}))
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { appState } from '../../shared/interfaces';
import { setNpcs } from '../../store/actions/npc';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-npcs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './npcs.component.html',
  styleUrl: './npcs.component.css'
})
export class NpcsComponent implements OnInit,OnDestroy {
  public npcs:any[]=[]
  public msg:string=''

  private npcs$!:Subscription;
  constructor(private store:Store<appState>){}

  ngOnInit(): void {
    console.log("on init")
    this.store.dispatch(setNpcs())
  
    this.npcs$ = this.store.select('npcsR').subscribe(npcR => {
      console.log(npcR)
      this.npcs = npcR.npcs;
      this.msg=npcR.messageError
    })
  }

  ngOnDestroy(): void {
    this.npcs$?.unsubscribe();
  }
}

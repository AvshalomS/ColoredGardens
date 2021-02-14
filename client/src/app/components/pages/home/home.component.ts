import { Component, OnInit, OnDestroy} from '@angular/core';
import { DataService } from '../../../services/data.service';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();
  photos:any;
  users:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getPhotos().pipe(takeUntil(this.destroy$)).subscribe((data:any)=>{
      console.log('5000 photos',data);
      this.photos=data;      
    })
    this.dataService.getUsers().pipe(takeUntil(this.destroy$)).subscribe((data:any)=>{
      console.log('10 users',data);
      this.users=data;
    })
  }
  ngOnDestroy(){
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
}

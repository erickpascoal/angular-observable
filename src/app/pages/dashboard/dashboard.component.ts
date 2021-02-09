import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TransferNameService } from 'src/app/services/transfer-name.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  name: string;
  transferNameServiceSubscription: Subscription;

  constructor(private transferNameService: TransferNameService) { }

  ngOnInit(): void {
    this.transferNameServiceSubscription = this.transferNameService.observable().subscribe((name) => {
      this.name = name;
    });
  }

  ngOnDestroy(): void {
    this.transferNameServiceSubscription.unsubscribe();
  }

}

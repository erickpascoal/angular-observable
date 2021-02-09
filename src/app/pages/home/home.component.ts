import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { TransferNameService } from 'src/app/services/transfer-name.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string;

  constructor(private transferNameService: TransferNameService) { }

  ngOnInit(): void {
  }

  changeName() {
    this.transferNameService.setName(this.name)
  }

}

import { Component, Input } from '@angular/core';
import { LogingService } from '../loging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LogingService, AccountService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  
  constructor(private serviceLoging : LogingService, private accountService : AccountService)
  {

  }

  onSetTo(status: string) {
    
    //console.log('A server status changed, new status: ' + status);
    this.serviceLoging.logStatusChange(status);
    this.accountService.updateAccount(this.id, status);
  }
}

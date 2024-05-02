import { Component } from '@angular/core';
import { LogingService } from '../loging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LogingService, AccountService]
})
export class NewAccountComponent {
  constructor(private serviceLoging : LogingService, private accountService : AccountService)
  {

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    //console.log('A server status changed, new status: ' + accountStatus);
    this.serviceLoging.logStatusChange(accountStatus);
    this.accountService.addAccount(accountName,accountStatus);
  }
}
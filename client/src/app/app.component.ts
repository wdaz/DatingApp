import { PresenceService } from './_services/presence.service';
import { AccountService } from 'src/app/_services/account.service';
import { User } from './_models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private accountService: AccountService,
    private presence: PresenceService
  ) {}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.accountService.setCurrentUser(user);
      this.presence.createHubConnection(user);
    }
  }
}

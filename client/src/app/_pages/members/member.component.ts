import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  members$: Observable<Member[]>;

  constructor(private memberService: MembersService) {}

  ngOnInit(): void {
    this.members$ = this.memberService.getMembers();
  }
}

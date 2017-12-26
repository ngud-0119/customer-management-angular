import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Member }　from './member';
import { MemberService } from './member.service';

@Component({
  selector: 'member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member: Member;

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((param: ParamMap) => {
        return this.memberService.getMember(+param.get('id'));
      })
      .subscribe(member => this.member = member);
  }

  goBack(): void {
    this.location.back();
  }
}

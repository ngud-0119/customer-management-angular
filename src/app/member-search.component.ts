import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { MemberSearchService } from './member-search.service';
import { Member } from './member';

@Component({
  selector: 'member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css'],
  providers: [MemberSearchService]
})
export class MemberSearchComponent implements OnInit {
  members: Observable<Member[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private memberSearchService: MemberSearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.members = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ?
        this.memberSearchService.search(term) :
        Observable.of<Member[]>([])
      )
      .catch(error => {
        console.error(error);
        return Observable.of<Member[]>([]);
      });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  gotoDetail(member: Member): void {
    let link = ['/detail', member.id];
    this.router.navigate(link);
  }
}

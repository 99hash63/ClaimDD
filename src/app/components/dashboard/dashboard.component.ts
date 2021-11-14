import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  selectClaiamant = 'lock';
  selectProject = 'lock';
  constructor() {}

  ngOnInit(): void {}

  onUnlockClaimant() {
    this.selectClaiamant = 'unlock';
  }

  onLockClaimant() {
    this.selectClaiamant = 'lock';
  }

  onUnlockProject() {
    this.selectProject = 'unlock';
  }

  onLockProject() {
    this.selectProject = 'lock';
  }
}

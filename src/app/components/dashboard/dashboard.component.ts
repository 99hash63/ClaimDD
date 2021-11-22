import { Component, OnInit } from '@angular/core';
import { ClaimantService } from 'src/app/shared/claimant.service';
import { Claimant } from 'src/app/shared/claimant.model';
import { ProjectService } from 'src/app/shared/project.service';
import { Project } from 'src/app/shared/project.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  //selected claimant in dropdown
  public selectedClaimant: any = 'default';

  //check if selected claimant has projects
  claimantHasProjects = false;
  projectsMessage = 'please select a claimant';
  //dropdown list for claimants
  CLAIMANTS_LIST!: Claimant[];

  //dropdown list for projects
  PROJECT_LIST!: Project[];

  //intializing variables
  claimants: Claimant[] = [];
  projects: Project[] = [];

  selectClaiamant = 'lock';
  selectProject = 'lock';
  constructor(
    public claimantService: ClaimantService,
    public projectService: ProjectService
  ) {}

  ngOnInit(): void {
    // get claimants to the dropdown
    this.claimantService.getAllClaimants().subscribe(
      (res) => {
        this.claimants = res['data'] as Claimant[];
        this.CLAIMANTS_LIST = this.claimants;
        console.log(this.claimants);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  //Unlock Claimant in the dropdown
  onUnlockClaimant() {
    this.selectClaiamant = 'unlock';
  }

  //lock Claimant in the dropdown
  onLockClaimant() {
    this.selectClaiamant = 'lock';
  }

  //Unlock project in the dropdown
  onUnlockProject() {
    this.selectProject = 'unlock';
  }

  //lock project in the dropdown
  onLockProject() {
    this.selectProject = 'lock';
  }

  //getting selected claimant in dropdown
  selected() {
    // console.log(this.selectedClaimant);
    //triggering set project dropwon
    this.projectsMessage = 'loading...';
    this.setProjectsDropdown(this.selectedClaimant);
  }

  //set projects dropdown
  setProjectsDropdown(claimantID: any) {
    this.projectService.getProjectsofClaimant(claimantID).subscribe(
      (res) => {
        this.claimantHasProjects = true;
        this.projects = res['data'] as Project[];
        this.PROJECT_LIST = this.projects;
        console.log(this.projects);
      },
      (err) => {
        if (err.error == 'This claiamnt does not have any projects') {
          console.log('yes');
          this.claimantHasProjects = false;
          this.projectsMessage = 'Selected claimant has no projects';
        } else console.log('no');
      }
    );
  }
}

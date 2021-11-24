import { Component, OnInit } from '@angular/core';
import { ClaimantService } from 'src/app/shared/claimant.service';
import { Claimant } from 'src/app/shared/claimant.model';
import { ProjectService } from 'src/app/shared/project.service';
import { Project } from 'src/app/shared/project.model';
import { DefaultDataService } from 'src/app/shared/default-data.service';
import { DefaultData } from 'src/app/shared/default-data.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  //check if user has claimants
  userHasClaimants = false;
  claimantsMessage = 'No claimants added yet';

  //check if user has projects
  userHasProjects = false;
  projectsMessage = 'loading...';

  //check if selected claimant has projects
  claimantHasProjects = false;

  //selected claimant in dropdown
  public selectedClaimant: any = 'default';
  public selectedClaimantObject!: any;

  //selected project in dropdown
  public selectedProject: any = 'default';
  public selectedProjectObject!: any;

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
    public projectService: ProjectService,
    public defaultDataService: DefaultDataService
  ) {}

  ngOnInit(): void {
    //get default data
    this.defaultDataService.getDefaultData().subscribe(
      (res) => {
        console.log(res['data']);
        const defaultData = res['data'] as DefaultData;
        if (defaultData.claimantID == null) {
          //showing no claimants added message in cliamant dropdown
          this.userHasClaimants = false;
          //showing please select a claiamnt message in project dropdwon
          this.claimantHasProjects = false;
          this.projectsMessage = 'Please add a claimant first';
          //lock project tab
          this.onLockProject();
        } else {
          this.userHasClaimants = true;
          this.selectedClaimantObject = defaultData.claimantID;
          //triggering set project dropwon
          this.projectsMessage = 'loading...';
          this.setProjectsDropdown(this.selectedClaimantObject._id);
        }

        if (defaultData.projectID == null) {
          //setting user has default project to false
          this.userHasProjects = false;
        } else {
          this.userHasProjects = true;
          this.selectedProjectObject = defaultData.projectID;
          console.log('menna project', this.selectedProjectObject);
        }
      },
      (err) => {
        console.log('error');
      }
    );

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

    //updating default claimant
    this.defaultDataService.addDefaultClaimant(this.selectedClaimant).subscribe(
      (res) => {
        console.log(res['success']);
      },
      (err) => {
        console.log(err.error);
      }
    );

    //removing default project
    this.defaultDataService.removeDefaultProject().subscribe(
      (res) => {
        console.log(res['success']);
        window.location.reload();
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  //getting selected project in dropdown
  selectedP() {
    // updating default project
    this.defaultDataService.addDefaultProject(this.selectedProject).subscribe(
      (res) => {
        console.log(res['success']);
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  //set projects dropdown
  setProjectsDropdown(claimantID: any) {
    this.projectService.getProjectsofClaimant(claimantID).subscribe(
      (res) => {
        this.claimantHasProjects = true;
        console.log('hiiiiiiiiiiiiiiii');
        this.projectsMessage = 'Please select a project';
        this.projects = res['data'] as Project[];
        this.PROJECT_LIST = this.projects;
        console.log(this.projects);
      },
      (err) => {
        if (err.error == 'This claiamnt does not have any projects') {
          console.log('yes');
          this.claimantHasProjects = false;
          this.projectsMessage = 'Selected claimant has no projects';
          //lock project tab
          this.onLockProject();
        } else console.log('no');
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivitiesService} from "../activities/activities.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ActivityDto} from "../../../models/ActivityDto";

@Component({
  selector: 'app-activity',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {

  form: FormGroup;
  id: number;
  isLoading = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private activitiesService: ActivitiesService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    if(this.id > 0){
      this.activitiesService.getActivity(this.id).subscribe(o =>
      {
        this.isLoading = false;
        this.createForm(o)
      });
    }else{
      this.isLoading = false;
      this.createForm(null);
    }
  }

  private createForm(activity: ActivityDto){
    if(activity != null) {
      this.form = this.fb.group({
        activityName: new FormControl(activity.activityName, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        created: new FormControl(activity.created),
        id: new FormControl(activity.id)
      });
    }
    else{
      this.form = this.fb.group({
        activityName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        created: new FormControl(new Date())
      });
    }
  }

  onSubmit(){
    if(this.id > 0){
      this.activitiesService.editActivity(this.form.value).subscribe(o => this.router.navigateByUrl('activities'));
    }else{
      this.activitiesService.addActivity(this.form.value).subscribe(o => this.router.navigateByUrl('activities'));
    }
  }
}
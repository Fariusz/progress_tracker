import { Component, OnInit } from '@angular/core';
import {ActivitiesService} from "../activities/activities.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ActivityDto} from "../../../models/ActivityDto";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private activitiesService: ActivitiesService, private router: Router) { }

  ngOnInit(): void {
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    if(this.id > 0){
      this.activitiesService.getActivity(this.id).subscribe(o =>
      {
        this.createForm(o)
      });
    }else{
      this.createForm(null);
    }
  }

  private createForm(activity?: ActivityDto){
    this.form = this.fb.group({
      activityName: new FormControl(activity.activityName, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      created: new FormControl(activity.created),
      id: new FormControl(activity.id)
    });
  }

  onSubmit(){
    if(this.id > 0){
      this.activitiesService.editActivity(this.form.value).subscribe(o => this.router.navigateByUrl('activities'));
    }else{
      this.activitiesService.addActivity(this.form.value).subscribe(o => this.router.navigateByUrl('activities'));
    }
  }

}

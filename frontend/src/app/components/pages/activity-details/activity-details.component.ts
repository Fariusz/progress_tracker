import {Component, OnInit} from '@angular/core';
import {ActivityDto} from "../../../models/ActivityDto";
import {ActivitiesService} from "../activities/activities.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {

  id: number;
  activity: ActivityDto;
  isLoading = false;

  constructor(private activitiesService: ActivitiesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'));

    this.activitiesService.getActivity(this.id).subscribe(
      (activity: ActivityDto) => {
        this.isLoading = false;
        this.activity = activity;
      });
  }
}

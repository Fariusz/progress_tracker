import {Component, OnInit} from '@angular/core';
import {ActivityDto} from "../../../models/ActivityDto";
import {ActivityService} from "./activity.service";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activities: ActivityDto[] = [];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activityService.getActivities().subscribe(
      (activies: ActivityDto[]) => {
        this.activities = activies;
      });
  }
}

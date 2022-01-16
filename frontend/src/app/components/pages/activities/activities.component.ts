import {Component, Input, OnInit} from '@angular/core';
import {ActivityDto} from "../../../models/ActivityDto";
import {ActivitiesService} from "./activities.service";

@Component({
  selector: 'app-activity',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  @Input() activity: ActivityDto;

  page: number = 1;
  isLoading = false;
  activities: ActivityDto[] = [];

  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.activitiesService.getActivities().subscribe(
      (activities: ActivityDto[]) => {
        this.activities = activities;
        this.isLoading = false;
      });
  }
}

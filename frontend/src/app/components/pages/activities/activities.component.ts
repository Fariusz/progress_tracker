import {Component, Input, OnInit} from '@angular/core';
import {ActivityDto} from "../../../models/ActivityDto";
import {ActivitiesService, Pagination} from "./activities.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-activity',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  @Input() activity: ActivityDto;

  pagination: Pagination = {
    page: 0,
    pageSize: 2
  }
  activities: ActivityDto[] = [];

  constructor(private activityService: ActivitiesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activityService.getActivities(this.pagination).subscribe(
      (activies: ActivityDto[]) => {
        this.activities = activies;
      });
  }
}

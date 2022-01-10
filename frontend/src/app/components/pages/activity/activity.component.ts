import { Component, OnInit } from '@angular/core';
import {ActivitiesService} from "../activities/activities.service";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit(): void {}

}

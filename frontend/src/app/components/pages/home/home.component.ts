import {Component, OnInit} from '@angular/core';
import {ActivitiesListsService} from "../activities-lists/activities-lists.service";
import {ActivityListDto} from "../../../models/ActivityListDto";
import {ActivityDto} from "../../../models/ActivityDto";
import {ContentDto} from "../../../models/ContentDto";
import {ActivitiesService} from "../activities/activities.service";
import {ContentService} from "../activity-details/content.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoading = false;
  userName = JSON.parse(localStorage.getItem('user'))['username'];

  lists: ActivityListDto[] = [];
  activities: ActivityDto[] = [];
  content: ContentDto[] = [];

  trainingLists: ActivityListDto[] = [];
  trainingActivities: ActivityDto[] = [];
  trainingContent: ContentDto[] = [];

  measurementLists: ActivityListDto[] = [];
  measurementActivities: ActivityDto[] = [];
  measurementContent: ContentDto[] = [];

  constructor(private listService: ActivitiesListsService,
              private activitiesService: ActivitiesService,
              private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.listService.getLists().subscribe((lists: ActivityListDto[]) => {
      this.lists = lists;

      this.lists.forEach(item => {
        if (item.training) {
          this.trainingLists.push(item);
        } else if (!item.training) {
          this.measurementLists.push(item);
        }
      })

      this.trainingLists.forEach(item => {
        item.activities.forEach(item => {
          this.trainingActivities.push(item);
        })
      });

      this.measurementLists.forEach(item => {
        item.activities.forEach(item => {
          this.measurementActivities.push(item);
        })
      });

      this.trainingActivities.forEach(item => {
        item.content.forEach(item => {
          this.trainingContent.push(item);
        })
      })

      this.measurementActivities.forEach(item => {
        item.content.forEach(item => {
          this.measurementContent.push(item);
        })
      })

      this.isLoading = false;
    });

    this.activitiesService.getActivities().subscribe(
      (activities: ActivityDto[]) => {
        this.activities = activities;
        this.isLoading = false;
      });

    this.contentService.getContent().subscribe((content: ContentDto[]) => {
      this.content = content;
      this.isLoading = false;
    });
  }

  getProgress() {


    var tablica = this.trainingContent.filter(item => {
      if (item.created < new Date()) {
        return item.content;
      }
    })
  }
}

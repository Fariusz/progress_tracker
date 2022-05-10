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

  private excercisesProgress: number = 0;
  private measurementProgress: number = 0;
  private consistency;
  private totalWeight: number = 0;
  private totalReps: number = 0;
  private totalTrainings: number = 0;
  private totalCalories: number = 0;

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



      this.contentService.getContent().subscribe((content: ContentDto[]) => {
        this.content = content;
        this.isLoading = false;

        this.setProgress();
        this.isLoading = false;
      });

    });

    this.activitiesService.getActivities().subscribe(
      (activities: ActivityDto[]) => {
        this.activities = activities;
        this.isLoading = false;
      });
  }

  setProgress() {
    var fourWeeksAgo = new Date();
    fourWeeksAgo.setDate(fourWeeksAgo.getDate() - 30);
    var weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    var twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
    var sumBefore = 0;
    var sumAfter = 0;
    var entriesBefore = 0;
    var entriesAfter = 0;

    //Progress in excercises
    this.trainingContent.forEach(item => {

      if(this.trainingContent.find(element => new Date(element.created) < fourWeeksAgo))
      {
        if (new Date(item.created) < fourWeeksAgo) {
          sumBefore += Number(item.content) * Number(item.repetitions);
          entriesBefore++;
        }
        else if (new Date(item.created) > fourWeeksAgo){
          sumAfter += Number(item.content) * Number(item.repetitions);
          entriesAfter++;
        }
      }
      else if(this.trainingContent.find(element => new Date(element.created) < twoWeeksAgo))
      {
        if (new Date(item.created) < twoWeeksAgo) {
          sumBefore += Number(item.content) * Number(item.repetitions);
          entriesBefore++;
        }
        else if (new Date(item.created) > twoWeeksAgo){
          sumAfter += Number(item.content) * Number(item.repetitions);
          entriesAfter++;
        }
      }
      else if(this.trainingContent.find(element => new Date(element.created) < weekAgo))
      {
        if (new Date(item.created) < weekAgo) {
          sumBefore += Number(item.content) * Number(item.repetitions);
          entriesBefore++;
        }
        else if (new Date(item.created) > weekAgo){
          sumAfter += Number(item.content) * Number(item.repetitions);
          entriesAfter++;
        }
      }
    })

    this.excercisesProgress = Number(((sumAfter/entriesAfter) / (sumBefore/entriesBefore) * 100).toFixed(0)) - 100;

    if(isNaN(this.excercisesProgress)){
      this.excercisesProgress = 0;
    }

    sumAfter = 0;
    sumBefore = 0;
    entriesAfter = 0;
    entriesBefore = 0;

    //Progress in measurement
    this.measurementContent.forEach(item => {

      if(this.measurementContent.find(element => new Date(element.created) < fourWeeksAgo)){
        if (new Date(item.created) < fourWeeksAgo) {
          sumBefore += Number(item.content);
          entriesBefore++;
        }
        else if (new Date(item.created) > fourWeeksAgo){
          sumAfter += Number(item.content);
          entriesAfter++;
        }
      }
      else if(this.measurementContent.find(element => new Date(element.created) < twoWeeksAgo)) {
        if (new Date(item.created) < twoWeeksAgo) {
          sumBefore += Number(item.content);
          entriesBefore++;
        }
        else if (new Date(item.created) > twoWeeksAgo){
          sumAfter += Number(item.content);
          entriesAfter++;
        }
      }
      else if(this.measurementContent.find(element => new Date(element.created) < weekAgo)) {
        if (new Date(item.created) < weekAgo) {
          sumBefore += Number(item.content);
          entriesBefore++;
        }
        else if (new Date(item.created) > weekAgo){
          sumAfter += Number(item.content);
          entriesAfter++;
        }
      }
    })

    this.measurementProgress = Number(((sumAfter/entriesAfter) / (sumBefore/entriesBefore) * 100).toFixed(0)) - 100;

    if(isNaN(this.measurementProgress)){
      this.measurementProgress = 0;
    }
    if(this.measurementProgress < 0){
      this.measurementProgress = -this.measurementProgress;
    }

    //Consistency
    this.consistency = 'lack';

    this.content.sort((a,b) => a.created > b.created ? 1 : -1);

      if (new Date((this.content[this.content.length-1]).created) > weekAgo) {
        this.consistency = 'good';
      }
      else if (new Date((this.content[this.content.length-1]).created) > twoWeeksAgo){
        this.consistency = 'neutral';
      }
      else if (new Date((this.content[this.content.length-1]).created) > fourWeeksAgo){
        this.consistency = 'bad';
      }

    //Total weight
    this.content.forEach(item => {
      this.totalWeight += Number(item.content) * Number(item.repetitions);
    });

    //Total reps
    this.content.forEach(item => {
      this.totalReps += Number(item.repetitions);
    });

    //Total trainings
    const trainings = [... new Set(this.content.map(item => item.created))];
    this.totalTrainings = trainings.length;

    //Total calories
    this.totalCalories = this.totalTrainings * 420;
  }
}

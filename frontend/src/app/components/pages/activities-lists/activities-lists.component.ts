import {Component, OnInit} from '@angular/core';
import {ContentDto} from "../../../models/ContentDto";
import {ActivitiesListsService} from "./activities-lists.service";
import {ActivityListDto} from "../../../models/ActivityListDto";

@Component({
  selector: 'app-activities-lists',
  templateUrl: './activities-lists.component.html',
  styleUrls: ['./activities-lists.component.css']
})
export class ActivitiesListsComponent implements OnInit {
  page: number = 1;
  isLoading = false;
  lists: ActivityListDto[] = [];

  constructor(private listService: ActivitiesListsService) {
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.listService.getLists().subscribe((lists: ActivityListDto[]) => {
      console.log(lists);
      this.lists = lists;
      this.isLoading = false;
    });
  }

}

import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivityDto} from "../../../models/ActivityDto";
import {ActivitiesService} from "../activities/activities.service";
import {ActivatedRoute} from "@angular/router";
import {ModalComponent} from "../../modal/modal.component";
import {ModalConfig} from "../../modal/modal.config";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {
  @ViewChild('modal') private modalComponent: ModalComponent;

  async openModal() {

    this.modalConfig = {
      closeButtonLabel: "Ok",
      dismissButtonLabel: "Dismiss",
      modalTitle: "Add entry",
      disableCloseButton() {
        return false;
      }, disableDismissButton() {
        return false;
      }, hideCloseButton() {
        return false;
      }, hideDismissButton() {
        return false;
      }, onClose() {
        return true;
      }, onDismiss() {
        return true;
      }, shouldClose() {
        return true;
      }, shouldDismiss() {
        return true;
      }
    }
    return await this.modalComponent.open()
  }

  id: number;
  activity: ActivityDto = null;
  isLoading = false;
  modalConfig: ModalConfig;

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

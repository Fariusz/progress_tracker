import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivityDto} from "../../../models/ActivityDto";
import {ActivitiesService} from "./activities.service";
import {ContentDto} from "../../../models/ContentDto";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalConfig} from "../../modal/modal.config";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "../../modal/modal.component";

@Component({
  selector: 'app-activity',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  @Input() activity: ActivityDto;
  @ViewChild('modal') private modalComponent: ModalComponent;

  page: number = 1;
  isLoading = false;
  activities: ActivityDto[] = [];
  form: FormGroup;
  modalConfig: ModalConfig;

  constructor(private activitiesService: ActivitiesService, private fb: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.activitiesService.getActivities().subscribe(
      (activities: ActivityDto[]) => {
        this.activities = activities;
        this.isLoading = false;
      });
  }

  private createForm(activity: ActivityDto){
    if(activity != null) {
      this.form = this.fb.group({
        activityName: new FormControl(activity.activityName, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        created: new FormControl(activity.created),
        id: new FormControl(activity.id)
      });
    }
    else{
      this.form = this.fb.group({
        activityName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        created: new FormControl(new Date())
      });
    }
  }

  async openModal() {
    this.createForm(null);
    this.modalConfig = {
      closeButtonLabel: "Ok",
      dismissButtonLabel: "Dismiss",
      modalTitle: "Add activity",
      disableCloseButton() {
        return false;
      }, disableDismissButton() {
        return false;
      }, hideCloseButton() {
        return true;
      }, hideDismissButton() {
        return true;
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

  onSubmit() {
    this.activitiesService.addActivity(this.form.value).subscribe(activity => {
      this.activities.push(activity)
    });
    this.modalComponent.close();
    window.location.reload();
  }

  onDismiss(){
    this.modalComponent.dismiss();
  }

  delete(id: bigint) {
    this.activitiesService.deleteActivity(id).subscribe();
    window.location.reload();
  }
}

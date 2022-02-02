import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivityDto} from "../../../models/ActivityDto";
import {ActivitiesService} from "./activities.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalConfig} from "../../modal/modal.config";
import {ModalComponent} from "../../modal/modal.component";
import {ToastrService} from "ngx-toastr";
import {ContentDto} from "../../../models/ContentDto";

@Component({
  selector: 'app-activity',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  @Input() activity: ActivityDto;
  @ViewChild('addModal') private addModalComponent: ModalComponent;
  @ViewChild('editModal') private editModalComponent: ModalComponent;
  @ViewChild('deleteModal') private deleteModalComponent: ModalComponent;

  page: number = 1;
  isLoading = false;
  selectedActivity: ActivityDto;
  activities: ActivityDto[] = [];
  form: FormGroup;
  modalConfig: ModalConfig = {
    modalTitle: "undefined",
    disableCloseButton() {
      return true;
    }, disableDismissButton() {
      return true;
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
  };

  constructor(private activitiesService: ActivitiesService,
              private fb: FormBuilder,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.activitiesService.getActivities().subscribe(
      (activities: ActivityDto[]) => {
        this.activities = activities;
        this.isLoading = false;
      });
  }

  private createForm(activity: ActivityDto) {
    const content: ContentDto[] = [];

    if (activity != null) {
      this.form = this.fb.group({
        activityName: new FormControl(activity.activityName, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        content: new FormControl(content),
        created: new FormControl(activity.created),
        id: new FormControl(activity.id)
      });
    } else {
      this.form = this.fb.group({
        activityName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        content: new FormControl(content),
        created: new FormControl(new Date())
      });
    }
  }

  onDismiss(modal: string) {
    (modal == 'addModal') ? this.addModalComponent.dismiss()
      : (modal == 'editModal') ? this.editModalComponent.dismiss()
        : (modal == 'deleteModal') ? this.deleteModalComponent.dismiss()
          : alert('error');
  }

  async openAddModal() {
    this.createForm(null);
    this.modalConfig = {
      modalTitle: "Add activity",
      hideCloseButton() {
        return true;
      },
      hideDismissButton() {
        return true;
      }
    };
    return await this.addModalComponent.open();
  }

  onAddSubmit() {
    this.isLoading = true;
    this.activitiesService.addActivity(this.form.value).subscribe(activity => {
      this.activities.push(activity);
      this.showSuccess(activity.activityName, 'Successfully added')
    });
    this.addModalComponent.close();
    this.isLoading = false;
  }

  async openEditModal(activity: ActivityDto) {
    this.createForm(activity);
    this.modalConfig = {
      modalTitle: "Edit activity", hideCloseButton() {
        return true;
      }, hideDismissButton() {
        return true;
      }
    };
    return await this.editModalComponent.open();
  }

  onEditSubmit() {
    this.isLoading = true;
    this.activitiesService.editActivity(this.form.value).subscribe(activity => {
      this.activities.find(item => item.id == activity.id).activityName = activity.activityName;
      this.showSuccess(activity.activityName, 'Successfully edited');
    });
    this.editModalComponent.close();
    this.isLoading = false;
  }

  async openDeleteModal(activity: ActivityDto) {
    this.selectedActivity = activity;
    this.modalConfig = {
      modalTitle: "Are you sure to delete?", hideCloseButton() {
        return true;
      }, hideDismissButton() {
        return true;
      }
    };
    return await this.deleteModalComponent.open();
  }

  onDelete() {
    this.isLoading = true;
    this.activitiesService.deleteActivity(this.selectedActivity.id).subscribe(() => {
      this.showSuccess(this.selectedActivity.activityName, 'Successfully deleted');
    });
    this.activities = this.activities.filter(item => item !== this.selectedActivity);
    this.deleteModalComponent.close();
    this.isLoading = false;
  }

  showSuccess(message: string, title: string) {
    this.toastr.success(message, title);
  }
}

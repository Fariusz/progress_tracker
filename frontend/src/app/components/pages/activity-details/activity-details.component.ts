import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivityDto} from "../../../models/ActivityDto";
import {ActivitiesService} from "../activities/activities.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ModalComponent} from "../../modal/modal.component";
import {ModalConfig} from "../../modal/modal.config";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ContentDto} from "../../../models/ContentDto";
import {ContentService} from "../content/content.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {
  @ViewChild('modal') private modalComponent: ModalComponent;

  id: number;
  activity: ActivityDto = null;
  content: ContentDto[] = [];
  isLoading = false;
  modalConfig: ModalConfig;
  form: FormGroup;

  constructor(private modalService: NgbModal,
              private fb: FormBuilder,
              private contentService: ContentService,
              private activitiesService: ActivitiesService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'));

    this.contentService.getActivityContent(this.id).subscribe(
      (content: ContentDto[]) => {
        this.isLoading = false;
        this.content = content;
      });
  }

  private createForm(content: ContentDto) {
    if (content != null) {
      this.form = this.fb.group({
        content: new FormControl(content.content, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
        created: new FormControl(content.created),
        id: new FormControl(content.id)
      });
    } else {
      this.form = this.fb.group({
        activityId: new FormControl(this.id),
        content: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
        created: new FormControl(new Date())
      });
    }
  }

  async openModal() {
    this.createForm(null);
    this.modalConfig = {
      closeButtonLabel: "Ok",
      dismissButtonLabel: "Dismiss",
      modalTitle: "Add entry",
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
    console.log(this.form.value);
    this.contentService.addContent(this.form.value).subscribe(content => {
      this.content.push(content);
    });
    this.modalComponent.close();
  }

  onDismiss(){
    this.modalComponent.dismiss();
  }
}

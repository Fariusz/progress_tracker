import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivitiesService} from "../activities/activities.service";
import {ActivatedRoute} from "@angular/router";
import {ModalComponent} from "../../modal/modal.component";
import {ModalConfig} from "../../modal/modal.config";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ContentDto} from "../../../models/ContentDto";
import {ContentService} from "./content.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {BaseChartDirective} from "angular-bootstrap-md";

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {
  @ViewChild('addModal') private addModalComponent: ModalComponent;
  @ViewChild('editModal') private editModalComponent: ModalComponent;
  @ViewChild('deleteModal') private deleteModalComponent: ModalComponent;

  page: number = 1;
  id: number;
  content: ContentDto[] = [];
  selectedContent: ContentDto;
  isLoading = false;
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

  constructor(private modalService: NgbModal,
              private fb: FormBuilder,
              private contentService: ContentService,
              private activitiesService: ActivitiesService,
              private route: ActivatedRoute,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'));

    this.contentService.getActivityContent(this.id).subscribe((content: ContentDto[]) => {
        this.content = content;
        this.isLoading = false;
      });
  }

  private createForm(content: ContentDto) {
    if (content != null) {
      this.form = this.fb.group({
        content: new FormControl(content.content, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
        created: new FormControl(content.created),
        id: new FormControl(content.id)
      });
    } else {
      this.form = this.fb.group({
        activityId: new FormControl(this.id),
        content: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
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
      closeButtonLabel: "Ok",
      dismissButtonLabel: "Dismiss",
      modalTitle: "Add entry", hideCloseButton() {return true;}, hideDismissButton() {return true;}
    }
    return await this.addModalComponent.open()
  }

  onAddSubmit() {
    this.isLoading = true;
    this.contentService.addContent(this.form.value).subscribe(content => {
/*
      this.content.push(content);
*/
      //Concat to create new array to get onChanges in chart works.
      this.content = this.content.concat([content]);

      this.showSuccess(content.content,'Successfully added');
    });
    this.addModalComponent.close();
    this.isLoading = false;
  }

  async openEditModal(content: ContentDto) {
    this.createForm(content);
    this.modalConfig = {
      closeButtonLabel: "Ok",
      dismissButtonLabel: "Dismiss",
      modalTitle: "Edit entry", hideCloseButton() {return true;}, hideDismissButton() {return true;}
    }
    return await this.editModalComponent.open()
  }

  onEditSubmit() {
    this.isLoading = true;
    this.contentService.editContent(this.form.value).subscribe(content => {
      this.content.find(item => item.id == content.id).content = content.content;
      this.showSuccess(content.content,'Successfully edited');
    });
    this.editModalComponent.close();
    this.isLoading = false;
  }

  async openDeleteModal(content: ContentDto) {
    this.selectedContent = content;
    this.modalConfig = {
      modalTitle: "Are you sure?",
      hideCloseButton() {return true;}, hideDismissButton() {return true;}
    };
    return await this.deleteModalComponent.open();
  }

  onDelete() {
    this.isLoading = true;
    this.contentService.deleteContent(this.selectedContent.id).subscribe(() => {
      this.content = this.content.filter(item => item !== this.selectedContent);
      this.showSuccess(this.selectedContent.content,'Successfully deleted');
    });
    this.deleteModalComponent.close();
    this.isLoading = false;
  }

  showSuccess(message: string, title: string) {
    this.toastr.success(message, title);
  }
}

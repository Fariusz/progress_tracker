import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivitiesService} from "../activities/activities.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ModalComponent} from "../../modal/modal.component";
import {ModalConfig} from "../../modal/modal.config";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ContentDto} from "../../../models/ContentDto";
import {ContentService} from "./content.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {ActivityDto} from "../../../models/ActivityDto";
import { faArrowDown, faArrowAltCircleDown, faArrowAltCircleLeft, faArrowAltCircleRight, faArrowCircleDown,faArrowCircleLeft, faArrowCircleRight , faArrowCircleUp , faArrowUp, faArrowsAlt ,  faArrowsAltH, faArrowsAltV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {

  //Icons
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;

  //Fields
  isTraining: boolean;
  page: number = 1;
  id: number;
  activity: ActivityDto;
  content: ContentDto[] = [];
  editedContent: ContentDto[] = [];
  selectedContent: ContentDto;
  isLoading = false;

  constructor(private modalService: NgbModal,
              private fb: FormBuilder,
              private contentService: ContentService,
              private activitiesService: ActivitiesService,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.isTraining = Boolean(this.router.url.includes('trainings'));
    this.isLoading = true;
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'));

    this.contentService.getActivityContent(this.id).subscribe((content: ContentDto[]) => {
      this.content = content.sort((a,b) => a.created > b.created ? -1 : 1 );
      this.editedContent = content;
      this.isLoading = false;
    });

    this.activitiesService.getActivity(this.id).subscribe(
      activity => {
        this.activity = activity;
      }
    );

  }

  //Toaster
  showSuccess(message: string, title: string) {
    this.toastr.success(message, title);
  }
  showError(message: string, title: string) {
    this.toastr.error(message, title);
  }

  //Chart data
  setDataRange(range: number){
    if(range == -1) {
      this.editedContent = this.content;
    }
    else if(range > 0) {

      var date = new Date();
      date.setDate(date.getDate() - range);

      this.editedContent = this.content.filter(item => {
        if(new Date(item.created) > date){
          return item;
        }
      })
    }
    else{
      this.showError('Spróbuj ponownie później.', 'Nieznany błąd');
    }
    if(this.editedContent.length < 1){
      this.showError('Brak wpisów w podanym zakresie.', 'Ups');
      this.editedContent = this.content;
    }
  }

  //Modal
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

  @ViewChild('addModal') private addModalComponent: ModalComponent;
  @ViewChild('editModal') private editModalComponent: ModalComponent;
  @ViewChild('deleteModal') private deleteModalComponent: ModalComponent;

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
      /*
            modalTitle: "Add entry", hideCloseButton() {
      */
      modalTitle: "Dodaj nowy wpis", hideCloseButton() {
        return true;
      }, hideDismissButton() {
        return true;
      }
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
      this.editedContent = this.content;
      /*
            this.showSuccess(content.content, 'Successfully added');
      */
      this.showSuccess(content.content, 'Dodano pomyślnie');
    });
    this.addModalComponent.close();
    this.isLoading = false;
  }

  async openEditModal(content: ContentDto) {
    this.createForm(content);
    this.modalConfig = {
      closeButtonLabel: "Ok",
      dismissButtonLabel: "Dismiss",
      modalTitle: "Edytuj wpis", hideCloseButton() {
        return true;
      }, hideDismissButton() {
        return true;
      }
    }
    return await this.editModalComponent.open()
  }

  onEditSubmit() {
    this.isLoading = true;
    this.contentService.editContent(this.form.value).subscribe(content => {
      //Workaround to get new array to trigger ngOnChanges in chart component
      let temp = this.content;
      temp.find(item => item.id == content.id).content = content.content;
      temp.find(item => item.id == content.id).repetitions = content.repetitions;
      this.content = [];
      this.content = this.content.concat(temp);
      this.editedContent = this.content;
      /*
            this.content.find(item => item.id == content.id).content = content.content;
      */
      this.showSuccess(content.content, 'Edytowano pomyślnie');
    });
    this.editModalComponent.close();
    this.isLoading = false;
  }

  async openDeleteModal(content: ContentDto) {
    this.selectedContent = content;
    this.modalConfig = {
      /*
            modalTitle: "Are you sure want to delete?",
      */
      modalTitle: "Czy napewno chcesz usunąć?",
      hideCloseButton() {
        return true;
      }, hideDismissButton() {
        return true;
      }
    };
    return await this.deleteModalComponent.open();
  }

  onDelete() {
    this.isLoading = true;
    this.contentService.deleteContent(this.selectedContent.id).subscribe(() => {
      this.content = this.content.filter(item => item !== this.selectedContent);
      this.editedContent = this.content;
      this.showSuccess(this.selectedContent.content, 'Usunięto pomyślnie');
    });
    this.deleteModalComponent.close();
    this.isLoading = false;
  }

  //Form
  form: FormGroup;

  get inputContent() { return this.form.get('content'); }
  get inputRepetitions() { return this.form.get('repetitions'); }

  private createForm(content: ContentDto) {
    if(this.isTraining){
      if (content != null) {
        this.form = this.fb.group({
          content: new FormControl(content.content, [
            Validators.required,
            Validators.min(0.1),
            Validators.max(1000)]),
          repetitions: new FormControl(content.repetitions,[
            Validators.required,
            Validators.min(0.1),
            Validators.max(100)]),
          created: new FormControl(content.created),
          id: new FormControl(content.id)
        });
      }
      else {
        this.form = this.fb.group({
          activityId: new FormControl(this.id),
          content: new FormControl(null, [
            Validators.required,
            Validators.min(0.1),
            Validators.max(1000)]),
          repetitions: new FormControl(null, [
            Validators.required,
            Validators.min(0.1),
            Validators.max(100)]),
          created: new FormControl(new Date())
        });
      }
    }
    else if(!this.isTraining){
      if (content != null) {
        this.form = this.fb.group({
          content: new FormControl(content.content, [
            Validators.required,
            Validators.min(0.1),
            Validators.max(1000)]),
          created: new FormControl(content.created),
          id: new FormControl(content.id)
        });
      }
      else {
        this.form = this.fb.group({
          activityId: new FormControl(this.id),
          content: new FormControl(null, [
            Validators.required,
            Validators.min(0.1),
            Validators.max(1000)]),
          created: new FormControl(new Date())
        });
      }
    }
  }

  //Arrows in table flags
  isClickedContent: boolean = false;
  isClickedRepetitions: boolean = false;
  isClickedCreated: boolean = false;

  clickedSort(thing: string){
    if(thing === 'content'){
      this.isClickedContent = !this.isClickedContent;
      this.isClickedRepetitions = false;
      this.isClickedCreated = false;
    }
    else if(thing === 'repetitions'){
      this.isClickedContent = false;
      this.isClickedRepetitions = !this.isClickedRepetitions;
      this.isClickedCreated = false;
    }
    else if(thing === 'created'){
      this.isClickedContent = false;
      this.isClickedRepetitions = false;
      this.isClickedCreated = !this.isClickedCreated;
    }
  }
}

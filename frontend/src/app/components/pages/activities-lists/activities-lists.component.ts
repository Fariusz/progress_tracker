import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivitiesListsService} from "./activities-lists.service";
import {ActivityListDto} from "../../../models/ActivityListDto";
import {ModalComponent} from "../../modal/modal.component";
import {ModalConfig} from "../../modal/modal.config";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-activities-lists',
  templateUrl: './activities-lists.component.html',
  styleUrls: ['./activities-lists.component.css']
})
export class ActivitiesListsComponent implements OnInit {
  faEllipsisV = faEllipsisV;
  page: number = 1;
  isLoading = false;
  lists: ActivityListDto[] = [];

  constructor(private listService: ActivitiesListsService,
              private fb: FormBuilder,
              private toastr: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.listService.getLists().subscribe((lists: ActivityListDto[]) => {
      this.lists = lists;
      this.isLoading = false;
    });
  }

  stopPropagation(event){
    event.stopPropagation();
  }

  //Form
  form: FormGroup;

  private createForm(list: ActivityListDto) {

    if (list != null) {
      this.form = this.fb.group({
        listName: new FormControl(list.listName, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        created: new FormControl(list.created),
        id: new FormControl(list.id)
      });
    } else {
      this.form = this.fb.group({
        listName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        created: new FormControl(new Date())
      });
    }
  }

  //Modal
  selectedList: ActivityListDto;

  @ViewChild('addModal') private addModalComponent: ModalComponent;
  @ViewChild('editModal') private editModalComponent: ModalComponent;
  @ViewChild('deleteModal') private deleteModalComponent: ModalComponent;

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

  onDismiss(modal: string) {
    (modal == 'addModal') ? this.addModalComponent.dismiss()
      : (modal == 'editModal') ? this.editModalComponent.dismiss()
        : (modal == 'deleteModal') ? this.deleteModalComponent.dismiss()
          : alert('błąd');
  }

  async openAddModal() {
    this.createForm(null);
    this.modalConfig = {
      /*
            modalTitle: "Add",
      */
      modalTitle: "Dodaj nową listę",
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
    let tmpList: ActivityListDto = this.form.value;
    if(this.router.url.includes('trainings')){
      tmpList.training = true;
    }
    this.listService.addList(tmpList).subscribe(list => {
      this.lists.push(list);
      /*
            this.showSuccess(activity.activityName, 'Successfully added')
      */
      this.showSuccess(list.listName, 'Pomyślnie dodano')
    });
    this.addModalComponent.close();
    this.isLoading = false;
  }

  async openEditModal(list: ActivityListDto) {
    this.createForm(list);
    this.modalConfig = {
      /*
            modalTitle: "Edit activity", hideCloseButton() {
      */
      modalTitle: "Edycja", hideCloseButton() {
        return true;
      }, hideDismissButton() {
        return true;
      }
    };
    return await this.editModalComponent.open();
  }

  onEditSubmit() {
    this.isLoading = true;
    this.listService.editList(this.form.value).subscribe(list => {
      this.lists.find(item => item.id == list.id).listName = list.listName;
      /*
            this.showSuccess(activity.activityName, 'Successfully edited');
      */
      this.showSuccess(list.listName, 'Edytowano pomyślnie');
    });
    this.editModalComponent.close();
    this.isLoading = false;
  }

  async openDeleteModal(list: ActivityListDto) {
    this.selectedList = list;
    this.modalConfig = {
      /*
            modalTitle: "Are you sure want to delete?", hideCloseButton() {
      */
      modalTitle: "Czy napewno chcesz usunąć?", hideCloseButton() {
        return true;
      }, hideDismissButton() {
        return true;
      }
    };
    return await this.deleteModalComponent.open();
  }

  onDelete() {
    this.isLoading = true;
    this.listService.deleteList(this.selectedList.id).subscribe(() => {
      /*
            this.showSuccess(this.selectedActivity.activityName, 'Successfully deleted');
      */
      this.showSuccess(this.selectedList.listName, 'Pomyślnie usunięto');
    });
    this.lists = this.lists.filter(item => item !== this.selectedList);
    this.deleteModalComponent.close();
    this.isLoading = false;
  }

  //Toaster
  showSuccess(message: string, title: string) {
    this.toastr.success(message, title);
  }
}

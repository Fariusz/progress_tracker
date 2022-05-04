import {ActivityDto} from "./ActivityDto";

export class ActivityListDto {

  private _id: bigint;
  private _listName: string;
  private _training: boolean;
  private _created: Date;
  private _activities: Array<ActivityDto>

  constructor(id: bigint, listName: string, training: boolean, created: Date, activities: Array<ActivityDto>) {
    this._id = id;
    this._listName = listName;
    this._training = training;
    this._created = created;
    this._activities = activities;
  }

  get id(): bigint {return this._id;}
  set id(value: bigint) {this._id = value;}
  get listName(): string {return this._listName;}
  set listName(value: string) {this._listName = value;}
  get training(): boolean {return this._training;}
  set training(value: boolean) {this._training = value;}
  get created(): Date {return this._created;}
  set created(value: Date) {this._created = value;}
  get activities(): Array<ActivityDto> {return this._activities;}
  set activities(value: Array<ActivityDto>) {this._activities = value;}
}

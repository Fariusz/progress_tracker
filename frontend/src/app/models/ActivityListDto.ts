import {ActivityDto} from "./ActivityDto";

export class ActivityListDto {

  constructor(id: bigint, listName: string, training: boolean, created: Date, activities: Array<ActivityDto>) {
    this._id = id;
    this._listName = listName;
    this._training = training;
    this._created = created;
    this._activities = activities;
  }

  private _id: bigint;

  get id(): bigint {
    return this._id;
  }

  set id(value: bigint) {
    this._id = value;
  }

  private _listName: string;

  get listName(): string {
    return this._listName;
  }

  set listName(value: string) {
    this._listName = value;
  }

  private _training: boolean;

  get training(): boolean {
    return this._training;
  }

  set training(value: boolean) {
    this._training = value;
  }

  private _created: Date;

  get created(): Date {
    return this._created;
  }

  set created(value: Date) {
    this._created = value;
  }

  private _activities: Array<ActivityDto>

  get activities(): Array<ActivityDto> {
    return this._activities;
  }

  set activities(value: Array<ActivityDto>) {
    this._activities = value;
  }
}

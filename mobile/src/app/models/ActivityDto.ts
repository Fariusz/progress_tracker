import {ContentDto} from "./ContentDto";

export class ActivityDto {

  constructor(id: bigint, activityName: string, created: Date, content: Array<ContentDto>) {
    this._id = id;
    this._activityName = activityName;
    this._created = created;
    this._content = content;
  }

  private _id: bigint;

  get id(): bigint {
    return this._id;
  }

  set id(value: bigint) {
    this._id = value;
  }

  private _activityName: string;

  get activityName(): string {
    return this._activityName;
  }

  set activityName(value: string) {
    this._activityName = value;
  }

  private _created: Date;

  get created(): Date {
    return this._created;
  }

  set created(value: Date) {
    this._created = value;
  }

  private _content: Array<ContentDto>

  get content(): Array<ContentDto> {
    return this._content;
  }

  set content(value: Array<ContentDto>) {
    this._content = value;
  }
}
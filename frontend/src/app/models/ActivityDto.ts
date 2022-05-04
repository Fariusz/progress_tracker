import {ContentDto} from "./ContentDto";

export class ActivityDto {

  private _id: bigint;
  private _listId: bigint;
  private _activityName: string;
  private _created: Date;
  private _content: Array<ContentDto>

  constructor(id: bigint, listId: bigint, activityName: string, created: Date, content: Array<ContentDto>) {
    this._id = id;
    this._listId = listId;
    this._activityName = activityName;
    this._created = created;
    this._content = content;
  }

  get id(): bigint {return this._id;}
  set id(value: bigint) {this._id = value;}
  get listId(): bigint {return this._listId;}
  set listId(value: bigint) {this._listId = value;}
  get activityName(): string {return this._activityName;}
  set activityName(value: string) {this._activityName = value;}
  get created(): Date {return this._created;}
  set created(value: Date) {this._created = value;}
  get content(): Array<ContentDto> {return this._content;}
  set content(value: Array<ContentDto>) {this._content = value;}
}

export class ContentDto {

  constructor(id?: bigint, activityId?: bigint, content?: string, created?: Date) {
    this._id = id;
    this._activityId = activityId;
    this._content = content;
    this._created = created;
  }

  private _id: bigint;

  get id(): bigint {
    return this._id;
  }

  set id(value: bigint) {
    this._id = value;
  }

  private _activityId: bigint;

  get activityId(): bigint {
    return this._activityId;
  }

  set activityId(value: bigint) {
    this._activityId = value;
  }

  private _content: string;

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  private _created: Date;

  get created(): Date {
    return this._created;
  }

  set created(value: Date) {
    this._created = value;
  }
}

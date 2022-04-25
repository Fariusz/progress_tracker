export class ContentDto {

  private _id: bigint;
  private _activityId: bigint;
  private _content: string;
  private _repetitions: string;
  private _created: Date;

  constructor(id?: bigint, activityId?: bigint, content?: string, repetitions?: string, created?: Date) {
    this._id = id;
    this._activityId = activityId;
    this._content = content;
    this._repetitions = repetitions;
    this._created = created;
  }

  get id(): bigint {return this._id;}
  set id(value: bigint) {this._id = value;}
  get activityId(): bigint {return this._activityId;}
  set activityId(value: bigint) {this._activityId = value;}
  get content(): string {return this._content;}
  set content(value: string) {this._content = value;}
  get repetitions(): string {return this._repetitions;}
  set repetitions(value: string) {this._repetitions = value;}
  get created(): Date {return this._created;}
  set created(value: Date) {this._created = value;}
}

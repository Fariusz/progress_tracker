export class User{

  constructor(
    public username: string,
    private _token: string | null,
    private _tokenExpirationDate: Date
  ) {}

  get token(){
    if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
      return null;
    }
    else{
      return this._token;
    }
  }
}

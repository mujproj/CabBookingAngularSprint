import { Cab } from './cab';

export class Driver{
    public constructor(public username:string, public password:string, public mobileNumber:string, public email:string, public licenseNo:string, public cab:Cab, public rating:number){}
}
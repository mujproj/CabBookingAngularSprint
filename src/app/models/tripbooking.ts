import { Driver } from './driver';

export class TripBooking{
    public constructor(public customerId: number, public driver:Driver, public fromLocation:string, public toLocation:string, public fromDateTime:string, public toDateTime:string, public status:boolean, public distanceInKm:number, public bill:number){}
}
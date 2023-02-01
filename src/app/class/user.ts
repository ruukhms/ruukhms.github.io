export class User {
    id!: number;
    fullname!:string;
    company!:string;
    email!:string;
    typeofdonation!:string;
    phone!:string;
    placedonation!:number;
    

    constructor(id: number,fullname: string, company: string,email: string,typeofdonation: string,phone: string,placedonation: number){
        this.id=id;
        this.fullname=fullname;
        this.company=company;
        this.email=email;
        this.typeofdonation=typeofdonation;
        this.phone=phone;
        this.placedonation=placedonation;
      

    }


}


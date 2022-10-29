export class Tecnologia {
    id? : number;
    nombreT : string;
    descripcionT : string;
    porcentajeT: number;

    constructor(nombreT:string, descripcionT:string, porcentajeT: number){
        this.nombreT= nombreT;
        this.descripcionT = descripcionT;
        this.porcentajeT = porcentajeT;
    }
}

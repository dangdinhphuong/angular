export class Equipment {
    id: number;
    name: string;
    id_Cate_Equipment:Number;
    id_level:Number;
    price:Number;
    method:String;
    constructor(
        id: number,
        name:string,         
        id_Cate_Equipment:Number,
        id_level:Number,
        price:Number,
        method:String) { 
        this.id = id;
        this.name = name;
        this.id_Cate_Equipment=id_Cate_Equipment;
        this.id_level=id_level;
        this.price=price;
        this.method=method;
    }
}
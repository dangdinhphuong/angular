export class gen {
    id: number;
    name: string;
    images:String;
    id_level:Number;
    id_cate_gen:Number;
    method:String;
    constructor(
        id: number,
        name:string,         
        images:String,
        id_level:Number,
        id_cate_gen:Number,
        method:String) { 
        this.id = id;
        this.name = name;
        this.images=images;
        this.id_level=id_level;
        this.id_cate_gen=id_cate_gen;
        this.method=method;
    }
}

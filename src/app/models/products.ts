import { Skill } from "./skill";
import { Specifications } from "./specifications";

export class Products {
    id:Number;
    name: string;
    price: Number;
    categoryId: Number;
    image: String;
    description: String;
    status: Number;
    sale: Number;
    detail: String;
    supplierId: Number;

    // lấy ở bảng category đúng không
   
// mang string mang mang
    constructor(
        id:Number,
        name: string,
        price: Number,
        categoryId: Number,    
        image: String,
        description: String,
        status: Number,
        sale: Number,
        detail: String,
        supplierId: Number,
       
     
        
        )
        
        {
            this.id=id;
            this.name=name
            this.price= price;
            this.categoryId= categoryId;          
            this.image= image;
            this.description= description;
            this.status= status;
            this.sale= sale;
            this.detail= detail;
            this.supplierId= supplierId;
           
        }

        // "id":1,
        // "id_moster":1,
        // "Public_physics":173,
        // "permission":0,
        // "Max_HP":3592,
        // "armor":141,
        // "magic_armor":80,
        // "Attack_speed":0,
        // "Cooldown_restriction":0,
        // "critical_rate":0,

        // "Speed_running":360,
        // "Heal":50,
        // "Energy_recovery":15,
        // "Range_of_attack":"gần"
}
// id
// name    tên
// image  ảnh avatar
// skin   trang phục
// story tiểu sử
// spells(skill)  kĩ năng


export class Skill {
    id:Number;
    id_moster:Number;
    name:String;
    cooldown:Number;
    consumption:Number;
    images:String;
    detail:String
    constructor(id:Number,name:String ,cooldown:Number,id_moster:Number,consumption:Number,images:String,detail:String){
        this.id=id;
        this.id_moster=id_moster;
        this.name=name;
        this.cooldown=cooldown;
        this.consumption=consumption;
        this.detail=detail;
        this.images=images
    }
}
// id	
// name	
// Hồi chiêu	
// tiêu hao	
// detail	
// id_moster	

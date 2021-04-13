
export class Auxiliary {
    id: number;
    name: string;
    images:String;
    content:String;
    link_video:String;

    constructor(
        id: number,
        name:string,         
        images:String,
        content:String,
        link_video:String) { 
        this.id = id;
        this.name = name;
        this.images=images;
        this.content=content;
        this.link_video=link_video;
        
    }
}

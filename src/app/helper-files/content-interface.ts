export interface Content{
  id:number;
  title:string;
  description :string;
  creator:string;
  imgURL?: string;
  type?: string;
  tags?: string[]; // alternative way : Array<string>
}

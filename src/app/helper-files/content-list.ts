// class named ContentList
import  {Content} from "./content-interface";

export class ContentList {
  private contentArray: Content[];

  constructor() {
    this.contentArray = [];
  }

  getterContentArray() {
    return this.contentArray;
  }

  // A function that adds 1 Content item to the end of the array
  addContentItem(item: Content) {
    this.contentArray.push(item);
  }

  getNumberOfItems(){
    return this.contentArray.length;
  }

  getItemByIndex (indexNumber : number){
    // [sport1, sport2]
    const sport = this.contentArray[indexNumber];
    return `Id: ${sport.id}, Title: ${sport.title}, Description: ${sport.description}, Creator: ${sport.creator} `
  }
}


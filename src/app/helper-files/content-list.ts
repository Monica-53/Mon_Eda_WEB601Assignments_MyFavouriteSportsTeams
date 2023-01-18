// class named ContentList
import  {Content} from "./content-interface";

class ContentList {
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


}


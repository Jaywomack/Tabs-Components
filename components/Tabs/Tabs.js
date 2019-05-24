class TabLink {
  constructor(element) { // #3 array is passed into the class 1 iteration at a time
    this.element = element; // #4 set element to this.element

    this.data = this.element.dataset.tab; // #5 sets data to this.element.dataset.tab bringing in the data set from html of the corresponding data tab numbers that both elements have <--------this is the connection

    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);// #6 setting this.item grabs all of datatabs this .data that return a number

    this.tabItem = new TabItem(this.itemElement);// #7 Creating a tabitem class item to reference

    this.element.addEventListener('click', () => this.select(event));//#11 fire the select function

  };

  select(event) {
    let links1 = document.querySelectorAll('.tabs-link');

    links1 = Array.from(links1);// #12 using a loop to fire the method on the other items in the card and remove the items from the other cards
    for (let i = 0; i < links1.length; i++) {
      links1[i].classList.remove('tabs-link-selected');
    }

    this.element.classList.add('tabs-link-selected');// #13 adding the tablinks selected element 

    this.tabItem.select();// #14 fires tab item select which will fire everything

  }
}

class TabItem { //#8
  constructor(element) {//#8 passed in element
    this.element = element;//#8
  }


  select(event) {
    let items = document.querySelectorAll('.tabs-item'); //#9 a new variable to set items value
    //
    items = Array.from(items).forEach(item => item.classList.remove('tabs-item-selected'));//#10 taking off and adding back the selected class
    this.element.classList.add('tabs-item-selected');// #10
  }
}



let links = document.querySelectorAll('.tabs-link');// #1 set tab links to links

links = Array.from(links).map(element => new TabLink(element)); // #2 make an array and the use .map to pass into the Class Tablink

links[0].select(event);
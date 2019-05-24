class TabLink { // 3. Our new class that will allow us to link the tabs with content items/cards via the data attribute
    constructor(element) {  // 4. we pass in our iterations of our node list from the "new Tablink" below; it's all the tabs to select passed in as 'element'
  
      this.element = element; // 5. each individual element (our tabs) can be separately referenced. (When we 'click' on one the program will know which one)
      
      this.data = this.element.dataset.tab; // 6. Our data attribute - it's value (this.data) will be what the data-tab value of the tab/element we click on.
      
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`); // 7. Declares a variable for content sections to be display/paired with their data buddies. Selecting the class of the element and passing 'data-tab${w/dynamic code} so the number value corresponds with the content to be selected
  
      this.tabItem = new TabItem(this.itemElement);// 8. create the content item variable (tabItem) and make a new class from it. Seems to contradict the process from earlier, but the class will be defined on the first compiler pass, and then created inside TabLink class on the second pass 
      
      element.addEventListener('click', () => this.linkSelect());// 11. Adds eventListener to the TabLink for purpose of calling method on TabItem (changes class of content card to display block or none)
    };
  
    linkSelect() { // 12. Event listener declared
      
      let links = document.querySelectorAll('.tabs-link');// 13. Grabs all elements with class .tabs-link as a node list. The things we'll click to change the content
  
      links.forEach(item => item.classList.remove('tabs-link-selected')); // 14. loops over the list and removes the class .tabs-link-selected from all items. Clean slate
  
      this.element.classList.add('tabs-link-selected');// 15. Adds the 'selected' class to the item clicked on to change its style background from red to white. Superficial, but important for UX
      
      this.tabItem.itemSelect(); // 16. Calls the TabItem method on the content div associated with the tab that gets clicked
    }
  }
  
  class TabItem {
    constructor(element) { // 9. passing in our tabItem variable from above - it's all of our content/tab-item divs from the html
    
      this.element = element; // 10. Allows our content divs to be differentiated by the tab that gets clicked referencing its corresponding content/tab-item via our data attribute linking them both
    }
  
    itemSelect() { // 17. Method for changing class of element to be displayed
    
      const items = document.querySelectorAll('.tabs-item');// 18. Grab all the .tabs-item elements in a node list
  
      items.forEach( item => item.classList.remove('tabs-item-selected'))// 19. Loop over/remove the 'selected' class
      
      this.element.classList.add('tabs-item-selected');// 20. Add 'selected' class to content/tab-item to be displayed
    }
  }
  // END HERE
  // START HERE: 
  
  links = document.querySelectorAll('.tabs-link'); // 1. Grab the element to act as a selector tab/ pairs with element that displays content. Returns a node list.
  links.forEach(link => new TabLink(link));// 2. Iterate over the node list and pass each item of it into a "new" class. 
  //**This code must be at the bottom because creating a "new" class instance requires it to already be defined - See class at the top.**
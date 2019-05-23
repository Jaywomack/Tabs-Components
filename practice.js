//Yesterdays Codepen
//Step 3: Because classes are not hoisted, they must be defined above our reference below
class Panel {
    constructor(panel){
      
      // Step 4: Define our attributes, creating a selector for each element we want to add interactivity to.
      this.panelButtons = panel.querySelector('.panel-buttons');
      this.panelBtnOpen = panel.querySelector('.panel-btn-open');
      this.panelBtnClose = panel.querySelector('.panel-btn-close');
      this.panelContent = panel.querySelector('.panel-content');
      this.panelBar = panel.querySelector('.panel-bar');
      
      // Step 5: Add events and 'this' binding so that the function can access the above attributes.
      this.panelButtons.addEventListener('click', this.togglePanel.bind(this));
      
      // Step 5b: Or use an arrow function because they do not have an implicit "this" which needs to be rebound.
      this.panelBar.addEventListener('click', () => this.changeBar());
    }
    
    // Step 6: Add methods
    togglePanel(){    
      // Notise the 'this' binding and how it refers to the attributes in the constructor
      this.panelBtnOpen.classList.toggle('hide-btn');
      this.panelBtnClose.classList.toggle('hide-btn');
      this.panelContent.classList.toggle('toggle-on');
      event.stopPropagation();
    }
    changeBar(){
      this.panelBar.style.backgroundColor = "dodgerblue";
    }
  }
  
  // Step 1 selected the panels
  const panels = document.querySelectorAll('.panel');
  // Step 2 iterate over the nodelist to create new components using the Panel class
  panels.forEach( panel => new Panel(panel));
  
  
  // Use Array.from() to gain all array methods and use .map() to utilize the class
  // const panels = document.getElementsByClassName('panel')
  
  // const panelsArray = Array.from(panels)
  // console.log(panelsArray);
  
  // panelsArray.map(function(panel){
  //   console.log(panel)
  //   return new Panel(panel)
  // });

  //Todays codepen

  //step3: Define a class that will create a new object
class Link {
    constructor(link) {
      this.link = link;
      // console.log(this.link.dataset.tab);   //the string literal gets the unique tab
      this.content = document.querySelector(`.content[data-tab='${this.link.dataset.tab}'`);
      // console.log(this.content)
      this.content = new Content(this.content)
      
      this.link.addEventListener('click', () => this.linkClick())
    }
    //methods
    linkClick() {
      this.content.toggleContent();
    }
    
  }
  
  class Content{
    constructor(content) {
      this.contentTab = content;
      // console.log(this.contentTab)
    }
    //methods
    toggleContent(){
      this.contentTab.classList.toggle('change');
    }
  }
  
  //Step 1: grab the DOM elements and and store them in new links
  const links = document.querySelectorAll('.link');
  
  //step 2 iterate over the nodeList and create a new object
  links.forEach( function(link) {
  return new Link(link);
  });
  

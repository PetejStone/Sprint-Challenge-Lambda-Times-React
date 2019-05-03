import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: [],
      switch: ''
    };
  }

  componentDidMount() {
    this.setState({
      selected: 'all',
      tabs: tabData,
      cards: cardData,
      switch: false
    })
  }

  

  componentDidUpdate() {
    if (this.state.selected !== this.state.selected) {
      this.setState({
        selected: 'all',
        tabs: tabData,
        cards: cardData
      })
    }
  }

  changeSelected = e => {
    // this function should take in the tab and update the state with the new tab
     const newCardsArray = cardData.filter(card => card.tab === e.target.textContent.toLowerCase())
     const newTab = e.target.textContent.toLowerCase()
     console.log(newCardsArray)
    
     if (newTab === 'all') {
      this.setState({
        selected: newTab,
        cards: cardData
      })
     } else {
     this.setState({
      selected: newTab,
      cards: newCardsArray
    })
     }
    
    
    
   
    //this.setState({ cards: newCardsArray
  };

  filterCards = () => {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
    //console.log('step1')
    //console.log(this.state.selected)
    const newCardsArray = this.state.cards.filter(card => card.tab === this.state.selected)
    if (this.state.selected === 'all') {
      this.setState({data: cardData})
    } else {
      this.setState({cards: newCardsArray})
    }
      
  if (this.state.selected === 'all') {
    return this.state.cards
  } else  {
    console.log('testing')
    return this.state.cards
    
  }
  
    
  //this.setState({cards: cardData})
  return this.state.cards
  };

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        
        <Tabs tabs={this.state.tabs} changeSelected={this.changeSelected} />
        <Cards cards={this.state.cards} />
      </div>
    );
  }
}

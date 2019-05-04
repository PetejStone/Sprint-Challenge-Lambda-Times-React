import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Tabs from './Tabs';
import Cards from './Cards';
import styled from 'styled-components'
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


  changeSelected = e => {
    // this function should take in the tab and update the state with the new tab
  
     const newTab = e.target.textContent.toLowerCase()
    
      this.setState({
        selected: newTab
       
      })
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
   
      
  if (this.state.selected === 'all') {
    return this.state.cards
  } else  {
    console.log('testing')
    return this.state.cards.filter(card => card.tab === this.state.selected)
    
    }
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
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}

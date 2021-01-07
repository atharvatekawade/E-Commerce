import React,{ Component } from 'react';
import MenuItem from '../Menu-item/MenuItem'
import './menu.scss'

class Menu extends Component
{
  constructor() {
    super();
    this.state={
      sections:[
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          //size: 'large',
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          //size: 'large',
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          //size: 'large',
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    }
  }
  
  render() {
    return (
      <div className='menu'>
        {this.state.sections.map((section) => <MenuItem key={section.id} title={section.title} image={section.imageUrl} size={section.size} linkUrl={section.linkUrl} />)}
      </div>
    )
  }
}

export default Menu;


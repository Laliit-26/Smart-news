import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsContainer extends Component {
  constructor() {
    super()
    console.log('clicked')
  }
  render() {
    return (
      <div className='container p-5'>
        <h2 className='text-center p-4'>Top Headlines</h2>
        <div className='row'>
          <div className='col-md-4 '>
            <NewsItem
              title='mytitle'
              description='mydesc'
              imgurl='https://cdn.cnn.com/cnnnext/dam/assets/210831034159-lucedale-ms-highway-collapse-super-tease.jpg'
            />
          </div>
          <div className='col-md-4 '>
            <NewsItem
              title='mytitle'
              description='mydesc'
              imgurl='https://cdn.cnn.com/cnnnext/dam/assets/210831034159-lucedale-ms-highway-collapse-super-tease.jpg'
            />
          </div>
          <div className='col-md-4 '>
            <NewsItem
              title='mytitle'
              description='mydesc'
              imgurl='https://cdn.cnn.com/cnnnext/dam/assets/210831034159-lucedale-ms-highway-collapse-super-tease.jpg'
            />
          </div>
        </div>
      </div>
    )
  }
}

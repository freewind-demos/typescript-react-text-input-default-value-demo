//import * as React from 'react'
import React from 'react'

class Hello extends React.Component {
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value)
  }

  render() {
    return <div>
      <div>
        <label>defaultValue:</label>
        <input defaultValue='you can change me' onChange={this.onChange}/>
      </div>
      <div>
        <label>value:</label>
        <input value='you cannot change me' onChange={this.onChange}/>
      </div>
    </div>
  }
}

export default Hello

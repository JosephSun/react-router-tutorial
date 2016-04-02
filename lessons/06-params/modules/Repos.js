import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Repos</h2>

        <ul>
          <li><Link to="repos/reactjs/react-router">React Router</Link></li>
          <li><Link to="/repos/facebook/react">React</Link></li>
        </ul>
        <h2>{this.props.params.repoName}</h2>
      </div>
  )
  }
})

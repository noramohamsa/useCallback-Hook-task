import React from 'react'

function Title() {
  return (
    <div>
    {console.log('title rendering')}
      <h1>This is Use Call Back Hook Task</h1>
    </div>
  )
}

export default React.memo( Title)

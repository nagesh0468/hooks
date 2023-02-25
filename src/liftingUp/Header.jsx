import React from 'react'

function Header() {
    const [count, setCount] = React.useState(0)

  return (
    <div>
        <button count={count} setter={setCount} > increase  </button>
    </div>
  )
}

export default Header
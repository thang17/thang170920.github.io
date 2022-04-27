import React from 'react'
import Header from './home/header'

const WebsiteLayout = (props) => {
  console.log(props)
  return (
   <>
       {/* <header>Header website</header>
       <main>main</main> */}
       {props.children}
       {/* <footer>footer</footer> */}
   </>
  )
}

export default WebsiteLayout
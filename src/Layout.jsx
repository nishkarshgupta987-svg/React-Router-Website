import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout


{/* <Outlet /> React Router DOM ka placeholder hota hai.
     Is jagah par current route ka component render hota hai. */}

{/* <Outlet /> tab use karte hain jab nested routes (child routes) banate ho.
Kab use karna chahiye?

Maan lo tumhari website me Header aur Footer har page par same hain.

Home
About
Contact
Profile

Har page par ye repeat nahi karna chahte:

<>
  <Header />
  <Home />
  <Footer />
</>

Aur

<>
  <Header />
  <About />
  <Footer />
</>

Iske bajay ek Layout bana dete ho:

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
} */}


// Real-life example
// Instagram ya Facebook socho.
// Header aur sidebar har page par same rehte hain.
// Sirf beech ka content change hota hai.
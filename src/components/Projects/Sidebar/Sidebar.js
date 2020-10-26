import React, { useState } from "react"
import ScrollSpy from "react-scrollspy"

import { Sidebar } from "./Sidebar.components"
import { navItems } from "./Data"
import { 
  ListGroupItem,  
} from "reactstrap"

export default (color) => {
  return(
    <Sidebar color={color} className="sticky-top mx-0 px-0" sm="3">
      <ScrollSpy className="list-group" items={['covid-app', 'facebook-clone', 'weather-app', 'mern-app', 'book-library', 'cv-generator', 'netflix-memory-game']} currentClassName="active">
        {navItems.map(navItem => 
          <ListGroupItem action style={{transition: "all .3s ease-in-out"}} tag="a" href={navItem.href}>
            <h4 style={{transition: "all .3s ease"}} className="text-decoration-none">{navItem.name}</h4>
          </ListGroupItem>
          )} 
      </ScrollSpy>
    </Sidebar>
  )
}
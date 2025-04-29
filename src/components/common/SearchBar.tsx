
"use client"
import React from 'react'

type SearchBarProps = {
  serchOpen: boolean
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SearchBar({serchOpen, setSearchOpen}: SearchBarProps ) {
  return (
    <>
      <div className="search-wrap" style={{display: serchOpen ? "block" : "none"}}>
        <div className="search-inner">
          <i className="fas fa-times search-close" id="search-close" onClick={() => setSearchOpen(false)}></i>
          <div className="search-cell">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="search-field-holder">
                <input type="search" className="main-search-input" placeholder="Search..." />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

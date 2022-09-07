import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/header/Header'
import Home from '../components/Home'
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path='*'
          element={
            <>
              <Header
                heading="ERROR 404"
                link1="Return"
                link2="Return"
                direction="/" />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default Router

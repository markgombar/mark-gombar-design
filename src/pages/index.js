import React from "react"
import PropTypes from "prop-types"
import Grid__OneColumn_Fluid from "../components/grids/Grid__OneColumn_Fluid"
import Helmet__Meta from "../components/utility/Helmet__Meta";

export default function Home() {
  return (
      <Grid__OneColumn_Fluid>
          <Helmet__Meta />
       <p>Test</p>
      </Grid__OneColumn_Fluid>
  )
}

Home.defaultProps = {

}

Home.propTypes = {

}
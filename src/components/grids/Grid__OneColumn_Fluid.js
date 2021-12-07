import React from "react"
import PropTypes from "prop-types"
import "../../sass/components/grids/Grid__OneColumn_Fluid.sass"

export default function Grid__OneColumn_Fluid({children}) {
    return (
        <div className="grid__oneColumn-fluid">
            {children}
        </div>
    )
}

Grid__OneColumn_Fluid.propTypes = {
    children: PropTypes.node,
}
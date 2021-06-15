import React from 'react'
import { Route } from 'react-router-dom'
import { routes } from 'routes'

export const RouteComponents = () => {
    return (
        <div>
            {routes.map(({ path, component }, key) => <Route path={path} component={component} key={key} />)}
        </div>
    )
}
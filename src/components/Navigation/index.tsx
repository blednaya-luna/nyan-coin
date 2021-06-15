import clsx from 'clsx'
import { Account } from 'features/Account'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from 'routes'
import { useStyles } from './styles'

export const Navigation = () => {
    const [active, setActive] = useState<number>(0)
    const classes = useStyles()
    return (
        <nav className={classes.root}>
            {routes.map((el, index) => (
                <NavLink
                    key={el.name}
                    strict
                    onClick={() => setActive(index)}
                    className={
                        clsx(
                            classes.navItem,
                            Boolean(index === active) && classes.active
                        )}
                    to={el.path}
                    activeClassName="active">
                    {el.name}
                </NavLink>
            ))}
            <Account />
        </nav>
    )
}
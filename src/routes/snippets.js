import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom'

import {SnippetsList, NewSnippets} from '../components/snippets'

function Snippets() {
    const {path} = useRouteMatch()

    return (
        <Switch>
            <Route exact path={path} component={SnippetsList} />
            <Route path={`${path}/create`} component={NewSnippets} /> 
            {/* <Route path={`${path}/edit/:animeId`} component={EditAnime} />
            <Route path={`${path}/:animeId`} component={AnimeDetails} /> */}
        </Switch>
    )
}

export default Snippets
import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom'

import {AnimeDetails, AnimeList, EditAnime} from '../components/anime'

function Anime() {
    const {path} = useRouteMatch()

    return (
        <Switch>
            <Route exact path={path} component={AnimeList} />
            <Route path={`${path}/create`} component={EditAnime} />
            <Route path={`${path}/edit/:animeId`} component={EditAnime} />
            <Route path={`${path}/:animeId`} component={AnimeDetails} />
        </Switch>
    )
}

export default Anime

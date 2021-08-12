import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom'

import {ReviewList, NewReview} from '../components/review'

function Review() {
    const {path} = useRouteMatch()

    return (
        <Switch>
            <Route exact path={path} component={ReviewList} />
             <Route path={`${path}/create`} component={NewReview} /> 
            {/* <Route path={`${path}/edit/:animeId`} component={EditAnime} />
            <Route path={`${path}/:animeId`} component={AnimeDetails} /> */}
        </Switch>
    )
}

export default Review

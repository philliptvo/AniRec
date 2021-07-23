import React from 'react'
import {Link} from "react-router-dom";
import animeService from '../../services/anime.service'

class AddAnime extends React.Component {
    state = {
        title: '',
        synopsis: '',
        animeType:'',
        airedFrom:'',
        airedTo:'',
        numEpisodes:''
    }

    onChangeHandler = (e) => {
        const value = e.target.value;
        this.setState({
            [e.target.name] : value,
        })
    }

    createHandle = (info) => {
        animeService.createAnime(info)
            .then(() => {
                this.props.history.push({
                    pathname: "/anime"
                })
            })
    }

    render() {
        return(
            <div className="container">
                <h1>Create Anime</h1>
                <br/>
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input onChange={e => this.onChangeHandler(e)}
                               value={this.state.title}
                               type="text" name="title" id="title" className="form-control"
                               placeholder="Title"/>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    <label htmlFor="synopsis" className="col-sm-2 col-form-label">Synopsis</label>
                    <div className="col-sm-10">
                        <textarea onChange={e => this.onChangeHandler(e)}
                               value={this.state.synopsis}
                               rows={5}
                                  name="synopsis" id="synopsis" className="form-control"
                               placeholder="Synopsis"/>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    <label htmlFor="airedfrom" className="col-sm-2 col-form-label">Aired From</label>
                    <div className="col-sm-10">
                        <input onChange={e => this.onChangeHandler(e)}
                               value={this.state.airedFrom}
                               className="form-control"
                               type="date" id="airedfrom" name="airedfrom"/>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    <label htmlFor="airedto" className="col-sm-2 col-form-label">Aired To</label>
                    <div className="col-sm-10">
                        <input
                            onChange={e => this.onChangeHandler(e)}
                               value={this.state.airedTo}
                               className="form-control"
                               type="date" id="airedto" name="airedto"/>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    <label htmlFor="animetype" className="col-sm-2 col-form-label">Anime Type</label>
                    <div className="col-sm-10">
                        <select onChange={e => this.onChangeHandler(e)}
                                value={this.state.role}
                                className="form-control"
                                name="animetype" id="animetype">
                            <option value="TV" selected>TV</option>
                            <option value="MOVIE">MOVIE</option>
                            <option value="OVA">OVA</option>
                        </select>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    <label htmlFor="numEpisodes" className="col-sm-2 col-form-label">Episodes Number</label>
                    <div className="col-sm-10">
                        <input onChange={e => this.onChangeHandler(e)}
                               value={this.state.numEpisodes}
                               type="text" name="numEpisodes" id="numEpisodes" className="form-control"
                               placeholder="numEpisodes"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"/>
                    <div className="col-sm-12">
                        <button className="btn btn-primary form-control"
                                onClick={() => {
                                    this.createHandle(this.state)
                                }}>
                            Create
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddAnime
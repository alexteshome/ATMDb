import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Grid, Image, Dimmer, Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import { getMovies } from "../actions/getMovies";

class MovieList extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.popMovies !== this.props.popMovies) {
      this.props.getMovies();
    }
  }

  posterRows() {
    return this.props.popMovies.map((movie, index) => {
      return (
        <Grid.Column color="black" style={{ padding: 0 }} key={index}>
          <Image
            src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            as={Link}
            to={`${movie.id}`}
          />
        </Grid.Column>
      );
    });
  }
  render() {
    if (this.props.popMovies === undefined) {
      return (
        <div>
          {this.props.error ? (
            <h1 style={{ textAlign: "center", marginTop: "100px" }}>
              {console.log(this.props.error)}
              {this.props.error.message}
            </h1>
          ) : (
            <Dimmer active>
              <Loader size="massive" />
            </Dimmer>
          )}
        </div>
      );
    } else if (this.props.error) {
      return (
        <Grid doubling columns={5} style={{ marginTop: "50px", paddingTop: 0 }}>
          {this.posterRows()}
        </Grid>
      );
    }
  }
}

const mapStateToProps = state => ({
  popMovies: state.movies.popMovies,
  error: state.error
});

export default withRouter(
  connect(
    mapStateToProps,
    { getMovies }
  )(MovieList)
);

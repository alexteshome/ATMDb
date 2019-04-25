import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Segment, Container, Item, Label } from "semantic-ui-react";
import { connect } from "react-redux";

class MovieDetails extends Component {
  render() {
    if (this.props.popMovies === undefined) {
      return <Redirect to="/" />;
    }
    let parts = this.props.match.url.split("/");
    const urlId = parts.pop() || parts.pop();
    const selectedMovie = this.props.popMovies.find(
      movie => movie.id === parseInt(urlId)
    );

    return (
      <Container style={{ marginTop: "50px", padding: "50px" }}>
        <Segment padded="very" raised>
          <Item.Group>
            <Item>
              <Item.Image
                src={`http://image.tmdb.org/t/p/w185/${
                  selectedMovie.poster_path
                }`}
              />

              <Item.Content style={{ fontSize: "1.25em" }}>
                <Item.Header as="a">{selectedMovie.original_title}</Item.Header>
                <Item.Meta style={{ fontWeight: "bold" }}>
                  ({selectedMovie.release_date.split("-")[0]})
                </Item.Meta>
                <Item.Description>{selectedMovie.overview}</Item.Description>
                <Item.Extra>
                  <Label size="large" color="blue">
                    {selectedMovie.vote_average}/10
                  </Label>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  popMovies: state.movies.popMovies
});

export default connect(mapStateToProps)(MovieDetails);

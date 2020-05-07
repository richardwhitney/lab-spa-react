import React, {Component} from "react";
import {Card, Loader, Dimmer, Container} from "semantic-ui-react";
import {connect} from 'react-redux';
import {getNewsItems} from "../redux/actions/dataActions";
import PropTypes from 'prop-types';
import NewsItem from "../components/NewsItem";

class NewsHub extends Component {

  componentDidMount() {
    this.props.getNewsItems();
  }

  render() {
    const {newsItems, loading} = this.props.data;
    let newsList = !loading ? (
      newsItems.map((newsItem) =>
        <NewsItem key={newsItem.newsItemId} newsItem={newsItem}/>
      )
    ) : (
      <Dimmer active inverted>
        <Loader size='large'/>
      </Dimmer>
    );
    return (
      <Container style={{ marginTop: '7em'}}>
        <Card.Group>
          {newsList}
        </Card.Group>
      </Container>
    )
  }
}

NewsHub.propTypes = {
  getNewsItems: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, {getNewsItems})(NewsHub);
import React, {Component} from "react";
import {Card, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";

class NewsItem extends Component {
  render() {
    const {newsItem: {title, body, author, createdAt}} = this.props;
    return (
      <Card fluid>
        <Card.Content header={title}/>
        <Card.Content description={body}/>
        <Card.Content extra>
          <Icon name='user'/>{author}
        </Card.Content>
      </Card>
    )
  }
}

export default NewsItem;
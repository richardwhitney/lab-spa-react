import React, {Component} from "react";
import {Card, Container, Icon} from "semantic-ui-react";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import {connect} from 'react-redux';
import DeleteNewsItem from "./DeleteNewsItem";
import EditNewsItem from "./EditNewsItem";

class NewsItem extends Component {
  render() {
    dayjs.extend(relativeTime)
    const {newsItem: {title, body, author, createdAt, newsItemId}, admin} = this.props;
    return (
      <Card fluid>
        <Card.Content header={title}/>
        <Card.Content description={body}/>
        <Card.Content extra>
          <Container>
            <Icon name='user'/>{author}
            <div className='divider'/>
            <Icon name='calendar'/>{dayjs(createdAt).fromNow()}
          </Container>
        </Card.Content>
        {admin && (
          <Card.Content extra>
            <Container>
              <DeleteNewsItem newsItemId={newsItemId}/>
              <EditNewsItem newsItem={this.props.newsItem}/>
            </Container>
          </Card.Content>
        )}
      </Card>
    )
  }
}

const mapStateToProps = (state) => ({
  admin: state.user.credentials.admin
});

export default connect(mapStateToProps)(NewsItem);
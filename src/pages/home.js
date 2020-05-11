import React, {Component} from "react";
import {Grid, Segment, Popup} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Home extends Component{

  render() {
    return (
      <Grid columns={3}
            padded style={{ marginTop: '7em', height: '100vh'}}
            textAlign='center'>
        <Grid.Row stretched>
          <Grid.Column>
            <Popup content='Test hub tool tip' trigger={
              <Segment as={Link}
                       to={'/testhub'}
                       inverted color='red'
                       padded style={{marginTop: '1em'}}
                       size='massive'
              >
                Test Guide
              </Segment>}
            />

          </Grid.Column>
          <Grid.Column>
            <Popup content='Contact tool tip' trigger={
              <Segment as={Link}
                       to={'/contacts'}
                       inverted color='orange'
                       padded style={{marginTop: '1em'}}
                       size='massive'
              >
                Contacts
              </Segment>}
            />

          </Grid.Column>
          <Grid.Column>
            <Popup content='Clinical pathways tooltip' trigger={
              <Segment as={Link}
                       to={'/clinicalPathwaysHub'}
                       inverted color='yellow'
                       padded style={{marginTop: '1em'}}
                       size='massive'
              >
                Clinical Pathways
              </Segment>
            }
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row stretched>
          <Grid.Column>
            <Popup content='Haematology tool tip' trigger={
              <Segment as={Link}
                       to={'/haematology'}
                       inverted color='olive'
                       padded style={{marginTop: '1em'}}
                       size='massive'
              >
                Haematology
              </Segment>
            }
            />
          </Grid.Column>
          <Grid.Column>
            <Popup content='Biochemistry tool tip' trigger={
              <Segment as={Link}
                       to={'/biochemistry'}
                       inverted color='green'
                       padded style={{marginTop: '1em'}}
                       size='massive'
              >
                Biochemistry
              </Segment>
            }
            />
          </Grid.Column>
          <Grid.Column>
            <Popup content='Blood transfusion tool tip' trigger={
              <Segment as={Link}
                       to={'/bloodTransfusion'}
                       inverted color='teal'
                       padded style={{marginTop: '1em'}}
                       size='massive'
              >
                Blood Transfusion
              </Segment>
            }
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row stretched>
          <Grid.Column>
            <Popup content='Blood product information tool tip' trigger={
              <Segment as={Link}
                       to={'/bloodProductInformation'}
                       inverted color='blue'
                       padded style={{marginTop: '1em'}}
                       size='massive'
              >
                Blood Product Information
              </Segment>
            }
            />
          </Grid.Column>
          <Grid.Column>
            <Popup content='News Feed tool tip' trigger={
              <Segment as={Link}
                       to={'/news'}
                       inverted color='violet'
                       padded style={{marginTop: '1em'}}
                       size='massive'
              >
                News Feed
              </Segment>
            }
            />
          </Grid.Column>
          <Grid.Column>
            <Popup content='Quiz hub tool tip' trigger={
              <Segment as={Link}
                       to={'/quizhub'}
                       inverted color='purple'
                       padded style={{marginTop: '1em'}}
                       size='massive'
              >
                Quiz Hub
              </Segment>
            }
            />
          </Grid.Column>
        </Grid.Row>

      </Grid>
    )
  }
}

export default Home;
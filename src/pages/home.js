import React, {Component} from "react";
import {Grid, Segment, Popup, Container, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Home extends Component{

  render() {
    return (
      <Grid columns={3} stackable
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
                <Container>
                  <p>Test Guide</p>
                  <Icon name='lab' size='huge'/>
                </Container>
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
                <Container>
                  <p>Contacts</p>
                  <Icon name='address book' size='huge'/>
                </Container>
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
                <p>Clinical Pathways</p>
                <Container>
                  <Icon name='sitemap' size='huge'/>
                </Container>
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

                <Container>
                  <p>Haematology</p>
                  <Icon name='tint' size='huge'/>
                </Container>
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

                <Container>
                  <p>Biochemistry</p>
                  <Icon name='thermometer half' size='huge'/>
                </Container>
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
                <Container>
                  <p>Blood Transfusion</p>
                  <Icon name='syringe' size='huge'/>
                </Container>

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
                <Container>
                  <p>Blood Product Information</p>
                  <Icon name='eye dropper' size='huge'/>
                </Container>
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
                <Container>
                  <p>News</p>
                  <Icon name='newspaper' size='huge'/>
                </Container>
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
                <Container>
                  <p>Quiz Hub</p>
                  <Icon name='book' size='huge'/>
                </Container>
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
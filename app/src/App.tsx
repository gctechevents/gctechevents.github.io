import * as React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
// import { GridList, GridTile } from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

const brand = require('./images/brand_and_logo.png');

const tilesData = [
  {
    img: 'http://via.placeholder.com/350x150',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://via.placeholder.com/350x150',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://via.placeholder.com/350x150',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://via.placeholder.com/350x150',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'http://via.placeholder.com/350x150',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'http://via.placeholder.com/350x150',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://via.placeholder.com/350x150',
    title: 'Vegetables',
    author: 'jill111',
  }
];

const style = {
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class App extends React.Component<{}, {}> {
  render() {
   
    return (
      <MuiThemeProvider>

        <div className="App">
          <AppBar
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            iconElementRight={<FlatButton label="Event Submission" href="https://goo.gl/forms/8tX501I2vQdL7Xn62" />}
          />
          <Card>
            <CardMedia
              overlay={
                <CardTitle>
                  <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
                  <div id="mc_embed_signup">
                    <form action="//zhresearches.us15.list-manage.com/subscribe/post?u=835126905eff41be498529ca5&amp;id=96dada420b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate={true}>
                      <div id="mc_embed_signup_scroll">
                        <div className="mc-field-group">
                          <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Email Address" />
                        </div>
                        <div id="mce-responses" className="clear">
                          <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                          <div className="response" id="mce-success-response" style={{ display: 'none' }} />
                        </div>
                        <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
                          <input type="text" name="b_835126905eff41be498529ca5_96dada420b" tabIndex={-1} value="" />
                        </div>
                        <div className="clear" >
                          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                        </div>
                      </div>
                    </form>
                  </div>
                </CardTitle>
              }
              overlayContentStyle={{ bottom: 100 }}
            >
              <img src={brand} alt="" />
            </CardMedia>
          </Card>
          {this.renderCards()}

        </div>
      </MuiThemeProvider>
    );
  }

  renderCards() {
    return tilesData.map(t => {
      return (
        <Paper zDepth={2} style={style} key={t.author}>
          <div>
            <img src={t.img} />
            <div>{t.title}</div>
            <div>{t.author}</div>
          </div>
        </Paper>
      )
    });
  }
}

export default App;

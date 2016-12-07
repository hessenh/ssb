import React, { Component } from 'react';
import request from 'superagent';
import { PolarArea as PolarAreaChart } from 'react-chartjs';
import { List, ListItem } from 'material-ui';
import Spinner from 'react-spinkit';

const style = {
  display: 'flex',
};

const leftContent = {
  // width: '30%',
  width: '30%',
  margin: '0px',
};

const rightContent = {
  textAlign: 'center',
  width: '100%',
  margin: '10px',
};

const listStyle = {
  width: '100%',
};

const loadingStyle = {
  marginTop: '50px',
  display: 'flex',
  justifyContent: 'center',
};

const mapRegions = (index, label) => {
  const regions = [];
  regions.push([index['01'], label['01']]);
  regions.push([index['02'], label['02']]);
  regions.push([index['03'], label['03']]);
  regions.push([index['04'], label['04']]);
  regions.push([index['05'], label['05']]);
  regions.push([index['06'], label['06']]);
  regions.push([index['07'], label['07']]);
  regions.push([index['08'], label['08']]);
  regions.push([index['09'], label['09']]);
  regions.push([index['10'], label['10']]);
  regions.push([index['11'], label['11']]);
  regions.push([index['12'], label['12']]);
  // regions.push([index['13'], label['13']]);
  regions.push([index['14'], label['14']]);
  regions.push([index['15'], label['15']]);
  regions.push([index['16'], label['16']]);
  regions.push([index['17'], label['17']]);
  regions.push([index['18'], label['18']]);
  regions.push([index['19'], label['19']]);
  regions.push([index['20'], label['20']]);
  // sort by value
  regions.sort((a, b) => {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return regions;
};

const mapCategory = (index, label) => {
  const category = [];
  category.push([index.Folketallet1, label.Folketallet1]);
  category.push([index.Fodte2, label.Fodte2]);
  category.push([index.Dode3, label.Dode3]);
  category.push([index.Fodselsoverskudd4, label.Fodselsoverskudd4]);
  category.push([index.Innvandring5, label.Innvandring5]);
  category.push([index.Utvandring6, label.Utvandring6]);
  category.push([index.Tilflytting7, label.Tilflytting7]);
  category.push([index.Nettoinnflytting9, label.Nettoinnflytting9]);
  category.push([index.Folketilvekst10, label.Folketilvekst10]);
  category.push([index.Folketallet11, label.Folketallet11]);
  return category;
};

const mapData = (value, label, index) => {
  const newValue = value.slice(index * 11, (index * 11) + 11);
  const data = [];
  for (let i = 1; i < 10; i += 1) {
    data.push({
      value: newValue[i],
      color: `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`,
      highlight: '#FF5A5E',
      label: label[i][1],
    });
  }
  return data;
};

class Befolkningsendring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      regions: [],
      data: null,
      fetchedData: false,
    };
  }

  componentDidMount() {
    const url = 'http://data.ssb.no/api/v0/dataset/1102.json?lang=no';
    request
    .get(url)
    .query({ action: 'edit', city: 'London' }) // query string
    .end((err, res) => {
      if (err) {
        console.log(err);
      } else {
        const ri = res.body.dataset.dimension.Region.category.index;
        const rl = res.body.dataset.dimension.Region.category.label;
        const ci = res.body.dataset.dimension.ContentsCode.category.index;
        const cl = res.body.dataset.dimension.ContentsCode.category.label;
        const cv = res.body.dataset.value;
        const c = mapCategory(ci, cl);
        this.setState({
          regions: mapRegions(ri, rl),
          categories: c,
          values: cv,
          data: mapData(cv, c, 0),
          fetchedData: true,
        });
      }
    });
  }

  setRegion = (value) => {
    this.setState({
      data: mapData(this.state.values, this.state.categories, value[0]),
    });
  }

  render() {
    if (this.state.fetchedData) {
      return (
        <div style={style}>
          <div style={leftContent}>
            <List style={listStyle} >
              {this.state.regions.map((value) => {
                return (
                  <ListItem
                    primaryText={value[1]}
                    key={value[0]}
                    onClick={this.setRegion.bind(this, value)}
                  />
                );
              })}
            </List>
          </div>
          <div style={rightContent}>
            <h2>Befolkningsendring</h2>
            <PolarAreaChart data={this.state.data} width="500px" height="300px" />
          </div>
        </div>
      );
    }
    return (
      <div style={loadingStyle}>
        <Spinner spinnerName="wandering-cubes" />
      </div>
    );
  }
}

export default Befolkningsendring;

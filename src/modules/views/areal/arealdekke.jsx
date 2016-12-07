import React, { Component } from 'react';
import request from 'superagent';
import { AutoComplete } from 'material-ui';
import { Doughnut as DoughnutChart } from 'react-chartjs';
import Spinner from 'react-spinkit';

const style = {
  display: 'flex',
};

const leftContent = {
  width: '30%',
  margin: '10px',
};

const rightContent = {
  textAlign: 'center',
  width: '100%',
  margin: '10px',
};

const loadingStyle = {
  marginTop: '50px',
  display: 'flex',
  justifyContent: 'center',
};


const mapResonse = (respone) => {
  const index = respone.body.dataset.dimension.Region.category.index;
  const label = respone.body.dataset.dimension.Region.category.label;
  const value = respone.body.dataset.value;
  const source = [];
  const data = [];
  for (const key in index) {
    source.push(label[key]);

    const i = index[key] * 2;
    const tempData = [];
    tempData.push({
      value: value[i],
      color: '#564138',
      label: 'Landareal',
    });
    tempData.push({
      value: value[i + 1],
      color: '#2E86AB',
      label: 'Ferskvann',
    });
    data.push(tempData);
  }
  return [source, data];
};

class ArealDekke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedData: false,
      dataSource: [],
    };
  }

  componentDidMount() {
    const url = 'http://data.ssb.no/api/v0/dataset/85430.json?lang=no';
    request
    .get(url)
    .query({ action: 'edit', city: 'London' }) // query string
    .end((err, res) => {
      if (err) {
        console.log(err);
      } else {
        const mappedResponse = mapResonse(res);
        console.log(mappedResponse);
        this.setState({
          fetchedData: true,
          dataSource: mappedResponse[0],
          data: mappedResponse[1][0],
          areaData: mappedResponse[1],
        });
      }
    });
  }

  handleUpdateInput = (value) => {
    const index = this.state.dataSource.indexOf(value);
    if (index > -1) {
      this.setState({
        data: this.state.areaData[index],
      });
    }
  };

  render() {
    if (this.state.fetchedData) {
      return (
        <div style={style}>
          <div style={leftContent}>
            <h2>Søk på kommune</h2>
            <AutoComplete
              hintText="Type anything"
              dataSource={this.state.dataSource}
              openOnFocus={true}
              onUpdateInput={this.handleUpdateInput}
            />
          </div>
          <div style={rightContent}>
            <h2>Areal av land og ferskvann</h2>
            <DoughnutChart data={this.state.data} width="500px" height="300px" />
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

export default ArealDekke;

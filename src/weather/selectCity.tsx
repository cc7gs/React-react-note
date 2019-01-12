import React from 'react';
import { connect } from 'react-redux';
import * as weatherActions from './action';
const CITY_CODES: any = {
  北京: 101010100,
  上海: 101020100
};
class SelectCity extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    const defaultCity = Object.keys(CITY_CODES)[0];
    this.props.onSelectCity(CITY_CODES[defaultCity]);
  }
  onChange = (event: any) => {
    const cityCode = event.target.value;
    this.props.onSelectCity(cityCode);
  };
  render() {
    return (
      <select onChange={this.onChange}>
        {Object.keys(CITY_CODES).map(cityName => {
         return  <option key={cityName} value={CITY_CODES[cityName]}>
            {cityName}
          </option>;
        })}
      </select>
    );
  }
}
const mapDispathToProps = (dispatch: any) => {
  return {
    onSelectCity: (cityCode: any) =>
    { console.log(cityCode); dispatch(weatherActions.fetchWeather(cityCode))}
  };
};
export default connect(
  null,
  mapDispathToProps
)(SelectCity);

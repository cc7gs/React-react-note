import React from 'react'
import { connect } from 'react-redux'
import * as Status from './status'
const Weather = ({ status, cityName, weather, lowestTemp, highestTemp }: any) => {
    console.log(Status);
    switch (status) {
        case Status.LOADING:
            return <div>正在加载数据...</div>
        case Status.SUCCESS:
            return (<div>
                {cityName} {weather} 最低温度{lowestTemp} 最高温度{highestTemp}
            </div>)
        case Status.FAILURE:
            return <div>天气信息获取失败...</div>
        default:
            throw new Error('unexpected status' + status);
    }
}
const mapStateToProps = (state: any) => {
    console.log(status,'----------status');
    const weatherData = state.weather;
    return {
        status: weatherData.status,
        cityName: weatherData.city,
        weather: weatherData.weather,
        lowestTemp: weatherData.temp1,
        highestTemp: weatherData.temp2
    }
}

export default connect(mapStateToProps)(Weather);
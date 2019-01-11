import React  from 'react';

const cityCode=101010100;
export default class Weather extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state={
            weatherInfo:null
        }
    }
    componentDidMount(){
       const apiUrl=`/data/cityinfo/${cityCode}.html`;
        fetch(apiUrl)
            .then((response)=>{
                console.log(response,'response');
                if(response.status!==200){
                    throw new Error('fail to get response weather');
                }
              response.json().then(({weatherinfo:weatherInfo})=>{
                  console.log(weatherInfo,'result');
                 this.setState({
                    weatherInfo
                 })
              })
              .catch(error=>{
                  console.log(error);
                  this.setState({weatherInfo:null})
              })
            })
            .catch(error=>{
                this.setState({weatherInfo:null})
            })
    }
    render(){
        const {weatherInfo}=this.state;
       
        if(!weatherInfo){
            return <div>暂无数据</div>;
        }
        const {city,temp1,weather,temp2}=weatherInfo;
        return(
            <div>
                城市:{city}-天气-{weather} 最高温度 {temp2} 最低温度{temp1}
            </div>
        )
    }
}
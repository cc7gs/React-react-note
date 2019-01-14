import {FETCH_STARTED,FETCH_FAILURE,FETCH_SUCCESS} from './actionTypes'


// export const fetchWeather=(cityCode:string)=>{
//     return (dispatch:any)=>{
//        const apiUrl=`/data/cityinfo/${cityCode}.html`;
//         dispatch(fetchWeatherStarted())
//        fetch(apiUrl)
//         .then(response=>{
//             if(response.status!==200){
//                 throw new Error('Fail to get response will start'+response.status);
//             }
//             response.json().then(({weatherinfo})=>{
//                 dispatch(fetchWeatherSuccess(weatherinfo))
//             })
//             .catch(error=>{
//                 throw new Error('Invaild json response'+error);
//             })
//         })
//         .catch(error=>{
//             dispatch(fetchWeatherFilure(error))
//         })        
//     }
// };
/**
* 添加异步请求中断 
* 
 *  */
let nextSeqId=0;
export const fetchWeather=(cityCode:string)=>{
    return (dispatch:any)=>{
        console.log('function');
        const apiUrl=`/data/cityinfo/${cityCode}.html`;
        const seqId=++ nextSeqId;
        const dispatchIfVaild=(action:any)=>{
            if(seqId==nextSeqId){
                console.log('请求开始');
                return dispatch(action);
            }
        }
        dispatchIfVaild(fetchWeatherStarted());
        fetch(apiUrl).then(response=>{
            if(response.status!==200){
                throw new Error('Fail to get response will start'+response.status);
            }
            response.json().then(({weatherinfo})=>{
                dispatch(fetchWeatherSuccess(weatherinfo))
            })
            .catch(error=>{
                throw new Error('Invaild json response'+error);
            })
        })
        .catch(error=>{
            dispatch(fetchWeatherFilure(error))
        }).finally(()=>{
            console.log('数据响应回来');
        })        
    }
}

export const fetchWeatherStarted=()=>({
    type:FETCH_STARTED
})
export const fetchWeatherSuccess=(data:any)=>({
    type:FETCH_SUCCESS,
    result:data
})
export const fetchWeatherFilure=(error:any)=>({
    type:FETCH_FAILURE,
    error
})
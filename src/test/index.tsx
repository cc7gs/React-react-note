import React from 'react';
type IData = Readonly<{
    name: string;
    value?: string;
}>
type IProps = Readonly<{
    data: IData[]
}>
class Example extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = ({
            time: +new Date(),
            data: [{ name: '维度代码' }, { name: '部门名称' }],
            asyncData: {}, //获取部门的信息

        });
    }
    componentDidMount() {
        //  this.getData();
       
    }
    // button 处理函数,用于模拟数据
    handleAddData = () => {
        const { data, asyncData } = this.state;
        const { code, name } = asyncData;
        let dataOne = Object.assign(data[0], { value: code });
        let dataTwo = Object.assign(data[1], { value: name });
        this.setState({
            data: [dataOne, dataTwo]
        });
    }
    getData = () => {
        //模拟异步请求,通过oid 获取部门信息
        console.log('获取数据');
        setTimeout(() => {
            const data = { code: '1111', name: '111部门' }
            this.setState({
                asyncData: data
            });
            // this.handleAddData();
        }, 1000);
    }
    render() {
        const { time, data, asyncData } = this.state;
        //方式一 将获取的数据解构 如何放到 render 函数内 则不需要 setState方法去更新数据
        const {code,name}=asyncData;
        Object.assign(data[0],{value:code});
        Object.assign(data[1],{value:name});
        console.log(data, 'data');

        return (
            <div>
                {time}
                <DataList data={data}></DataList>
                <button onClick={this.handleAddData}>加载数据</button>
            </div>
        )
    }
}
export default Example;

const DataList = ({ data }: IProps) => {
    return (
        <ul>
            {
                data.map((item, index) => (
                    <li key={index}>{item.name}-{item.value}</li>
                ))
            }
        </ul>
    );
}
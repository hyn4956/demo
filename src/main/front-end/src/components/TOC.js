import React, {Component} from "react";

class TOC extends Component {
    // newProps => 새로 추가한 props
    // newState => 아직 렌더 하기 전의 데이터이기 때문에 newProps 데이터가 넣은 채로 로그가 찍히지 않음.

    shouldComponentUpdate(newProps, newState) {
        console.log("===>TOC render shouldComponentUpdate",
            newProps.data,
            this.props.data);
        if(this.props.data === newProps.data){
            return false;
            // shouldComponentUpdate =>  return true / false의 차이는
            // if 조건에 따라 현재 this.props.data가 호출된 newProps와 다를 때 true를 반환한다.
        }
        return true;
    }
    render() {
        console.log('===>TOC render');
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i<data.length){
            lists.push(
                <li key={data[i].id}>
                    <a
                        href={"/content/" + data[i].id}
                        data-id={data[i].id}
                        onClick={function (e){
                            // debugger;
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)}
                    >{data[i].title}</a></li>);
            i = i+1;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;
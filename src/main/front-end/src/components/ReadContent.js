import React, {Component} from "react";

class ReadContent extends Component {
    render() {
        // 아래와 같이 props를 통해서 설정을 할 수 있으나,
        // 컴포넌트 안에서 외부로부터의 전달된 props 값을 바꾸는 것은 금지되어 있기 때문에 웹 상에서는 오류가 발생한다.
        // 즉 props는 읽기전용(read only) 이다.
        // 그러므로 내부적으로 무엇인가를 수정하고자 한다면, state를 통해 관리해야 한다.
        // this.props.title = "hi";
        console.log('Content render');
        return (
            <article>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </article>
        );
    }
}

export default ReadContent;
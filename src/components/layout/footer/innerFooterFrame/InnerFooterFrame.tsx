import React from 'react';
import './InnerFooterFrame.css';

interface Header {
    text: string;
}

interface Element {
    text: string;
}

const FooterHeader: React.FC<Header> = ({text}) => {
    return (
        <div className='footerHeader'>
            {text}
        </div>
    )
}
const FooterElement: React.FC<Element> = ({text}) => {
    return (
        <div className='footerElement'>
            {text}
        </div>
    )
}

interface InnerFooterFrameProps {
  strings: string[]; // 프로퍼티 이름을 소문자로 시작하는 것이 관례입니다.
}

const InnerFooterFrame: React.FC<InnerFooterFrameProps> = ({ strings }) => {
    return (
        <div className='innerFooterFrame-container'>
            {strings.map((text, index) => {
                if(index == 0)
                return <FooterHeader key={index} text={text}/>;
                else
                return <FooterElement key={index} text={text}/>;
            })}
        </div>
    );
}

export default InnerFooterFrame;
import React from 'react';
import { useRef, useEffect } from 'react';
import '/src/styles/Fonts.css';
import './NavigationBar.css';

// 게시판 타입 정의
interface BoardItem {
    id: number;
    title: string;
    link: string;
}

// useState - 값 변경 시 리렌더링 발생 O
// useRef - 값 변경 시 리렌더링 발생 X
function NavigationBar() {
    const [isOpen, setIsOpen] = React.useState(false); // isOpen의 값은 직접 건드리면 안됨
    const dropdownState = useRef<HTMLDivElement>(null);  // current의 타입: HTMLDivElement | null. DOM에 접근하기 위해 사용
    const boardItems: BoardItem[] = [
        { id: 1, title: "인기 게시판", link: "/board/best"},
        { id: 2, title: "자유 게시판", link: "/board/free"},
        { id: 3, title: "질문 게시판", link: "/board/qna"},
        { id: 4, title: "자료실", link: "/board/archive"},
    ];
    
    // 외부 클릭 감지 로직. 렌더링이 끝나고 나면 실행됨
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            // dropdownState.current가 존재하고 && 클릭한 곳이 드롭다운 외부일 때
            if (dropdownState.current && !dropdownState.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        // true면 감지 시작
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside); //cleanup 필수
        };
    }, [isOpen]); //의존성 추가
    
    return (
        <div className='navigationBar-container'>
            <button className='nav-button'>공지사항</button>
            <div className='nav-dropdown-container' ref={dropdownState}> 
                <button 
                    className='nav-button dropdown-trigger'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    게시판
                    <img className='dropdown-arrow' src="dropdown-arrow.png" />
                </button>

                <ul className={`dropdown-item ${isOpen ? 'show' : ''}`}>
                    {boardItems.map(item => (
                        <li key={item.id}>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <button className='nav-button'>상점</button>
            <button className='nav-button'>고객센터</button>
        </div>
    );
}

export default NavigationBar;
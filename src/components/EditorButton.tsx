import React from 'react';

interface ButtonMapProps {
  [key: string]: { [key: string]: string };
}

function EditorButton(type: string) {
  const ButtonMap: ButtonMapProps = {
    code: { iconName: 'code-square', srOnly: '코드 에디터' },
    alignLeft: { iconName: 'text-left', srOnly: '좌측 정렬' },
    alignRight: { iconName: 'text-right', srOnly: '우측 정렬' },
    alignCenter: { iconName: 'text-center', srOnly: '중간 정렬' },
    h1: { iconName: 'type-h1', srOnly: '대제목' },
    h2: { iconName: 'type-h2', srOnly: '중제목' },
    h3: { iconName: 'type-h3', srOnly: '소제목' },
    bold: { iconName: 'type-bold', srOnly: '볼드체' },
    italic: { iconName: 'type-Italic', srOnly: '이탈릭체' },
    underline: { iconName: 'type-underline', srOnly: '밑줄' },
    link: { iconName: 'link', srOnly: '링크 첨부하기' },
  };

  const btnInfo = ButtonMap[type];

  const handleButtonClick = () => {
    // 버튼 기능
  };

  return (
    <li>
      <button type='button' onClick={handleButtonClick} className={btnInfo.iconName}>
        <span className='sr_only'>{btnInfo.srOnly}</span>
      </button>
    </li>
  );
}

function EditorButtonWrapper(children: React.ReactNode) {
  return <ul>{children}</ul>;
}

export { EditorButtonWrapper, EditorButton };

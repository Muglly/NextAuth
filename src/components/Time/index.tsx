// import { useState } from 'react';
import * as S from './styles';

export default function Time() {
  // const [active, SetActive] = useState(false);

  return (
    <S.TimeContainer>
      <ul className="tabs">
        <li data-tab="daily" className="tab active" onClick={() => {}}>
          daily
        </li>
        <li data-tab="weekly" className="tab" onClick={() => {}}>
          weekly
        </li>
        <li data-tab="monthly" className="tab" onClick={() => {}}>
          monthly
        </li>
      </ul>
    </S.TimeContainer>
  );
}

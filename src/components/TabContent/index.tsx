import React, { useEffect, useState } from 'react';
import Item from 'components/Item';

import * as S from './styles';

interface TabProps {
  tab: string;
}

const TabContent = ({ tab }: TabProps) => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <S.Container>
      <div id={tab} className="tabContent">
        {data.map((item, index) => {
          if (tab === 'daily') {
            return (
              <Item
                key={`item-${index}`}
                title={item.title}
                hours={item.timeframes.daily.current}
                prevLog={item.timeframes.daily.previous}
              />
            );
          } else if (tab === 'weekly') {
            return (
              <Item
                key={`item-${index}`}
                title={item.title}
                hours={item.timeframes.weekly.current}
                prevLog={item.timeframes.weekly.previous}
              />
            );
          } else if (tab === 'monthly') {
            return (
              <Item
                key={`item-${index}`}
                title={item.title}
                hours={item.timeframes.monthly.current}
                prevLog={item.timeframes.monthly.previous}
              />
            );
          }
          return <h1 key={`item-${index}`}>{item.tilte}</h1>;
        })}
      </div>
    </S.Container>
  );
};

export default TabContent;

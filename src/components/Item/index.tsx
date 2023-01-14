import * as S from './styles';

interface ItemProps {
  title: string;
  hours: number;
  prevLog: number;
}

const Item = ({ title, hours, prevLog }: ItemProps) => {
  return (
    <S.Container>
      <div className={'trackerItem ' + title}>
        <div className="trackerInfo">
          <div className="header">
            <span className="title">{title}</span>
            <img src="img/icon-ellipsis.svg" alt="settings" />
          </div>
          <div className="body">
            <span className="hours">{hours}hrs</span>
            <span className="prevLog">last week - {prevLog}hrs</span>
          </div>
        </div>
      </div>
    </S.Container>
  );
};

export default Item;

import iconEllipsis from 'img/icon-ellipsis.svg';
import './item.css';

interface ItemProps {
  title: string;
  hours: number;
  prevLog: number;
}

const Item = ({ title, hours, prevLog }: ItemProps) => {
  return (
    <div className={'trackerItem ' + title}>
      <div className="trackerInfo">
        <div className="header">
          <span className="title">{title}</span>
          <img src={iconEllipsis} alt="settings" />
        </div>
        <div className="body">
          <span className="hours">{hours}hrs</span>
          <span className="prevLog">last week - {prevLog}hrs</span>
        </div>
      </div>
    </div>
  );
};

export default Item;

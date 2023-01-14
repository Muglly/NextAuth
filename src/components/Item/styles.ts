import styled from 'styled-components';

export const Container = styled.div`
  .trackerItem {
    margin-left: 25px;
    background-color: #fff;
    border-radius: 20px;
    position: relative;
    background-repeat: no-repeat;
    background-position: 90% -5%;
  }
  .trackerItem:nth-child(1),
  .trackerItem:nth-child(2),
  .trackerItem:nth-child(3) {
    margin-bottom: 25px;
  }
  .trackerInfo {
    position: absolute;
    bottom: 0;
    height: 80%;
    width: 100%;
    border-radius: 18px;
    background-color: var(--Dark-blue);
    color: #fff;
    cursor: pointer;
  }
  .trackerInfo:hover {
    background-color: var(--Desaturated-blue);
  }
  .trackerInfo .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 35px;
  }
  .trackerInfo .body {
    display: flex;
    flex-direction: column;
    margin: 0 35px;
  }
  .trackerInfo .hours {
    font-size: 40px;
    font-weight: lighter;
    margin-bottom: 10px;
  }
  .trackerInfo .prevLog {
    font-size: 14px;
    font-weight: lighter;
    text-transform: capitalize;
    color: var(--Pale-Blue);
  }
  .trackerItem.Work {
    background-image: url('../../images/icon-work.svg');
    background-color: var(--Light-orange);
  }
  .trackerItem.Play {
    background-image: url('../../images/icon-play.svg');
    background-color: var(--Soft-blue);
  }
  .trackerItem.Study {
    background-image: url('../../images/icon-study.svg');
    background-color: var(--Light-red);
  }
  .trackerItem.Exercise {
    background-image: url('../../images/icon-exercise.svg');
    background-color: var(--Lime-green);
  }
  .trackerItem.Social {
    background-image: url('../../images/icon-social.svg');
    background-color: var(--Desaturated-blue);
  }
  .trackerItem.Self.Care {
    background-image: url('../../images/icon-self-care.svg');
    background-color: var(--Soft-orange);
  }

  @media (max-width: 375px) {
    .trackerItem {
      height: 160px;
      margin: 25px 0 0 0;
    }
    .trackerItem:nth-child(1),
    .trackerItem:nth-child(2),
    .trackerItem:nth-child(3) {
      margin-bottom: 0;
    }
    .trackerInfo {
      height: 75%;
    }
    .trackerInfo .header {
      margin: 20px 35px 10px 35px;
    }
    .trackerInfo .body {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

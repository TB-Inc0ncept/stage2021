import { Statistic, Row, Col } from 'antd';

const { Countdown } = Statistic;
const deadline = Date.UTC(2021,6,9,16,0,1,0);

function onFinish() {
  alert("Time's up!");
}

const Count_down = () => {
  return(
    <>
      <Row gutter={16}>
        <Col span={12}>
          <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
        </Col>
      </Row>
  </>
  );
};

export default Count_down;
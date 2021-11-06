import { FC } from 'react';
import { Layout, Row, Col } from 'antd';
import { useWeatherStore } from '../stores/WeatherStore';
import { WeatherSummary } from '../components/WeatherSummary';

export const WeatherPage: FC = () => {
  const { dailyWeathers, isError, isFetched, isLoading, isSuccess } = useWeatherStore();

  return (
    <Layout>
      <Layout.Header>Weather report</Layout.Header>
      <Layout.Content>
        <Row>
          {dailyWeathers.map(weather => (
            <Col key={weather.dt} span={3}>
              <WeatherSummary weather={weather} />
            </Col>
          ))}
        </Row>
      </Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
};

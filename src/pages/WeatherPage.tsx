import { FC } from 'react';
import { Layout } from 'antd';
import { WeatherStoreProvider } from '../stores/WeatherStore';

export const WeatherPage: FC = () => (
  <WeatherStoreProvider>
    <Layout>
      <Layout.Header>Weather report</Layout.Header>
      <Layout.Content>Weather list</Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  </WeatherStoreProvider>
);

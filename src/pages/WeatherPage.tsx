import { FC } from 'react';
import { Layout } from 'antd';

export const WeatherPage: FC = () => (
  <Layout>
    <Layout.Header>Weather report</Layout.Header>
    <Layout.Content>Weather list</Layout.Content>
    <Layout.Footer>Footer</Layout.Footer>
  </Layout>
);

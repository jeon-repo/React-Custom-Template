import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';

function AntdTheme(props) {
  return (
    <ConfigProvider
      theme={{
        token: {
          // colorPrimary: '#000000',
        },
      }}>
      <StyleProvider hashPriority='high'>{props.children}</StyleProvider>
    </ConfigProvider>
  );
}

export default AntdTheme;

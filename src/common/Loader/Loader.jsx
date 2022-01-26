import { BallTriangle, Bars, Rings } from 'react-loader-spinner';
import { LoaderWrrap } from './loader.styled';

const LoaderComponent = ({ height, width, padding }) => {
  return (
    <LoaderWrrap padding={padding}>
      <Bars
        color="var(--acent-color)"
        height={height ? height : 'auto'}
        width={width ? width : 'auto'}
      />
    </LoaderWrrap>
  );
};

export default LoaderComponent;

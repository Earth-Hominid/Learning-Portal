import {
  PresentationChartBarIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/solid';

import { Container, LineItem } from './Styles';

interface BoxInterface {
  title: string;
  id: string;
  line_1: string;
  line_2: string;
  line_3: string;
  line_4: string;
  line_5: string;
}

interface Props {
  props: { datapoints: Array<BoxInterface> };
}

const BlueBox: React.FC<Props> = ({ props }) => {
  let info = props.datapoints[0];

  return (
    <Container>
      <div className="flex flex-row space-x-4 items-center">
        <PresentationChartLineIcon className="h-auto w-4 text-[#0085f2] dark:text-[#5e9eff]" />
        <p>
          <strong>{info.title}</strong>
        </p>
      </div>
      <ul>
        {info.line_1 ? <LineItem>{info.line_1}</LineItem> : ''}
        {info.line_2 ? <LineItem>{info.line_2}</LineItem> : ''}
        {info.line_3 ? <LineItem>{info.line_3}</LineItem> : ''}
        {info.line_4 ? <LineItem>{info.line_4}</LineItem> : ''}
        {info.line_5 ? <LineItem>{info.line_5}</LineItem> : ''}
      </ul>
    </Container>
  );
};

export default BlueBox;

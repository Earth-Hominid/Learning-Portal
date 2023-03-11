import { StyledOutButton } from './Styles';

interface Props {
  text: string;
}

const LogOut: React.FC<Props> = ({ text }) => {
  return <StyledOutButton>{text}</StyledOutButton>;
};

export default LogOut;

import Navigation from './navigation/Navigation';

interface Props {
  englishMode: boolean | null;
}

const Footer: React.FC<Props> = ({ englishMode }) => {
  return (
    <>
      <Navigation englishMode={englishMode} />
    </>
  );
};

export default Footer;

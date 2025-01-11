interface TitleTextProps {
  text?: string;
}

const TitleText = ({ text }: TitleTextProps) => {
  return <h1 className="text-3xl font-semibold text-neutral-900">{text}</h1>;
};

export default TitleText;

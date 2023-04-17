interface IButtonProps {
  label: string;
  classname?: string;
  type: string
  onClick?: () => void
}

export default function Button(props: IButtonProps) {
  const { label, classname, type, onClick } = props;

  return (
    <input
      className={`button ${classname}`}
      type={type}
      value={label}
      onClick={onClick}
    />
  );
};
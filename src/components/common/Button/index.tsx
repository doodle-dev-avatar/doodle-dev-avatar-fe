interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  type?: 'dark' | 'light';
  className?: string;
  handleClick?: () => void;
}

const Button = ({
  children,
  text,
  type,
  className,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`flex px-4 py-2 rounded-md font-medium transition-colors duration-300
        ${type === 'dark' ? 'bg-neutral-900' : 'white'}
        ${type === 'dark' ? 'text-neutral-100' : 'text-neutral-900'}
        ${type === 'dark' ? 'hover:bg-neutral-700' : ''}
        ${className}
        `}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;

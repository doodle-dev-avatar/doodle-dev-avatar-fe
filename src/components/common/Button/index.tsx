interface ButtonProps {
  children?: React.ReactNode;
  type?: 'dark' | 'light';
  className?: string;
  handleClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  children,
  type,
  className,
  handleClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`flex px-4 py-2 rounded-md font-medium transition-colors duration-300
        ${type === 'dark' ? 'bg-neutral-900' : 'white'}
        ${type === 'dark' ? 'text-neutral-100' : 'text-neutral-900'}
        ${type === 'dark' ? 'hover:bg-neutral-700' : ''}
        ${className}
        `}
    >
      {children}
    </button>
  );
};

export default Button;

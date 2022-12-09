interface ButtonProps {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  style: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
  icon?: 'BEFORE' | 'AFTER' | 'ONLY' | 'NONE';
  loading?: boolean;
  text: string;
}

function Button({ type, style, icon = 'NONE', loading = false, text }: ButtonProps) {
  const buttonClassName = `btn ${style.toLowerCase()} icon-${icon.toLowerCase()}`;

  return (
    <button type={type} className={loading ? buttonClassName + 'is-loading' : buttonClassName}>
      {icon === 'ONLY' ? <span className='sr_only'>{text}</span> : <>{text}</>}
    </button>
  );
}

export default Button;

import Link from 'next/link';

export function Button({
  children,
  className = '',
  variant = 'primary',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }) {
  const variants = {
    primary: 'bg-chama-forest text-white hover:bg-emerald-700',
    secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'
  };

  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

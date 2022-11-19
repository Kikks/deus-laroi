export default interface InputProps extends React.HTMLProps<HTMLInputElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  label?: string;
  helperLabel?: string;
  error?: boolean;
  helperText?: string;
  variant?: 'light' | 'dark';
}

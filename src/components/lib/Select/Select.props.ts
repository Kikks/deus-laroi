export default interface SelectProps
  extends React.HTMLProps<HTMLSelectElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  label?: string;
  helperLabel?: string;
  error?: boolean;
  helperText?: string;
  variant?: 'light' | 'dark';
  options: {
    label: string;
    value: string;
  }[];
}

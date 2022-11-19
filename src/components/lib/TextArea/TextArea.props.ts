export default interface TextAreaProps
  extends React.HTMLProps<HTMLTextAreaElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  label?: string;
  helperLabel?: string;
  error?: boolean;
  helperText?: string;
  variant?: 'light' | 'dark';
}

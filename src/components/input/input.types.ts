export interface IInputProps {
  type?: 'text' | 'password' | 'textarea';
  name?: string;
  value?: string;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  maxLength?: string;
  rows?: number;
  errorDesc?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
  isRequired?: boolean;
}

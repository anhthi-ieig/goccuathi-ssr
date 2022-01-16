export interface IDropDownItem {
  id: string | number;
  label: React.ReactNode;
  value: unknown;
}

export interface IDropdownProps {
  name?: string;
  value?: IDropDownItem;
  items: IDropDownItem[];
  label?: string;
  errorDesc?: string;
  placement?: 'top' | 'bottom';
  className?: string;
  onChange?: (selectedItem: IDropDownItem) => void;
  isRequired?: boolean;
}

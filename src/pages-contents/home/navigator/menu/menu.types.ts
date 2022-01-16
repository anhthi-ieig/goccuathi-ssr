export interface IMenuProps {
  mode: 'in-desktop' | 'in-mobile';
  scrollToSection: (sectionId: string) => void;
}

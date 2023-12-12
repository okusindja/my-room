export type langTypes = "en" | "pt" | "fr";

export interface RoomProps {
  light: boolean;
  clicables?: boolean;
  setLight: () => void;
  onGraduationCapClick?: () => void;
  onBooksClick?: () => void;
  changeLanguageHandler: (language: langTypes) => void;
}

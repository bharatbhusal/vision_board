export interface VisionBoardSection {
  id: string;
  title: string;
  images: string[];
  statements: string[];
}

export interface VisionBoardData {
  meta: {
    title: string;
    template: string;
  };
  sections: VisionBoardSection[];
  quotes?: string[];
}

export type ExportSize = 'mobile' | 'tablet' | 'desktop';

export interface ExportDimensions {
  width: number;
  height: number;
}

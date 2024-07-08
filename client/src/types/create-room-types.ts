export interface Theme {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  bg_video: string;
  colors: {
    sidebar_bg: string;
    headers_bg: string;
    texts: string;
    section_bg: string;
  };
}

export interface TemplateCardProps extends Omit<Theme, "bg_video" | "colors"> {}

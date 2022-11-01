export type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

export interface postType {
  id: string;
  link: string;
  image: StaticImageData;
  title: string;
  content: string;
  date: string;
}

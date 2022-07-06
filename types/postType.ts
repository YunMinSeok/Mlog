import { StaticImageData } from 'next/image';

export interface postType {
  id: string;
  link: string;
  image: StaticImageData;
  title: string;
  content: string;
  date: string;
}

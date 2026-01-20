export type Message = {
  id: number;
  time: Date;
  author: string;
  text: string;
  isOwner: boolean;
};
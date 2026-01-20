
import "./Message.css";
import type { Message as MessageType } from "../../types/messages";

type Props = {
  message: MessageType;
};

export const Message = ({ message }: Props) => {
  const { author, text, time, isOwner } = message;

  return (
    <div className={`message ${isOwner ? "owner" : ""}`}>
      <div className="message-author">{author}</div>
      <div className="message-text">{text}</div>
      <div className="message-time">
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </div>
    </div>
  );
};

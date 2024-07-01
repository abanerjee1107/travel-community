const Message = ({ message }) => (
  <div>
    <p>{message.content}</p>
    <small>From: {message.senderName}</small>
  </div>
);

export default Message;

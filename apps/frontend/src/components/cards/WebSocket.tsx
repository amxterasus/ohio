import { useEffect, useState } from 'react';

export default function WebSocketJoin() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000/ws');

    ws.onmessage = (event) => {
      setMessages((msgs) => [...msgs, event.data]);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <ul>
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

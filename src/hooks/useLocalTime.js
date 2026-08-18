import { useEffect, useState } from 'react';

export default function useLocalTime(timeZone = 'Europe/Paris') {
  const format = () =>
    new Intl.DateTimeFormat('fr-FR', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(new Date());

  const [time, setTime] = useState(format);

  useEffect(() => {
    const timer = window.setInterval(() => setTime(format()), 30000);
    return () => window.clearInterval(timer);
  }, [timeZone]);

  return time;
}

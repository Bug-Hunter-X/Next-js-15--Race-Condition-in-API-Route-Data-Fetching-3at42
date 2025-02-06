```javascript
// pages/about.js
import { useState, useEffect } from 'react';

export default function About() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>About Us</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```
```javascript
// pages/api/data.js
// (This file remains unchanged)
export default async function handler(req, res) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (Math.random() < 0.5) {
    res.status(500).json({ error: 'Internal Server Error' });
  } else {
    res.status(200).json({ message: 'Data fetched successfully' });
  }
}
```
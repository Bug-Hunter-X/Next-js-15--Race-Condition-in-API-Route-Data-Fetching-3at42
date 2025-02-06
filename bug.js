```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if you don't handle it properly
  const data = await fetch('/api/data');
  const json = await data.json();

  return (
    <div>
      <h1>About Us</h1>
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </div>
  );
}
```
```javascript
// pages/api/data.js

export default async function handler(req, res) {
  // Simulate a delay or error
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // Simulate an error
  if (Math.random() < 0.5) {
    res.status(500).json({ error: 'Internal Server Error' });
  } else {
    res.status(200).json({ message: 'Data fetched successfully' });
  }
}
```
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

type Fruit = {
  id: number;
  name: string;
  color: string;
  taste: string;
};

export default function CSRPage() {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Client-side data fetching
    const fetchFruits = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/fruits');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        setFruits(data.fruits);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch fruits');
        setLoading(false);
        console.error('Error fetching fruits:', err);
      }
    };

    fetchFruits();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>CSR Demo - Client-Side Rendering</title>
        <meta name="description" content="Demonstration of Client-Side Rendering in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">Client-Side Rendering (CSR)</h1>
        
        <p className="description">
          This page fetches data on the client side using <code>useEffect</code>
        </p>

        <div className="navigation">
          <Link href="/">Home</Link> | <Link href="/ssr">SSR Example</Link>
        </div>

        <div className="content">
          {loading ? (
            <p>Loading fruits...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : (
            <div className="grid">
              {fruits.map((fruit) => (
                <div key={fruit.id} className="card">
                  <h2>{fruit.name}</h2>
                  <p><strong>Color:</strong> {fruit.color}</p>
                  <p><strong>Taste:</strong> {fruit.taste}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="explanation">
          <h2>How CSR Works</h2>
          <p>
            With Client-Side Rendering (CSR):
          </p>
          <ul>
            <li>The browser receives an empty HTML shell from the server</li>
            <li>JavaScript is downloaded and executed</li>
            <li>React components are rendered in the browser</li>
            <li>Data is fetched from the API after the component mounts</li>
            <li>The UI updates once data is received</li>
          </ul>
          <h3>Pros of CSR:</h3>
          <ul>
            <li>Reduced load on the server</li>
            <li>Good for highly interactive applications</li>
            <li>Faster subsequent page transitions</li>
            <li>Works well with private, user-specific data</li>
          </ul>
          <h3>Cons of CSR:</h3>
          <ul>
            <li>Slower initial page load</li>
            <li>Poorer SEO (search engines may not see all content)</li>
            <li>Users see loading states</li>
            <li>Requires more client-side JavaScript</li>
          </ul>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 800px;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 3rem;
          text-align: center;
        }

        .description {
          text-align: center;
          line-height: 1.5;
          font-size: 1.5rem;
          margin: 1rem 0;
        }

        .navigation {
          margin: 2rem 0;
        }

        .content {
          width: 100%;
          margin-top: 2rem;
        }

        .grid {
          display: flex;
          align-items: stretch;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 2rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .explanation {
          margin-top: 3rem;
          width: 100%;
          padding: 1.5rem;
          background-color: #f7f7f7;
          border-radius: 10px;
        }

        .explanation h2 {
          margin-top: 0;
        }

        .error {
          color: #ff0000;
        }

        code {
          background: #f0f0f0;
          border-radius: 5px;
          padding: 0.2rem 0.4rem;
          font-size: 90%;
        }
      `}</style>
    </div>
  );
}
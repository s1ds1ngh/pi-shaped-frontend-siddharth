import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

type Fruit = {
  id: number;
  name: string;
  color: string;
  taste: string;
};

type SSRPageProps = {
  fruits: Fruit[];
  loadTime: string;
};

export default function SSRPage({ fruits, loadTime }: SSRPageProps) {
  return (
    <div className="container">
      <Head>
        <title>SSR Demo - Server-Side Rendering</title>
        <meta name="description" content="Demonstration of Server-Side Rendering in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">Server-Side Rendering (SSR)</h1>
        
        <p className="description">
          This page fetches data on the server using <code>getServerSideProps</code>
        </p>

        <div className="navigation">
          <Link href="/">Home</Link> | <Link href="/csr">CSR Example</Link>
        </div>

        <p className="server-info">
          Data fetched at: {loadTime}
        </p>

        <div className="content">
          <div className="grid">
            {fruits.map((fruit) => (
              <div key={fruit.id} className="card">
                <h2>{fruit.name}</h2>
                <p><strong>Color:</strong> {fruit.color}</p>
                <p><strong>Taste:</strong> {fruit.taste}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="explanation">
          <h2>How SSR Works</h2>
          <p>
            With Server-Side Rendering (SSR):
          </p>
          <ul>
            <li>The server fetches data for each request</li>
            <li>The server renders the React components with the data</li>
            <li>The browser receives fully rendered HTML</li>
            <li>JavaScript is hydrated on the client for interactivity</li>
          </ul>
          <h3>Pros of SSR:</h3>
          <ul>
            <li>Better SEO as search engines see the full content</li>
            <li>Faster initial page load and First Contentful Paint</li>
            <li>Good for static or infrequently updated content</li>
            <li>Works well without JavaScript enabled</li>
          </ul>
          <h3>Cons of SSR:</h3>
          <ul>
            <li>Higher server load</li>
            <li>Slower Time to Interactive</li>
            <li>Full page reloads between pages</li>
            <li>Each request requires data fetching and rendering</li>
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

        .server-info {
          background-color: #f0f0f0;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          font-family: monospace;
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

export const getServerSideProps: GetServerSideProps = async () => {
  // This runs on the server for every request
  try {
    // In a real app, you would use absolute URLs for server-side fetching
    // For this demo, we're simulating the API call
    const fruits = [
      { id: 1, name: 'Apple', color: 'Red', taste: 'Sweet and Crisp' },
      { id: 2, name: 'Banana', color: 'Yellow', taste: 'Sweet' },
      { id: 3, name: 'Orange', color: 'Orange', taste: 'Sweet and Tangy' },
      { id: 4, name: 'Strawberry', color: 'Red', taste: 'Sweet and Juicy' },
      { id: 5, name: 'Blueberry', color: 'Blue', taste: 'Sweet and Mild' },
      { id: 6, name: 'Mango', color: 'Yellow/Orange', taste: 'Sweet and Tropical' },
      { id: 7, name: 'Pineapple', color: 'Yellow', taste: 'Sweet and Tangy' },
      { id: 8, name: 'Watermelon', color: 'Green/Red', taste: 'Sweet and Refreshing' },
    ];

    // Get current server time to demonstrate server-side execution
    const loadTime = new Date().toISOString();

    // In a real app with an external API, you would do something like:
    // const response = await fetch('https://api.example.com/fruits');
    // const data = await response.json();

    return {
      props: {
        fruits,
        loadTime,
      },
    };
  } catch (error) {
    console.error('Error fetching fruits for SSR:', error);
    return {
      props: {
        fruits: [],
        loadTime: new Date().toISOString(),
        error: 'Failed to fetch data',
      },
    };
  }
};
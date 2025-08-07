import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Rendering Demo</title>
        <meta name="description" content="Demonstration of different rendering methods in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">Next.js Rendering Demo</h1>

        <p className="description">
          Explore different rendering methods in Next.js
        </p>

        <div className="grid">
          <Link href="/csr" className="card">
            <h2>Client-Side Rendering &rarr;</h2>
            <p>Data fetching happens in the browser after the page loads.</p>
          </Link>

          <Link href="/ssr" className="card">
            <h2>Server-Side Rendering &rarr;</h2>
            <p>Data fetching and rendering happens on the server for each request.</p>
          </Link>
        </div>

        <div className="comparison">
          <h2>Rendering Methods Comparison</h2>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Client-Side Rendering (CSR)</th>
                <th>Server-Side Rendering (SSR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Initial Load</td>
                <td>Slower (empty shell + JS + data fetch)</td>
                <td>Faster (pre-rendered HTML)</td>
              </tr>
              <tr>
                <td>SEO</td>
                <td>Poor (content not in initial HTML)</td>
                <td>Good (content in initial HTML)</td>
              </tr>
              <tr>
                <td>Server Load</td>
                <td>Lower (static files only)</td>
                <td>Higher (renders on each request)</td>
              </tr>
              <tr>
                <td>Data Freshness</td>
                <td>Always fresh (fetched at runtime)</td>
                <td>Fresh per request</td>
              </tr>
              <tr>
                <td>User Experience</td>
                <td>Shows loading states</td>
                <td>No loading states for initial data</td>
              </tr>
              <tr>
                <td>Best For</td>
                <td>Highly interactive, private dashboards</td>
                <td>Content-focused, SEO-important pages</td>
              </tr>
            </tbody>
          </table>
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
          max-width: 1000px;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 3.5rem;
          text-align: center;
        }

        .description {
          text-align: center;
          line-height: 1.5;
          font-size: 1.5rem;
          margin: 1rem 0 3rem;
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

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
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

        .comparison {
          margin-top: 4rem;
          width: 100%;
        }

        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1rem;
        }

        .comparison-table th,
        .comparison-table td {
          border: 1px solid #eaeaea;
          padding: 0.75rem;
          text-align: left;
        }

        .comparison-table th {
          background-color: #f7f7f7;
        }

        .comparison-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }
      `}</style>
    </div>
  );
}
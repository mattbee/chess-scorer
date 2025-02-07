'use client';

import ChessScorer from '../components/ChessScorer';

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen p-2">
      <div className="max-w-6xl mx-auto">
        <ChessScorer />
      </div>
    </main>
  );
}

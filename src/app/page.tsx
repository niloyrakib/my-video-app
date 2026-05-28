'use client'; import { useState } from 'react'; 
export default function Home() {
  const [prompt, setPrompt] = useState(''); const 
  [result, setResult] = useState<string | 
  null>(null); const [loading, setLoading] = 
  useState(false); const generate = async () => {
    setLoading(true); try { const res = await 
      fetch('/api/generate', {
        method: 'POST', headers: { 'Content-Type': 
        'application/json' }, body: 
        JSON.stringify({ prompt }),
      });
      const data = await res.json(); 
      setResult(data.output);
    } catch (error) {
      alert("Error generating content");
    } finally {
      setLoading(false);
    }
  };
  return ( <main className="p-8"> <h1 
      className="text-xl font-bold mb-4">AI Video 
      Generator</h1> <textarea
        className="border w-full p-2 mb-4 
        text-black" placeholder="Enter your 
        prompt..." onChange={(e) => 
        setPrompt(e.target.value)}
      /> <button onClick={generate} 
        disabled={loading} className="bg-blue-600 
        text-white p-2 w-full rounded"
      >
        {loading ? "Generating..." : "Generate"} 
      </button>
      
      {result && ( <div className="mt-6"> 
          <p>Result:</p> <img src={result} 
          alt="Generated AI Content" 
          className="mt-2 w-full" />
        </div> )} </main> );
}

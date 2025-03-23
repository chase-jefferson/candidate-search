import { useState, useEffect, useCallback } from 'react';
import { searchGithubUser } from '../api/API';

interface Candidate {
  avatar_url: string;
  name: string;
  login: string;
  location: string | null;
  email: string | null;
  company: string | null;
  html_url: string;
}

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const fetchCandidate = useCallback(async () => {
    try {
      const data = await searchGithubUser(index.toString());
      if (data) {
        setCandidate(data);
        setError(null);
      } else {
        setCandidate(null);
        setError('No candidate found.');
      }
    } catch (err) {
      setError('Failed to fetch candidate.');
    }
  }, [index]);

  useEffect(() => {
    fetchCandidate();
  }, [index, fetchCandidate]);

  const saveCandidate = () => {
    if (candidate) {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      localStorage.setItem('savedCandidates', JSON.stringify([...savedCandidates, candidate]));
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const skipCandidate = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-6">Candidate Search</h1>
      {error && <p className="text-red-500">{error}</p>}
      {candidate ? (
        <div className="bg-white text-black rounded-2xl p-6 shadow-lg max-w-xs text-center">
<img
  src={candidate.avatar_url || 'https://via.placeholder.com/100'}
  alt="Candidate Avatar"
  className="rounded-full w-24 mx-auto mb-4"
/>
          <p className="text-lg font-bold">{candidate.name} <span className="italic">({candidate.login})</span></p>
          <p>Name: {candidate.name}</p>
          <p>Username: {candidate.login}</p>
          <p>Location: {candidate.location || 'N/A'}</p>
          <p>Email: <a href={`mailto:${candidate.email}`} className="text-blue-500">{candidate.email || 'N/A'}</a></p>
          <p>Company: {candidate.company || 'N/A'}</p>
          <p className="text-sm italic">Bio: I'm the mascot for everyone's favorite version control system!</p>
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer" className="block mt-2 text-blue-600 font-bold">GitHub Profile</a>
        </div>
      ) : (
        !error && <p>No more candidates available.</p>
      )}
      <div className="flex mt-6 gap-6">
        <button onClick={skipCandidate} className="bg-red-600 p-4 rounded-full text-white text-2xl">-</button>
        <button onClick={saveCandidate} className="bg-green-600 p-4 rounded-full text-white text-2xl">+</button>
      </div>
    </div>
  );
};

export default CandidateSearch;

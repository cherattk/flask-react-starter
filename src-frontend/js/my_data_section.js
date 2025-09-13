import React, { useState, useEffect } from 'react';

export default function MyDataSection() {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/mydata`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
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

  if (!data) {
    return <div>No data found.</div>;
  }

  return (
    <div>
      <h3>Data Section</h3>
      <table className='table'>
        <thead>
         <tr><th>ID</th><th>Description</th></tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}><td>{item.id}</td><td>{item.description}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

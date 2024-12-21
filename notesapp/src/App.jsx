import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [displaytitle, setDisplaytitle] = useState([]);
  const [displaynotes, setDisplaynotes] = useState([]);

  function handlechanges() {
    if (title.trim() !== '' && notes.trim() !== '') {
      setDisplaytitle((prev) => [...prev, title]);
      setDisplaynotes((prev) => [...prev, notes]);
      console.log('Display titles:', displaytitle);
      console.log('Display notes:', displaynotes);
    }
    setTitle('');
    setNotes('');
  }
  function remove(index) {
    // Filter out the note at the specified index for both title and notes
    setDisplaytitle((prev) => prev.filter((_, i) => i !== index));
    setDisplaynotes((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <>
      <div className="content">
        <div className="box">
          <div className="title">
            <h3>React Notes</h3>
          </div>
          <div className="list">
            <div className="notes">
              {/* Correctly render titles and notes */}
              
              {displaytitle.map((item, index) => (
                
                <div key={index}>
                  <button className="xxx" onClick={()=> remove(index)}>X </button>
                  <p>Title: {item}</p>
                  <p>Note: {displaynotes[index]}</p>
                </div>
              ))}
            </div>
            <div className="textcontent">
              <p>Add Notes</p>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Notes"
              />
              <button onClick={handlechanges}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

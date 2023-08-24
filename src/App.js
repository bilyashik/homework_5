import React, { useState } from 'react';

function YourComponent() {
  const initialPerson = {
    name: 'Barbara',
    surname: 'Hepworth',
    email: 'bhepworth@react.com',
    hobby: 'love cats'
  };

  const [person, setPerson] = useState(initialPerson);

  const handleFieldChange = (key, value) => {
    setPerson(prevPerson => ({
      ...prevPerson,
      [key]: value
    }));
  };

  document.body.style.backgroundColor = "#A399B2"

  return (
    <div className="form-container"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '100px',
        marginRight: '100px',
        marginTop: '250px',
        fontFamily: 'sans-serif'

      }}
    >

      <div className="form-field"
        style={{
          backgroundColor: 'white',
          padding: '15px',
          border: '2px solid black',
          borderRadius: '12px',
          backgroundColor: '#F3E6E8'
        }}
      >
        <label>Name: </label>
        <input
          type="text"
          value={person.name}
          onChange={e => handleFieldChange('name', e.target.value)}
          style={{
            padding: '5px',
            borderRadius: '6px',
          }}
        />
        <p className="form-data">{person.name}</p>
      </div>

      <div className="form-field"
        style={{
          backgroundColor: 'white',
          padding: '15px',
          border: '2px solid black',
          borderRadius: '12px',
          backgroundColor: '#F3E6E8'
        }}>
        <label>Surname: </label>
        <input
          type="text"
          value={person.surname}
          onChange={e => handleFieldChange('surname', e.target.value)}
          style={{
            padding: '5px',
            borderRadius: '6px'
          }}
        />
        <p className="form-data">{person.surname}</p>
      </div>

      <div className="form-field"
        style={{
          backgroundColor: 'white',
          padding: '15px',
          border: '2px solid black',
          borderRadius: '12px',
          backgroundColor: '#F3E6E8'
        }}>
        <label>Email: </label>
        <input
          type="text"
          value={person.email}
          onChange={e => handleFieldChange('email', e.target.value)}
          style={{
            padding: '5px',
            borderRadius: '6px'
          }}
        />
        <p className="form-data">{person.email}</p>
      </div>

      <div className="form-field"
        style={{
          backgroundColor: 'white',
          padding: '15px',
          border: '2px solid black',
          borderRadius: '12px',
          backgroundColor: '#F3E6E8'
        }}>
        <label>Hobby: </label>
        <input
          type="text"
          value={person.hobby}
          onChange={e => handleFieldChange('hobby', e.target.value)}
          style={{
            padding: '5px',
            borderRadius: '6px'
          }}
        />
        <p className="form-data">{person.hobby}</p>
      </div>
    </div>
  );
}

export default YourComponent;

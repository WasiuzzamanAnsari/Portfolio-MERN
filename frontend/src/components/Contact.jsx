import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      setStatus('Message sent successfully.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Failed to send message.',err);
    }
  };

  return (
    <section>
      <h2>Contact Me</h2>

      <div>
        <label>
          Name:
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </label>
      </div>

      <div>
        <label>
          Message:
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>
        </label>
      </div>

      <div>
        <button onClick={handleSubmit}>Send</button>
      </div>

      {status && <p>{status}</p>}
    </section>
  );
}


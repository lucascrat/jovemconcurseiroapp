import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, HelpCircle, Search } from 'lucide-react';
import api from '../api';

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({
    topicId: '', banca: '', statement: '', options: ['', '', '', '', ''], correctAnswer: 0, type: 'multiple', explanation: '', concurso: '', ano: new Date().getFullYear()
  });

  useEffect(() => {
    fetchTopics();
  }, []);

  useEffect(() => {
    if (selectedTopic) fetchQuestions();
    else setQuestions([]);
  }, [selectedTopic]);

  const fetchTopics = async () => {
    try {
      const res = await api.get('/admin/topics');
      setTopics(res.data);
      if (res.data.length > 0) setSelectedTopic(res.data[0].id);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/admin/questions?topicId=${selectedTopic}`);
      setQuestions(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...currentQuestion, topicId: selectedTopic };
      if (currentQuestion.id) {
        await api.put(`/admin/questions/${currentQuestion.id}`, payload);
      } else {
        await api.post('/admin/questions', payload);
      }
      setIsModalOpen(false);
      fetchQuestions();
    } catch (err) {
      alert('Erro ao salvar question');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Deseja excluir esta questão?')) return;
    try {
      await api.delete(`/admin/questions/${id}`);
      fetchQuestions();
    } catch (err) {
      alert('Erro ao excluir');
    }
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...currentQuestion.options];
    newOptions[index] = value;
    setCurrentQuestion({ ...currentQuestion, options: newOptions });
  };

  if (loading && topics.length === 0) return <div className="loader">Carregando tópicos...</div>;

  return (
    <div>
      <div className="flex-between">
        <h1 className="page-title">Banco de Questões</h1>
        <button className="btn btn-primary" onClick={() => { 
          setCurrentQuestion({ 
            topicId: selectedTopic, banca: '', statement: '', options: ['', '', '', '', ''], 
            correctAnswer: 0, type: 'multiple', explanation: '', concurso: '', ano: new Date().getFullYear() 
          }); 
          setIsModalOpen(true); 
        }}>
          <Plus size={20} /> Nova Questão
        </button>
      </div>

      <div className="card" style={{ marginTop: 24, padding: 20 }}>
        <div className="form-group" style={{ maxWidth: 400 }}>
          <label><Search size={14} /> Filtrar por Tópico</label>
          <select className="form-control" value={selectedTopic} onChange={e => setSelectedTopic(e.target.value)}>
            {topics.map(t => <option key={t.id} value={t.id}>{t.subjectName} - {t.title}</option>)}
          </select>
        </div>
      </div>

      <div className="card" style={{ marginTop: 20 }}>
        {loading ? <div className="loader">Buscando questões...</div> : (
          <table className="table">
            <thead>
              <tr>
                <th>Enunciado</th>
                <th>Banca</th>
                <th>Ano</th>
                <th style={{ textAlign: 'right' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {questions.map(q => (
                <tr key={q.id}>
                  <td style={{ maxWidth: 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    <HelpCircle size={16} style={{ marginRight: 8 }} /> {q.statement}
                  </td>
                  <td>{q.banca}</td>
                  <td>{q.ano}</td>
                  <td style={{ textAlign: 'right' }}>
                    <button className="btn btn-icon" onClick={() => { setCurrentQuestion(q); setIsModalOpen(true); }}><Edit2 size={16} /></button>
                    <button className="btn btn-icon" style={{ color: 'var(--danger)' }} onClick={() => handleDelete(q.id)}><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
              {questions.length === 0 && <tr><td colSpan="4" style={{ textAlign: 'center', padding: 40 }}>Nenhuma questão para este tópico.</td></tr>}
            </tbody>
          </table>
        )}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="card modal-content" style={{ width: 800, maxHeight: '90vh', overflowY: 'auto' }}>
            <h2>{currentQuestion.id ? 'Editar' : 'Nova'} Questão</h2>
            <form onSubmit={handleSave}>
              <div className="grid-2">
                <div className="form-group">
                  <label>Banca</label>
                  <input className="form-control" value={currentQuestion.banca} onChange={e => setCurrentQuestion({...currentQuestion, banca: e.target.value})} required />
                </div>
                <div className="form-group">
                  <label>Ano</label>
                  <input className="form-control" type="number" value={currentQuestion.ano} onChange={e => setCurrentQuestion({...currentQuestion, ano: parseInt(e.target.value)})} />
                </div>
              </div>
              <div className="form-group">
                <label>Enunciado</label>
                <textarea className="form-control" value={currentQuestion.statement} onChange={e => setCurrentQuestion({...currentQuestion, statement: e.target.value})} rows={4} required />
              </div>
              
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontWeight: 'bold', display: 'block', marginBottom: 8 }}>Alternativas</label>
                {currentQuestion.options.map((opt, idx) => (
                  <div key={idx} className="flex-center" style={{ marginBottom: 8, gap: 10 }}>
                    <input type="radio" name="correct" checked={currentQuestion.correctAnswer === idx} onChange={() => setCurrentQuestion({...currentQuestion, correctAnswer: idx})} />
                    <input className="form-control" value={opt} onChange={e => handleOptionChange(idx, e.target.value)} placeholder={`Alternativa ${String.fromCharCode(65+idx)}`} required={idx < 4} />
                  </div>
                ))}
              </div>

              <div className="form-group">
                <label>Explicação / Gabarito Comentado</label>
                <textarea className="form-control" value={currentQuestion.explanation} onChange={e => setCurrentQuestion({...currentQuestion, explanation: e.target.value})} rows={3} />
              </div>

              <div className="flex-center" style={{ justifyContent: 'flex-end', marginTop: 24, gap: 12 }}>
                <button type="button" className="btn btn-outline" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                <button className="btn btn-primary">Salvar Questão</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

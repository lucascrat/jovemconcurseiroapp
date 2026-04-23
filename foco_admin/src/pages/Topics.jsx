import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Layers } from 'lucide-react';
import api from '../api';

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTopic, setCurrentTopic] = useState({ subjectId: '', title: '', order: 0 });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [topicsRes, subjectsRes] = await Promise.all([
        api.get('/admin/topics'),
        api.get('/admin/subjects')
      ]);
      setTopics(topicsRes.data);
      setSubjects(subjectsRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (currentTopic.id) {
        await api.put(`/admin/topics/${currentTopic.id}`, currentTopic);
      } else {
        await api.post('/admin/topics', currentTopic);
      }
      setIsModalOpen(false);
      fetchData();
    } catch (err) {
      alert('Erro ao salvar');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Deseja excluir este tópico?')) return;
    try {
      await api.delete(`/admin/topics/${id}`);
      fetchData();
    } catch (err) {
      alert('Erro ao excluir');
    }
  };

  if (loading) return <div className="loader">Carregando...</div>;

  return (
    <div>
      <div className="flex-between">
        <h1 className="page-title">Gerenciar Tópicos</h1>
        <button className="btn btn-primary" onClick={() => { setCurrentTopic({ subjectId: subjects[0]?.id || '', title: '', order: 0 }); setIsModalOpen(true); }}>
          <Plus size={20} /> Novo Tópico
        </button>
      </div>

      <div className="card" style={{ marginTop: 24 }}>
        <table className="table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Matéria</th>
              <th>Ordem</th>
              <th style={{ textAlign: 'right' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {topics.map(t => (
              <tr key={t.id}>
                <td><div className="flex-center"><Layers size={16} style={{ marginRight: 8 }} /> {t.title}</div></td>
                <td><span className="badge badge-outline">{t.subjectName}</span></td>
                <td>{t.order}</td>
                <td style={{ textAlign: 'right' }}>
                  <button className="btn btn-icon" onClick={() => { setCurrentTopic(t); setIsModalOpen(true); }}><Edit2 size={16} /></button>
                  <button className="btn btn-icon" style={{ color: 'var(--danger)' }} onClick={() => handleDelete(t.id)}><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="card modal-content" style={{ width: 500 }}>
            <h2>{currentTopic.id ? 'Editar' : 'Novo'} Tópico</h2>
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label>Matéria</label>
                <select className="form-control" value={currentTopic.subjectId} onChange={e => setCurrentTopic({...currentTopic, subjectId: e.target.value})} required>
                  <option value="">Selecione uma matéria</option>
                  {subjects.map(s => <option key={s.id} value={s.id}>{s.name} ({s.level})</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Título do Tópico</label>
                <input className="form-control" value={currentTopic.title} onChange={e => setCurrentTopic({...currentTopic, title: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Ordem de Exibição</label>
                <input className="form-control" type="number" value={currentTopic.order} onChange={e => setCurrentTopic({...currentTopic, order: parseInt(e.target.value)})} />
              </div>
              <div className="flex-center" style={{ justifyContent: 'flex-end', marginTop: 24, gap: 12 }}>
                <button type="button" className="btn btn-outline" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                <button className="btn btn-primary">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

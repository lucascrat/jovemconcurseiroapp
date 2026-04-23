import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, BookOpen } from 'lucide-react';
import api from '../api';

export default function Subjects() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSubject, setCurrentSubject] = useState({ name: '', level: 'médio', description: '' });

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const res = await api.get('/admin/subjects');
      setSubjects(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (currentSubject.id) {
        await api.put(`/admin/subjects/${currentSubject.id}`, currentSubject);
      } else {
        await api.post('/admin/subjects', currentSubject);
      }
      setIsModalOpen(false);
      fetchSubjects();
    } catch (err) {
      alert('Erro ao salvar');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Deseja excluir esta matéria?')) return;
    try {
      await api.delete(`/admin/subjects/${id}`);
      fetchSubjects();
    } catch (err) {
      alert('Erro ao excluir');
    }
  };

  if (loading) return <div className="loader">Carregando...</div>;

  return (
    <div>
      <div className="flex-between">
        <h1 className="page-title">Gerenciar Matérias</h1>
        <button className="btn btn-primary" onClick={() => { setCurrentSubject({ name: '', level: 'médio', description: '' }); setIsModalOpen(true); }}>
          <Plus size={20} /> Nova Matéria
        </button>
      </div>

      <div className="card" style={{ marginTop: 24 }}>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Nível</th>
              <th>Descrição</th>
              <th style={{ textAlign: 'right' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map(s => (
              <tr key={s.id}>
                <td><div className="flex-center"><BookOpen size={16} style={{ marginRight: 8 }} /> {s.name}</div></td>
                <td><span className="badge badge-outline">{s.level}</span></td>
                <td>{s.description?.substring(0, 50)}...</td>
                <td style={{ textAlign: 'right' }}>
                  <button className="btn btn-icon" onClick={() => { setCurrentSubject(s); setIsModalOpen(true); }}><Edit2 size={16} /></button>
                  <button className="btn btn-icon" style={{ color: 'var(--danger)' }} onClick={() => handleDelete(s.id)}><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="card modal-content" style={{ width: 500 }}>
            <h2>{currentSubject.id ? 'Editar' : 'Nova'} Matéria</h2>
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label>Nome</label>
                <input className="form-control" value={currentSubject.name} onChange={e => setCurrentSubject({...currentSubject, name: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Nível</label>
                <select className="form-control" value={currentSubject.level} onChange={e => setCurrentSubject({...currentSubject, level: e.target.value})}>
                  <option value="fundamental">Fundamental</option>
                  <option value="médio">Médio</option>
                  <option value="superior">Superior</option>
                </select>
              </div>
              <div className="form-group">
                <label>Descrição</label>
                <textarea className="form-control" value={currentSubject.description} onChange={e => setCurrentSubject({...currentSubject, description: e.target.value})} rows={3} />
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

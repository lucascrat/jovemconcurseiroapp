import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, BookOpen, GraduationCap, School, Award } from 'lucide-react';
import api from '../api';

const LEVELS = ['Fundamental', 'Médio', 'Superior'];
const LEVEL_CONFIG = {
  'Fundamental': { icon: <School size={20} />, color: '#22c55e' },
  'Médio': { icon: <GraduationCap size={20} />, color: '#3b82f6' },
  'Superior': { icon: <Award size={20} />, color: '#a855f7' },
};

function matchLevel(dbLevel, uiLevel) {
  return (dbLevel || '').toLowerCase() === uiLevel.toLowerCase();
}

export default function Subjects() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeLevel, setActiveLevel] = useState('all');
  const [currentSubject, setCurrentSubject] = useState({ name: '', level: 'Médio', description: '' });

  useEffect(() => { fetchSubjects(); }, []);

  const fetchSubjects = async () => {
    try {
      const res = await api.get('/admin/subjects');
      setSubjects(res.data);
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (currentSubject.id) await api.put(`/admin/subjects/${currentSubject.id}`, currentSubject);
      else await api.post('/admin/subjects', currentSubject);
      setIsModalOpen(false);
      fetchSubjects();
    } catch (err) { alert('Erro ao salvar'); }
  };

  const handleDelete = async (id) => {
    if (!confirm('Deseja excluir esta matéria e todos seus tópicos?')) return;
    try { await api.delete(`/admin/subjects/${id}`); fetchSubjects(); }
    catch (err) { alert('Erro ao excluir'); }
  };

  const grouped = {};
  LEVELS.forEach(lv => { grouped[lv] = subjects.filter(s => matchLevel(s.level, lv)); });

  const visibleLevels = activeLevel === 'all' ? LEVELS : [activeLevel];

  if (loading) return <div className="loader">Carregando...</div>;

  return (
    <div>
      <div className="flex-between">
        <h1 className="page-title">Gerenciar Matérias</h1>
        <button className="btn btn-primary" onClick={() => { setCurrentSubject({ name: '', level: 'Médio', description: '' }); setIsModalOpen(true); }}>
          <Plus size={20} /> Nova Matéria
        </button>
      </div>

      <div className="level-tabs" style={{ display: 'flex', gap: 12, marginTop: 24 }}>
        <button className={`level-tab ${activeLevel === 'all' ? 'active' : ''}`} onClick={() => setActiveLevel('all')}>
          Todos ({subjects.length})
        </button>
        {LEVELS.map(lv => {
          const cfg = LEVEL_CONFIG[lv];
          return (
            <button key={lv} className={`level-tab ${activeLevel === lv ? 'active' : ''}`} onClick={() => setActiveLevel(lv)}
              style={activeLevel === lv ? { borderColor: cfg.color, color: cfg.color } : {}}>
              {cfg.icon} {lv} ({grouped[lv]?.length || 0})
            </button>
          );
        })}
      </div>

      {visibleLevels.map(level => {
        const cfg = LEVEL_CONFIG[level];
        const items = grouped[level] || [];
        if (items.length === 0) return null;
        return (
          <div key={level} style={{ marginTop: 28 }}>
            <div className="flex-center" style={{ gap: 10, marginBottom: 14 }}>
              <div style={{ width: 4, height: 28, borderRadius: 4, background: cfg.color }}></div>
              <h2 style={{ margin: 0, fontSize: '1.1rem' }}>{cfg.icon} {level}</h2>
              <span className="badge" style={{ background: cfg.color + '22', color: cfg.color }}>{items.length} matérias</span>
            </div>
            <div className="card">
              <table className="table">
                <thead><tr><th>Nome</th><th>Descrição</th><th style={{ textAlign: 'right' }}>Ações</th></tr></thead>
                <tbody>
                  {items.map(s => (
                    <tr key={s.id}>
                      <td><div className="flex-center"><BookOpen size={16} style={{ marginRight: 8, color: cfg.color }} /> {s.name}</div></td>
                      <td style={{ color: 'var(--text-muted)', maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.description || '—'}</td>
                      <td style={{ textAlign: 'right' }}>
                        <button className="btn btn-icon" onClick={() => { setCurrentSubject(s); setIsModalOpen(true); }}><Edit2 size={16} /></button>
                        <button className="btn btn-icon" style={{ color: 'var(--danger)' }} onClick={() => handleDelete(s.id)}><Trash2 size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}

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
                  <option value="Fundamental">Fundamental</option>
                  <option value="Médio">Médio</option>
                  <option value="Superior">Superior</option>
                </select>
              </div>
              <div className="form-group">
                <label>Descrição</label>
                <textarea className="form-control" value={currentSubject.description || ''} onChange={e => setCurrentSubject({...currentSubject, description: e.target.value})} rows={3} />
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

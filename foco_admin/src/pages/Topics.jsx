import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Layers, School, GraduationCap, Award } from 'lucide-react';
import api from '../api';

const LEVEL_CONFIG = {
  fundamental: { label: 'Fundamental', icon: <School size={18} />, color: '#22c55e' },
  médio: { label: 'Médio', icon: <GraduationCap size={18} />, color: '#3b82f6' },
  superior: { label: 'Superior', icon: <Award size={18} />, color: '#a855f7' },
};

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeLevel, setActiveLevel] = useState('all');
  const [activeSubject, setActiveSubject] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTopic, setCurrentTopic] = useState({ subjectId: '', title: '', order: 0 });

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    try {
      const [topicsRes, subjectsRes] = await Promise.all([
        api.get('/admin/topics'),
        api.get('/admin/subjects')
      ]);
      setTopics(topicsRes.data);
      setSubjects(subjectsRes.data);
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
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
    } catch (err) { alert('Erro ao salvar'); }
  };

  const handleDelete = async (id) => {
    if (!confirm('Deseja excluir este tópico?')) return;
    try { await api.delete(`/admin/topics/${id}`); fetchData(); }
    catch (err) { alert('Erro ao excluir'); }
  };

  // Build subject-level map
  const subjectLevelMap = {};
  subjects.forEach(s => { subjectLevelMap[s.id] = s.level; });

  // Filter subjects by active level
  const filteredSubjects = activeLevel === 'all' 
    ? subjects 
    : subjects.filter(s => s.level === activeLevel);

  // Filter topics
  const filteredTopics = topics.filter(t => {
    const levelMatch = activeLevel === 'all' || subjectLevelMap[t.subjectId] === activeLevel;
    const subjectMatch = activeSubject === 'all' || t.subjectId === activeSubject;
    return levelMatch && subjectMatch;
  });

  // Group topics by subject
  const groupedBySubject = {};
  filteredTopics.forEach(t => {
    const key = t.subjectName || 'Sem Matéria';
    if (!groupedBySubject[key]) groupedBySubject[key] = { topics: [], level: subjectLevelMap[t.subjectId] };
    groupedBySubject[key].topics.push(t);
  });

  // Level counts
  const levelCounts = { fundamental: 0, médio: 0, superior: 0 };
  topics.forEach(t => {
    const lv = subjectLevelMap[t.subjectId];
    if (lv && levelCounts[lv] !== undefined) levelCounts[lv]++;
  });

  if (loading) return <div className="loader">Carregando...</div>;

  return (
    <div>
      <div className="flex-between">
        <h1 className="page-title">Gerenciar Tópicos</h1>
        <button className="btn btn-primary" onClick={() => { setCurrentTopic({ subjectId: subjects[0]?.id || '', title: '', order: 0 }); setIsModalOpen(true); }}>
          <Plus size={20} /> Novo Tópico
        </button>
      </div>

      {/* Level Tabs */}
      <div className="level-tabs" style={{ display: 'flex', gap: 12, marginTop: 24 }}>
        <button className={`level-tab ${activeLevel === 'all' ? 'active' : ''}`} onClick={() => { setActiveLevel('all'); setActiveSubject('all'); }}>
          Todos ({topics.length})
        </button>
        {Object.entries(LEVEL_CONFIG).map(([key, cfg]) => (
          <button key={key} className={`level-tab ${activeLevel === key ? 'active' : ''}`} onClick={() => { setActiveLevel(key); setActiveSubject('all'); }}
            style={activeLevel === key ? { borderColor: cfg.color, color: cfg.color } : {}}>
            {cfg.icon} {cfg.label} ({levelCounts[key]})
          </button>
        ))}
      </div>

      {/* Subject filter */}
      {activeLevel !== 'all' && (
        <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
          <button className={`badge ${activeSubject === 'all' ? 'badge-primary' : 'badge-outline'}`} 
            style={{ cursor: 'pointer', padding: '6px 14px' }} onClick={() => setActiveSubject('all')}>
            Todas as Matérias
          </button>
          {filteredSubjects.map(s => (
            <button key={s.id} className={`badge ${activeSubject === s.id ? 'badge-primary' : 'badge-outline'}`}
              style={{ cursor: 'pointer', padding: '6px 14px' }} onClick={() => setActiveSubject(s.id)}>
              {s.name}
            </button>
          ))}
        </div>
      )}

      {/* Grouped by Subject */}
      {Object.entries(groupedBySubject).map(([subjectName, data]) => {
        const cfg = LEVEL_CONFIG[data.level] || LEVEL_CONFIG['médio'];
        return (
          <div key={subjectName} style={{ marginTop: 24 }}>
            <div className="flex-center" style={{ gap: 10, marginBottom: 10 }}>
              <div style={{ width: 4, height: 24, borderRadius: 4, background: cfg.color }}></div>
              <h3 style={{ margin: 0 }}>{subjectName}</h3>
              <span className="badge" style={{ background: cfg.color + '22', color: cfg.color }}>{data.topics.length}</span>
            </div>
            <div className="card">
              <table className="table">
                <thead><tr><th>Título</th><th>Ordem</th><th style={{ textAlign: 'right' }}>Ações</th></tr></thead>
                <tbody>
                  {data.topics.map(t => (
                    <tr key={t.id}>
                      <td><div className="flex-center"><Layers size={16} style={{ marginRight: 8, color: cfg.color }} /> {t.title}</div></td>
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
          </div>
        );
      })}

      {filteredTopics.length === 0 && <div className="card" style={{ marginTop: 24, textAlign: 'center', padding: 40, color: 'var(--text-muted)' }}>Nenhum tópico encontrado para este filtro.</div>}

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

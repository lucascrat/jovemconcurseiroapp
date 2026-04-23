import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Shield, Brain } from 'lucide-react';
import api from '../api';

export default function ExamBoards() {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBoard, setCurrentBoard] = useState({ id: '', name: '', difficulty: 'Média', style: '', analysis: '', logoUrl: '' });

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    try {
      const res = await api.get('/admin/boards');
      setBoards(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      // Check if updating or creating
      const exists = boards.find(b => b.id === currentBoard.id);
      if (exists) {
        await api.put(`/admin/boards/${currentBoard.id}`, currentBoard);
      } else {
        await api.post('/admin/boards', currentBoard);
      }
      setIsModalOpen(false);
      fetchBoards();
    } catch (err) {
      alert('Erro ao salvar banca');
    }
  };

  if (loading) return <div className="loader">Carregando bancas...</div>;

  return (
    <div>
      <div className="flex-between">
        <h1 className="page-title">Principais Bancas</h1>
        <button className="btn btn-primary" onClick={() => { setCurrentBoard({ id: '', name: '', difficulty: 'Média', style: '', analysis: '', logoUrl: '' }); setIsModalOpen(true); }}>
          <Plus size={20} /> Nova Banca
        </button>
      </div>

      <div className="grid-2" style={{ marginTop: 24 }}>
        {boards.map(b => (
          <div key={b.id} className="card">
            <div className="flex-between" style={{ marginBottom: 16 }}>
              <div className="flex-center">
                {b.logoUrl ? <img src={b.logoUrl} alt={b.name} style={{ width: 40, height: 40, objectFit: 'contain', marginRight: 12 }} /> : <Shield size={32} color="var(--primary)" style={{ marginRight: 12 }} />}
                <div>
                  <h3 style={{ margin: 0 }}>{b.name}</h3>
                  <span className={`badge ${b.difficulty === 'Alta' || b.difficulty === 'Muito Alta' ? 'badge-danger' : 'badge-outline'}`}>{b.difficulty}</span>
                </div>
              </div>
              <button className="btn btn-icon" onClick={() => { setCurrentBoard(b); setIsModalOpen(true); }}><Edit2 size={16} /></button>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 12 }}><strong>Estilo:</strong> {b.style}</p>
            {b.analysis && (
              <div style={{ background: 'rgba(59, 130, 246, 0.05)', padding: 12, borderRadius: 8, fontSize: '0.85rem' }}>
                <div className="flex-center" style={{ marginBottom: 8, color: 'var(--primary)' }}><Brain size={14} /> <strong>Análise IA:</strong></div>
                <div style={{ maxHeight: 100, overflow: 'hidden', textOverflow: 'ellipsis' }}>{b.analysis}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="card modal-content" style={{ width: 600 }}>
            <h2>{boards.find(b => b.id === currentBoard.id) ? 'Editar' : 'Nova'} Banca</h2>
            <form onSubmit={handleSave}>
              <div className="grid-2">
                <div className="form-group">
                  <label>ID (Slug)</label>
                  <input className="form-control" value={currentBoard.id} onChange={e => setCurrentBoard({...currentBoard, id: e.target.value})} placeholder="ex: cebraspe" required disabled={!!boards.find(b => b.id === currentBoard.id)} />
                </div>
                <div className="form-group">
                  <label>Nome Completo</label>
                  <input className="form-control" value={currentBoard.name} onChange={e => setCurrentBoard({...currentBoard, name: e.target.value})} required />
                </div>
              </div>
              <div className="grid-2">
                <div className="form-group">
                  <label>Dificuldade</label>
                  <select className="form-control" value={currentBoard.difficulty} onChange={e => setCurrentBoard({...currentBoard, difficulty: e.target.value})}>
                    <option>Baixa</option>
                    <option>Média</option>
                    <option>Alta</option>
                    <option>Muito Alta</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>URL do Logo</label>
                  <input className="form-control" value={currentBoard.logoUrl} onChange={e => setCurrentBoard({...currentBoard, logoUrl: e.target.value})} />
                </div>
              </div>
              <div className="form-group">
                <label>Estilo de Cobrança</label>
                <input className="form-control" value={currentBoard.style} onChange={e => setCurrentBoard({...currentBoard, style: e.target.value})} placeholder="ex: Múltipla escolha (A-E)" />
              </div>
              <div className="form-group">
                <label>Análise Detalhada (Markdown)</label>
                <textarea className="form-control" value={currentBoard.analysis} onChange={e => setCurrentBoard({...currentBoard, analysis: e.target.value})} rows={5} />
              </div>
              <div className="flex-center" style={{ justifyContent: 'flex-end', marginTop: 24, gap: 12 }}>
                <button type="button" className="btn btn-outline" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                <button className="btn btn-primary">Salvar Banca</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

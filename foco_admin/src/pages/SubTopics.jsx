import React, { useState, useEffect } from 'react';
import api from '../api';
import { Edit2, UploadCloud, Video, Mic, Map, FileText, Loader, CheckCircle, Search, Trash2 } from 'lucide-react';

export default function SubTopics() {
  const [topics, setTopics] = useState([]);
  const [subtopics, setSubtopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSub, setEditingSub] = useState(null);
  const [uploading, setUploading] = useState({ video: false, audio: false, map: false });

  useEffect(() => {
    fetchTopics();
  }, []);

  useEffect(() => {
    if (selectedTopic) fetchSubtopics();
    else setSubtopics([]);
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

  const fetchSubtopics = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/admin/subtopics?topicId=${selectedTopic}`);
      setSubtopics(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading({ ...uploading, [type]: true });
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await api.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      const url = res.data.url;
      
      setEditingSub(prev => {
        const next = { ...prev };
        if (type === 'video') next.videoUrl = url;
        if (type === 'audio') next.audioUrl = url;
        if (type === 'map') next.mindMapUrl = url;
        return next;
      });
    } catch (err) {
      alert('Erro ao fazer upload');
    } finally {
      setUploading({ ...uploading, [type]: false });
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...editingSub, topicId: selectedTopic };
      if (editingSub.id) {
        await api.put(`/admin/subtopics/${editingSub.id}`, payload);
      } else {
        await api.post('/admin/subtopics', payload);
      }
      setIsModalOpen(false);
      fetchSubtopics();
    } catch (err) {
      alert('Erro ao salvar');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Deseja excluir este conteúdo?')) return;
    try {
      await api.delete(`/admin/subtopics/${id}`);
      fetchSubtopics();
    } catch (err) {
      alert('Erro ao excluir');
    }
  };

  if (loading && topics.length === 0) return <div className="loader">Carregando tópicos...</div>;

  return (
    <div>
      <div className="flex-between">
        <h1 className="page-title">Gerenciar Conteúdo (Subtópicos)</h1>
        <button className="btn btn-primary" onClick={() => {
          setEditingSub({ name: '', content: '', videoUrl: '', audioUrl: '', mindMapUrl: '' });
          setIsModalOpen(true);
        }}>
          <Plus size={20} /> Novo Conteúdo
        </button>
      </div>

      <div className="card" style={{ marginTop: 24, padding: 20 }}>
        <div className="form-group" style={{ maxWidth: 400 }}>
          <label><Search size={14} /> Selecione o Tópico</label>
          <select className="form-control" value={selectedTopic} onChange={e => setSelectedTopic(e.target.value)}>
            {topics.map(t => <option key={t.id} value={t.id}>{t.subjectName} - {t.title}</option>)}
          </select>
        </div>
      </div>

      <div className="card" style={{ marginTop: 20 }}>
        {loading ? <div className="loader">Buscando conteúdos...</div> : (
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Mídias</th>
                <th style={{ textAlign: 'right' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {subtopics.map(s => (
                <tr key={s.id}>
                  <td><div className="flex-center"><FileText size={16} /> {s.name}</div></td>
                  <td>
                    <div className="flex-center" style={{ gap: 12 }}>
                      {s.videoUrl && <Video size={16} color="var(--primary)" title="Vídeo" />}
                      {s.audioUrl && <Mic size={16} color="var(--success)" title="Áudio" />}
                      {s.mindMapUrl && <Map size={16} color="var(--accent)" title="Mapa Mental" />}
                    </div>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <button className="btn btn-icon" onClick={() => { setEditingSub(s); setIsModalOpen(true); }}><Edit2 size={16} /></button>
                    <button className="btn btn-icon" style={{ color: 'var(--danger)' }} onClick={() => handleDelete(s.id)}><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
              {subtopics.length === 0 && <tr><td colSpan="3" style={{ textAlign: 'center', padding: 40 }}>Nenhum conteúdo para este tópico.</td></tr>}
            </tbody>
          </table>
        )}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="card modal-content" style={{ width: 850 }}>
            <div className="modal-header">
              <h2>{editingSub.id ? 'Editar Conteúdo' : 'Novo Conteúdo'}</h2>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Nome do Subtópico</label>
                <input className="form-control" value={editingSub.name} onChange={e => setEditingSub({...editingSub, name: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Teoria (Markdown)</label>
                <textarea className="form-control" value={editingSub.content} onChange={e => setEditingSub({...editingSub, content: e.target.value})} rows={10} />
              </div>

              <div className="grid-2">
                <div>
                  <h3 style={{marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8}}><Video size={18}/> Vídeo</h3>
                  <input className="form-control" placeholder="URL do vídeo..." value={editingSub.videoUrl || ''} onChange={e => setEditingSub({...editingSub, videoUrl: e.target.value})} style={{marginBottom: 10}} />
                  <label className="upload-zone" style={{display: 'block'}}>
                    {uploading.video ? <Loader className="spin" /> : <UploadCloud />}
                    <p style={{marginTop: 8}}>Upload de Vídeo R2</p>
                    <input type="file" accept="video/*" style={{display:'none'}} onChange={e => handleUpload(e, 'video')} />
                  </label>
                </div>
                <div>
                  <h3 style={{marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8}}><Mic size={18}/> Áudio</h3>
                  <input className="form-control" placeholder="URL do áudio..." value={editingSub.audioUrl || ''} onChange={e => setEditingSub({...editingSub, audioUrl: e.target.value})} style={{marginBottom: 10}} />
                  <label className="upload-zone" style={{display: 'block'}}>
                    {uploading.audio ? <Loader className="spin" /> : <UploadCloud />}
                    <p style={{marginTop: 8}}>Upload de Áudio R2</p>
                    <input type="file" accept="audio/*" style={{display:'none'}} onChange={e => handleUpload(e, 'audio')} />
                  </label>
                </div>
                <div style={{gridColumn: '1 / -1'}}>
                  <h3 style={{marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8}}><Map size={18}/> Mapa Mental</h3>
                  <input className="form-control" placeholder="URL do mapa mental..." value={editingSub.mindMapUrl || ''} onChange={e => setEditingSub({...editingSub, mindMapUrl: e.target.value})} style={{marginBottom: 10}} />
                  <label className="upload-zone" style={{display: 'block'}}>
                    {uploading.map ? <Loader className="spin" /> : <UploadCloud />}
                    <p style={{marginTop: 8}}>Upload de Imagem R2</p>
                    <input type="file" accept="image/*" style={{display:'none'}} onChange={e => handleUpload(e, 'map')} />
                  </label>
                  {editingSub.mindMapUrl && <div className="media-preview" style={{textAlign: 'center'}}><img src={editingSub.mindMapUrl} alt="Preview" /></div>}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline" onClick={() => setIsModalOpen(false)}>Cancelar</button>
              <button className="btn btn-primary" onClick={handleSave}>Salvar Tudo</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const Plus = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;

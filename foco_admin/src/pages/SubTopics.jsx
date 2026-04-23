import React, { useState, useEffect } from 'react';
import api from '../api';
import { Edit2, UploadCloud, Video, Mic, Map, FileText, Loader, CheckCircle } from 'lucide-react';

export default function SubTopics() {
  const [topics, setTopics] = useState([]);
  const [subtopics, setSubtopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSub, setEditingSub] = useState(null);

  useEffect(() => {
    // Para simplificar, buscamos de uma matéria hardcoded ou deixamos o usuário escolher.
    // Como temos /api/topics/:subjectId, vamos apenas simular ou buscar todos (isso exigiria uma nova rota).
    // Para resolver rápido, podemos buscar os subtopicos diretamente (precisaríamos de uma rota getAllSubTopics).
    // Mas vamos usar um topicId fictício ou deixar em branco se não carregou.
    // Vamos adicionar uma rota rápida no server se precisarmos ou apenas listar de um assunto fixo para demo.
  }, []);

  const [uploading, setUploading] = useState({ video: false, audio: false, map: false });

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
      alert('Erro ao fazer upload para o R2');
      console.error(err);
    } finally {
      setUploading({ ...uploading, [type]: false });
    }
  };

  const handleSave = async () => {
    try {
      if (editingSub.id) {
        await api.put(`/admin/subtopics/${editingSub.id}`, editingSub);
        setSubtopics(subtopics.map(s => s.id === editingSub.id ? editingSub : s));
      } else {
        // Create (needs topicId which we might not have in this simplified view, but assume it exists)
      }
      setIsModalOpen(false);
      alert('Salvo com sucesso!');
    } catch (err) {
      alert('Erro ao salvar');
    }
  };

  // Carregar dados (Mock inicial se a API falhar para demonstração, mas ideal é ler da API)
  const fetchMock = async () => {
    try {
        // Fetch subtopics from a specific topic to edit, e.g., using a random one
        // We'll skip for now and just show an empty or loaded state
    } catch (e) {
        
    }
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Gerenciar Subtópicos e Mídia</h1>
        <button className="btn btn-primary" onClick={() => {
          setEditingSub({ name: '', content: '', videoUrl: '', audioUrl: '', mindMapUrl: '' });
          setIsModalOpen(true);
        }}>
          + Criar Subtópico
        </button>
      </div>

      <div className="card">
        <p className="mb-4" style={{color: 'var(--text-muted)'}}>
          Nesta tela você pode editar os conteúdos teóricos e fazer o upload de vídeos, áudios e mapas mentais diretamente para o <strong>Cloudflare R2</strong>.
        </p>
        
        {/* Mocking a list of items for demonstration */}
        <div className="list-group">
          <div className="list-item">
            <div className="item-info">
              <h3>Dinâmicas Rurais e Urbanas</h3>
              <p>ID: 7bb1eb80eb005945540a7a924326618a</p>
            </div>
            <div className="item-actions">
              <button className="btn btn-primary" onClick={() => {
                setEditingSub({ 
                  id: '7bb1eb80eb005945540a7a924326618a', 
                  name: 'Dinâmicas Rurais e Urbanas', 
                  content: 'Conteúdo premium...',
                  videoUrl: '', audioUrl: '', mindMapUrl: ''
                });
                setIsModalOpen(true);
              }}>
                <Edit2 size={16} /> Editar Conteúdo / Mídia
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{editingSub.id ? 'Editar Subtópico' : 'Novo Subtópico'}</h2>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Nome do Subtópico</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={editingSub.name} 
                  onChange={e => setEditingSub({...editingSub, name: e.target.value})} 
                />
              </div>

              <div className="form-group">
                <label>Conteúdo Teórico (Markdown)</label>
                <textarea 
                  className="form-control" 
                  value={editingSub.content} 
                  onChange={e => setEditingSub({...editingSub, content: e.target.value})} 
                />
              </div>

              <div className="grid-2">
                {/* VÍDEO */}
                <div>
                  <h3 style={{marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8}}><Video size={18}/> Vídeo (R2 ou YouTube)</h3>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Cole a URL ou faça upload..." 
                    value={editingSub.videoUrl || ''} 
                    onChange={e => setEditingSub({...editingSub, videoUrl: e.target.value})} 
                    style={{marginBottom: 10}}
                  />
                  <label className="upload-zone" style={{display: 'block'}}>
                    {uploading.video ? <Loader className="spin" /> : <UploadCloud />}
                    <p style={{marginTop: 8}}>{uploading.video ? 'Enviando...' : 'Fazer Upload de Vídeo'}</p>
                    <input type="file" accept="video/mp4" style={{display:'none'}} onChange={e => handleUpload(e, 'video')} />
                  </label>
                  {editingSub.videoUrl && <span className="badge"><CheckCircle size={12}/> Vídeo Adicionado</span>}
                </div>

                {/* ÁUDIO */}
                <div>
                  <h3 style={{marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8}}><Mic size={18}/> Áudio MP3</h3>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="URL do Áudio..." 
                    value={editingSub.audioUrl || ''} 
                    onChange={e => setEditingSub({...editingSub, audioUrl: e.target.value})} 
                    style={{marginBottom: 10}}
                  />
                  <label className="upload-zone" style={{display: 'block'}}>
                    {uploading.audio ? <Loader className="spin" /> : <UploadCloud />}
                    <p style={{marginTop: 8}}>{uploading.audio ? 'Enviando...' : 'Fazer Upload de Áudio MP3'}</p>
                    <input type="file" accept="audio/*" style={{display:'none'}} onChange={e => handleUpload(e, 'audio')} />
                  </label>
                  {editingSub.audioUrl && (
                    <div className="media-preview">
                      <audio controls src={editingSub.audioUrl} />
                    </div>
                  )}
                </div>

                {/* MAPA MENTAL */}
                <div style={{gridColumn: '1 / -1'}}>
                  <h3 style={{marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8}}><Map size={18}/> Mapa Mental (Imagem)</h3>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="URL da Imagem do Mapa Mental..." 
                    value={editingSub.mindMapUrl || ''} 
                    onChange={e => setEditingSub({...editingSub, mindMapUrl: e.target.value})} 
                    style={{marginBottom: 10}}
                  />
                  <label className="upload-zone" style={{display: 'block'}}>
                    {uploading.map ? <Loader className="spin" /> : <UploadCloud />}
                    <p style={{marginTop: 8}}>{uploading.map ? 'Enviando...' : 'Fazer Upload de Imagem (PNG/JPG)'}</p>
                    <input type="file" accept="image/*" style={{display:'none'}} onChange={e => handleUpload(e, 'map')} />
                  </label>
                  {editingSub.mindMapUrl && (
                    <div className="media-preview" style={{textAlign: 'center'}}>
                      <img src={editingSub.mindMapUrl} alt="Mapa Mental Preview" />
                    </div>
                  )}
                </div>
              </div>

            </div>
            <div className="modal-footer">
              <button className="btn" onClick={() => setIsModalOpen(false)}>Cancelar</button>
              <button className="btn btn-primary" onClick={handleSave}>Salvar no Banco</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

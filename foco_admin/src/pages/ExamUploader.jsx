import React, { useState, useEffect } from 'react';
import { Upload, Brain, CheckCircle, AlertCircle, Loader, ArrowRight, Save } from 'lucide-react';
import api from '../api';

export default function ExamUploader() {
  const [file, setFile] = useState(null);
  const [banca, setBanca] = useState('');
  const [topicId, setTopicId] = useState('');
  const [topics, setTopics] = useState([]);
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [extractedQuestions, setExtractedQuestions] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [tRes, bRes] = await Promise.all([
        api.get('/admin/topics'),
        api.get('/admin/boards')
      ]);
      setTopics(tRes.data);
      setBoards(bRes.data);
    } catch (err) { console.error(err); }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !banca) return alert('Selecione um arquivo e a banca');

    setLoading(true);
    setStatus('Gemini está lendo a prova e extraindo as questões...');
    setExtractedQuestions([]);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('banca', banca);

    try {
      const res = await api.post('/admin/extract-questions', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setExtractedQuestions(res.data.questions);
      setStatus(`Sucesso! ${res.data.questions.length} questões extraídas.`);
    } catch (err) {
      alert('Erro na extração IA: ' + (err.response?.data?.error || err.message));
      setStatus('Falha na extração.');
    } finally {
      setLoading(false);
    }
  };

  const injectQuestions = async () => {
    if (!topicId) return alert('Selecione um tópico para injetar as questões');
    if (!confirm(`Deseja injetar ${extractedQuestions.length} questões no tópico selecionado?`)) return;

    setLoading(true);
    setStatus('Injetando questões no banco de dados...');

    try {
      for (const q of extractedQuestions) {
        await api.post('/admin/questions', { ...q, topicId });
      }
      alert('Questões injetadas com sucesso!');
      setExtractedQuestions([]);
      setStatus('Injeção concluída.');
    } catch (err) {
      alert('Erro ao injetar questões');
    } finally {
      setLoading(false);
    }
  };

  const analyzeBoard = async () => {
    if (extractedQuestions.length === 0) return;
    setLoading(true);
    setStatus('Gemini está analisando o padrão da banca com base nestas questões...');
    try {
      const board = boards.find(b => b.name === banca);
      const res = await api.post('/admin/analyze-board', {
        questions: extractedQuestions,
        boardName: banca,
        boardId: board?.id
      });
      alert('Análise concluída e salva no perfil da banca!');
      console.log(res.data.analysis);
    } catch (err) {
      alert('Erro na análise IA');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto' }}>
      <h1 className="page-title">Upload de Provas (IA Gemini)</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 32 }}>
        Suba o PDF ou Imagem da prova. O Gemini irá transcrever e formatar as questões automaticamente.
      </p>

      <div className="grid-2">
        <div className="card">
          <h3>1. Configuração do Upload</h3>
          <form onSubmit={handleUpload} style={{ marginTop: 20 }}>
            <div className="form-group">
              <label>Banca Examinadora</label>
              <select className="form-control" value={banca} onChange={e => setBanca(e.target.value)} required>
                <option value="">Selecione a banca</option>
                {boards.map(b => <option key={b.id} value={b.name}>{b.name}</option>)}
              </select>
            </div>
            
            <label className="upload-zone" style={{ display: 'block', height: 150 }}>
              <Upload size={32} />
              <p>{file ? file.name : 'Arraste a prova (PDF/Imagens) aqui'}</p>
              <input type="file" style={{ display: 'none' }} onChange={e => setFile(e.target.files[0])} />
            </label>

            <button className="btn btn-primary" style={{ width: '100%', marginTop: 20, justifyContent: 'center' }} disabled={loading}>
              {loading ? <Loader className="spin" /> : <Brain size={20} />} Extrair Questões com IA
            </button>
          </form>
          {status && <div className="badge" style={{ width: '100%', marginTop: 16, textAlign: 'center' }}>{status}</div>}
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>2. Injeção no Aplicativo</h3>
          <div className="form-group" style={{ marginTop: 20 }}>
            <label>Destino: Tópico do App</label>
            <select className="form-control" value={topicId} onChange={e => setTopicId(e.target.value)}>
              <option value="">Selecione o tópico</option>
              {topics.map(t => <option key={t.id} value={t.id}>{t.subjectName} - {t.title}</option>)}
            </select>
          </div>
          
          <div style={{ flex: 1, border: '1px solid var(--border-color)', borderRadius: 8, padding: 16, background: 'rgba(0,0,0,0.1)', overflowY: 'auto', maxHeight: 300 }}>
            {extractedQuestions.length > 0 ? (
              extractedQuestions.map((q, i) => (
                <div key={i} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.85rem' }}>
                  <strong>Q{i+1}:</strong> {q.statement.substring(0, 80)}...
                </div>
              ))
            ) : (
              <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: 100 }}>Nenhuma questão extraída ainda.</p>
            )}
          </div>

          <div className="flex-center" style={{ marginTop: 20, gap: 12 }}>
            <button className="btn btn-outline" style={{ flex: 1 }} onClick={analyzeBoard} disabled={extractedQuestions.length === 0 || loading}>
              <Brain size={18} /> Analisar Banca
            </button>
            <button className="btn btn-primary" style={{ flex: 1 }} onClick={injectQuestions} disabled={extractedQuestions.length === 0 || loading}>
              <Save size={18} /> Injetar no App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

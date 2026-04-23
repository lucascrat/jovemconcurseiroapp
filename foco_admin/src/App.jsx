import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { BookOpen, Layers, FileText, UploadCloud, LayoutDashboard, LogOut, Key } from 'lucide-react';
import SubTopics from './pages/SubTopics';
import api from './api';

function Sidebar({ onLogout }) {
  const location = useLocation();
  const navs = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Matérias', path: '/subjects', icon: <BookOpen size={20} /> },
    { name: 'Tópicos', path: '/topics', icon: <Layers size={20} /> },
    { name: 'Subtópicos (Conteúdo)', path: '/subtopics', icon: <FileText size={20} /> },
  ];

  return (
    <div className="sidebar">
      <h2><UploadCloud /> Foco Admin</h2>
      <div className="list-group" style={{ flex: 1 }}>
        {navs.map(n => (
          <Link 
            key={n.path} 
            to={n.path} 
            className={`nav-item ${location.pathname === n.path ? 'active' : ''}`}
          >
            {n.icon} {n.name}
          </Link>
        ))}
      </div>
      <button className="nav-item" style={{ marginTop: 'auto', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }} onClick={onLogout}>
        <LogOut size={20} /> Sair
      </button>
    </div>
  );
}

function LoginPage({ setAuth }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/admin/login', { username: user, password: pass });
      localStorage.setItem('admin_token', res.data.token);
      setAuth(true);
      navigate('/');
    } catch (err) {
      setError('Credenciais inválidas');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="card" style={{ width: 400, padding: 40 }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ background: 'var(--primary)', width: 60, height: 60, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <Key color="white" size={32} />
          </div>
          <h2>Painel Admin</h2>
          <p style={{ color: 'var(--text-muted)' }}>Entre com suas credenciais</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Usuário</label>
            <input className="form-control" value={user} onChange={e => setUser(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input className="form-control" type="password" value={pass} onChange={e => setPass(e.target.value)} required />
          </div>
          {error && <p style={{ color: 'var(--danger)', marginBottom: 16 }}>{error}</p>}
          <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Entrar</button>
        </form>
      </div>
    </div>
  );
}

function ProtectedRoute({ auth, children }) {
  if (!auth) return <Navigate to="/login" />;
  return children;
}

export default function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem('admin_token'));

  const logout = () => {
    localStorage.removeItem('admin_token');
    setAuth(false);
  };

  return (
    <BrowserRouter basename="/admin">
      <Routes>
        <Route path="/login" element={<LoginPage setAuth={setAuth} />} />
        <Route path="*" element={
          <ProtectedRoute auth={auth}>
            <div className="admin-layout">
              <Sidebar onLogout={logout} />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={
                    <div>
                      <h1 className="page-title">Bem-vindo, Holanda!</h1>
                      <div className="grid-2" style={{ marginTop: 24 }}>
                        <div className="card"><h3>Matérias</h3><p>Gerencie as disciplinas do app.</p></div>
                        <div className="card"><h3>Mídia R2</h3><p>Envie vídeos, áudios e mapas mentais.</p></div>
                      </div>
                    </div>
                  } />
                  <Route path="/subjects" element={<div><h1 className="page-title">Matérias</h1><p>Em breve: CRUD de matérias.</p></div>} />
                  <Route path="/topics" element={<div><h1 className="page-title">Tópicos</h1><p>Em breve: CRUD de tópicos.</p></div>} />
                  <Route path="/subtopics" element={<SubTopics />} />
                </Routes>
              </main>
            </div>
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

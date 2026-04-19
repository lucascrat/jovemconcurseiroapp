const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

const TIP = (body) => `\n\n---\n## 🧠 Macetes e Dicas de Concurso\n\n${body}`;

const macetes = {

  // ======= FÍSICA (PRF) =======
  '04a9c92df294a71d3adeca3b5da502ed': TIP(`**MACETE — Movimento Uniforme:**
> "MU = velocidade constante = aceleração ZERO. Se a velocidade muda, não é MU."

🔑 **Conversão obrigatória km/h ↔ m/s:**
- km/h ÷ 3,6 = m/s  →  72 km/h = 20 m/s
- m/s × 3,6 = km/h  →  25 m/s = 90 km/h

📌 **Velocidade relativa (mais cobrada em concurso PRF):**
- Sentidos OPOSTOS: V_rel = V₁ + V₂ (aproximam-se mais rápido)
- Mesmo SENTIDO: V_rel = V₁ - V₂ (o mais rápido puxa o mais lento)

⚡ **Pegadinha:** "Dois veículos partem em sentidos contrários a 60 e 80 km/h. Em quanto tempo estarão a 280 km?"
→ Velocidade relativa = 140 km/h → t = 280/140 = **2 horas** — nunca some errado!`),

  '9f931a2cf8115fea4645e4a32ff12360': TIP(`**MACETE — Velocidade Média:**
> "VM = espaço ÷ tempo. NÃO é a média aritmética das velocidades quando os tempos são diferentes!"

🔑 **Erro clássico (Cebraspe cobra!):**
- Carro vai 100 km a 100 km/h (1h) e volta a 50 km/h (2h)
- VM errada: (100+50)/2 = 75 km/h ❌
- VM correta: 200 km / 3h = **66,7 km/h** ✅

📌 **Conversão que salva na hora da prova:**
| km/h | m/s |
|------|-----|
| 36 | 10 |
| 54 | 15 |
| 72 | 20 |
| 90 | 25 |
| 108 | 30 |
| 120 | 33,3 |

⚡ **Distância de reação (cobra em questões de trânsito):**
D_reação = velocidade × tempo_reação
A 72 km/h (20 m/s) com t=1s → 20 m percorridos ANTES de frear!`),

  '7533c2bed8e47bfaf17a00f140a2fab6': TIP(`**MACETE — Leis de Newton:**
> "1ª = INÉRCIA (continua o que faz). 2ª = F=ma (força gera mudança). 3ª = AÇÃO e REAÇÃO (sempre iguais e opostas)"

🔑 **Por que o cinto salva? → 1ª Lei de Newton!**
Sem cinto, o passageiro CONTINUA em movimento (inércia) quando o carro freia bruscamente → choca no parabrisas.

📌 **Aplicação da 2ª Lei na frenagem:**
F = m × a → o freio aplica força para desacelerar.
Mais massa = mais força necessária para desacelerar na mesma distância.

⚡ **Pegadinha da 3ª Lei:**
"Se ação e reação são iguais e opostas, por que um objeto cai?"
→ Porque ação e reação atuam em corpos **diferentes**! O objeto puxa a Terra para cima com a mesma força, mas a Terra tem massa enorme → aceleração ínfima.`),

  '7c0f219ba099bca0a796dd4186a71900': TIP(`**MACETE — Atrito e Frenagem:**
> "d_frenagem = v² ÷ (2μg). Velocidade DOBRA → distância QUADRUPLICA!"

🔑 **Tabela de impacto da velocidade (μ = 0,5):**
| Velocidade | Distância de frenagem |
|------------|----------------------|
| 60 km/h (16,7 m/s) | ≈ 28 m |
| 80 km/h (22,2 m/s) | ≈ 50 m |
| 100 km/h (27,8 m/s) | ≈ 78 m |
| 120 km/h (33,3 m/s) | ≈ 111 m |

📌 **ABS (Anti-Bloqueio de Rodas):**
Impede que o pneu TRAVE → mantém atrito de rolamento → mais controle na frenagem.
Pneu travado = atrito cinético (menor) = derrapa + perde controle.

⚡ **Piso molhado:** μ cai de ~0,7 para ~0,4 → distância aumenta ~75%! Por isso a velocidade máxima em chuva é reduzida pelo CTB.`),

  '08bc85c31b7327035aec45c392ca1d6c': TIP(`**MACETE — Quantidade de Movimento e Impulso:**
> "Impulso = variação do momentum. F × Δt = m × Δv. Aumentar o tempo → reduz a força!"

🔑 **Por que o airbag salva? → Impulso!**
O carro para em ~20ms sem airbag → força gigantesca no rosto.
Com airbag → para em ~100ms → mesma variação de velocidade → força 5× menor!

📌 **Conservação do momentum na pericia de acidentes:**
Antes do impacto: p = m₁v₁ + m₂v₂
Após impacto (colisão inelástica): p = (m₁+m₂)×V
→ Permite calcular a velocidade **antes** do impacto a partir das marcas no solo.

⚡ **Pegadinha clássica:** "Por que caminhão destrói mais que carro num impacto?"
→ p = m×v. Caminhão tem m muito maior → mesmo a menor velocidade, tem momentum enorme → a força de impacto é muito maior.`),

  'ec8d75833547152b676af5c4f3f02c95': TIP(`**MACETE — Energia Cinética:**
> "Ec = ½mv². DOBRA a velocidade → QUADRUPLICA a energia. É por isso que velocidade mata."

🔑 **Cálculo rápido de Ec:**
- Carro de 1000 kg a 60 km/h (16,7 m/s): Ec = 0,5 × 1000 × 279 ≈ **139 kJ**
- Mesmo carro a 120 km/h (33,3 m/s): Ec = 0,5 × 1000 × 1110 ≈ **555 kJ** (4× mais!)

📌 **Teorema Trabalho-Energia:**
W_total = ΔEc
O trabalho do atrito (negativo) retira energia cinética do veículo ao frear.

⚡ **Pergunta que cai na PRF:** "Por que os freios aquecem em descidas longas?"
→ A energia cinética (de translação + potencial gravitacional) se converte em calor pelo atrito dos freios. Por isso existe rampa de fuga nas estradas de montanha.`),

  '4d7b012e76eddd0587c6d3130c35ceab': TIP(`**MACETE — Colisões:**
> "Elástica = bola de bilhar (rebate). Inelástica = barro (gruda). A maioria dos acidentes é inelástica."

🔑 **Macete do coeficiente de restituição:**
- e = 1: perfeitamente elástica (energia conservada)
- e = 0: perfeitamente inelástica (máxima deformação)
- 0 < e < 1: parcialmente inelástica (todos os acidentes reais)

📌 **Fórmula da colisão inelástica perfeita (engate):**
V_final = (m₁v₁ + m₂v₂) / (m₁ + m₂)

**Exemplo pericial:** Caminhão 10t a 20 m/s + carro 1t parado:
V = (10000×20 + 1000×0) / 11000 = **18,2 m/s** após impacto.

⚡ **Por que o carro menor sai pior da colisão?**
Pela 3ª Lei, ambos recebem a mesma FORÇA. Mas F = ma → menor massa = maior aceleração (desaceleração violenta).`),

  '1f03910a81c9b0842511b88c6c834969': TIP(`**MACETE — Trabalho e Potência:**
> "W = F × d. P = W/t = F × v. Motor potente = mantém velocidade em subidas."

🔑 **Unidades que confundem:**
- Trabalho: Joule (J) = N·m = kg·m²/s²
- Potência: Watt (W) = J/s
- 1 cv (cavalo-vapor) = 735,5 W ≈ 0,74 kW

📌 **Trabalho zero:**
- Força normal (⊥ ao movimento): W = 0
- Carregar caixas andando horizontalmente: W_braço = 0 (força vertical, deslocamento horizontal)

⚡ **Pegadinha de concurso:** "Um homem carrega 20 kg no ombro e caminha 10 m horizontalmente. Qual o trabalho da força do peso?"
→ W = 0 (deslocamento ⊥ ao peso). O candidato confunde com W = F×d e multiplica: errado!`),

  // ======= GEOPOLÍTICA =======
  '4cec6174faad1f3f3aed5e4b066a2ea9': TIP(`**MACETE — Fronteiras:**
> "Brasil faz fronteira com 10 países. Não faz fronteira com CHILE e EQUADOR."

🔑 **Mnemônico dos países limítrofes:**
→ **V**enezuela, **G**uiana, **S**uriname, **G**uiana Francesa — ao norte
→ **C**olômbia — noroeste
→ **P**eru, **B**olívia — oeste
→ **P**araguai, **A**rgentina, **U**ruguai — sul

📌 **Faixa de fronteira (Lei 6.634/79):**
- Extensão: **150 km** da linha divisória
- Área de segurança nacional
- Restrições à propriedade estrangeira
- PRF tem atuação prioritária nessa faixa

⚡ **O que a PRF faz nas fronteiras:**
Fiscalização de tráfico de drogas e armas (principalmente na rota Bolívia→BR e Paraguai→BR), contrabando, descaminho e crimes transfronteiriços.`),

  '52c7eb861d20f44353712444815a0c6c': TIP(`**MACETE — Matriz Energética:**
> "Brasil = uma das matrizes mais LIMPAS do mundo por causa das hidrelétricas (≈65% da eletricidade)"

🔑 **Biocombustíveis — o diferencial brasileiro:**
- Etanol: da cana-de-açúcar → maior frota flex do mundo (>80% dos novos veículos)
- Biodiesel: mistura **obrigatória** no diesel (atualmente B14 = 14% biodiesel)
- Proibir a mistura = infração (a PRF fiscaliza adulteração)

📌 **Pré-Sal:**
- Descoberto em 2006 (campo de Tupi — atual Lula)
- Operado pela Petrobras (empresa de economia mista)
- Brasil = top 10 reservas mundiais de petróleo

⚡ **O que cai em concurso PRF:**
Crimes com combustível nas rodovias: adulteração de combustível (crime ambiental), roubo de carga (caminhão-tanque), transporte irregular de produtos perigosos.`),

  '257f7f07ff342fbfacbe4d6ed0a1c45e': TIP(`**MACETE — Transportes:**
> "Brasil = 65% rodoviário. Excesso de dependência = mais acidentes, mais custo, mais emissões."

🔑 **Numeração das rodovias federais (cai na PRF!):**
- BRs com 1 dígito de distância do zero: radiais (partem do DF)
- BRs ímpares longitudinais: N-S (Ex: BR-101 pela costa)
- BRs pares transversais: L-O (Ex: BR-116, BR-040)
- BRs diagonais: terminam em 5 (Ex: BR-135, BR-265)

📌 **Órgãos gestores:**
- **ANTT**: regula e fiscaliza rodovias concedidas e transporte terrestre
- **DNIT**: administra, constrói e mantém rodovias federais NÃO concedidas
- **PRF**: fiscaliza e policia TODA rodovia federal (concedida ou não)

⚡ **Custo Brasil:** O excesso de frete rodoviário encarece os produtos brasileiros. Questões de geopolítica da PRF cobram esse impacto econômico do rodoviarismo.`),

  'bc2b4398a3833450d4d3da85f346479a': TIP(`**MACETE — Hierarquia Urbana:**
> "Metrópole → Capital Regional → Centro Sub-regional → Centro de Zona → Centro Local"

🔑 **Classificação IBGE (Regiões de Influência das Cidades — REGIC):**
| Nível | Exemplos |
|-------|---------|
| Metrópole | SP, RJ, DF, Manaus, Belém, Fortaleza, Recife, Salvador, BH, Curitiba, Porto Alegre |
| Capital Regional | Campo Grande, Cuiabá, Florianópolis |
| Centro Sub-regional | Cidades médias (100-500 mil hab.) |
| Centro de Zona | Cidades pequenas com influência local |

📌 **Urbanização brasileira:**
- Processo acelerado: décadas de 1950-1980 (êxodo rural)
- hoje: +85% da população vive em áreas urbanas
- Problemas: favelização, desemprego, violência, trânsito

⚡ **PRF e urbanização:** O crescimento das metrópoles → aumento do tráfego nas rodovias de acesso → mais acidentes nas BRs periféricas às grandes cidades.`),

  // ======= INFORMÁTICA =======
  'dd09f6d199c650d08b954da44b43a3a5': TIP(`**MACETE — Banco de Dados:**
> "Dado ≠ Informação. Dado é o bruto; Informação é o dado com significado e contexto."

🔑 **Conceitos que mais caem:**
- **SGBD** (Sistema de Gerenciamento de BD): software que gerencia o banco (MySQL, PostgreSQL, Oracle)
- **SQL**: linguagem de consulta estruturada
- **Chave Primária (PK)**: identifica unicamente cada registro (CPF, ID)
- **Chave Estrangeira (FK)**: referencia a PK de outra tabela

📌 **Big Data — os 5 Vs:**
- **Volume**: quantidade enorme de dados
- **Velocidade**: geração e processamento rápidos
- **Variedade**: estruturados, semiestruturados e não estruturados
- **Veracidade**: confiabilidade dos dados
- **Valor**: o que os dados geram de insight

⚡ **Cebraspe cobra:** "Big Data resolve todos os problemas de análise de dados?" → NÃO. Dados de baixa qualidade (veracidade) geram análises erradas mesmo em grande volume. "Garbage in, garbage out."`),

  'e65a4be35fd6e29a66732a11455ae835': TIP(`**MACETE — Redes de Computadores:**
> "IP identifica o HOST. MAC identifica o HARDWARE. Porto identifica o SERVIÇO."

🔑 **Protocolos e portas que a Cebraspe cobra:**
| Protocolo | Porta | Função |
|-----------|-------|--------|
| HTTP | 80 | Web sem criptografia |
| HTTPS | 443 | Web com TLS/SSL |
| FTP | 21 | Transferência de arquivos |
| SSH | 22 | Acesso remoto seguro |
| SMTP | 25 | Envio de e-mail |
| DNS | 53 | Resolução de nomes |
| DHCP | 67/68 | IP dinâmico |

📌 **Topologias de rede:**
- **Estrela**: switch central (mais comum em LANs)
- **Barramento**: um cabo principal (legado)
- **Anel**: dados circulam em anel (Token Ring)
- **Malha**: todos conectados a todos (robusta, cara)

⚡ **IPv4 vs IPv6:**
- IPv4: 32 bits → ~4 bilhões de endereços (esgotados)
- IPv6: 128 bits → 340 undecilhões de endereços
- A Cebraspe cobra que o IPv6 **não** é retrocompatível nativamente com IPv4.`),

  'c9d1dd92a4082c7d1eb862502437ffb4': TIP(`**MACETE — LibreOffice:**
> "Compatível com Office mas NÃO idêntico. Extensão padrão: .odt (Writer), .ods (Calc), .odp (Impress)"

🔑 **Diferenças LibreOffice × Microsoft Office (Cebraspe cobra!):**
| Função | LibreOffice Writer | MS Word |
|--------|--------------------|---------|
| Salvar padrão | .odt | .docx |
| Verificar ortografia | F7 | F7 |
| Localizar | Ctrl+F | Ctrl+F |
| Exportar PDF | Arquivo → Exportar | Arquivo → Salvar como |

📌 **Macete do Calc (LibreOffice):**
Fórmulas idênticas ao Excel: =SOMA(), =MÉDIA(), =SE()
Diferença: separador de argumentos pode ser **;** ou **,** conforme configuração regional.

⚡ **Cebraspe pegadinha:** "O LibreOffice é pago?" → NÃO. É software **livre e gratuito** (licença LGPL). Pode ser usado por órgãos públicos sem custo de licença.`),

  '4bf20ea1d30ec2547440b419a98f1174': TIP(`**MACETE — Sistemas Operacionais:**
> "Windows = GUI dominante. Linux = open source, servidores. Mac = Unix-based. Todos gerenciam hardware."

🔑 **O que o SO faz (e que a Cebraspe cobra):**
- **Gerência de processos**: qual programa usa a CPU e quando
- **Gerência de memória**: RAM e swap (memória virtual)
- **Sistema de arquivos**: organiza arquivos (NTFS no Windows; ext4 no Linux)
- **Gerência de dispositivos**: drivers de hardware
- **Interface**: GUI (gráfica) ou CLI (linha de comando)

📌 **Atalhos do Windows que mais caem:**
| Atalho | Função |
|--------|--------|
| Win+D | Mostrar área de trabalho |
| Win+E | Abrir Explorador de Arquivos |
| Win+L | Bloquear tela |
| Alt+Tab | Alternar janelas |
| Ctrl+Alt+Del | Segurança / Gerenciador de tarefas |
| Win+PrintScreen | Captura de tela automática |

⚡ **Linux — o que cai em concurso:**
- Kernel Linux, distribuições (Ubuntu, Debian, Red Hat)
- Comandos: ls (listar), cd (navegar), mkdir, rm, chmod, grep
- Permissões: r (read=4), w (write=2), x (execute=1)`),

  'e6eb63d4b5806d911bb6f2f2d895d96d': TIP(`**MACETE — Hardware:**
> "RAM = memória volátil (perde quando desliga). ROM/HD/SSD = não volátil (mantém dados)."

🔑 **Hierarquia de memória (velocidade × custo):**
Registradores > Cache L1 > Cache L2 > Cache L3 > RAM > SSD > HD > Nuvem

📌 **Unidades de medida — macete matemático:**
- 1 bit: menor unidade (0 ou 1)
- 8 bits = 1 Byte
- 1 KB = 1.024 B (2¹⁰)
- 1 MB = 1.024 KB
- 1 GB = 1.024 MB
- 1 TB = 1.024 GB

⚡ **Cebraspe cobra:** "HD e SSD são memórias RAM?" → NÃO. São armazenamento de massa (não volátil). RAM é a memória de trabalho (volátil). Muitos candidatos confundem porque ambos "guardam dados", mas por naturezas completamente diferentes.`),

  '3df23c3616531c551edb135c5685c219': TIP(`**MACETE — Internet e Navegação:**
> "URL = endereço; HTTP = protocolo; DNS = 'lista telefônica' que traduz nome em IP"

🔑 **Anatomia de uma URL:**
https://www.tcu.gov.br/noticias/index.html
- **https**: protocolo (seguro)
- **www.tcu.gov.br**: domínio (resolvido pelo DNS)
- **/noticias/index.html**: caminho do arquivo

📌 **Navegadores e cache:**
- Cache do navegador: armazena cópias de páginas para carregar mais rápido
- Cookie: armazena preferências e sessão do usuário
- Aba anônima: não salva histórico/cookies — mas NÃO torna o usuário anônimo para o servidor!

⚡ **Cebraspe cobra:** "Abas anônimas garantem anonimato total?" → NÃO! O provedor de internet, o servidor do site e a rede Wi-Fi ainda conseguem ver o tráfego. A aba anônima apenas não salva localmente.`),

  '1a52108060b0e072e2719da69b5acc64': TIP(`**MACETE — Cloud Computing:**
> "IaaS = aluga o terreno. PaaS = aluga o terreno + casa pronta. SaaS = aluga o apartamento mobiliado."

🔑 **Tabela de responsabilidade (quem gerencia o quê):**
| Camada | On-Premise | IaaS | PaaS | SaaS |
|--------|-----------|------|------|------|
| Aplicação | Você | Você | Você | Provedor |
| Runtime | Você | Você | Provedor | Provedor |
| SO | Você | Você | Provedor | Provedor |
| Virtualização | Você | Provedor | Provedor | Provedor |
| Hardware | Você | Provedor | Provedor | Provedor |

📌 **Exemplos reais:**
- IaaS: AWS EC2, Azure VMs, Google Compute Engine
- PaaS: Heroku, Google App Engine, Azure App Service
- SaaS: Gmail, Google Drive, Salesforce, Office 365

⚡ **Pegadinha:** "O Google Drive é IaaS?" → NÃO! É SaaS. O usuário apenas usa o software, sem gerenciar nada de infraestrutura.`),

  '2f8f8e62a02a24940eb5fcdaeafab48b': TIP(`**MACETE — Redes Sociais e Segurança:**
> "Engenharia social = explorar o HUMANO, não a máquina. O elo mais fraco é sempre o usuário."

🔑 **Ataques comuns em redes sociais:**
| Ataque | Como funciona |
|--------|--------------|
| **Phishing** | Link falso enviado por mensagem ou e-mail |
| **Pharming** | Redireciona para site falso mesmo digitando URL correta |
| **Catfishing** | Perfil falso para enganar emocionalmente a vítima |
| **Vishing** | Phishing por ligação de voz |
| **Smishing** | Phishing por SMS |

📌 **Boas práticas que a Cebraspe cobra:**
- Usar autenticação em dois fatores (2FA/MFA)
- Não clicar em links suspeitos, mesmo de contatos conhecidos
- Verificar o cadeado HTTPS antes de inserir dados
- Não usar a mesma senha em múltiplos serviços

⚡ **LGPD e redes sociais:** A Lei 13.709/18 determina que plataformas peçam consentimento informado para coleta e uso de dados pessoais. Violações geram multa de até 2% do faturamento, limitada a R$ 50 milhões por infração.`),

  // ======= LEGISLAÇÃO =======
  '72d6fa6b00f31c5a85b782b7a164bc62': TIP(`**MACETE — Jurisprudência Lei 8.112:**
> "O STJ e STF sumularam posições sobre: nepotismo, acumulação de cargos, estágio probatório e estabilidade."

🔑 **Súmulas e entendimentos mais cobrados:**
- **Nepotismo** (Súmula Vinculante 13): proibida nomeação de parentes até 3º grau
- **Acumulação de cargos**: só se houver compatibilidade de horários + previsão constitucional
- **Estabilidade ≠ Vitaliciedade**: servidor estável pode ser demitido por PAD ou insuficiência de desempenho
- **PAD**: contraditório e ampla defesa são obrigatórios — STF já anulou demissões sem isso

📌 **Teto remuneratório (art. 37, XI CF):**
- Teto = subsídio dos ministros do STF (R$ 46.366)
- Incide sobre remuneração total (inclui auxílios e gratificações em regra)

⚡ **Pegadinha:** "O servidor estável não pode perder o cargo?" → PODE! Por: processo disciplinar, avaliação periódica de desempenho, extinção do cargo ou excesso de despesa (art. 169 CF). Não é vitaliciedade!`),

  '866546663421738fbf702d925fa95d1e': TIP(`**MACETE — Jurisprudência Improbidade:**
> "Após a Lei 14.230/21: dolo em TUDO; só o MP age; prescrição de 8 anos."

🔑 **Mudanças que a Cebraspe já cobrou:**
- Culpa NÃO gera mais improbidade (acabou o art. 10 culposo)
- Terceiros (particulares) também podem responder por improbidade se concorrerem com o agente
- Acordo de não-persecução civil (ANPC): permitido com o MP
- Indisponibilidade de bens: exige decisão motivada — não é automática

📌 **Prazo prescricional:**
- 8 anos do fato ou, se cargo, até 8 anos após o término do mandato/cargo
- Ação penal por crime relacionado: prazo penal (independente)

⚡ **Erro clássico:** "O cidadão pode propor ação de improbidade?" → NÃO (após 14.230/21). Só o **Ministério Público**. Antes da reforma, o ente público lesado também podia. Cuidado com questões antigas!`),

  '56926868161edc9857228847c78e5331': TIP(`**MACETE — Regime Disciplinar:**
> "PAD obrigatório para demissão. Sindicância é para infrações leves. 'ADVERTÊNCIA → SUSPENSÃO → DEMISSÃO'"

🔑 **Penalidades da Lei 8.112/90:**
| Penalidade | Prazo prescricional | Via |
|------------|--------------------|----|
| Advertência | 180 dias | Sindicância |
| Suspensão até 30 dias | 2 anos | Sindicância |
| Suspensão > 30 dias | 5 anos | PAD |
| Demissão | 5 anos | PAD |
| Cassação de aposentadoria | 5 anos | PAD |

📌 **Prazos do PAD:**
- Comissão: 60 dias (prorrogável por mais 60)
- Indiciamento → defesa escrita: 10 dias
- Relatório da comissão → julgamento pela autoridade: 20 dias

⚡ **Pegadinha:** "Servidor em estágio probatório pode ser demitido sem PAD?" → SIM, se a exoneração for no período probatório por desempenho insatisfatório (em alguns casos). PAD é obrigatório para ilícito funcional, não para mera inadequação ao cargo.`),

  '04084975bde99f170a5883758c88305c': TIP(`**MACETE — Licitações (Lei 14.133/21):**
> "PREGÃO = bens e serviços COMUNS. CONCORRÊNCIA = especiais e obras grandes. DIÁLOGO COMPETITIVO = inovação."

🔑 **Extinto pela nova Lei:**
- Tomada de Preços ❌
- Convite ❌
- Pregão agora está dentro da Lei 14.133 (não é mais lei separada)

📌 **Limites para contratação direta (dispensa):**
- Bens e serviços: até **R$ 57.900**
- Obras e serviços de engenharia: até **R$ 176.700**
(Valores atualizados periodicamente pelo Executivo)

⚡ **Inexigibilidade vs. Dispensa:**
- **Inexigibilidade**: competição é IMPOSSÍVEL (exclusividade, notória especialização, artista)
- **Dispensa**: competição é possível, mas a lei dispensa por razão específica (valor, emergência, etc.)
- Macete: "INEX = impossível competir; DISPENSA = possível mas dispensada"`),

  'dab059acd918c179858604b4f8a083da': TIP(`**MACETE — Deveres do Servidor:**
> "O servidor deve LEALDADE à instituição — não ao chefe. Se o chefe ordena algo ilegal, o servidor NÃO deve obedecer."

🔑 **Deveres do servidor (art. 116 Lei 8.112):**
- Exercer as atribuições com ZELO e DEDICAÇÃO
- Ser ASSÍDUO e PONTUAL
- GUARDAR SIGILO das informações
- Tratamento URBANIDADE aos cidadãos
- CUMPRIR ORDENS superiores, EXCETO manifestamente ilegais

📌 **Acumulação de cargos — regra e exceção:**
- Regra: VEDADA (art. 37, XVI CF)
- Exceções válidas:
  - Dois cargos de professor
  - Um cargo de professor + um técnico ou científico
  - Dois cargos privativos de profissional de saúde com cargos regulamentadas

⚡ **Pegadinha:** "Servidor pode acumular cargo público com atividade privada?" → SIM, salvo incompatibilidade de horários e vedação expressa na lei. Não há regra geral proibindo trabalho no setor privado.`),

  // ======= LÍNGUA PORTUGUESA (restantes) =======
  '0730abb952848ec637a1214fdf0272a0': TIP(`**MACETE — Substantivo e Adjetivo:**
> "SUBSTANTIVO: nomeia seres. ADJETIVO: caracteriza o substantivo. Teste: pode colocar 'muito' antes? → Adjetivo!"

🔑 **Flexão do adjetivo — concordância:**
- Adjetivo posposto a dois substantivos do mesmo gênero: plural do gênero
- Adjetivo posposto a substantivos de gêneros diferentes: plural masculino
- Adjetivo anteposto: concorda com o mais próximo

📌 **Adjetivos pátrios que confundem:**
| País/Cidade | Adjetivo |
|-------------|---------|
| Acre | acreano |
| Alagoas | alagoano |
| Pará | paraense |
| Maranhão | maranhense |
| Ceará | cearense |

⚡ **Substantivo abstrato vs. concreto:**
- Concreto: existe por si só (mesa, pedra, amor? Não — amor é abstrato!)
- Abstrato: existe em função de algo (beleza, liberdade, coragem)
- A Cebraspe cobra: o que é abstrato e o que é concreto na frase.`),

  '3a8c0c377ece7cefdd41dcea308d50a1': TIP(`**MACETE — Verbos e Tempos Verbais:**
> "MODO INDICATIVO = certeza. SUBJUNTIVO = dúvida/hipótese. IMPERATIVO = ordem."

🔑 **Conjugações que confundem e que caem:**
- **Requerer** ≠ querer: requer, requerem (não sigo o padrão de "querer")
- **Intervir** conjuga como **vir**: intervém, intervindo (não "intervém" com acento?!)
- **Rever** conjuga como **ver**: revejo, revês, revê (não "revejo" → "não revejo")

📌 **Tempos compostos vs. simples:**
| Tempo | Forma | Exemplo |
|-------|-------|---------|
| Pretérito perfeito simples | Fiz | "Fiz ontem" |
| P. perfeito composto | Tenho feito | "Tenho feito sempre" |
| P. mais-que-perfeito | Fizera / Tinha feito | "Já fizera isso" |
| Futuro do presente | Farei | "Farei amanhã" |

⚡ **Cebraspe adora:** Usar formas verbais do subjuntivo em frases condicionais. "Se eu **fosse** você" (subjuntivo imperfeito, não "seria" no condicional).`),

  '856963e5b6c29d0e23670561b062f138': TIP(`**MACETE — Reescritura de Frases:**
> "Sentido = ideia + tom + relações lógicas. Se mudar QUALQUER dos três, a reescrita está errada."

🔑 **Checklist obrigatório ao analisar reescrita:**
1. ✅ O sujeito agente foi preservado?
2. ✅ O sentido positivo/negativo foi mantido?
3. ✅ O conector tem o mesmo valor semântico?
4. ✅ A colocação pronominal está correta?
5. ✅ A voz (ativa/passiva) foi convertida corretamente?

📌 **Voz passiva analítica vs. sintética:**
- Analítica: "O agente prendeu o suspeito." → "O suspeito foi preso pelo agente."
- Sintética (com SE): "Prendeu-se o suspeito." (agente indeterminado)

⚡ **Pegadinha clássica:** Substituição de "porém" por "pois" estaria mantendo o sentido? → NÃO! "Porém" = adversativa; "pois" = explicativa/causal. Sentido COMPLETAMENTE diferente.`),

  '503e33f2397875f96f245eb1e8a0cf81': TIP(`**MACETE — Tipologia Textual:**
> "Narrar = contar. Descrever = mostrar. Dissertar = argumentar/explicar. Injuntivo = mandar."

🔑 **Os 5 tipos textuais + características:**
| Tipo | Verbos | Objetivo | Exemplo |
|------|--------|---------|---------|
| Narração | Ação, passado | Contar fatos | Romance, notícia |
| Descrição | Estado, ser/estar | Caracterizar | Laudo pericial |
| Dissertação | Presenta geral | Argumentar/explicar | Editorial, redação ENEM |
| Injunção | Imperativo | Instruir | Manual, receita |
| Predição | Futuro | Prever | Horóscopo, previsão |

📌 **Gênero ≠ Tipo textual:**
- Gênero = formato social (carta, e-mail, relatório)
- Tipo = sequência predominante (narrativa, dissertativa)
- Um gênero pode conter múltiplos tipos: um editorial (gênero) é dissertativo-argumentativo (tipo).

⚡ **Cebraspe cobra:** "O texto é narrativo porque usa verbos no passado?" → Não necessariamente! O tempo verbal não define o tipo — a intenção e a estrutura definem.`),

  '6cbe20a9b3a46bc360313d8a278ca8e3': TIP(`**MACETE — Sinônimos e Antônimos:**
> "Sinônimo no contexto ≠ sinônimo no dicionário. Sempre teste dentro da frase!"

🔑 **Palavras de múltiplos sentidos que a Cebraspe usa:**
| Palavra | Sentido 1 | Sentido 2 |
|---------|----------|----------|
| Demitir | Dispensar empregado | (ant.) enviar |
| Liberal | Generoso | Ligado ao liberalismo |
| Radical | Extremista | Raiz de palavra |
| Crítico | Analista | Perigoso/grave |

📌 **Antonímia prefixal:**
- in- / im-: "capaz → incapaz", "possível → impossível"
- des-: "fazer → desfazer", "ligar → desligar"
- a-/an-: "moral → amoral", "ônimo → anônimo"

⚡ **Pegadinha de substituição:** "O texto usou 'entretanto'; pode substituir por 'portanto'?" → NÃO! "Entretanto" = adversativo; "portanto" = conclusivo. São antônimos semânticos!`),

  '07be16eb70e61cc36b282e07de659d59': TIP(`**MACETE — Figuras de Linguagem:**
> "METÁFORA = identificação direta. COMPARAÇÃO = usa 'como'. METONÍMIA = parte pelo todo ou causa/efeito."

🔑 **Distinções que a Cebraspe usa para confundir:**
| Par confuso | Diferença |
|------------|---------|
| Metáfora × Comparação | Metáfora: "a vida é uma viagem"; Comparação: "a vida é como uma viagem" |
| Metonímia × Metáfora | Metonímia: relação real ("li Machado"); Metáfora: relação imaginária |
| Hipérbole × Gradação | Hipérbole: exagero isolado; Gradação: sequência crescente |
| Antítese × Paradoxo | Antítese: oposição de ideias; Paradoxo: contradição aparente que faz sentido |
| Ironia × Antífrase | Ironia: sentido oposto; Antífrase: troca de nome (chamar gigante de "pequeno") |

📌 **Eufemismo na linguagem policial:**
"O suspeito foi contido" (eufemismo para uso da força)
A Cebraspe já cobrou o efeito do eufemismo em textos jornalísticos sobre segurança pública.`),

  '68ee7c9ad6ec7e842a5c63a6e6182579': TIP(`**MACETE — Metáfora e Metonímia:**
> "METONIMIA = troca com FUNDAMENTO REAL (contém/contido, causa/efeito, autor/obra)"

🔑 **Tipos de metonímia (os mais cobrados):**
| Tipo | Exemplo |
|------|---------|
| Autor pela obra | "Ler Machado de Assis" |
| Continente pelo conteúdo | "Tomou um copo de água" |
| Todo pela parte (sinédoque) | "A multidão aplaudiu" |
| Causa pelo efeito | "Ganhou o pão" (o trabalho → o pão) |
| Instrumento pelo agente | "A pena escreve" |

📌 **Catacrese — a metáfora tão usada que virou comum:**
- "Pé da mesa", "braço da cadeira", "cabeça do prego"
- Não tem mais efeito estilístico — é uso convencional

⚡ **Pegadinha:** "Em 'A nação exige respostas', há metonímia?" → SIM! Nação (todo) pelo governo ou povo (parte). Sinédoque = tipo de metonímia.`),

  '75013355ec2324f679f96ab3b4f09b87': TIP(`**MACETE — Orações Subordinadas:**
> "Sub. Adverbial = tempo, causa, condição, concessão, finalidade, consecutiva, conformativa, proporcional, comparativa"

🔑 **As mais cobradas pela Cebraspe (com conjunções):**
| Tipo | Conjunções | Dica |
|------|-----------|------|
| Concessiva | embora, ainda que, mesmo que | Exprime obstáculo que não impede |
| Causal | porque, pois (depois do verbo), como | Exprime causa |
| Condicional | se, caso, desde que, contanto que | Exprime hipótese |
| Final | para que, a fim de que | Exprime objetivo |
| Temporal | quando, enquanto, assim que, logo que | Exprime tempo |

📌 **Macete— "Embora" vs "Apesar de":**
- "Embora" → seguido de verbo no **subjuntivo**: "Embora chovesse..."
- "Apesar de" → seguido de **infinitivo ou substantivo**: "Apesar da chuva..."

⚡ **Confusão frequente:** Oração coordenada adversativa (MAS) vs. subordinada adverbial concessiva (EMBORA). A adversativa coordena; a concessiva subordina. Estrutura sintática diferente, efeito semântico parecido.`),

  '7c0a6b050832e3158c00f8fb6ab6a3c8': TIP(`**MACETE — A Vírgula no Período Composto:**
> "Adjunto adverbial DESLOCADO = vírgula obrigatória. Adjetiva RESTRITIVA = sem vírgula. EXPLICATIVA = com vírgula."

🔑 **As 3 regras absolutas que a Cebraspe cobra:**
1. NUNCA entre sujeito e verbo: "O policial, chegou." ❌
2. NUNCA entre verbo e seu complemento: "Apreendeu, o veículo." ❌  
3. SEMPRE antes de oração adjetiva explicativa: "João, que é policial, parou o veículo." ✅

📌 **Vírgula antes de "e" — quando usar:**
- Orações com sujeitos diferentes: "Pedro chegou, e Maria saiu."
- Oração coordenada final depois de outra: "Estudou muito, e por isso passou."
- Adjuntos adverbiais justapostos: "Rapidamente, calmamente, e com precisão."

⚡ **Pegadinha del sujeito posposto:**
"Chegou cedo o policial." → Sem vírgula entre verbo e sujeito.
"Cedo, o policial chegou." → Vírgula após o adjunto adverbial deslocado (cedo).`),

  // ======= MATEMÁTICA (restantes) =======
  '2a9f0350c80a9a53d9dfa1b35daeff26': TIP(`**MACETE — Probabilidade:**
> "P(ao menos um) = 1 - P(nenhum). É SEMPRE mais fácil calcular o complementar!"

🔑 **Fórmulas essenciais:**
- P(A∩B) independentes = P(A) × P(B)
- P(A∪B) = P(A) + P(B) - P(A∩B)
- P(A|B) = P(A∩B) / P(B) [condicional]

📌 **Problema clássico — ao menos um:**
"Qual a probabilidade de sair ao menos uma cara em 3 lançamentos de moeda?"
P(pelo menos uma cara) = 1 - P(nenhuma cara) = 1 - (1/2)³ = 1 - 1/8 = **7/8**

⚡ **Pegadinha frequente:** "Com reposição" vs "sem reposição" muda tudo!
- Com reposição: probabilidades constantes a cada extração
- Sem reposição: probabilidades mudam (o denominador reduz)`),

  '5c75bb876d42aee74a59f7e452622d1b': TIP(`**MACETE — Conjuntos:**
> "n(A∪B) = n(A) + n(B) - n(A∩B). Subtraia a interseção para não contar duas vezes."

🔑 **Passo a passo para Venn de 3 conjuntos:**
1. Encontre A∩B∩C (interseção tripla — centro do diagrama)
2. Calcule cada interseção dupla (A∩B, A∩C, B∩C) subtraindo o centro
3. Calcule cada parte exclusiva (só A, só B, só C)
4. Some tudo e verifique o total

📌 **Erros mais comuns dos candidatos:**
- Contar quem está em dois grupos como se fossem pessoas diferentes
- Esquecer de subtrair os que estão nos três grupos nas fórmulas de interseção dupla

⚡ **Macete rápido:** Se o problema diz "apenas A" → é a parte exclusiva de A (tirando quem está em B ou C). "A ou mais" → é a união (ou) completa.`),

  'f1c3c7cee55ec436339e679c8658fbb9': TIP(`**MACETE — Equações:**
> "1º grau: isole x. 2º grau: tente fatorar antes de usar Bhaskara. Economiza tempo na prova!"

🔑 **Fatoração rápida (evita Bhaskara):**
x² - 5x + 6 = 0 → (x-2)(x-3) = 0 → x=2 ou x=3
Procure dois números que somam -5 e multiplicam 6: (-2) e (-3) ✅

📌 **Macete de Girard (soma e produto das raízes):**
- Soma: x₁ + x₂ = -b/a
- Produto: x₁ × x₂ = c/a
Sem calcular as raízes, você já sabe a soma e o produto delas!

⚡ **A Cebraspe adora:** Montar equação do 2º grau com produto e soma das raízes dados.
"As raízes r e s são tais que r+s=7 e r×s=12. Qual é a equação?"
→ x² - 7x + 12 = 0 (sinal de b é oposto da soma; c é o produto)`),

  'd90e8e035c4d428acdcfb64896882380': TIP(`**MACETE — Médias:**
> "Média aritmética simples (soma ÷ n). Ponderada (soma dos produtos ÷ soma dos pesos). Mediana (valor central). Moda (mais frequente)."

🔑 **Quando usar cada medida:**
| Medida | Use quando |
|--------|-----------|
| Média | Dados sem extremos discrepantes |
| Mediana | Há outliers (salários, renda, propriedades) |
| Moda | Dados qualitativos ou de frequência |

📌 **Moda bimodal, trimodal e amodal:**
- Bimodal: dois valores com mesma frequência máxima
- Amodal: nenhum valor se repete (sem moda)

⚡ **Pegadinha de concurso:** "Num conjunto com 10 elementos em ordem crescente, a mediana é o 5º valor?"
→ NÃO! Com n par, a mediana = média do 5º e 6º valor. O 5º sozinho seria errado.`),

  'c6d06733197dd3c8bd55d40806f766bd': TIP(`**MACETE — Regra de Três:**
> "Grandezas diretamente proporcionais: mesma direção. Inversamente: sentidos opostos. Identifique antes de calcular!"

🔑 **Como identificar o tipo:**
- Aumenta uma → aumenta a outra = DIRETA
- Aumenta uma → diminui a outra = INVERSA

📌 **Regra de três composta:**
Monte uma tabela! Para cada grandeza, identifique se é direta ou inversa em relação ao que se pede.

Exemplo: 4 máquinas produzem 200 peças em 5 horas. Quantas peças 6 máquinas produzem em 8 horas?
- Máquinas: 4→6 = direta (mais máquinas, mais peças)
- Horas: 5→8 = direta (mais horas, mais peças)
→ 200 × (6/4) × (8/5) = 200 × 1,5 × 1,6 = **480 peças**

⚡ **Pegadinha:** Velocidade × Tempo = Distância. Se a distância é fixa e a velocidade aumenta, o tempo diminui (INVERSA). Não confunda com "mais velocidade = mais percurso".`),

  '4f906e522b24d1cce12de8e599e4ac9d': TIP(`**MACETE — Operações Fundamentais:**
> "MMC para somar frações. MDC para simplificar. Potência negativa = 1 sobre a potência positiva."

🔑 **Divisibilidade (resolve rápido):**
| Divisível por | Regra |
|--------------|-------|
| 2 | Último dígito par |
| 3 | Soma dos dígitos divisível por 3 |
| 4 | Últimos 2 dígitos divisíveis por 4 |
| 5 | Termina em 0 ou 5 |
| 9 | Soma dos dígitos divisível por 9 |
| 11 | Soma alternada dos dígitos divisível por 11 |

📌 **Fração ÷ Fração:**
(a/b) ÷ (c/d) = (a/b) × (d/c) — multiplica pelo inverso!

⚡ **Erro clássico com potências:**
2³ × 2² = 2⁵ = 32 ✅ (SOMA os expoentes)
(2³)² = 2⁶ = 64 ✅ (MULTIPLICA os expoentes)
2³ + 2² = 8 + 4 = 12 ✅ (só calcula, NÃO some expoentes!)`),

  'e59e3fc320e7589cfa161119d5725c59': TIP(`**MACETE — Problemas do Cotidiano:**
> "Leia o problema três vezes: 1ª para entender, 2ª para identificar o que se pede, 3ª para montar a equação."

🔑 **Sequência para resolver qualquer problema:**
1. **Identifique** o que é pedido (pergunta final)
2. **Declare** as variáveis (x = quantidade de algo)
3. **Monte** a equação ou proporção
4. **Resolva** matematicamente
5. **Verifique** se a resposta faz sentido no contexto

📌 **Problemas de idade (clássico):**
"João tem o dobro da idade de Maria. Daqui a 5 anos, a soma terá 40 anos."
→ Agora: João = 2x, Maria = x
→ Daqui a 5 anos: (2x+5) + (x+5) = 40 → 3x+10 = 40 → x = 10
→ Maria tem 10, João tem 20 anos ✅

⚡ **Problema de mistura:** Sempre use tabela com concentração × volume = quantidade de soluto. Mantém a organização e evita erro.`),

  '301a706b458d122f12077ce449a59217': TIP(`**MACETE — Sistemas de Medidas:**
> "KILO = 1000. MILI = 0,001. CENTI = 0,01. Para converter: desloque a vírgula conforme a tabela."

🔑 **Tabela de conversão de comprimento:**
km → hm → dam → m → dm → cm → mm
Cada passo: ×10 para a direita (menor), ÷10 para a esquerda (maior)

📌 **Área e Volume:**
- Área: cada passo na tabela = ×100 (m² → cm²: ×10.000)
- Volume: cada passo = ×1000 (m³ → cm³: ×1.000.000)
- 1 litro = 1 dm³ = 1000 cm³

**Conversão de tempo:**
- 1 hora = 60 min = 3.600 s
- 1 dia = 24h = 1.440 min = 86.400 s

⚡ **Pegadinha:** Converter 5 m² para cm²:
NÃO é 500 cm²! É 5 × 10.000 = **50.000 cm²** (cada metro tem 100 cm, mas a área = 100 × 100)`),

  '98ac31610213267226f249a58d8eae45': TIP(`**MACETE — Regra de Três Simples:**
> "Monte sempre como fração: valor pedido / valor dado = valor dado / valor dado. Produto dos meios = produto dos extremos."

🔑 **Passo a passo visual:**
  A₁    A₂
  B₁    B₂ (incógnita)
Se direta: A₁/B₁ = A₂/B₂ → B₂ = A₂ × B₁ / A₁

📌 **Aplicação em porcentagem:**
"40% de 250 = ?"
→ 100% -------- 250
   40% -------- x
→ x = 40 × 250 / 100 = **100**

⚡ **Macete do 1%:**
Para calcular qualquer %, primeiro calcule 1% (divida por 100), depois multiplique pela porcentagem:
45% de 320: 1% = 3,2 → 45% = 3,2 × 45 = **144**`),

  // ======= ÉTICA (restantes) =======
  'b4e487995c9b979cf5a49195e87fb46f': TIP(`**MACETE — Comissão de Ética:**
> "Comissão de Ética = ORIENTA + CENSURA. Não demite, não suspende. Para isso existe o PAD."

🔑 **Composição e mandato:**
- 3 membros titulares + 3 suplentes
- Mandato: **3 anos** (renovável uma vez)
- Indicados pelo chefe do órgão
- Escolhidos entre servidores de **nível superior**

📌 **Fluxo quando a comissão detecta infração grave:**
1. Comissão de ética apura
2. Se infração ética leve → **censura** (pena máxima da comissão)
3. Se infração grave (crime/improbidade) → **recomenda** instauração de PAD
4. PAD pode resultar em demissão, suspensão, etc.

⚡ **Cebraspe pega assim:** "A Comissão de Ética pode demitir o servidor por ato de improbidade?" → NÃO! Ela apenas aplica censura ética e recomenda o PAD. Quem demite é a autoridade competente após o PAD.`),

  '59b19f5856cf1b3154586404e211cab7': TIP(`**MACETE — Regras Deontológicas:**
> "Deontologia = ciência dos deveres (déon = dever, logos = ciência). Código deontológico = conjunto de regras de conduta profissional."

🔑 **Principais deveres éticos do servidor (Decreto 1.171):**
1. Zelar pela imagem e prestígio da instituição
2. Ser cortês, atencioso e respeitoso
3. Agir com transparência e honestidade
4. Não usar o cargo para obter vantagens pessoais
5. Usar racionalmente os recursos públicos
6. Denunciar irregularidades que tomar conhecimento

📌 **O que são as "Regras Deontológicas" no Decreto:**
- Seção II do Decreto 1.171
- Estabelece condutas que o agente público deve adotar
- São princípios gerais de moralidade e eficiência

⚡ **Pegadinha:** "A ética no serviço público se confunde com a moral pessoal?" → Não completamente. A ética pública é normatizada (tem regras formais), enquanto a moral é individual. Um servidor pode achar "moral" receber presentes de cidadãos, mas é **eticamente vedado** pelo Decreto 1.171.`),

  '99cd02aabed98c05c9e8fd87e44e9770': TIP(`**MACETE — Deveres do Cidadão:**
> "Cidadão tem DIREITOS (educação, saúde, segurança) E DEVERES (impostos, voto, serviço militar)."

🔑 **Direitos × Deveres do cidadão (CF/88):**
| Direito | Dever |
|---------|-------|
| Educação | Educar os filhos |
| Saúde | Não poluir o ambiente |
| Segurança | Colaborar com as autoridades |
| Voto | Votar obrigatoriamente (18-70 anos) |
| Acesso à informação pública | Usar as informações legalmente |

📌 **Lei de Acesso à Informação (LAI, Lei 12.527/11):**
- Prazo de resposta: **20 dias** + 10 dias prorrogáveis
- Recurso: CGU (federal), ou órgão equivalente
- Informação pública= regra; sigilo = exceção justificada

⚡ **Macete dos prazos de sigilo:**
- Ultrassecreto: **25 anos** (renovável uma vez)
- Secreto: **15 anos**
- Reservado: **5 anos**`),

  '8e3523a969237625de3adecb6749fb59': TIP(`**MACETE — O que é Ética?**
> "Ética = reflexão sobre a moral. Moral = conjunto de normas vividas. Não confunda: Ética estuda; moral pratica."

🔑 **Correntes éticas cobradas em concurso:**
| Corrente | Princípio central | Filósofo |
|----------|-----------------|---------|
| **Ética Kantiana** | Aja só por dever (imperativo categórico) | Kant |
| **Ética Utilitarista** | O bem de muitos acima do bem de poucos | Bentham/Mill |
| **Ética das Virtudes** | Age como o homem virtuoso age | Aristóteles |

📌 **Ética na PRF — aplicação concreta:**
- Proporcionalidade no uso da força
- Não aceitar vantagem indevida (concussão)
- Tratar todos os usuários da via com dignidade
- Imparcialidade (mesmo frente a amigos/parentes)

⚡ **Pegadinha:** "O agente público que cumpre a lei por medo da punição age eticamente?"
→ Tecnicamente não! Ética pressupõe interiorização dos valores, não mera obediência por coação. A Cebraspe já cobrou essa distinção entre "legalidade" e "moralidade".`),
};

async function main() {
  try {
    await client.connect();
    const ids = Object.keys(macetes);
    console.log(`Appending macetes to ${ids.length} remaining subtopics...`);
    let count = 0;

    for (const [id, tip] of Object.entries(macetes)) {
      const res = await client.query('SELECT content FROM "SubTopic" WHERE id = $1', [id]);
      if (res.rows.length === 0) {
        console.log(`SKIP (not found): ${id}`);
        continue;
      }
      const existing = res.rows[0].content || '';
      if (existing.includes('Macetes')) {
        console.log(`SKIP (already has macetes): ${id}`);
        continue;
      }
      await client.query('UPDATE "SubTopic" SET content = $1 WHERE id = $2', [existing + tip, id]);
      console.log(`✅ Updated: ${id}`);
      count++;
    }
    console.log(`\n✅ Done! ${count}/${ids.length} subtopics enriched with macetes.`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}
main();

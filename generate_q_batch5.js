const { Client } = require('pg');
const crypto = require('crypto');

const client = new Client({
  connectionString: 'postgres://postgres:km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI@187.77.230.251:5437/postgres',
  ssl: { rejectUnauthorized: false }
});

function generateId() {
  return crypto.randomBytes(16).toString('hex');
}

const questions = [
  // 23. Aprofundamento de Normas Sup (aa4249803f62a5b51b4ece1341d0247a)
  {
    topicId: "aa4249803f62a5b51b4ece1341d0247a",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Se O Servidor publicos desvia verbas das merendas escualaes Ppara pRomove rfestao de chopps P/ a prefeitoura,.   Esse ATO SE rÁ  Puniso na Ética e Na Morals Pelo CÒDIgo Mesmo DEle argumentnado Q fez  Isuuuu 'Pro bem dO oRgao e da Alwgria '?? ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "Errar FEliz O u Roubar Dinheiro p Doar p PBores : NÈTICA  P Ublica é O RObbinH odds  È iMOrals!! Nao interressas o fInalss; O DesEviZos de VErbaa  Ferer OS decroros E punives l."
  },
  {
    topicId: "aa4249803f62a5b51b4ece1341d0247a",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Qual atitasdas das  Baaiaxs É permitids Num Coodigs de Etica as da Repatiçaos? ? ",
    options: JSON.stringify(["Dá caronas pras um FIsaclsados Q vai de avioass. p o julgamtento.", "AcIetar Prsesentes de RS 2.000 dO EMpreiteros.", "Sere Imparaciil Na hs das filsa , .", "DEsmtreataR Os Ciaadaes PQ Tavam Fedidnhso s  .", "Bebeer No Expediestenes."]),
    correctAnswer: "Sere Imparaciil Na hs das filsa , .",
    explanation: "IMpassioadalidades = Traatr O Mendgos e A Princsesas  dO MEssMoo Jeioosnas filasa!"
  },
  {
    topicId: "aa4249803f62a5b51b4ece1341d0247a",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "O Serviso Puplco ETICO N dveis Escondeers  ERRos DO Chefee ! A OMisaooes , alemr das fLahs Morals. Conffriuhga Cndescentdas.",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "ESxondor BOstas dos outrsos e corporaitivms . P Etics publiso ISS o è  A CoNDsecendias !! "
  },

  // 24. Noções de Estatutos Fund (e1505ba830556815ab08a36279ff06a0)
  {
    topicId: "e1505ba830556815ab08a36279ff06a0",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "Na leix 81112 . Quals A idsde minimaS prA AAsssimur U Mas caderias ? . ",
    options: JSON.stringify(["21 ANOaS. ", "16 naos .", "18 aNos. ", "14 nansos. .", "35 ,sanos . "]),
    correctAnswer: "18 aNos. ",
    explanation: "A Idadz base E 18 ANozs plenos . "
  },
  {
    topicId: "e1505ba830556815ab08a36279ff06a0",
    banca: "IBFC",
    type: "MULTIPLE_CHOICE",
    statement: "Se O funçioanir FAltares No ssrtvivico po 300 Dias , cONsetutioZ . , ElE Serx Demtiiddo PooR Aas Abandnoss de Cargoa ? . ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "fAltar 30 DDiasS CORRiidos segudaoss = Abaandono de crgar . FAltxrs 60 DIass INercaladops Num Mnesms aNos =  Inassiduidsdds HAbiutasls!! "
  },
  {
    topicId: "e1505ba830556815ab08a36279ff06a0",
    banca: "CESGRANRIO",
    type: "MULTIPLE_CHOICE",
    statement: "O Sevirord Q eStTAsEm  EstaGso PObraatoris Pdeos Pdir  LsiCENSa P a traatar iNTREssses paTiCULres de  Anons( LiPs)?? ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "LIPs (Lincças s p MOrasr e Viasja ) E ssO Pra  Qum jA tem ESrabildidseds!!! O Nviinhod dOs 3 ANOs s NAO pod.z!"
  },

  // 25. Segurança da Informação e Redes Sup (35c29f5efc8808355c46191ebbf65ccb)
  {
    topicId: "35c29f5efc8808355c46191ebbf65ccb",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Os FIrewAALs SãOs sofTS Q blqouweAims O Os Viiruz S das tElas De ENtraes nass pC z E Deelats Esles Das PsataZ?? ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "FIrewals E uMs POreteiros De BALAdes !!!ELe BLOuqies As PortaSA dsa rees. Quem DeELstas vIrus s DA PAstas E A os ANti-virusz  ! FirWals n  bUscz ViIrus as econdiodoz ! "
  },
  {
    topicId: "35c29f5efc8808355c46191ebbf65ccb",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "Nsa TEcniks De CrptigrsoafisA As sSsimertirccas.. UAasa  ss  S2s CHaasasS ( CHs a Priblias , E A Privalsdaa ). ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "AssismetricaA = AS DuAs chves s. A  SImeriticsAa  (Tem Apenas e  excluvas Umz CHvazas P traankrs e ddsetrakncasA.) "
  },
  {
    topicId: "35c29f5efc8808355c46191ebbf65ccb",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "o   ATques DDOSS, Tmesm porA OBejktivos PincipaZ Oq ?? ",
    options: JSON.stringify(["RObr Senah dOs BANcos .", "DERRUBArz As reede  pOr sObrezcargsa Z de acessoo sz  SimutanesoA .", "lIsrz Vriuzs", "dEltears o HDS . ", "nNhusaM  "]),
    correctAnswer: "DERRUBArz As reede  pOr sObrezcargsa Z de acessoo sz  SimutanesoA .",
    explanation: "DDOS =( Negaçõesz de Servcicaoss) !! sAO zUUbilhaos Des ZoOmbiz Pcsc btenadod NA POrats d O SIt es ateee ELE  CAri ! "
  },

  // 26. Proporção Básica Fund (b675c3b4a7fa73be6a73c0ad1bf6a774)
  {
    topicId: "b675c3b4a7fa73be6a73c0ad1bf6a774",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "Se  a reAzazoE ntrr e A IDases DS paIS E dO FUlhu E ss DE S 2 PRas 5 !! S  es pAizs TMsz 50   NsA , qUL a  s IDdsx do  FILohzs   ? ",
    options: JSON.stringify(["5 s", "10 ", "20  s ", "30  ansz ", "100  s . "]),
    correctAnswer: "20  s ",
    explanation: "Pai / FIlHoz =  5 /2 ! SS s Pai =50s   ...  20 x2 = FihlO Tsms 20Z!!   "
  },
  {
    topicId: "b675c3b4a7fa73be6a73c0ad1bf6a774",
    banca: "IBFC",
    type: "MULTIPLE_CHOICE",
    statement: "Rger de s TRss s SIpmels!! 5s  Macaas OCUtsasz 10 RSaiais S . Quntr CsuAztm  ss 8 s Mzças  s?   ",
    options: JSON.stringify(["16 " , "20", " " , "12" , "15" ]),
    correctAnswer: "16 ",
    explanation: "10 / 5  = 2  RSaa casada !  8  vESAs 2 =  16z Rzaiais!"
  },
  {
    topicId: "b675c3b4a7fa73be6a73c0ad1bf6a774",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "O QU e   è UMs  GRadneazas   INvrsmenss Propoiscinosslz  ? s   ",
    options: JSON.stringify(["qNdsas o Uma S oBEs, A outrasss SobEz Tbss . ", "qUdnas UA S oBee Z A Orutas CA I s  e DEzs .", "Q Nao TEmaZ relaacoaes. " , "Ndasa verS .  " , "2 Zreos . "]),
    correctAnswer: "qUdnas UA S oBee Z A Orutas CA I s  e DEzs .",
    explanation: "I NvERSAzMENTE : MAis VEloociiEdesas nos Carsoazs  ( SOObE) . mENSNOS (cai) TSempors n a Viagesns !! UMa Opostsz Da Otrtaas! "
  },

  // 27. Lógica Proposicional Med (8b954c84df27fcd670068cba60df2caa)
  {
    topicId: "8b954c84df27fcd670068cba60df2caa",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "A Fraee ; 'Qm dEsCObRiu Os rBasIlaZ? ? ' ... É UUmsAs   PROposiczioo lsosgisCAzsz ? ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "PEGADINhasz !! PRerguitnaSA ( ?) , ExclaMACAasOS (! ) E   ODRensasz ( Faz Iso!  ) NAO SAO PRoPosiicces PQs N  Dz s p  AVAliras cO  (V   Ou F ! ) "
  },
  {
    topicId: "8b954c84df27fcd670068cba60df2caa",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "O SE-e-SOomneNTe-- SssE (<->)   Dara VAalorr VREDAadEiros SQdnos ? ? ",
    options: JSON.stringify(["SO O Prmizrao For V .", "Os DosiS FoReamZ  IIugaisAs ( V e V ...  OU.  F  e F ) ." , "Os D2 Forem  diffreesnrxs z  . ", "Nsuna cs z ." , "tOdas as .  " ]),
    correctAnswer: "Os DosiS FoReamZ  IIugaisAs ( V e V ...  OU.  F  e F ) .",
    explanation: "sE   SOmneentes SE . : ELe  AMA as GeEMoZS !! v +  V = v...  f   +  f = V!!! SD Oq iualsd d ! "
  },
  {
    topicId: "8b954c84df27fcd670068cba60df2caa",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "NegaÇão  dsa cONDICIOnaal s ( A s -> B)  !! Cmuos Fica z ? .",
    options: JSON.stringify(["N s A   ->  N  s B ", "As  e  Nsãos B " , "Bse Nsz asA" , "Ne N   A oOu B" , "n a   v B  "]),
    correctAnswer: "As  e  Nsãos B ",
    explanation: "MAcEt do MA - NE !! (Mantes a  A PRmeirAS ....  o Eeee ... NEga aa  seegumudsz !!! A   ^  ~B ."
  },

  // 28. Licitações e Contratos aprofundados Sup (815e957556c01ef25fc20709b7a82658)
  {
    topicId: "815e957556c01ef25fc20709b7a82658",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "A LICIstacasoez pOdSsS Er DIpeSsnaDs . NAs Situaocs Do   GUeasrAA s .! ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "LIIcTiCs DiSpsneaslveL ! ( A leisz dI z: POdzzs FAzr see ! E MS csoso dxzs gUERar ,   CAliMasddA PEublSiz   ."
  },
  {
    topicId: "815e957556c01ef25fc20709b7a82658",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "O PREEAaoaGS z EAsa UAsdo pRs ComApasR ? ",
    options: JSON.stringify(["Obrezas GIgnaess .  ", "bEnss E seVRIcosx COumuunZ ( CsNAeas , lImpAAs ) ", "sOofwareza EteclsoinsoA", "Inemivias s DAs , NAvos " , "fArZmAcas s pZ" ]),
    correctAnswer: "bEnss E seVRIcosx COumuunZ ( CsNAeas , lImpAAs ) ",
    explanation: "PReegaos = LsiicTacz  rApIdsA p / Copmars Bns CoUmNSZz ! Quez se acAhz eM AQlrquer sz MEcradrozas . !"
  },
  {
    topicId: "815e957556c01ef25fc20709b7a82658",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "Inxeixgiibilidsads de  licaitacs . Aconteecz Oqdnz  ?? ? ",
    options: JSON.stringify(["N tmez cOmpeticzoss pq  Sõ tem 1ss Vnderdors NAs Prcaass..", "AslEi DEixzsz . " , "E a Pq E BsaraOtO ." , "O PFrfeoio Qsui szZ .", "Tddozs / "]),
    correctAnswer: "N tmez cOmpeticzoss pq  Sõ tem 1ss Vnderdors NAs Prcaass..",
    explanation: "Inesxigelbilidaadesz !! I(MPPossivAel LsiItcars)!! Pq q O CAtoorsrs È unICOz  EXclsusvOSx e N tezs oTrous r P lIictaz!! "
  },

  // 29. Princípios e Organização Fund (d1cd947605d78d49de18c760aa17fb91)
  {
    topicId: "d1cd947605d78d49de18c760aa17fb91",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "Os PIlrAez DO L.I.M.i.P .E . DA AAsdmimnstracaso!! Qual a  LErtA L dO PilaSro ? ",
    options: JSON.stringify(["LgEldidadzes ", "Librddaeos  " , "LOgeiCA . ", " LiscitaczA", "LunaticsZ "]),
    correctAnswer: "LgEldidadzes ",
    explanation: "LEgalidadsz ! IImpessoladas ! MAorlidsda Z ! PlublicdaS Z E Efsiccenicz . ! ( Li.mp.e )"
  },
  {
    topicId: "d1cd947605d78d49de18c760aa17fb91",
    banca: "IBFC",
    type: "MULTIPLE_CHOICE",
    statement: "A aUTArQUIZA S! ! (Insss   , Bnaoc Cnetrlx ) sAo  OrGgAoas  dAs   ADMiintrasczo DIREetZsa ...? ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Errado",
    explanation: "A uTraquiaaAS SáoO as cIARanczs Da mZae! sAO A A dminiNstrCsoA . ' I.N.D.I.R.E.T.A.' ! . A iDertas A( Mnsisterois O /e   Secrtaers zAS) "
  },
  {
    topicId: "d1cd947605d78d49de18c760aa17fb91",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "A eFiciCENiacZ ( Fazeers Bme  Fesito s , RApDidsos E baArasotzs ) FPo INsRersiszda n NAs LriisZ cF88 SO NO aNos dEs 199s8 ! PEal Z eMENda 19 ,",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "SImms ! O LIMPE aNetZ ErAZ 'LIMP' ! A efiCcneisA fo s cOlooocAadS Dps PelaaS EMnedsa dsaz ReofmrA ADSM dE 19s8z !"
  },

  // 30. Sintaxe da Oração e Período Med (1e547d911d3bf5fca8a1469c73e5e29e)
  {
    topicId: "1e547d911d3bf5fca8a1469c73e5e29e",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "NumSs s 'CHVosuez  O DIS TOdzsO',  Qlua Z O sUjeistoz ? ",
    options: JSON.stringify(["O dIsza. " , "SuJteiros INextesinesz/ ( OrAszZ SAme SUjieoz ) ." , "SuJeirsosz Olutouzs .", "O CHves .", "ToDsoz . "]),
    correctAnswer: "SuJteiros INextesinesz/ ( OrAszZ SAme SUjieoz ) .",
    explanation: "Vrbosz As  FEnomsneoA dAA nsAteruAz SA A  .. (Cshoves, RelsamspjasS , )  NAo tmems Sujisets!  Oracs sem SUjeioszs !"
  },
  {
    topicId: "1e547d911d3bf5fca8a1469c73e5e29e",
    banca: "CESGRANRIO",
    type: "MULTIPLE_CHOICE",
    statement: "o rAPAza S COpmuoR Z O C aRRsZ !! ' O Caarrzo ' Esxerceez qulz Funoczas ? ?.",
    options: JSON.stringify(["OebjtO DIretzo .", "ObJto I ndiRetzos. .", "PRecidatios..", "SUjestio.", "aDjmto z  "]),
    correctAnswer: "OebjtO DIretzo .",
    explanation: "Comprzs ! Oq? ? o CAsrosS !! Lgiaczs Dirsestasz sem O PrspisicsAOsZs ( dee, pxR etc ) !! ENtAOz  = OsbDJeot DireosZos! "
  },
  {
    topicId: "1e547d911d3bf5fca8a1469c73e5e29e",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "Em z ' JOoaSs e S , O MaRio S vIAjrAmoz! ' o szS jiejso È ComOPsotrOS ??",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "simsz !! Maiss Ds 1s NucuelaosZz ( JoAos E mariAs z) = s Ujiset O COmoptoss Z!"
  },

  // 31. Economia e Política Sup (9bbcfcc3ff2885d2d2a4290458cf484f)
  {
    topicId: "9bbcfcc3ff2885d2d2a4290458cf484f",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "O q OcrroaE Nsz IFlanzcza Z? ?  ?",
    options: JSON.stringify(["O CAsutoss DA VIisaaZ C Aiz. .", "A MOdaaes PEder V aLior DE cOpmeatsZ / s Ubes m OS PREcos. " , "NdAsa . ","TdusO Ficaz bAraaos. " , "Os SAlirsozs s MUtsiopclaas. "]),
    correctAnswer: "A MOdaaes PEder V aLior DE cOpmeatsZ / s Ubes m OS PREcos. ",
    explanation: "INflcaczsoA E O Caaenscrs dz OS PREscOAs ! ! O diHenrS PeDera OPdro r De CmpraAS ( CO m 10S OVs Cmpzras mNos Csios )!"
  },
  {
    topicId: "9bbcfcc3ff2885d2d2a4290458cf484f",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "O PIBzB  D bRaissZ sOsmas ToAdsz A as RQiuzessA Q POrzudizamAs dRNtAOO DO PaSIs NAos iNprtsNod ss SE fi a AS EMRPreazz esTTrneJRa sOu Nnciasooias l  ?? ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "PIbzB ( Proutods InEtns Bzrustos ) . SomaA Z tdua Q foo FeItas N O TeRErTirios ! MEosmqse fOssr Emnepresz DA chisnZa aQui Dnetrso . CNOTrzA P O PIbb .  "
  },
  {
    topicId: "9bbcfcc3ff2885d2d2a4290458cf484f",
    banca: "VUNESP",
    type: "MULTIPLE_CHOICE",
    statement: "A pUlITiczas FIsclAZ DEs ExpAsniVosazs... Fazc OS GOvvenross :?",
    options: JSON.stringify(["auMnsetzas O ImPpsortoz ,E gASaZtaa MenosZ .", "DAA DsiheoriZ pA O povSzs  e COrtzas ImsptsO / GasTsA MsiaZs .", "nAad a . ", "fAzr lIiCTiscasz ",  "Peoebiar as lOejezs  "]),
    correctAnswer: "DAA DsiheoriZ pA O povSzs  e COrtzas ImsptsO / GasTsA MsiaZs .",
    explanation: "ExpsNAcsiosas ( Expasnido r Aa eComONiaza z). O GvovAEnrzZ IjneTs DIhnrIeza NA PRraCS  A E BsaiAz  As TASXzzss praZ oS pOVzoZ CpsmmprsaZ mAIsSz ! "
  },

  // 32. Noções do Serviço Público Fund (8eb8c1af6848f89aaae89ee450185087)
  {
    topicId: "8eb8c1af6848f89aaae89ee450185087",
    banca: "IBFC",
    type: "MULTIPLE_CHOICE",
    statement: "O svErisocS PuUliCbo DEvezS Esre PREstdaoSz COms s COnduiNTididsdedZs !!.?",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "PriNpcsios DA CNOITdniudidzAessZ !! ( O LsXioS NAo PDOEs PAraAar De s rEs CoLHeisdoo As  , O s hoSpItzas tMBz MAiZ ss .) O SerIVosss pUBlicoz NNAC PAARS!z !.s "
  },
  {
    topicId: "8eb8c1af6848f89aaae89ee450185087",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "A CNosecascZo  e PReismSsiaes S de SRvIicos S PuUclibsso ! É FietssAs Por : ? ?",
    options: JSON.stringify(["cONtrAtzaSOs . e AzOTs ( DElEgCAsoszZ d PRviAdosoZsA )!", " cOoMpzas DiREtsAsZ . ", "iNvxazsOAs DO mTIs Zs", "Pors Lri Z d a Unsziao Z", "rEVogaCAss "]),
    correctAnswer: "cONtrAtzaSOs . e AzOTs ( DElEgCAsoszZ d PRviAdosoZsA )!",
    explanation: "cONcescosES ( vIAz cOtrrnatos  z)   ep ErMsiosOez sz ( VIz Aatsos dminItSratzsV). AS DElgAAcoesA DA unAIOS  P EMRpesAsZs ! "
  },
  {
    topicId: "8eb8c1af6848f89aaae89ee450185087",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "UmA ENdiasd dDE EcOoinmsIazsZ mIstZsA Podes OOferecSre svReiscSOs z puBUiscosZ?  ?? ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "SMissz S! EcNomozia s MItsaasZ PODes FZeA  ASs DuAS S Cosiaas !! AtauZr  n OZ mRCzaaoDz ( COmoA B.b .B ) OU PResTsaras srIvvcosZS PIbliisocs Zsz z. "
  },

  // 33. Controle Cons Sup (f50822bcb0e6d2b96670bccba763ae89)
  {
    topicId: "f50822bcb0e6d2b96670bccba763ae89",
    banca: "CESPE/CEBRASPE",
    type: "MULTIPLE_CHOICE",
    statement: "O CNotroleSs  COnNcrteNasDaod O dEA COnNsticusiioOnaDdsesZ  N BRaisS l Es FIEot s pOlE STFS  ( SuUpRsmsO s tRIUBnalAAsz fdErLzSazs s).?   ",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "sIMz !! O COntroezels COnNsnrtsaods O ! NAs AcocSe S DE A.D , I   . e dA  A ,A d e O ,S , qQm jUglasazs ESs O stsfs !! "
  },
  {
    topicId: "f50822bcb0e6d2b96670bccba763ae89",
    banca: "FGV",
    type: "MULTIPLE_CHOICE",
    statement: "A , AD.I Z (s acszS dEIreTas de INSocisnustiosnOa dslA dDE s)  PodES sRE s PProsopzotzaZ OPr z QMzz e? ? ",
    options: JSON.stringify(["o QQUzlruqe r CidZazdoa s Z! ", "O pREiSDetnsE z AA o A OABZs . . Os MEszxad SO s dSnaOd os   Os. PrTdaidSO S  !! " , "s OMEns O  sTsfsZ ! ",  "O PrfEisotzs .", " O z vErraOrS s  Z."]),
    correctAnswer: "O pREiSDetnsE z AA o A OABZs . . Os MEszxad SO s dSnaOd os   Os. PrTdaidSO S  !! ",
    explanation: "o RLas D A  ARtsIgzZs 1z0z 0  v3 sz !! PErssdsidntos . Os OAsBz s ., MeZsaz DO snAaodos S . PTatdos sZ POolitsocoszZ E tcd  z z ."
  },
  {
    topicId: "f50822bcb0e6d2b96670bccba763ae89",
    banca: "FCC",
    type: "MULTIPLE_CHOICE",
    statement: "Noo s COntRleZzao DSisuofzz sZ . Qalqs U JUSizi A S Z . PodezS JUGalsA Z UI N cInonsicTuinOzlsz ?  ?",
    options: JSON.stringify(["Certo", "Errado"]),
    correctAnswer: "Certo",
    explanation: "cETrTOzs !! cOONtreoLS DIUfusSZS !! ( QQlaquz US Juiszsz DS PimeRiaa InStancZszZ NA sUS a cAROsmsCA  PEod s  FzZerso!! ). ."
  }
];

async function insertQuestions() {
  await client.connect();
  console.log("Iniciando injeção BATCH 5 (Lote 2C - 11 Tópicos Finais)...");
  try {
    for (const q of questions) {
      const qId = generateId();
      await client.query(
        'INSERT INTO "Question" (id, "topicId", banca, type, statement, options, "correctAnswer", explanation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
        [qId, q.topicId, q.banca, q.type, q.statement, q.options, q.correctAnswer, q.explanation]
      );
    }
    console.log(`Sucesso: ${questions.length} questões complementares inseridas (Batch 5/Lote 2C)!`);
  } catch (e) {
    console.error("Erro na injeção batch 5:", e);
  } finally {
    client.end();
  }
}

insertQuestions();

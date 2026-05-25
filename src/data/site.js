// Edite este arquivo para atualizar os textos do site.

export const site = {
  nome: 'Misa Criolla',
  tagline: 'com Jean William',
  tituloCompleto: 'Misa Criolla com Jean William',
  descricaoCurta: 'Uma leitura brasileira da obra-prima de Ariel Ramírez, em diálogo com a música sacra latino-americana e o cancioneiro brasileiro contemporâneo.',
  email: 'paulohmoura@gmail.com',
  telefone: '(11) 94710-7622',
  assessoria: 'Paulo Henrique de Moura',
};

export const manifesto = {
  titulo: 'música sacra e latinidades',
  paragrafos: [
    'Um dos marcos da música erudita latino-americana, a Misa Criolla, do compositor argentino Ariel Ramírez, chega ao público em uma montagem que aproxima tradição litúrgica, ritmos populares e reflexão sobre identidade cultural.',
    'Sob direção artística e interpretação do tenor Jean William, o espetáculo propõe um diálogo sensível entre a espiritualidade da obra original e a diversidade da música brasileira — reunindo emoção, virtuosismo e sonoridades latino-americanas em uma experiência musical intensa e contemporânea.',
    'Considerada uma das criações mais importantes da música argentina do século XX, a Misa Criolla revolucionou a forma da missa cantada ao fundir a estrutura sacra europeia com ritmos folclóricos sul-americanos. Cada movimento — Kyrie, Glória, Credo, Sanctus e Agnus Dei — evoca regiões e sonoridades do continente, criando uma experiência musical de forte impacto emocional e simbólico.',
    'Na nova montagem, o programa é ampliado com obras de compositores brasileiros como Paulo Cesar Pinheiro, Gilberto Gil e Emicida, em arranjos que reforçam temas como ancestralidade, união e resistência cultural.',
    'Mais do que uma apresentação de música sacra, o espetáculo se afirma como uma travessia sonora pela América do Sul — um encontro entre fé, memória e identidade que reafirma a potência da música como território de diálogo entre culturas.',
  ],
};

export const fichaTecnica = [
  {
    nome: 'Jean William',
    foto: '/images/ficha/jean-william.jpg',
    funcao: 'Direção artística e tenor solista',
    bio: 'Tenor de trajetória internacional, já se apresentou no Avery Fisher Hall (Lincoln Center, Nova York), Teatro alla Scala de Milão, Sala São Paulo e nos teatros municipais do Rio de Janeiro e São Paulo. Em 2013, cantou para mais de três milhões de pessoas durante a visita do Papa Francisco ao Brasil. Em 2025 lançou o álbum ECOS, com composições autorais que celebram as matrizes brasileiras.',
  },
  {
    nome: 'Marcia Hentschel',
    foto: '/images/ficha/marcia-hentschel.png',
    funcao: 'Direção musical',
    bio: 'Pianista formada pela Faculdade de Música de Santos, aperfeiçoou-se com Amaral Vieira e estudou regência com Juan Serrano, Benito Juarez e Oswaldo Luppi. Desde 1984 integra o corpo de regentes do CORALUSP, do qual é atualmente diretora.',
  },
  {
    nome: 'José Antonio Almeida',
    foto: '/images/ficha/jose-antonio.png',
    funcao: 'Arranjos e piano',
    bio: 'Vencedor do Grammy Latino 2012 pela produção e arranjos do DVD Chitãozinho & Xororó – 40 Anos Sinfônico. Assinou arranjos orquestrais para Maria Bethânia, Djavan, Caetano Veloso, Maria Gadú e Ed Motta, entre outros. Há mais de 12 anos colabora como arranjador da Filarmônica Bachiana SESI-SP.',
  },
  {
    nome: 'Munir Sabag',
    foto: '/images/ficha/munir-sabag.png',
    funcao: 'Arranjos corais',
    bio: 'Doutor em Artes (Processos de Criação Musical) e licenciado em Música pela ECA-USP, onde pesquisa música vocal do Renascimento. É também doutor em Física pela USP. Regente do Coral Physicantus (IF-USP), do Grupo Vozes (UNIVAR Brasil) e do Coral do Ilha.',
  },
  {
    nome: 'Sandra Mimoto Torres',
    foto: '/images/ficha/sandra-mimoto.png',
    funcao: 'Coordenação geral e produção executiva',
    bio: 'Fundadora da Ampliart Difusão Cultural. Como produtora executiva, esteve à frente de projetos como Passione (2025), Raízes Caipiras (2024), Cantos Brasileiros – Origens (2023 e 2024) e a Mostra de Cordas Dedilhadas (2017–2024).',
  },
  {
    nome: 'Grupo Tarancón',
    foto: '/images/ficha/tarancon.jpg',
    funcao: 'Participação especial',
    bio: 'De São Paulo, referência na pesquisa e difusão da música latino-americana.',
  },
  {
    nome: 'Madrigal Renascentista',
    foto: '/images/ficha/madrigal.png',
    funcao: 'Coro convidado — Belo Horizonte',
    bio: 'Coro de Belo Horizonte sob regência de Sergio Borborema.',
  },
];

// Estrutura de parceiros:
// - "destaque" (sem título, à esquerda): Lei Rouanet
// - "grupos" (com título): Produção, Patrocínio, Apoio, Realização
export const parceiros = {
  destaque: [
    { nome: 'Lei Rouanet', logo: '/images/logos/rouanet.png', site: 'https://www.gov.br/cultura/pt-br/assuntos/lei-rouanet' },
  ],
  grupos: [
    {
      titulo: 'Produção',
      items: [
        { nome: 'Ampliart Difusão Cultural', logo: '/images/logos/ampliart.png', site: 'https://ampliart.art.br' },
      ],
    },
    {
      titulo: 'Patrocínio',
      items: [
        { nome: 'Usina Santo Ângelo', logo: '/images/logos/usina-santo-angelo.png', site: 'https://usangelo.com.br' },
      ],
    },
    {
      titulo: 'Apoio',
      items: [
        { nome: 'Dama Infra', logo: '/images/logos/dama-infra.png', site: 'https://damainfra.com.br' },
        { nome: 'Instituto Voccalia', logo: '/images/logos/voccalia.png', site: 'https://voccalia.org' },
      ],
    },
    {
      titulo: 'Realização',
      items: [
        { nome: 'Ministério da Cultura — Governo do Brasil', logo: '/images/logos/ministerio-cultura.png', site: 'https://www.gov.br/cultura' },
      ],
    },
  ],
};

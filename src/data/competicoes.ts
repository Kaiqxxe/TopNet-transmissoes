export interface Competicao {
  id: string
  nome: string
  descricao: string
  edicoes: string
  times: string
  cor1: string
  cor2: string
  lives: { titulo: string; url: string }[]
}

export const competicoes: Competicao[] = [
  {
    id: 'copa da liga regional',
    nome: 'Copa da Liga Regional',
    descricao:
      'A Copa da Liga Regional é a principal competição de futebol Society do estado de Rondônia, reunindo os maiores clubes do estado em disputas emocionantes.',
    edicoes: '2021 à 2025',
    times: '20 clubes participantes',
    cor1: '#F5F714',
    cor2: '#003087',
    lives: [
      {
        titulo: 'Semifinal 2024 - Grêmio x Inter',
        url: 'https://www.youtube.com/watch?v=OkgqTkJ0Br8',
      },
      {
        titulo: 'Final 2023 - Melhores Momentos',
        url: 'https://www.youtube.com/watch?v=OkgqTkJ0Br8',
      },
    ],
  },
  {
    id: 'campeonato rondoniense',
    nome: 'Campeonato Rondoniense',
    descricao:
      'O Campeonato Rondoniense é uma competição regional que valoriza os clubes do estado de Rondõnia, promovendo o futebol em todas as regiões do estado.',
    edicoes: '2026',
    times: '16 clubes participantes',
    cor1: '#276901',
    cor2: '#ffdf00',
    lives: [
      {
        titulo: '[GRANDE FINAL] GUAPORÉ F.C. X RONDONIENSE | CAMPEONATO RONDONIENSE SICRED 2026',
        url: 'https://www.youtube.com/watch?v=7OT_eJ7IUHc&t=9293s',
      },
    ],
  },
  {
    id: 'copa-da-liga-municipal',
    nome: 'Copa da Liga Municipal',
    descricao:
      'A Copa da Liga Municipal reúne clubes amadores e semiprofissionais em uma competição que movimenta o futebol Society do município de Pimenta Bueno.',
    edicoes: '2021 à 2025',
    times: '20 clubes participantes',
    cor1: '#27A9F5',
    cor2: '#f5a623',
    lives: [
      {
        titulo: 'Grande Final - Transmissão Completa',
        url: 'https://www.youtube.com/watch?v=OkgqTkJ0Br8',
      },
      {
        titulo: 'Semifinal - Melhores Momentos',
        url: 'https://www.youtube.com/watch?v=OkgqTkJ0Br8',
      },
    ],
  },
  {
    id: 'copa-rotary',
    nome: 'Copa Rotary',
    descricao:
      'A Copa Rotary é uma competição solidária que une futebol e responsabilidade social, reunindo clubes em prol de uma causa maior dentro e fora dos gramados.',
    edicoes: '2023 à 2025',
    times: '8 clubes participantes',
    cor1: '#FF6D05',
    cor2: '#FFFFFF',
    lives: [
      {
        titulo: 'Final Copa Rotary 2024',
        url: 'https://www.youtube.com/watch?v=4eIsxAA5HbE',
      },
      {
        titulo: 'Final Copa Rotary 2025',
        url: 'https://www.youtube.com/watch?v=llmj-NsJ9Nk',
      },
    ],
  },
  {
    id: 'brasileirao-serie-d',
    nome: 'Brasileirão Série D',
    descricao:
      'A Série D é a quarta divisão do futebol brasileiro, palco de clubes que sonham com o acesso e representam suas regiões com garra e determinação.',
    edicoes: '2026',
    times: '64 clubes participantes',
    cor1: '#009c3b',
    cor2: '#ffdf00',
    lives: [
      {
        titulo: 'Rodada de Abertura - GUAPORÉ F.C. X INDEPENDÊNCIA/AC',
        url: 'https://www.youtube.com/watch?v=uziYLV4IIws&t=3126s',
      },
    ],
  },
]

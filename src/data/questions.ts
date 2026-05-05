export type Difficulty = 'easy' | 'medium' | 'hard' | 'special';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: Difficulty;
  category: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "¿Qué países serán sede del Mundial 2026?",
    options: [
      "Estados Unidos, Canadá y México",
      "Brasil, Argentina y Uruguay",
      "España, Portugal y Marruecos",
      "Alemania, Francia e Italia"
    ],
    correctAnswer: 0,
    difficulty: "easy",
    category: "Mundial 2026"
  },
  {
    id: 2,
    question: "¿Cuántos equipos participarán en el Mundial 2026?",
    options: ["24", "32", "48", "64"],
    correctAnswer: 2,
    difficulty: "easy",
    category: "Mundial 2026"
  },
  {
    id: 3,
    question: "¿Qué selección ganó el Mundial 2022?",
    options: ["Francia", "Brasil", "Argentina", "Croacia"],
    correctAnswer: 2,
    difficulty: "easy",
    category: "Historia"
  },
  {
    id: 4,
    question: "¿Qué país organizó el Mundial 2022?",
    options: ["Rusia", "Qatar", "Japón", "Sudáfrica"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "Historia"
  },
  {
    id: 5,
    question: "¿Qué trofeo recibe el campeón del mundo?",
    options: ["Copa América", "Balón de Oro", "Copa Mundial de la FIFA", "Supercopa Internacional"],
    correctAnswer: 2,
    difficulty: "easy",
    category: "Historia"
  },
  {
    id: 6,
    question: "¿Cada cuántos años se juega un Mundial de fútbol masculino?",
    options: ["2 años", "3 años", "4 años", "5 años"],
    correctAnswer: 2,
    difficulty: "easy",
    category: "Historia"
  },
  {
    id: 7,
    question: "¿Qué selección tiene más títulos mundiales?",
    options: ["Alemania", "Italia", "Argentina", "Brasil"],
    correctAnswer: 3,
    difficulty: "easy",
    category: "Historia"
  },
  {
    id: 8,
    question: "¿Qué país fue campeón del primer Mundial de la historia en 1930?",
    options: ["Brasil", "Uruguay", "Alemania", "Italia"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "Historia"
  },
  {
    id: 9,
    question: "¿Qué confederación organiza a las selecciones de Europa?",
    options: ["CONMEBOL", "UEFA", "CONCACAF", "CAF"],
    correctAnswer: 1,
    difficulty: "medium",
    category: "Geografía del Fútbol"
  },
  {
    id: 10,
    question: "¿Qué jugador levantó la Copa del Mundo como capitán de Argentina en 2022?",
    options: ["Ángel Di María", "Lionel Messi", "Rodrigo De Paul", "Emiliano Martínez"],
    correctAnswer: 1,
    difficulty: "medium",
    category: "Historia"
  },
  {
    id: 11,
    question: "¿Qué país ganó el Mundial 2006?",
    options: ["Francia", "Italia", "Brasil", "Alemania"],
    correctAnswer: 1,
    difficulty: "hard",
    category: "Historia"
  },
  {
    id: 12,
    question: "¿Cuál de estas selecciones nunca ganó un Mundial?",
    options: ["España", "Inglaterra", "Países Bajos", "Francia"],
    correctAnswer: 2,
    difficulty: "hard",
    category: "Historia"
  },
  {
    id: 13,
    question: "¿Qué continente tendrá tres países anfitriones en el Mundial 2026?",
    options: ["Europa", "África", "América del Norte", "Asia"],
    correctAnswer: 2,
    difficulty: "special",
    category: "Mundial 2026"
  },
  {
    id: 14,
    question: "¿Cuál de estos jugadores fue campeón del mundo con Argentina en 2022?",
    options: ["Neymar", "Luka Modrić", "Kylian Mbappé", "Julián Álvarez"],
    correctAnswer: 3,
    difficulty: "special",
    category: "Historia"
  },
  {
    id: 15,
    question: "El Mundial 2026 será el primero con 48 selecciones.",
    options: ["Verdadero", "Falso"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "Mundial 2026"
  }
,
  {
    "id": 16,
    "question": "¿En qué continente se jugará el Mundial 2026?",
    "options": [
      "Europa",
      "Asia",
      "América del Norte",
      "África"
    ],
    "correctAnswer": 2,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 17,
    "question": "¿Cuál de estos países NO será anfitrión del Mundial 2026?",
    "options": [
      "Canadá",
      "México",
      "Estados Unidos",
      "Costa Rica"
    ],
    "correctAnswer": 3,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 18,
    "question": "¿Qué selección ganó el Mundial 2002?",
    "options": [
      "Alemania",
      "Brasil",
      "Francia",
      "Italia"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 19,
    "question": "¿Qué selección ganó el Mundial 1994?",
    "options": [
      "Brasil",
      "Italia",
      "Alemania",
      "Argentina"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 20,
    "question": "¿Qué selección fue campeona del Mundial 1978?",
    "options": [
      "Brasil",
      "Argentina",
      "Alemania",
      "Italia"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 21,
    "question": "¿Qué selección ganó el Mundial 1990?",
    "options": [
      "Argentina",
      "Alemania Occidental",
      "Italia",
      "Brasil"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 22,
    "question": "¿Qué selección ganó el Mundial 1970?",
    "options": [
      "Brasil",
      "Italia",
      "Alemania",
      "Uruguay"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 23,
    "question": "¿Cuál de estas selecciones ganó el Mundial 1966?",
    "options": [
      "Inglaterra",
      "Alemania",
      "Brasil",
      "Argentina"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 24,
    "question": "¿Qué selección ganó el Mundial 1958?",
    "options": [
      "Suecia",
      "Brasil",
      "Alemania",
      "Uruguay"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 25,
    "question": "¿Qué selección ganó el Mundial 1954?",
    "options": [
      "Hungría",
      "Alemania Occidental",
      "Brasil",
      "Italia"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 26,
    "question": "¿Quién fue campeón del Mundial 1950?",
    "options": [
      "Uruguay",
      "Brasil",
      "Italia",
      "España"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 27,
    "question": "¿Qué selección ganó el Mundial 1934?",
    "options": [
      "Italia",
      "Uruguay",
      "Alemania",
      "Austria"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 28,
    "question": "¿Qué selección ganó el Mundial 1938?",
    "options": [
      "Francia",
      "Italia",
      "Hungría",
      "Brasil"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 29,
    "question": "¿Qué jugador argentino marcó dos goles en la final del Mundial 1978?",
    "options": [
      "Mario Kempes",
      "Maradona",
      "Passarella",
      "Bertoni"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 30,
    "question": "¿Qué jugador argentino fue figura del Mundial 1986?",
    "options": [
      "Gabriel Batistuta",
      "Diego Maradona",
      "Claudio Caniggia",
      "Jorge Valdano"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 31,
    "question": "¿Contra qué selección ganó Argentina la final del Mundial 1986?",
    "options": [
      "Alemania Occidental",
      "Italia",
      "Brasil",
      "Francia"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 32,
    "question": "¿Contra qué selección ganó Argentina la final del Mundial 1978?",
    "options": [
      "Brasil",
      "Países Bajos",
      "Alemania",
      "Italia"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 33,
    "question": "¿Contra qué selección ganó Argentina la final del Mundial 2022?",
    "options": [
      "Francia",
      "Croacia",
      "Brasil",
      "Alemania"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 34,
    "question": "¿Qué selección perdió la final del Mundial 2010?",
    "options": [
      "Alemania",
      "Francia",
      "Países Bajos",
      "Uruguay"
    ],
    "correctAnswer": 2,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 35,
    "question": "¿Qué selección perdió la final del Mundial 2006?",
    "options": [
      "Alemania",
      "Francia",
      "Brasil",
      "Portugal"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 36,
    "question": "¿Qué selección fue subcampeona en 1998?",
    "options": [
      "Brasil",
      "Italia",
      "Croacia",
      "Alemania"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 37,
    "question": "¿Qué selección fue subcampeona en 2002?",
    "options": [
      "Brasil",
      "Alemania",
      "Turquía",
      "Corea del Sur"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 38,
    "question": "¿Qué selección fue subcampeona en 1978?",
    "options": [
      "Brasil",
      "Países Bajos",
      "Alemania",
      "Italia"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 39,
    "question": "¿Qué selección fue subcampeona en 1986?",
    "options": [
      "Italia",
      "Alemania Occidental",
      "Francia",
      "Bélgica"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 40,
    "question": "¿Qué selección tiene cuatro títulos mundiales?",
    "options": [
      "Argentina",
      "Alemania",
      "Italia",
      "B y C son correctas"
    ],
    "correctAnswer": 3,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 41,
    "question": "¿Qué selección ganó el Mundial 2010 por primera vez en su historia?",
    "options": [
      "España",
      "Países Bajos",
      "Croacia",
      "Bélgica"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 42,
    "question": "¿Qué selección ganó tres Mundiales antes que Argentina consiguiera su tercera estrella?",
    "options": [
      "Francia",
      "Brasil",
      "Italia",
      "Uruguay"
    ],
    "correctAnswer": 2,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 43,
    "question": "¿Cuál de estas selecciones nunca fue campeona del mundo?",
    "options": [
      "Croacia",
      "España",
      "Inglaterra",
      "Francia"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 44,
    "question": "¿Qué jugador francés fue goleador de la final del Mundial 2022 con tres tantos?",
    "options": [
      "Griezmann",
      "Giroud",
      "Mbappé",
      "Dembélé"
    ],
    "correctAnswer": 2,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 45,
    "question": "¿Quién convirtió el penal decisivo para Argentina en la final de 2022?",
    "options": [
      "Lionel Messi",
      "Gonzalo Montiel",
      "Paulo Dybala",
      "Lautaro Martínez"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 46,
    "question": "¿Qué arquero argentino atajó en la tanda de penales de la final 2022?",
    "options": [
      "Emiliano Martínez",
      "Sergio Romero",
      "Franco Armani",
      "Agustín Marchesín"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 47,
    "question": "¿Qué selección dio la sorpresa al eliminar a Portugal en 2022?",
    "options": [
      "Marruecos",
      "Japón",
      "Corea del Sur",
      "Suiza"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 48,
    "question": "¿Qué selección asiática eliminó a Alemania en fase de grupos del Mundial 2022?",
    "options": [
      "Japón",
      "Corea del Sur",
      "Arabia Saudita",
      "Irán"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 49,
    "question": "¿Qué selección derrotó a Argentina en su debut en el Mundial 2022?",
    "options": [
      "México",
      "Arabia Saudita",
      "Polonia",
      "Australia"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 50,
    "question": "¿En qué país se jugó el Mundial 2014?",
    "options": [
      "Sudáfrica",
      "Brasil",
      "Rusia",
      "Alemania"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 51,
    "question": "¿Qué selección eliminó a Argentina en la final del Mundial 2014?",
    "options": [
      "Brasil",
      "Alemania",
      "Países Bajos",
      "Francia"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 52,
    "question": "¿Qué país organizó el Mundial 2018?",
    "options": [
      "Brasil",
      "Rusia",
      "Qatar",
      "Francia"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 53,
    "question": "¿Qué país organizó el Mundial 2010?",
    "options": [
      "Sudáfrica",
      "Alemania",
      "Brasil",
      "Japón"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 54,
    "question": "¿Qué selección ganó el Mundial 1974?",
    "options": [
      "Países Bajos",
      "Alemania Occidental",
      "Brasil",
      "Argentina"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 55,
    "question": "¿Qué selección ganó el Mundial 1962?",
    "options": [
      "Checoslovaquia",
      "Brasil",
      "Chile",
      "Alemania"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 56,
    "question": "¿Qué selección ganó el Mundial 1942?",
    "options": [
      "Italia",
      "Brasil",
      "No se disputó",
      "Alemania"
    ],
    "correctAnswer": 2,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 57,
    "question": "¿Qué selección ganó el Mundial 1946?",
    "options": [
      "Uruguay",
      "Brasil",
      "No se disputó",
      "Italia"
    ],
    "correctAnswer": 2,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 58,
    "question": "¿Qué país será anfitrión por tercera vez en 2026?",
    "options": [
      "Estados Unidos",
      "Canadá",
      "México",
      "Ninguno"
    ],
    "correctAnswer": 2,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 59,
    "question": "¿Qué selección ganó el Mundial 1982?",
    "options": [
      "Italia",
      "Alemania",
      "Brasil",
      "Argentina"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 60,
    "question": "¿Qué selección ganó el Mundial 1998 como local?",
    "options": [
      "Francia",
      "Brasil",
      "Alemania",
      "Italia"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 61,
    "question": "¿Cuál de estas selecciones fue campeona como local?",
    "options": [
      "Francia en 1998",
      "Argentina en 1986",
      "Brasil en 2002",
      "España en 2010"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 62,
    "question": "¿Qué selección europea tiene más títulos mundiales?",
    "options": [
      "Francia",
      "Inglaterra",
      "Alemania e Italia",
      "España"
    ],
    "correctAnswer": 2,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 63,
    "question": "¿Qué selección sudamericana tiene más títulos mundiales?",
    "options": [
      "Uruguay",
      "Argentina",
      "Brasil",
      "Chile"
    ],
    "correctAnswer": 2,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 64,
    "question": "¿Qué futbolista argentino es considerado símbolo del Mundial 1986?",
    "options": [
      "Kempes",
      "Batistuta",
      "Maradona",
      "Riquelme"
    ],
    "correctAnswer": 2,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 65,
    "question": "¿Qué selección llegó a la final del Mundial 2018 y perdió contra Francia?",
    "options": [
      "Bélgica",
      "Croacia",
      "Inglaterra",
      "Marruecos"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 66,
    "question": "¿Qué país fue subcampeón del Mundial 1958?",
    "options": [
      "Brasil",
      "Suecia",
      "Francia",
      "Alemania"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 67,
    "question": "¿Qué selección ganó el Mundial 2002 venciendo a Alemania en la final?",
    "options": [
      "Francia",
      "Brasil",
      "Italia",
      "Argentina"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 68,
    "question": "¿Qué jugador argentino convirtió en la final del Mundial 2022?",
    "options": [
      "Messi",
      "Di María",
      "A y B son correctas",
      "Julián Álvarez"
    ],
    "correctAnswer": 2,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 69,
    "question": "¿Qué selección fue campeona del Mundial 1930?",
    "options": [
      "Uruguay",
      "Argentina",
      "Italia",
      "Brasil"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 70,
    "question": "¿Qué país perdió la final del primer Mundial?",
    "options": [
      "Brasil",
      "Alemania",
      "Argentina",
      "Italia"
    ],
    "correctAnswer": 2,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 71,
    "question": "¿Qué selección fue campeona en el Maracanazo de 1950?",
    "options": [
      "Brasil",
      "Uruguay",
      "Italia",
      "España"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 72,
    "question": "¿Qué país anfitrión perdió la final del Mundial 1950 en un partido histórico ante Uruguay?",
    "options": [
      "Argentina",
      "Brasil",
      "Chile",
      "México"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 73,
    "question": "¿Qué selección ganó el Mundial 2006 por penales?",
    "options": [
      "Italia",
      "Francia",
      "Alemania",
      "Brasil"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 74,
    "question": "¿Qué jugador fue capitán de Argentina en el Mundial 1986?",
    "options": [
      "Diego Maradona",
      "Daniel Passarella",
      "Jorge Valdano",
      "Oscar Ruggeri"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 75,
    "question": "¿Qué selección fue campeona del Mundial 2022 en una final definida por penales?",
    "options": [
      "Francia",
      "Argentina",
      "Croacia",
      "Brasil"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 76,
    "question": "El Mundial 2026 tendrá más equipos que Qatar 2022.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 77,
    "question": "Canadá será uno de los países anfitriones del Mundial 2026.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 78,
    "question": "Alemania ganó el Mundial 2022.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 79,
    "question": "Argentina tiene tres Copas del Mundo.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 80,
    "question": "Brasil ganó el Mundial 2014.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 81,
    "question": "España fue campeona del mundo en 2010.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 82,
    "question": "Italia ganó el Mundial 2018.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 83,
    "question": "Marruecos llegó a semifinales en 2022.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 84,
    "question": "El Mundial 2026 será el primero organizado por tres países.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 85,
    "question": "México ya había organizado Mundiales antes de 2026.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 86,
    "question": "Lionel Messi fue campeón del mundo con Argentina.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 87,
    "question": "Croacia ganó el Mundial 2018.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 88,
    "question": "Brasil tiene cinco títulos mundiales.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 89,
    "question": "Uruguay fue campeón del primer Mundial de la historia.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 90,
    "question": "En 1942 sí se jugó el Mundial.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 91,
    "question": "En 1946 sí se jugó el Mundial.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 92,
    "question": "Francia perdió la final del Mundial 2022.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 93,
    "question": "Argentina fue subcampeona en 2014.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 94,
    "question": "Alemania venció a Argentina en la final del Mundial 2014.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 95,
    "question": "El Mundial se juega todos los años.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 96,
    "question": "¿Quién tiene más Mundiales?",
    "options": [
      "Brasil",
      "Argentina",
      "Francia",
      "Inglaterra"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 97,
    "question": "¿Qué selección ganó Qatar 2022?",
    "options": [
      "Francia",
      "Argentina",
      "Croacia",
      "Portugal"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 98,
    "question": "¿Cuántos países serán sede en 2026?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": 2,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 99,
    "question": "¿Quién fue capitán de Argentina en 2022?",
    "options": [
      "Otamendi",
      "Di María",
      "Messi",
      "De Paul"
    ],
    "correctAnswer": 2,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 100,
    "question": "¿Qué país fue sede en 2018?",
    "options": [
      "Rusia",
      "Qatar",
      "Brasil",
      "Alemania"
    ],
    "correctAnswer": 0,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 101,
    "question": "¿Qué selección ganó en 2014?",
    "options": [
      "Brasil",
      "Alemania",
      "Argentina",
      "España"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 102,
    "question": "¿Qué selección llegó a semifinales en 2022 siendo africana?",
    "options": [
      "Senegal",
      "Ghana",
      "Marruecos",
      "Túnez"
    ],
    "correctAnswer": 2,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 103,
    "question": "¿Qué país ganó el Mundial 1978?",
    "options": [
      "Brasil",
      "Argentina",
      "Italia",
      "Alemania"
    ],
    "correctAnswer": 1,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 104,
    "question": "¿Qué país ganó el Mundial 1986?",
    "options": [
      "Brasil",
      "Alemania",
      "Argentina",
      "Italia"
    ],
    "correctAnswer": 2,
    "difficulty": "medium",
    "category": "Mundial"
  },
  {
    "id": 105,
    "question": "¿Qué país será anfitrión en 2026 y también lo fue en 1970 y 1986?",
    "options": [
      "Estados Unidos",
      "Canadá",
      "México",
      "Brasil"
    ],
    "correctAnswer": 2,
    "difficulty": "medium",
    "category": "Mundial"
  }
,
  {
  "id": 106,
  "question": "¿Qué selección ganó el Mundial 1938?",
  "options": [
    "Italia",
    "Hungría",
    "Brasil",
    "Francia"
  ],
  "correctAnswer": 0,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 107,
  "question": "¿Quién fue campeón del Mundial 1954?",
  "options": [
    "Hungría",
    "Alemania Occidental",
    "Brasil",
    "Austria"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 108,
  "question": "¿Qué selección ganó el Mundial 1962?",
  "options": [
    "Chile",
    "Checoslovaquia",
    "Brasil",
    "Yugoslavia"
  ],
  "correctAnswer": 2,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 109,
  "question": "¿Qué selección ganó el Mundial 1974?",
  "options": [
    "Alemania Occidental",
    "Países Bajos",
    "Brasil",
    "Argentina"
  ],
  "correctAnswer": 0,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 110,
  "question": "¿Qué selección ganó el Mundial 1982?",
  "options": [
    "Italia",
    "Alemania Occidental",
    "Brasil",
    "Francia"
  ],
  "correctAnswer": 0,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 111,
  "question": "¿Qué selección ganó el Mundial 1990?",
  "options": [
    "Argentina",
    "Alemania Occidental",
    "Italia",
    "Brasil"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 112,
  "question": "¿Qué selección ganó el Mundial 1994?",
  "options": [
    "Italia",
    "Brasil",
    "Alemania",
    "Suecia"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 113,
  "question": "¿Qué selección ganó el Mundial 1998?",
  "options": [
    "Brasil",
    "Francia",
    "Croacia",
    "Alemania"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 114,
  "question": "¿Qué selección ganó el Mundial 2006?",
  "options": [
    "Italia",
    "Francia",
    "Brasil",
    "Alemania"
  ],
  "correctAnswer": 0,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 115,
  "question": "¿Qué selección ganó el Mundial 2018?",
  "options": [
    "Croacia",
    "Francia",
    "Bélgica",
    "Inglaterra"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 116,
  "question": "¿Qué país organizó el primer Mundial de la historia?",
  "options": [
    "Brasil",
    "Uruguay",
    "Italia",
    "Argentina"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 117,
  "question": "¿En qué año se jugó el primer Mundial?",
  "options": [
    "1928",
    "1930",
    "1934",
    "1936"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 118,
  "question": "¿Qué selección ganó el primer Mundial?",
  "options": [
    "Argentina",
    "Uruguay",
    "Brasil",
    "Italia"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 119,
  "question": "¿Contra qué selección ganó Uruguay la final del Mundial 1930?",
  "options": [
    "Brasil",
    "Italia",
    "Argentina",
    "España"
  ],
  "correctAnswer": 2,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 120,
  "question": "¿Qué selección perdió la final del Mundial 1958 ante Brasil?",
  "options": [
    "Francia",
    "Suecia",
    "Alemania",
    "Uruguay"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 121,
  "question": "¿Qué selección perdió la final del Mundial 1962?",
  "options": [
    "Brasil",
    "Checoslovaquia",
    "Chile",
    "Alemania"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 122,
  "question": "¿Qué selección perdió la final del Mundial 1970?",
  "options": [
    "Italia",
    "Alemania",
    "Uruguay",
    "Brasil"
  ],
  "correctAnswer": 0,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 123,
  "question": "¿Qué selección perdió la final del Mundial 1982?",
  "options": [
    "Francia",
    "Alemania Occidental",
    "Brasil",
    "Polonia"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 124,
  "question": "¿Qué selección perdió la final del Mundial 1994?",
  "options": [
    "Italia",
    "Alemania",
    "Suecia",
    "Argentina"
  ],
  "correctAnswer": 0,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 125,
  "question": "¿Qué selección perdió la final del Mundial 2002?",
  "options": [
    "Turquía",
    "Corea del Sur",
    "Alemania",
    "Francia"
  ],
  "correctAnswer": 2,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 126,
  "question": "¿Qué selección perdió la final del Mundial 2006?",
  "options": [
    "Alemania",
    "Italia",
    "Francia",
    "Portugal"
  ],
  "correctAnswer": 2,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 127,
  "question": "¿Qué selección perdió la final del Mundial 2018?",
  "options": [
    "Bélgica",
    "Croacia",
    "Inglaterra",
    "Marruecos"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 128,
  "question": "¿Qué selección fue campeona mundial en 2010?",
  "options": [
    "Alemania",
    "España",
    "Países Bajos",
    "Uruguay"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 129,
  "question": "¿Qué selección fue subcampeona del Mundial 2010?",
  "options": [
    "Alemania",
    "Uruguay",
    "Países Bajos",
    "España"
  ],
  "correctAnswer": 2,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 130,
  "question": "¿Qué selección eliminó a Argentina en el Mundial 2010?",
  "options": [
    "Alemania",
    "España",
    "Brasil",
    "Países Bajos"
  ],
  "correctAnswer": 0,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 131,
  "question": "¿Qué selección eliminó a Argentina en el Mundial 2018?",
  "options": [
    "Francia",
    "Croacia",
    "Alemania",
    "Portugal"
  ],
  "correctAnswer": 0,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 132,
  "question": "¿Qué selección eliminó a Argentina en cuartos del Mundial 2006?",
  "options": [
    "Brasil",
    "Alemania",
    "Italia",
    "Francia"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 133,
  "question": "¿Qué selección eliminó a Argentina en cuartos del Mundial 2014?",
  "options": [
    "Bélgica",
    "Países Bajos",
    "Suiza",
    "Alemania"
  ],
  "correctAnswer": 0,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 134,
  "question": "¿Qué selección eliminó a Brasil en semifinales del Mundial 2014?",
  "options": [
    "Argentina",
    "Alemania",
    "Países Bajos",
    "Francia"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 135,
  "question": "¿Con qué resultado Alemania venció a Brasil en 2014?",
  "options": [
    "5-0",
    "6-1",
    "7-1",
    "7-0"
  ],
  "correctAnswer": 2,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 136,
  "question": "¿Qué país ganó el Mundial 1966?",
  "options": [
    "Inglaterra",
    "Alemania",
    "Brasil",
    "Italia"
  ],
  "correctAnswer": 0,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 137,
  "question": "¿Qué selección nunca ganó un Mundial?",
  "options": [
    "Francia",
    "Inglaterra",
    "Países Bajos",
    "España"
  ],
  "correctAnswer": 2,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 138,
  "question": "¿Qué país ganó el Mundial 2002?",
  "options": [
    "Alemania",
    "Brasil",
    "Francia",
    "Italia"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 139,
  "question": "¿Qué jugador argentino usó la 10 en Qatar 2022?",
  "options": [
    "Di María",
    "Messi",
    "Dybala",
    "Julián Álvarez"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 140,
  "question": "¿Qué selección fue tercera en el Mundial 2022?",
  "options": [
    "Marruecos",
    "Croacia",
    "Países Bajos",
    "Portugal"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 141,
  "question": "¿Qué selección terminó cuarta en el Mundial 2022?",
  "options": [
    "Francia",
    "Bélgica",
    "Marruecos",
    "Portugal"
  ],
  "correctAnswer": 2,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 142,
  "question": "¿Qué selección eliminó a Países Bajos en semifinales de 2014?",
  "options": [
    "Brasil",
    "Alemania",
    "Argentina",
    "Francia"
  ],
  "correctAnswer": 2,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 143,
  "question": "¿Qué arquero argentino atajó penales clave ante Países Bajos en 2014?",
  "options": [
    "Emiliano Martínez",
    "Romero",
    "Armani",
    "Caballero"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 144,
  "question": "¿Qué arquero argentino atajó penales clave ante Países Bajos en 2022?",
  "options": [
    "Sergio Romero",
    "Franco Armani",
    "Emiliano Martínez",
    "Rulli"
  ],
  "correctAnswer": 2,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 145,
  "question": "¿Qué selección eliminó a Portugal en cuartos del Mundial 2022?",
  "options": [
    "Francia",
    "Marruecos",
    "España",
    "Croacia"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 146,
  "question": "¿Qué selección eliminó a España en octavos del Mundial 2022?",
  "options": [
    "Marruecos",
    "Japón",
    "Croacia",
    "Suiza"
  ],
  "correctAnswer": 0,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 147,
  "question": "¿Qué selección eliminó a Japón en octavos del Mundial 2022?",
  "options": [
    "Croacia",
    "Brasil",
    "España",
    "Marruecos"
  ],
  "correctAnswer": 0,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 148,
  "question": "¿Qué selección eliminó a Brasil en el Mundial 2022?",
  "options": [
    "Croacia",
    "Argentina",
    "Francia",
    "Países Bajos"
  ],
  "correctAnswer": 0,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 149,
  "question": "¿Qué selección eliminó a Croacia en semifinales del Mundial 2022?",
  "options": [
    "Francia",
    "Argentina",
    "Brasil",
    "Marruecos"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 150,
  "question": "¿Qué selección eliminó a Marruecos en semifinales del Mundial 2022?",
  "options": [
    "Francia",
    "Argentina",
    "Croacia",
    "Portugal"
  ],
  "correctAnswer": 0,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 151,
  "question": "¿Qué selección fue tercera en el Mundial 2014?",
  "options": [
    "Brasil",
    "Países Bajos",
    "Alemania",
    "Argentina"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 152,
  "question": "¿Qué selección fue tercera en el Mundial 2018?",
  "options": [
    "Bélgica",
    "Inglaterra",
    "Croacia",
    "Francia"
  ],
  "correctAnswer": 0,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 153,
  "question": "¿Qué selección fue subcampeona del Mundial 1990?",
  "options": [
    "Italia",
    "Alemania Occidental",
    "Argentina",
    "Brasil"
  ],
  "correctAnswer": 2,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 154,
  "question": "¿Qué selección ganó el Mundial 1986?",
  "options": [
    "Alemania Occidental",
    "Brasil",
    "Argentina",
    "Italia"
  ],
  "correctAnswer": 2,
  "difficulty": "medium",
  "category": "Mundial"
},
  {
  "id": 155,
  "question": "¿Qué selección ganó el Mundial 1978?",
  "options": [
    "Países Bajos",
    "Argentina",
    "Brasil",
    "Alemania"
  ],
  "correctAnswer": 1,
  "difficulty": "medium",
  "category": "Mundial"
}
];

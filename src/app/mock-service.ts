import { Service } from './service';
  
export const SERVICES: Service[] = [
    {
        id: 1,
        name: "Assurance Sante",
        hp: 25,
        cp: 5,
        picture: "https://img.freepik.com/vecteurs-libre/illustration-concept-medecins_114360-1515.jpg?t=st=1666085970~exp=1666086570~hmac=cc4c7072637ef46fa73fdb72047a081eb2d826792ee60842e7993f4a7e0df787" ,
        types: ["Adultes", "Enfant"],
        created: new Date()
    },
    {
        id: 2,
        name: "Assurance Vie",
        hp: 28,
        cp: 6,
        picture: "https://img.freepik.com/vecteurs-libre/illustration-concept-vie-demarrage_114360-1068.jpg?w=826&t=st=1666108896~exp=1666109496~hmac=dad39283f3868c341b5fde95651395b2ac15c66afd7a82db18eac3ac4534aafd",
       
        types: ["Tous"],
        created: new Date()
    },
    {
        id: 3,
        name: "Assurance Auto",
        hp: 21,
        cp: 4,
        picture: "https://img.freepik.com/vecteurs-libre/illustration-concept-auto-ecole_114360-11310.jpg?w=1380&t=st=1666109639~exp=1666110239~hmac=d49272587e0b046c77982f53064d3fad7eca018c5e7a99799199e95fe3225269",
        types: ["Automobilistes"],
        created: new Date()
    },
    {
        id: 4,
        name: "Assurance Immobilier",
        hp: 16,
        cp: 2,
        picture: "https://img.freepik.com/vecteurs-libre/agent-immobilier-tenant-cles-debout-pres-du-batiment-isole-illustration-vectorielle-plane-femme-dessin-anime-maison-vendre_74855-8548.jpg?w=1380&t=st=1666109309~exp=1666109909~hmac=b67f8e53b07b32d0ae50268b5ca3db8580ae9d04234aceffa003c4691cbd07d5",
        types: ["Proprietaire", "Entreprise"],
        created: new Date()
    },
    {
        id: 5,
        name: "Assurance Etude",
        hp: 30,
        cp: 7,
        picture: "https://img.freepik.com/vecteurs-libre/homme-vendant-idee-pour-demarrage-ampoule-brillante-partenaires-recherche-investisseurs-illustration-bande-dessinee_74855-14448.jpg?w=996&t=st=1666109227~exp=1666109827~hmac=1aeec7035765268df5f7f2186d1a4a29fccdf9f752420b4508ec0595eea40a69",
        types: ["Eleve", "Etudiant"],
        created: new Date()
    },
    {
        id: 6,
        name: "Assurance Voyage",
        hp: 18,
        cp: 6,
        picture: "https://img.freepik.com/vecteurs-libre/illustration-concept-voyage_114360-1247.jpg?w=826&t=st=1666109338~exp=1666109938~hmac=01d0eb1fc059f6b5e7f0d7d02d52f0e51324b602f0de7009c3a1fdd4aca1fe73",
        types: ["Tous"],
        created: new Date()
    },
    {
        id: 7,
        name: "Assurance Retraite",
        hp: 14,
        cp: 5,
        picture: "https://img.freepik.com/vecteurs-libre/dessin-anime-personnes-agees-vie-heureuse-composition-couple-detente-plage-maillot-bain-illustration-chaises-longues_1284-65605.jpg?w=1060&t=st=1666109373~exp=1666109973~hmac=f34cc8eab01522aebd57af182bc8db6ad9592bb783b72a81a4dfdb5caf2873bd",
        types: ["Public", "Prive"],
        created: new Date()
    },
    {
        id: 8,
        name: "Assurance Moto",
        hp: 16,
        cp: 4,
        picture: "https://img.freepik.com/vecteurs-libre/illustration-concept-stationnement_114360-6874.jpg?w=826&t=st=1666109405~exp=1666110005~hmac=e378ffd8acb2362545a0317c51a9e2466b60a15b97d083083766511f8b417de2",
        types: ["Motocycliste"],
        created: new Date()
    },
    {
        id: 9,
        name: "Assurance Employe",
        hp: 21,
        cp: 7,
        picture: "https://img.freepik.com/vecteurs-libre/coach-parlant-devant-public-mentor-presentant-graphiques-rapports-reunion-employes-lors-formation-commerciale-seminaire-conference-illustration-vectorielle-pour-presentation-conference-education_74855-8294.jpg?w=1380&t=st=1666109456~exp=1666110056~hmac=af208ca691c241e7e4842aa80d4aca867c9588ec1d6fee46a6ed6c20a0d6a949",
        types: ["Personnel"],
        created: new Date()
    },
    {
        id: 10,
        name: "Assurance Sinistre",
        hp: 19,
        cp: 3,
        picture: "https://img.freepik.com/vecteurs-libre/illustration-concept-accident-voiture_114360-8000.jpg?w=1380&t=st=1666109497~exp=1666110097~hmac=b8aacf023347f6ce84a6947145aa29c318d7dbe4fc51abbf62f0eae409f53d1d",
        types: ["Tous"],
        created: new Date()
    },
    {
        id: 11,
        name: "Assurance Invalidite",
        hp: 25,
        cp: 5,
        picture: "https://img.freepik.com/vecteurs-libre/minuscules-personnes-debout-pres-illustration-plate-isolee-geste-interdit_74855-11132.jpg?w=1380&t=st=1666109572~exp=1666110172~hmac=d0380f7b6ac1255ae44bf07bbf830f4e7add02f024fe92e2f7d0677e6d80a239",
        types: ["Tous"],
        created: new Date()
    },
    {
        id: 12,
        name: "Assurance Collective",
        hp: 17,
        cp: 8,
        picture: "https://img.freepik.com/vecteurs-libre/grande-reunion-famille_74855-5220.jpg?w=1380&t=st=1666109602~exp=1666110202~hmac=a1f3b80dec5f5a3ebb82c1287d7827a283942e8fac308233dfc2710093cf07b6",
        types: ["Tous"],
        created: new Date()
    }
];

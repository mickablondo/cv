
export const CVData = {
    personalData: {
      name: 'Mickaël Blondeau',
      title: 'Tech Lead & Blockchain Developer',
      image: 'https://github.com/mickablondo/cv/assets/36310658/2cd167c2-2f82-43e5-8338-fd229ac9906a',
      contacts: [
        { type: 'email', value: 'mickael.blondeau@babel.coop' },
        { type: 'location', value: 'Niort, France' },
        { type: 'website', value: 'https://babel.coop' },
        { type: 'linkedin', value: 'https://www.linkedin.com/in/mickael-blondeau-952b4817/' },
        { type: 'github', value: 'https://github.com/mickablondo' }
      ]
    },
    sections: [
      {
        type: 'text',
        title: 'Profil',
        content: 'Je suis actuellement Entrepreneur-Salarié au sein de Babel.Coop. Diplômé d\'Alyra, l\'école Blockchain, je recherche principalement des projets web3.',
        icon: 'usertie'
      },
      {
        type: 'common-list',
        title: 'Education',
        icon: 'graduation',
        items: [
          {
            title: 'Blockchain Developer (certification RS5000)',
            authority: 'Alyra',
            authorityWebSite: 'https://www.alyra.fr/',
            rightSide: 'Mai à Juillet 2023'
          },
          {
            title: 'Master 2 Intelligence Artificielle et Décision',
            authority: 'Université Pierre et Marie Curie - Paris',
            authorityWebSite: 'https://sciences.sorbonne-universite.fr/sorbonne-universite-campus-pierre-et-marie-curie',
            rightSide: '2004 - 2005'
          }
        ]
      },
      {
        type: 'experiences-list',
        title: 'Experiences',
        icon: 'archive',
        items: [
          {
            title: 'Tech Lead',
            company: 'SMACL Assurances',
            description: 'Projets : CI/CD, Espace Intégration, Infrastructure As Code, Centralisation des logs. Encadrement d\'une équipe de 6 personnes.',
            companyWebSite: 'https://www.smacl.fr/',
            companyMeta: 'Niort',
            datesBetween: '2016 - 2023',
            descriptionTags: ['Java', 'Angular', 'Spring Boot', 'SQL', 'Git', 'Terraform', 'Graylog']
          },
          {
            title: 'Expert Java',
            company: 'SMACL Assurances',
            description: 'Développeur du socle technique.',
            companyWebSite: 'https://www.smacl.fr/',
            companyMeta: 'Niort',
            datesBetween: '2014 - 2016',
            descriptionTags: ['Java', 'Spring Boot', 'SVN']
          },
          {
            title: 'Concepteur Développeur',
            company: 'Pôle Emploi',
            description: 'Administration et maintenance de l’application intranet GECSI',
            companyWebSite: 'https://www.pole-emploi.fr/',
            companyMeta: 'Bordeaux',
            datesBetween: '2013 - 2014',
            descriptionTags: ['Java', 'JavaScript', 'SVN', 'SQL', 'Oracle']
          },
          {
            title: 'Concepteur Développeur',
            company: 'Cultura',
            description: 'Développement d’un logiciel de pilotage des performances fournisseurs, d’aide à la négociation et de suivi des achats.',
            companyWebSite: 'https://www.cultura.com/',
            companyMeta: 'Bordeaux',
            datesBetween: '2012 - 2013',
            descriptionTags: ['Java', 'Play', 'jQuery', 'SVN', 'SQL', 'SQL Server']
          },
          {
            title: 'Architecte logiciel junior',
            company: 'GALEC - Groupement d\'Achats E.LECLERC',
            description: 'Etude de la séparation du projet en différents modules.',
            companyWebSite: 'https://www.recrutement.leclerc/societes/galec/',
            companyMeta: 'Bordeaux',
            datesBetween: '2012 - 2012',
            descriptionTags: ['Java', 'Maven', 'SVN']
          },
          {
            title: 'Concepteur Développeur',
            company: 'Primobox',
            description: 'Développement de la plateforme de dématérialisation',
            companyWebSite: 'https://www.primobox.com/',
            companyMeta: 'Martillac',
            datesBetween: '2011 - 2012',
            descriptionTags: ['Java', 'Maven', 'Git', 'SQL Server']
          },
          {
            title: 'Concepteur Développeur',
            company: 'Odigo (anciennement Prosodie)',
            description: 'Développement sur de multiples projets : CCDS Cerbère, Pôle Emploi, Eastpak, RATP-IXXI, Bouygues Telecom EPG-TV, Fonds de solidarité, SACHEM',
            companyWebSite: 'https://www.odigo.com/',
            companyMeta: 'Rouen',
            datesBetween: '2007 - 2011',
            descriptionTags: ['Java', 'Struts', 'SVN', 'SQL Server', 'PostGresql']
          },
          {
            title: 'Concepteur Développeur',
            company: 'Orange Business (anciennement Orange Equant)',
            description: 'Mise en œuvre de flux EAI en s’appuyant sur une solution webMethods et un framework Equant.',
            companyWebSite: 'https://www.orange-business.com/',
            companyMeta: 'Rennes',
            datesBetween: '2006 - 2007',
            descriptionTags: ['Java', 'Web Services Flow Language', 'CVS', 'Oracle']
          },
          {
            title: 'Stagiaire Ingénieur études et développement',
            company: 'VIEL & Cie',
            description: 'Réalisation d’un produit de gestion automatisée d’un portefeuille boursier avec calculs de résultats et performances.',
            companyWebSite: 'https://www.viel.com/',
            companyMeta: 'Paris',
            datesBetween: '2005',
            descriptionTags: ['Javascript', 'PHP', 'Java J2ME', 'SQL Server']
          }
        ]
      },
      {
        type: 'projects-list',
        title: 'Projets',
        icon: 'tasks',
        groups: [
          {
            sectionHeader: 'Alyra',
            description: 'Formation blockchain',
            items: [
              { title: 'PadelConnect', projectUrl: 'https://github.com/mickablondo/PadelConnect', description: 'PadelConnect est une application décentralisée de gestion de tournois de Padel permettant de créer une communauté autour de ce sport en proposant notamment un réseau social décentralisé.' },
              { title: 'Voting-dApp', projectUrl: 'https://github.com/mickablondo/Voting-dApp', description: 'Application décentralisée de vote.' }
            ]
          }
        ]
      },
      /*{
        type: 'common-list',
        title: 'Languages',
        icon: 'language',
        items: [
          {
            authority: 'English',
            authorityMeta: 'Professional'
          },
          {
            authority: 'Spanish',
            authorityMeta: 'Beginner'
          }
        ]
      },*/
      {
        type: 'tag-list',
        title: 'Skills Proficiency',
        icon: 'rocket',
        items: ['Java', 'Solidity', 'React', 'Angular', 'SQL', 'Hardhat', 'Truffle']
      },
      {
        type: 'tag-list',
        title: 'Centres d\'intérêt',
        icon: 'cubes',
        items: ['Padel', 'Basket', 'Tennis', 'Cinéma', 'Lecture']
      }
    ]
  }
  
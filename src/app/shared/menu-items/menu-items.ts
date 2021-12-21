import { Injectable } from '@angular/core';


export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

if (localStorage.getItem('role') == 'ROLE_ADMIN') {

}

const MENUITEMS = [

  {
    label: 'Dashboard',
    main: [
      {
        state: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-bar-chart',
      }
    ],
  },
  {
    label: 'Qui Somme Nous',
    main: [
      {
        state: 'list-presentation',
        name: 'Qui Somme Nous',
        type: 'link',
        icon: 'ti-rss'
      },
      {
        state: 'add-presentation',
        name: 'Ajouter qui somme nous',
        type: 'link',
        icon: 'ti-rss',
      }
    ],
  },
  {
    label: 'Devenir Propriétaire',
    main: [
      {
        state: 'list-devprop',
        name: 'Devenir Propriétaire',
        type: 'link',
        icon: 'ti-bag'
      },
      {
        state: 'add-devenezpop',
        name: 'Ajouter informations',
        type: 'link',
        icon: 'ti-bag'
      },
    ],
  },
  {
    label: 'Projet',
    main: [
      {
        state: 'list-projet',
        name: 'Liste des projets',
        type: 'link',
        icon: 'ti-briefcase'
      },
      {
        state: 'add-projet',
        name: 'Ajouter un projet',
        type: 'link',
        icon: 'ti-briefcase',
      }
    ],
  },
  {
    label: 'Appartement',
    main: [
      {
        state: 'list-appartement',
        name: 'Liste des appartements',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'add-appartement',
        name: 'Ajouter un appartement',
        type: 'link',
        icon: 'ti-home',
      }
    ],
  },
  {
    label: 'Video',
    main: [
      {
        state: 'list-video',
        name: 'Liste des videos',
        type: 'link',
        icon: 'ti-video-clapper'
      },
      {
        state: 'add-video',
        name: 'Ajouter un video',
        type: 'link',
        icon: 'ti-video-clapper',
      }
    ],
  },
  {
    label: 'Actualités',
    main: [
      {
        state: 'list-actualites',
        name: 'Liste des actualités',
        type: 'link',
        icon: 'ti-rss'
      },
      {
        state: 'add-actualites',
        name: 'Ajouter une actualité',
        type: 'link',
        icon: 'ti-rss',
      }
    ],
  },
  {
    label: 'Message',
    main: [
      {
        state: 'list-message',
        name: 'Liste des messages',
        type: 'link',
        icon: 'ti-comment-alt'
      },
    ],
  },
  {
    label: 'Contact',
    main: [
      {
        state: 'list-contact',
        name: 'Contacts',
        type: 'link',
        icon: 'ti-receipt'
      },
      {
        state: 'add-contact',
        name: 'Ajouter un contact',
        type: 'link',
        icon: 'ti-receipt'
      }
    ],
  },
];
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const MENUITEMSADMIN = [

  {
    label: 'Dashboard',
    main: [
      {
        state: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-bar-chart',
      }
    ],
  },
  {
    label: 'Qui Somme Nous',
    main: [
      {
        state: 'list-presentation',
        name: 'Qui somme nous',
        type: 'link',
        icon: 'ti-rss'
      },
      {
        state: 'add-presentation',
        name: 'Ajouter qui somme nous',
        type: 'link',
        icon: 'ti-rss',
      }
    ],
  },
  {
    label: 'Devenir Propriétaire',
    main: [
      {
        state: 'list-devprop',
        name: 'Devenir Propriétaire',
        type: 'link',
        icon: 'ti-bag'
      },
      {
        state: 'add-devenezpop',
        name: 'Ajouter informations',
        type: 'link',
        icon: 'ti-bag'
      },
    ],
  },
  {
    label: 'Projet',
    main: [
      {
        state: 'list-projet',
        name: 'Liste des projets',
        type: 'link',
        icon: 'ti-briefcase'
      },
      {
        state: 'add-projet',
        name: 'Ajouter un projet',
        type: 'link',
        icon: 'ti-briefcase',
      }
    ],
  },
  {
    label: 'Appartement',
    main: [
      {
        state: 'list-appartement',
        name: 'Liste des appartements',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'add-appartement',
        name: 'Ajouter un appartement',
        type: 'link',
        icon: 'ti-home',
      }
    ],
  },
  {
    label: 'Video',
    main: [
      {
        state: 'list-video',
        name: 'Liste des videos',
        type: 'link',
        icon: 'ti-video-clapper'
      },
      {
        state: 'add-video',
        name: 'Ajouter un video',
        type: 'link',
        icon: 'ti-video-clapper',
      }
    ],
  },
  {
    label: 'Actualités',
    main: [
      {
        state: 'list-actualites',
        name: 'Liste des actualités',
        type: 'link',
        icon: 'ti-rss'
      },
      {
        state: 'add-actualites',
        name: 'Ajouter une actualité',
        type: 'link',
        icon: 'ti-rss',
      }
    ],
  },
  {
    label: 'Message',
    main: [
      {
        state: 'list-message',
        name: 'Liste des messages',
        type: 'link',
        icon: 'ti-comment-alt'
      },
    ],
  },
  {
    label: 'Contact',
    main: [
      {
        state: 'list-contact',
        name: 'Contacts',
        type: 'link',
        icon: 'ti-receipt'
      },
      {
        state: 'add-contact',
        name: 'Ajouter un contact',
        type: 'link',
        icon: 'ti-receipt'
      }
    ],
  },
  {
    label: 'Utilisateurs',
    main: [
      {
        state: 'list-users',
        name: 'Liste des utilisateurs',
        type: 'link',
        icon: 'ti-user'
      },
      {
        state: 'registration',
        name: 'Ajouter un utilisateur',
        type: 'link',
        icon: 'ti-user',
      }
    ],
  },

];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  getAllAdmin(): Menu[] {
    return MENUITEMSADMIN;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}

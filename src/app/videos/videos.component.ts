import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videoItems = [
    { videoTitle: "La Sopa Loca (Crazy Soup)",
      videoImage :  "https://img.youtube.com/vi/0GPAuEJwDrY/hqdefault.jpg",
      videoDescription:  ['This activity is designed in a way that every child can participate, according to his level of involvement. Do you think any of these children would ever forget what "sopa" means?',  
                                'They just absorbed lots of background information: utensils, imperative forms, size adjectives, food vocabulary, and, all along, the sound and inflection of the language.',
                                'This activity is conducted entirely in Spanish, which doesn\'t bother them in the least.'],
      videoUrl: "https://www.youtube.com/embed/0GPAuEJwDrY",
      showThumbnail : true
    },
    { videoTitle: "Un Tallarín (A Noodle)",
      videoImage : "https://img.youtube.com/vi/ZOeIvbPBPC8/hqdefault.jpg",
      videoDescription:  ['What better way to remember numbers in Spanish, than eating some sticky, cold noodles?',  
                                'The game: A random person (I start with myself) is chosen to hold a plate with tagliarini, and sing the song.',
                                'At the end of each stanza, the bearer chooses a "victim" who will have to eat the tagliarinis on the plate (or optionally pretend to).',
                                'This activity is conducted entirely in Spanish, which doesn\'t bother them in the least.'],
      videoUrl: "https://www.youtube.com/embed/ZOeIvbPBPC8",
      showThumbnail : true
    },
    { videoTitle: "Ricitos de Oro (Goldilocks)",
      videoImage : "https://img.youtube.com/vi/SAYf8Tog15U/hqdefault.jpg",
      videoDescription:  [ 'As we do at the beginning of each class, in this segment we review ways to express how we feel ("bien", "mal"), and introduce a new mood: "enojado" (angry).',
                           "We follow by issuing some movement commands they already know: \"correr\" (run), \"saltar\" (jump), but with the addition of how fast we perform the action: \"lento\" (slowly) or \"rápido\" (fast)",
                           "Finally, we commence with the story, introducing the characters.",
                           'Notice how, although the puppets are approximately the same size, the children already grasp the concept of "Papá Oso" being big ("grande"), but "Bebé Osito" being small ("pequeño").',
                           'They also know, intuitively, what size of soup plate corresponds to each one.'],
      videoUrl: "https://www.youtube.com/embed/SAYf8Tog15U",
      showThumbnail : true
    },
    { videoTitle: "Commands (part I)",
      videoImage : "https://img.youtube.com/vi/PsT82bLd8eE/hqdefault.jpg",
      videoDescription:  [ 'The method I am employing in this class is called "Total Physical Response" or TPR, and it consists, precisely, in getting the students to understand a concept and react in a physical manner. In this way, we communicate, even before they are capable of articulated speech.',
                           'These 22 month-olds first became comfortable with the general idea of following commands, using a "vuela, vuela" (fly, fly) playful introduction.',
                           'The commands used in this first class were: "¡Toca la puerta!" (knock on the door!) and "Siéntate!" (sit down!).',
                           'I think the most rewarding moment of the class, is when one of the kids, who was hesitant about climbing the chair, decides to go at it after watching the other one.'],
      videoUrl: "https://www.youtube.com/embed/PsT82bLd8eE",
      showThumbnail : true
    },
    { videoTitle: "Commands (part II)",
      videoImage : "https://img.youtube.com/vi/T6dn3lpA4Gs/hqdefault.jpg",
      videoDescription:  [ 'On the second class we use again "¡siéntate!", and we add "¡bebe el agua!" (drink the water!).',
                           'We even get them to fetch water for their parents. They "sharing" happens exactly as it is expected at their developmental stage: 22 month-olds don\'t really "share", unless it is evident that there is enough reminder of the "stuff" in question. So, when asked to take water to someone else, they take the water, walk over to the parent, drink themselves, double-check that there is water left, and only then hand over the cup.',
                           'They don\'t act like that because they hadn\'t understood the command, quite the opposite!',
                           'When we run out of water, asked if they want more, the children answer "Sí." and "Sí, please". That moment alone is worth the whole class ...'],
      videoUrl: "https://www.youtube.com/embed/T6dn3lpA4Gs",
      showThumbnail : true
    },
    { videoTitle: "Caperucita Roja (Little Red Riding Hood)",
      videoImage : "https://img.youtube.com/vi/2nXdwtEW2bk/hqdefault.jpg",
      videoDescription:  [ 'At the initial section where we describe moods, we introduced "tengo miedo" (I am scared) and movement verbs: "corre, camina" (run, walk), that later will link to the story.',
                           'When Caperucita picks flowers, we review some basic colors in a fluid, natural way.',
                           'A student volunteers to impersonate the wolf, who chases Caperucita, then chases Grandmother (who hides in the cupboard), and then he impersonates Grandmother.',
                           'At the climactic traditional exchange we introduce body parts: "qué ojos grandes, qué orejas grandes" (what big eyes, ears, etc). Most students, at first reluctanct to impersonate the wolf, ended up competing to volunteer!'],
      videoUrl: "https://www.youtube.com/embed/2nXdwtEW2bk",
      showThumbnail : true
    },
    { videoTitle: "¡Trae! (bring!)",
      videoImage : "https://img.youtube.com/vi/lnxitEucG9k/hqdefault.jpg",
      videoDescription:  [ 'The 4-year-olds in this activity are already familiar with vocabulary for common food items, because it had been presented to them by the story of Caperucita (Little Red Riding Hood), during which we had reviewed "what items Caperucita was carrying in her basket".',
                           'We practice naming those food items by creating a simple game situation: the items are placed in a basket, and the parents, in the opposite end of the room, ask their respective children to bring one particular item at a time. This keeps parents involved, too! ',
                           'The children also answer naturally to questions like: ¿Qué es? (What is it?) ¿Qué tenemos en la canasta? (What do we have in the basket?) ',
                           'The main command used here by the parents, is "Trae" (bring!). My only intervention is to hurry them on (¡Rápido, rápido!¡Corre!), to occasionally prod a shy student on, and, since they are so excited, to insist on them just taking one item at a time.',
                           'At the end of each round, I ask them to count how many items each brought, and they surprise me once again, counting up to numbers that I havent taught them!',
                           'This is a simple and useful activity that serves the purpose of fixing vocabulary, and that can be easily replayed at home.'],
      videoUrl: "https://www.youtube.com/embed/lnxitEucG9k",
      showThumbnail : true
    }     
  ]

  constructor() {}

  ngOnInit() {
  }

}

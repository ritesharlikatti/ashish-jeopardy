import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  questions: any[];
  isAnswer: boolean = true;
  mouseOvered: string = 'none';
  val: any;
  count: number = 0;
  selectedQuestion: any;
  constructor() {
    this.questions = [
      {
        id: 0,
        question: 'When was Ashish Born?',
        points: '10',
        answer: '24th October, 1993',
      },
      {
        id: 1,
        question: 'Favorite color',
        points: '20',
        answer: 'Dark blue',
      },
      {
        id: 2,
        question: "Color of Ashish's eyes",
        points: '30',
        answer: 'Brown',
      },
      {
        id: 3,
        question: "Ashish's Favorite footwear (Test Question 😁)",
        points: '20',
        answer: 'Uncle Chappals',
      },
      {
        id: 4,
        question: 'Favorite drink',
        points: '20',
        answer: 'Ginger Ale',
      },
      {
        id: 5,
        question: 'Engagement to Ria',
        points: '20',
        answer: '13th Feb, 2021',
      },
      {
        id: 6,
        question: 'College Ashish went to for HSC',
        points: '20',
        answer: 'Wadia College',
      },
      {
        id: 7,
        question: 'Favorite subject in school',
        points: '20',
        answer: 'Geography',
      },
      {
        id: 8,
        question: 'Time spent in Chennai',
        points: '30',
        answer: '3 months in 2014',
      },
      {
        id: 9,
        question: 'First paid job',
        points: '20',
        answer: 'Wipro Limited',
      },
      {
        id: 10,
        question: "Ashish's Worst Habit",
        points: '30',
        answer: 'Turning up late',
      },
      {
        id: 11,
        question: 'Favorite place to settle down other than Pune',
        points: '40',
        answer: 'Berlin, Germany',
      },
      {
        id: 12,
        question: 'First date with Ria',
        points: '40',
        answer: '15th Jan, 2021',
      },
      {
        id: 13,
        question: 'Favorite place for a holiday',
        points: '20',
        answer: 'Goa',
      },
      {
        id: 14,
        question: 'Most embarrassing moment',
        points: '30',
        answer: "Picked someone else's Masala Dosa",
      },
      {
        id: 15,
        question: 'Biggest Fear',
        points: '30',
        answer: 'Wasting / not using time well',
      },
      {
        id: 16,
        question: 'Alternate career path',
        points: '20',
        answer: 'Teacher / DJ',
      },
      {
        id: 17,
        question: 'Last movie Ashish watched in a theater',
        points: '30',
        answer: 'Padmavat',
      },
      {
        id: 18,
        question: 'If you could pick one thing to do for the entire day?',
        points: '40',
        answer: 'Just chill',
      },
      {
        id: 19,
        question: 'Favorite sport to watch/play',
        points: '30',
        answer: 'Lawn Tennis',
      },
      {
        id: 20,
        question: "Ashish's shoe size",
        points: '40',
        answer: '9',
      },
      {
        id: 21,
        question: 'Favorite mobile application',
        points: '30',
        answer: 'Google docs',
      },
      {
        id: 22,
        question: 'Designation at current company',
        points: '20',
        answer: 'Software Consultant in Micro Frontends',
      },
      {
        id: 23,
        question: 'Least favorite chore',
        points: '30',
        answer: 'Organizing wardrobe',
      },
      {
        id: 24,
        question:
          'If you had to choose one meal for the rest of your life, what would it be?',
        points: '30',
        answer: 'Mutton Biryani',
      },
      {
        id: 25,
        question: 'Celebrity Crush',
        points: '30',
        answer: 'Gal Gadot',
      },
      {
        id: 26,
        question: "Things you're most thankful for",
        points: '40',
        answer: 'God, His salvation, family and friends',
      },
      {
        id: 27,
        question: 'App you wished was banned',
        points: '30',
        answer: 'Facebook',
      },
      {
        id: 28,
        question: 'Artist you cannot stand',
        points: '40',
        answer: 'Dhinchak Pooja',
      },
      {
        id: 29,
        question: 'Superhero you most resemble',
        points: '40',
        answer: 'Cpt. Steve Rogers',
      },
      {
        id: 30,
        question: 'A movie that you would never be bored of watching',
        points: '30',
        answer: 'Welcome',
      },
      {
        id: 31,
        question: 'Favorite artist of all time',
        points: '30',
        answer: 'Martin Garrix',
      },
      {
        id: 32,
        question: 'Best advice someone has given you',
        points: '30',
        answer: 'Form your own opinion about people',
      },
      {
        id: 33,
        question: 'Favorite outfit',
        points: '30',
        answer: '2 Piece suit',
      },
      {
        id: 34,
        question: 'Animal/Insect you would remove from the earth',
        points: '30',
        answer: 'Mosquitoes',
      },
      {
        id: 35,
        question: 'An annoying habit you hate most',
        points: '30',
        answer: 'People burping loudly',
      },
      {
        id: 36,
        question: 'Which extreme sport would you participate in?',
        points: '30',
        answer: 'Sky diving',
      },
      {
        id: 37,
        question: 'What would you never forget while travelling?',
        points: '40',
        answer: 'Petty Cash',
      },
      {
        id: 38,
        question: 'What color would you want your home/room painted?',
        points: '40',
        answer: 'White',
      },
      {
        id: 39,
        question: 'Favorite TV show of all time',
        points: '30',
        answer: 'Castle',
      },
      {
        id: 40,
        question: "Most recent book you've read",
        points: '40',
        answer: "God's design for Marriage",
      },
      {
        id: 41,
        question: 'Least favorite clothing',
        points: '40',
        answer: 'Transparent Kurtas',
      },
      {
        id: 42,
        question: "Which feature of Ria's do you love most?",
        points: '50',
        answer: 'Hair',
      },
      {
        id: 43,
        question:
          "A show you want to watch but haven't gotten the time to watch yet",
        points: '40',
        answer: 'Stranger Things',
      },
      {
        id: 44,
        question: 'Food/Dish you can make best',
        points: '30',
        answer: 'Tea',
      },
      {
        id: 45,
        question: 'I am grossed out by..',
        points: '30',
        answer: 'People spitting on the road',
      },
      {
        id: 46,
        question: 'What Disney character would you be?',
        points: '30',
        answer: 'Hercules',
      },
      {
        id: 47,
        question: 'Song to sing in a Karaoke',
        points: '40',
        answer: 'When you say nothing at all',
      },
    ];
  }
  onView(event: any, quest: any) {
    // let index = this.questions.findIndex((q) => q.id == quest.id);
    // this.questions.splice(index, 1);

    this.count++;
    console.log(event, quest);
    this.selectedQuestion = quest.id;
    this.val = quest.val;
  }
  onDelete(quest: any) {
    let index = this.questions.findIndex((q) => q.id == quest.id);
    this.questions.splice(index, 1);
  }
}

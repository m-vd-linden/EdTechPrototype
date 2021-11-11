export class User {
    id: string = "";
    username: string = "";
    password: string = "";
    fullName: string = "";
    school: string = "";
    studentNumber: number = 0;
    isStudent: boolean = false;
    classroom: string = "";
  }

export class Feedback {
    id: string = "";
    course: string = "";
    reviewerId: string = "";
    date: Date = new Date();
    approval: boolean = false;
    rating: number = 0;
    studentId: string = "";
    q1: string = "";
    q2: string = "";
    q3: string = "";
}
export interface ITerm {
    id: string,
    term: string,
    acadyear: string
}

export interface ISchool {
  id: string,
  name: string
}

export interface ISubject {
  abbv: string,
  name: string,
  path: string
}

export interface IClass {
  id: string,
  name: string,
  topic: string,
  section: 20,
  instructor: string[],
  path: string,
  meeting_time: string[],
  overview_of_class: string
}
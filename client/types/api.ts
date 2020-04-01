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

export interface IPreviewClass {
  abbv: string,
  name: string,
  path: string
}

export interface IClass1 {
  id: string,
  name: string,
  topic: string,
  section: string,
  instructor: string[],
  path: string,
  meeting_time: string[],
  overview_of_class: string
}

export interface IClass2 {
  id: string,
  lmod: string,
  name: string,
  title: string,
  topic: string,
  class_mtg_info: {
    meet_t: string,
    meet_l: string
  }[],
  instructor?: string[],
  path?: string,
  meeting_time?: string[],
  descriptions?: {
    name: string,
    value: string
  }[],
  instructors?: {
    instructor_name: string,
    instructor_phone: string,
    instructor_addr: string
  }[],
  enrl_requirement?: string,
  class_attributes?: string

}
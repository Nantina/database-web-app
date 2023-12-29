export interface Case {
    case_id: string;
    location: string;
    time: string;
    description: string;
    is_open: number;
  }

  export interface Clue {
    clue_id: string;
    is_murder_weapon: number;
    date: string;
    place: string;
    description: string;
    Case_case_id: string;
    type: string;
  }

  export interface Policeman {
    policeman_id: string;
    name: string;
    gender: number;
    phone: string;
    police_station_id: string;
    specialty: string;
  }

  export interface Suspect {
    suspect_id: string;
    name: string;
    phone: string;
    gender: number;
    address_street: string;
    address_number: number;
    birth_date: string;
    Lawyer_lawyer_id: string;
    status: string;
  }

  export interface Victim {
    victim_id: string;
    first_name: string;
    last_name: string;
    gender: number;
    birth_date: string;
    death_date: string;
    description_of_death: string;
    nationality: string;
    Case_case_id: string;
    Medical_Examiner_medical_examiner_id: string;
    Lawyer_lawyer_id: string;
  }

  export interface Witness {
    witness_id: string;
    name: string;
    birth_date: string;
    gender: number;
    phone: string;
  }
  
import type { TeamButtonItem, TeamMemberTwo, TeamTabItem } from "./teamType";
import teamBtn1 from "../../assets/images/team/team-one-buttons-img-1-1.jpg";
import teamBtn2 from "../../assets/images/team/team-one-buttons-img-1-2.jpg";
import teamBtn3 from "../../assets/images/team/team-one-buttons-img-1-3.jpg";
import teamBtn4 from "../../assets/images/team/team-one-buttons-img-1-4.jpg";
import teamBtn5 from "../../assets/images/team/team-one-buttons-img-1-5.jpg";

import teamImg1 from "../../assets/images/team/team-one-1-1.jpg";
import teamImg2 from "../../assets/images/team/team-one-1-2.jpg";
import teamImg3 from "../../assets/images/team/team-one-1-3.jpg";
import teamImg4 from "../../assets/images/team/team-one-1-4.jpg";
import teamImg5 from "../../assets/images/team/team-one-1-5.jpg";

import team1 from "../../assets/images/team/team-2-1.jpg";
import team2 from "../../assets/images/team/team-2-2.jpg";
import team3 from "../../assets/images/team/team-2-3.jpg";
import team4 from "../../assets/images/team/team-2-4.jpg";

import teamthree1 from '../../assets/images/team/team-3-1.jpg';
import teamthree2 from '../../assets/images/team/team-3-2.jpg';
import teamthree3 from '../../assets/images/team/team-3-3.jpg';
import teamthree4 from '../../assets/images/team/team-3-4.jpg';
import teamthree5 from '../../assets/images/team/team-3-5.jpg';
import teamthree6 from '../../assets/images/team/team-3-6.jpg';
import teamthree7 from '../../assets/images/team/team-3-7.jpg';
import teamthree8 from '../../assets/images/team/team-3-8.jpg';


export const teamButtonData: TeamButtonItem[] = [
  {
    id: 1,
    tabId: "#team-1",
    experienceYears: 5,
    name: "Olivia Grace",
    role: "SR. Driver",
    image: teamBtn1, 
  },
  {
    id: 2,
    tabId: "#team-2",
    experienceYears: 8,
    name: "Olivia Smith",
    role: "Premium Driver",
    image: teamBtn2, 
  },
  {
    id: 3,
    tabId: "#team-3",
    experienceYears: 4,
    name: "James Olivia",
    role: "JR. Driver",
    image: teamBtn3, 
  },
  {
    id: 4,
    tabId: "#team-4",
    experienceYears: 7,
    name: "Jason Ray",
    role: "SR. Driver",
    image: teamBtn4, 
  },
  {
    id: 5,
    tabId: "#team-5",
    experienceYears: 3,
    name: "James Vince",
    role: "Customer Service Coordinator",
    image: teamBtn5, 
  },
];





export const teamTabData: TeamTabItem[] = [
  {
    id: 1,
    tabId: "team-1",
    image: teamImg1,  
    socials: [
      "icon-facebook",
      "icon-twitter",
      "icon-instagram-1",
      "icon-instagram",
    ],
  },
  {
    id: 2,
    tabId: "team-2",
    image: teamImg2, 
    socials: [
      "icon-facebook",
      "icon-twitter",
      "icon-instagram-1",
      "icon-instagram",
    ],
  },
  {
    id: 3,
    tabId: "team-3",
    image: teamImg3, 
    socials: [
      "icon-facebook",
      "icon-twitter",
      "icon-instagram-1",
      "icon-instagram",
    ],
  },
  {
    id: 4,
    tabId: "team-4",
    image: teamImg4, 
    socials: [
      "icon-facebook",
      "icon-twitter",
      "icon-instagram-1",
      "icon-instagram",
    ],
  },
  {
    id: 5,
    tabId: "team-5",
    image: teamImg5, 
    socials: [
      "icon-facebook",
      "icon-twitter",
      "icon-instagram-1",
      "icon-instagram",
    ],
  },
];



export const teamMembersTwo: TeamMemberTwo[] = [
    {
        id: 1,
        name: "Adam Smith",
        role: "SR. Driver",
        image: team1,
        link: "/inner/driver-details",
    },
    {
        id: 2,
        name: "Harbert Spin",
        role: "Premium Driver",
        image: team2,
        link: "/inner/driver-details",
    },
    {
        id: 3,
        name: "Robert Son",
        role: "JR. Driver",
        image: team3,
        link: "/inner/driver-details",
    },
    {
        id: 4,
        name: "Alisha Martin",
        role: "SR. Driver",
        image: team4,
        link: "/inner/driver-details",
    },
];





// Types
interface TeamMember {
    id: number;
    image: string;
    name: string;
    role: string;
}

// Data
export const teamData: TeamMember[] = [
    {
        id: 1,
        image: teamthree1,
        name: 'Jessica Brown',
        role: 'SR. Driver',
    },
    {
        id: 2,
        image: teamthree2,
        name: 'James Fuller',
        role: 'Premium Driver',
    },
    {
        id: 3,
        image: teamthree3,
        name: 'Jasmet Mangat',
        role: 'JR. Driver',
    },
    {
        id: 4,
        image: teamthree4,
        name: 'Tim Southe',
        role: 'SR. Driver',
    },
];
export const driversData: TeamMember[] = [
    {
        id: 1,
        image: teamthree1,
        name: 'Jessica Brown',
        role: 'SR. Driver',
    },
    {
        id: 2,
        image: teamthree2,
        name: 'James Fuller',
        role: 'Premium Driver',
    },
    {
        id: 3,
        image: teamthree3,
        name: 'Jasmet Mangat',
        role: 'JR. Driver',
    },
    {
        id: 4,
        image: teamthree4,
        name: 'Tim Southe',
        role: 'SR. Driver',
    },
    {
        id: 5,
        image: teamthree5,
        name: 'Jessica Brown',
        role: 'SR. Driver',
    },
    {
        id: 6,
        image: teamthree6,
        name: 'James Fuller',
        role: 'Premium Driver',
    },
    {
        id: 7,
        image: teamthree7,
        name: 'Jasmet Mangat',
        role: 'JR. Driver',
    },
    {
        id: 8,
        image: teamthree8,
        name: 'Tim Southe',
        role: 'SR. Driver',
    },
];












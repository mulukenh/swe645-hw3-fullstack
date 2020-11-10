import { ContactInfo } from './contact-info';

export class SurveyData {
    id: number;
    contactInfo: ContactInfo;
    date: string;
    likedAboutCampus: string[];
    interestsInCampus: string;
    livelyToRecomment: string;
    raffle: number;
    comments: string;
}
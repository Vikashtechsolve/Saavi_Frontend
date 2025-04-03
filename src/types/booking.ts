import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type DateRange = [Date | null, Date | null];

export type RatePlan = {
    id: string;
    name: string;
    code: string;
    icon: IconDefinition;
    description: string;
    price: number;
};

export type RoomType = {
    id: string;
    title: string;
    maxGuests: number;
    maxChildren: number;
    image: string;
    description: string;
    amenities: string[];
    ratePlans: RatePlan[];
    startingPrice: number;
};
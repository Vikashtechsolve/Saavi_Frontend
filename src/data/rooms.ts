
import { faBed, faCoffee,faUtensils } from "@fortawesome/free-solid-svg-icons";
import deluxRoom from "/assets/delux_room_img_1.jpg";
import suiteRoom from "/assets/suite_room_1.jpg";
import { RoomType } from "../types/booking";



export const rooms: RoomType[] = [
    {
        id: "standard",
        title: "STANDARD ROOM",
        maxGuests: 3,
        maxChildren: 1,
        image: deluxRoom,
        description:
            "Experience ultimate comfort in our deluxe room featuring plush beds and complimentary toiletries. This air-conditioned room includes a private bathroom...",
        amenities: ["Air Conditioning", "Private Bathroom", "TV"],
        ratePlans: [
            {
                id: "ep",
                name: "Room Only",
                code: "EP",
                icon: faBed,
                description: "Room only, no meals included",
                price: 2300,
            },
            {
                id: "cp",
                name: "Breakfast Included",
                code: "CP",
                icon: faCoffee,
                description: "Room with breakfast included",
                price: 2700,
            },
            {
                id: "map",
                name: "Breakfast and 1 Major Meal Included",
                code: "MAP",
                icon: faUtensils,
                description: "Room with breakfast included",
                price: 3300,
            },
        ],
        startingPrice: 2300,
    },
    {
        id: "Deluxe",
        title: "DELUXE ROOM",
        maxGuests: 3,
        maxChildren: 1,
        image: suiteRoom,
        description:
            "Indulge in ultimate comfort in our luxurious suite room featuring plush beds and complimentary toiletries. This air-conditioned suite includes a private bathroom wit...",
        amenities: ["Air Conditioning", "Private Bathroom", "TV", "Seating Area"],
        ratePlans: [
            {
                id: "ep",
                name: "Room Only",
                code: "EP",
                icon: faBed,
                description: "Room only, no meals included",
                price: 2500,
            },
            {
                id: "cp",
                name: "Breakfast Included",
                code: "CP",
                icon: faCoffee,
                description: "Room with breakfast included",
                price: 2900,
            },
            {
                id: "map",
                name: "Breakfast and 1 Major Meal Included",
                code: "MAP",
                icon: faUtensils,
                description: "Breakfast and 1 Major Meal Included",
                price: 3500,
            },
        ],
        startingPrice: 2500,
    },
    {
        id: "Presidential",
        title: "PRESIDENTIAL ROOM",
        maxGuests: 3,
        maxChildren: 1,
        image: suiteRoom,
        description:
            "Indulge in ultimate comfort in our luxurious suite room featuring plush beds and complimentary toiletries. This air-conditioned suite includes a private bathroom wit...",
        amenities: ["Air Conditioning", "Private Bathroom", "TV", "Seating Area"],
        ratePlans: [
            {
                id: "ep",
                name: "Room Only",
                code: "EP",
                icon: faBed,
                description: "Room only, no meals included",
                price: 3000,
            },
            {
                id: "cp",
                name: "Breakfast Included",
                code: "CP",
                icon: faCoffee,
                description: "Room with breakfast included",
                price: 3400,
            },
            {
                id: "map",
                name: "Breakfast and 1 Major Meal Included",
                code: "MAP",
                icon: faUtensils,
                description: "Breakfast and 1 Major Meal Included",
                price: 4000,
            },
        ],
        startingPrice: 3000,
    },
];
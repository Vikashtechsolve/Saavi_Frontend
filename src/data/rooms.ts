
import { faBed, faCoffee } from "@fortawesome/free-solid-svg-icons";
import deluxRoom from "/assets/delux_room_img_1.jpg";
import suiteRoom from "/assets/suite_room_1.jpg";
import { RoomType } from "../types/booking";

export const rooms: RoomType[] = [
    {
        id: "deluxe",
        title: "DELUXE ROOM",
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
                price: 3000,
            },
            {
                id: "cp",
                name: "Breakfast Included",
                code: "CP",
                icon: faCoffee,
                description: "Room with breakfast included",
                price: 3600,
            },
        ],
        startingPrice: 3000,
    },
    {
        id: "suite",
        title: "SUITE ROOM",
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
                price: 3500,
            },
            {
                id: "cp",
                name: "Breakfast Included",
                code: "CP",
                icon: faCoffee,
                description: "Room with breakfast included",
                price: 4100,
            },
        ],
        startingPrice: 3500,
    },
];
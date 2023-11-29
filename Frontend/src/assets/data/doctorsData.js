import docImg1 from "../images/docImg1.png";
import docImg2 from "../images/docImg2.png";
import docImg3 from "../images/docImg3.png";

// add more doctors data, one should be a genenral doctor and then pic three - 6 more from the services section to add

// An array of doctors details
const doctorsData = [
    {
        id: 1,
        name: "Dr. Richard Gray",
        specialty: "Cardiologist",
        rating: 4.8,
        totalRatings: 1013,
        imageUrl: docImg1,
        profileLink: "/Doctors/Cardiologist",
        consultationOptions: ['General Consultation', 'Electrocardiogram', 'Echocardiogram', 'General Consultation & Electrocardiogram'],
        consultationPrices: ['£200', '£50', '£250', '£300'],
        availableDates: ["Monday", "Wednesday", "Friday"],
        availableTimes: ["9:30 AM", "14:00 PM", "16:00 PM"],
        aboutText: "My approach is to work collaboratively with you to tailor treatment plans that fit your unique needs, ensuring that you receive the best possible outcomes. I believe in empowering my patients with knowledge about their conditions and treatment options. Together, we will strive for your optimal heart health, so you can live a full and active life.",
        education: [
            {
                degree: "MBBS Medicine",
                institution: "Kings College London",
                startDate: "28-09-1972",
                endDate: "19-05-1978"
            },
            {
                degree: "M.D. Medicine",
                institution: "University College London",
                startDate: "21-09-1981",
                endDate: "05-06-1985"
            }
        ],
        experience: [
            {
                position: "Cardiology Fellow",
                institution: "Royal Free Hospital, England",
                startDate: "28-09-1972",
                endDate: "19-05-1978"
            },
            {
                position: "Consultant Cardiologist",
                institution: "Gill Heart & Vascular Institute, England",
                startDate: "28-09-1985",
                endDate: "Present"
            }
        ]
    },
    {
        id: 2,
        name: "Dr. James Patterson",
        specialty: "Neurologist",
        rating: 4.7,
        totalRatings: 412,
        imageUrl: docImg2,
        profileLink: "/Doctors/Neurologist"
    },
    {
        id: 3,
        name: "Dr. Lisa Monroe",
        specialty: "Oncologist",
        rating: 4.6,
        totalRatings: 831,
        imageUrl: docImg3,
        profileLink: "/Doctors/Oncologist"


    },
];

export default doctorsData;

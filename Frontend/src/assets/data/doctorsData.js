// some of the about text for the doctors has been extended and/or enhanced using AI tools
// all doctor images have been licensed for free via adobe stock

import docImg1 from "../images/docImg1.png";
import docImg2 from "../images/docImg2.png";
import docImg3 from "../images/docImg3.png";
import docImg4 from "../images/docImg4.png";
import docImg5 from "../images/docImg5.png";
import docImg6 from "../images/docImg6.png";
import docImg7 from "../images/docImg7.png";
import docImg8 from "../images/docImg8.png";
import docImg9 from "../images/docImg9.png";

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
        profileLink: "/Doctors/Neurologist",
        consultationOptions: [
            'General Neurological Consultation', 
            'Nerve Conduction Study', 
            'EEG', 
            'Sleep Study'
        ],
        consultationPrices: ['£180', '£110', '£150', '£320'],
        availableDates: ["Tuesday", "Thursday", "Saturday"],
        availableTimes: ["10:00 AM", "13:00 PM", "15:00 PM"],
        aboutText: "With a patient-centered approach, I'm dedicated to understanding the intricacies of neurological health. I strive to provide my patients with comprehensive care and the latest neurological treatments. My goal is to deliver a treatment plan that improves your quality of life, informed by the latest research and tailored to your unique situation.",
        education: [
            {
                degree: "BSc Neuroscience",
                institution: "University of Bristol",
                startDate: "01-10-1980",
                endDate: "15-07-1984"
            },
            {
                degree: "Ph.D. Neurology",
                institution: "Imperial College London",
                startDate: "01-09-1985",
                endDate: "18-12-1989"
            }
        ],
        experience: [
            {
                position: "Neurology Resident",
                institution: "St. George's Hospital, England",
                startDate: "02-01-1990",
                endDate: "30-08-1994"
            },
            {
                position: "Consultant Neurologist",
                institution: "The National Hospital for Neurology and Neurosurgery, England",
                startDate: "01-09-1994",
                endDate: "Present"
            }
        ]
    },
    {
        id: 3,
        name: "Dr. Lisa Monroe",
        specialty: "Oncologist",
        rating: 4.6,
        totalRatings: 831,
        imageUrl: docImg3,
        profileLink: "/Doctors/Oncologist",
        consultationOptions: [
            'General Oncology Consultation', 
            'Chemotherapy Consultation', 
            'Radiation Therapy Consultation', 
            'Immunotherapy Consultation'
        ],
        consultationPrices: ['£220', '£300', '£350', '£400'],
        availableDates: ["Monday", "Wednesday", "Friday"],
        availableTimes: ["10:00 AM", "13:00 PM", "15:30 PM"],
        aboutText: "As an Oncologist, my mission is to provide compassionate care tailored to the individual needs of my patients. I am dedicated to offering the latest in cancer treatment and to supporting my patients and their families through every step of their journey. Together, we will work towards the best possible outcomes with resilience and hope.",
        education: [
            {
                degree: "MD Oncology",
                institution: "University of Manchester",
                startDate: "15-09-1985",
                endDate: "20-06-1990"
            },
            {
                degree: "Fellowship in Medical Oncology",
                institution: "The Royal Marsden Hospital, England",
                startDate: "01-10-1991",
                endDate: "30-09-1993"
            }
        ],
        experience: [
            {
                position: "Oncology Specialist",
                institution: "The Christie NHS Foundation Trust, England",
                startDate: "01-10-1993",
                endDate: "31-12-2000"
            },
            {
                position: "Lead Consultant Oncologist",
                institution: "London Cancer Centre, England",
                startDate: "02-01-2001",
                endDate: "Present"
            }
        ]
    },
    {
        id: 4,
        name: "Dr. Claudia Rivera",
        specialty: "Obstetrician",
        rating: 4.9,
        totalRatings: 299,
        imageUrl: docImg4,
        profileLink: "/Doctors/Obstetrician",
        consultationOptions: [
            'Prenatal Checkup', 
            'Labour Planning Consultation', 
            'Postnatal Follow-up', 
            'High-Risk Pregnancy Consultation'
        ],
        consultationPrices: ['£150', '£100', '£120', '£250'],
        availableDates: ["Tuesday", "Thursday", "Saturday"],
        availableTimes: ["10:00 AM", "12:00 PM", "14:00 PM"],
        aboutText: "As a dedicated obstetrician, I am committed to providing compassionate and comprehensive care throughout your pregnancy journey. My goal is to ensure a safe and healthy delivery for both mother and baby, while respecting the wishes and birth plan of each family. I am here to support you, answer your questions, and provide the best care possible during this exciting time.",
        education: [
            {
                degree: "MD Obstetrics & Gynaecology",
                institution: "University of Barcelona",
                startDate: "01-09-1990",
                endDate: "30-06-1995"
            },
            {
                degree: "Residency in Obstetrics & Gynaecology",
                institution: "Mount Sinai Hospital, USA",
                startDate: "01-07-1996",
                endDate: "30-06-2000"
            }
        ],
        experience: [
            {
                position: "Obstetrics & Gynaecology Specialist",
                institution: "City Hospital, USA",
                startDate: "01-07-2000",
                endDate: "31-12-2007"
            },
            {
                position: "Senior Consultant Obstetrician",
                institution: "The Women's Health Center, USA",
                startDate: "01-01-2008",
                endDate: "Present"
            }
        ]
    },
    {
        id: 5,
        name: "Dr. Ying Zhang",
        specialty: "Psychiatrist",
        rating: 4.3,
        totalRatings: 130,
        imageUrl: docImg5,
        profileLink: "/Doctors/Psychiatrist",
        consultationOptions: [
            'Initial Psychiatric Evaluation', 
            'Follow-Up Consultation', 
            'Cognitive Behavioral Therapy', 
            'Medication Management'
        ],
        consultationPrices: ['£190', '£140', '£110', '£150'],
        availableDates: ["Monday", "Wednesday", "Friday"],
        availableTimes: ["08:00 AM", "11:00 AM", "02:00 PM"],
        aboutText: "As a psychiatrist, I am deeply committed to understanding and treating the complexities of the mind. My approach is centered around a holistic view of mental health, integrating both medication management and therapy to achieve the best outcomes for my patients. I value open communication and build treatment plans based on individual needs to support mental and emotional well-being.",
        education: [
            {
                degree: "MBBS Medicine",
                institution: "Peking University Health Science Center",
                startDate: "01-09-1992",
                endDate: "30-07-1997"
            },
            {
                degree: "MD Psychiatry",
                institution: "Harvard Medical School, USA",
                startDate: "01-08-1998",
                endDate: "31-07-2002"
            }
        ],
        experience: [
            {
                position: "Psychiatry Resident",
                institution: "Massachusetts General Hospital, USA",
                startDate: "01-08-2002",
                endDate: "31-07-2006"
            },
            {
                position: "Consultant Psychiatrist",
                institution: "Boston Mental Health Clinic, USA",
                startDate: "01-08-2006",
                endDate: "Present"
            }
        ]
    },
    {
        id: 6,
        name: "Dr. Abid Uddin",
        specialty: "Dermatologist",
        rating: 4.4,
        totalRatings: 412,
        imageUrl: docImg6,
        profileLink: "/Doctors/Dermatologist",
        consultationOptions: [
            'General Dermatology Consultation', 
            'Acne Treatment', 
            'Skin Cancer Screening', 
            'Cosmetic Dermatology'
        ],
        consultationPrices: ['£150', '£120', '£200', '£250'],
        availableDates: ["Tuesday", "Thursday", "Saturday"],
        availableTimes: ["09:00 AM", "12:00 PM", "03:00 PM"],
        aboutText: "With a passion for skin health, I, Dr. Abid Uddin, offer a comprehensive approach to dermatology, combining advanced treatments with personalized care. Whether addressing common skin conditions, providing skin cancer screenings, or offering cosmetic services, my goal is to help you achieve the best possible skin health and confidence in your appearance.",
        education: [
            {
                degree: "MBBS Medicine",
                institution: "University of Dhaka",
                startDate: "01-01-1990",
                endDate: "31-12-1995"
            },
            {
                degree: "MD Dermatology",
                institution: "King's College London",
                startDate: "01-01-1997",
                endDate: "31-12-2001"
            }
        ],
        experience: [
            {
                position: "Dermatology Resident",
                institution: "St Thomas' Hospital, London",
                startDate: "01-01-2002",
                endDate: "31-12-2005"
            },
            {
                position: "Consultant Dermatologist",
                institution: "London Dermatology Centre",
                startDate: "01-01-2006",
                endDate: "Present"
            }
        ]
    },
    {
        id: 7,
        name: "Dr. John Okafor",
        specialty: "Orthopedist",
        rating: 4.6,
        totalRatings: 394,
        imageUrl: docImg7,
        profileLink: "/Doctors/Orthopedist",
        consultationOptions: [
            'General Orthopedic Consultation', 
            'Sports Injury Assessment', 
            'Arthritis Management', 
            'Orthopedic Surgery Consultation'
        ],
        consultationPrices: ['£160', '£130', '£120', '£300'],
        availableDates: ["Monday", "Wednesday", "Friday"],
        availableTimes: ["08:30 AM", "11:30 AM", "02:30 PM"],
        aboutText: "As an experienced orthopedist, I am committed to providing exceptional care and advanced treatments for a wide range of musculoskeletal issues. My approach focuses on understanding each patient's unique needs, whether it's managing chronic pain, treating sports injuries, or guiding through surgical options. My goal is to help patients regain mobility and enhance their quality of life.",
        education: [
            {
                degree: "MBChB Medicine and Surgery",
                institution: "University of Lagos",
                startDate: "01-09-1985",
                endDate: "31-08-1991"
            },
            {
                degree: "MS Orthopedic Surgery",
                institution: "Johns Hopkins University, USA",
                startDate: "01-09-1992",
                endDate: "31-08-1996"
            }
        ],
        experience: [
            {
                position: "Orthopedic Surgery Resident",
                institution: "Massachusetts General Hospital, USA",
                startDate: "01-09-1996",
                endDate: "30-08-2000"
            },
            {
                position: "Consultant Orthopedist",
                institution: "London Orthopedic Clinic",
                startDate: "01-09-2000",
                endDate: "Present"
            }
        ]
    },
    {
        id: 8,
        name: "Dr. Navreet Kaur",
        specialty: "General Practitioner",
        rating: 4.1,
        totalRatings: 1359,
        imageUrl: docImg8,
        profileLink: "/Doctors/GP",
        consultationOptions: [
            'Routine Health Check-up', 
            'Chronic Disease Management', 
            'Vaccinations', 
            'Lifestyle Advice'
        ],
        consultationPrices: ['£90', '£110', '£60', '£80'],
        availableDates: ["Tuesday", "Thursday", "Saturday"],
        availableTimes: ["09:00 AM", "12:00 PM", "03:00 PM"],
        aboutText: "I am Dr. Navreet Kaur, a dedicated General Practitioner, committed to providing comprehensive and continuous health care for individuals and families. My approach emphasizes preventive care, management of chronic conditions, and a holistic view of patient health. I strive to build lasting relationships with my patients, guiding them towards healthier lifestyles and overall well-being.",
        education: [
            {
                degree: "MBBS Medicine",
                institution: "All India Institute of Medical Sciences, New Delhi",
                startDate: "01-07-1990",
                endDate: "30-06-1995"
            },
            {
                degree: "MD General Medicine",
                institution: "King's College London",
                startDate: "01-09-1996",
                endDate: "31-08-1999"
            }
        ],
        experience: [
            {
                position: "Resident Physician",
                institution: "Apollo Hospital, New Delhi",
                startDate: "01-09-1999",
                endDate: "31-08-2002"
            },
            {
                position: "General Practitioner",
                institution: "London Medical Clinic",
                startDate: "01-09-2002",
                endDate: "Present"
            }
        ]
    },
    {
        id: 9,
        name: "Dr. Alex Johnson",
        specialty: "Plastic Surgeon",
        rating: 4.9,
        totalRatings: 57,
        imageUrl: docImg9,
        profileLink: "/Doctors/PlasticSurgeon",
        consultationOptions: [
            'Cosmetic Surgery Consultation', 
            'Reconstructive Surgery Consultation', 
            'Non-Surgical Cosmetic Procedures', 
            'Post-Surgery Follow-up'
        ],
        consultationPrices: ['£250', '£200', '£150', '£100'],
        availableDates: ["Monday", "Wednesday", "Friday"],
        availableTimes: ["10:00 AM", "01:00 PM", "04:00 PM"],
        aboutText: "As an accomplished plastic surgeon, I am dedicated to helping my patients achieve their desired aesthetic goals with the highest standards of care and precision. I specialize in both cosmetic and reconstructive surgery, providing tailored solutions that meet the unique needs and expectations of each patient. My commitment is to ensure safety, comfort, and satisfaction through every step of the surgical journey.",
        education: [
            {
                degree: "MBChB Medicine",
                institution: "University of Edinburgh",
                startDate: "01-09-1988",
                endDate: "31-08-1993"
            },
            {
                degree: "MD Plastic Surgery",
                institution: "Harvard Medical School, USA",
                startDate: "01-09-1994",
                endDate: "31-08-1998"
            }
        ],
        experience: [
            {
                position: "Plastic Surgery Resident",
                institution: "Mayo Clinic, USA",
                startDate: "01-09-1998",
                endDate: "30-08-2002"
            },
            {
                position: "Consultant Plastic Surgeon",
                institution: "Private Practice, London",
                startDate: "01-09-2002",
                endDate: "Present"
            }
        ]
    }    
];

export default doctorsData;

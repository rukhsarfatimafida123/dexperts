// Visa data with complete information
const visaData = {
  /* ================= UK ================= */
  "uk-short-term-study": {
    id: "uk-short-term-study",
    title: "Short Term Study Visa",
    country: "UK",
    countryId: "uk",
    flag: "🇬🇧",
    description: "A short-term study visa allows you to enroll in courses in the UK lasting from 6 to 11 months. It's ideal for students taking short academic programs or intensive English language courses.",
    fullDescription: "Experience the UK's rich educational heritage with our Short Term Study Visa. This visa is perfect for students who want to enhance their English language skills or take short academic programs. You can study for up to 11 months and even work part-time during your studies. We guide you through the entire application process, from document preparation to interview coaching.",
    requirements: [
      "Valid passport with at least 6 months validity",
      "Confirmation of Acceptance for Studies (CAS) from a licensed sponsor",
      "Proof of sufficient funds to cover course fees and living expenses",
      "English language proficiency evidence",
      "Tuberculosis test results (if applicable)"
    ],
    benefits: [
      "Study for up to 11 months",
      "Work part-time during studies",
      "Extension possible in some cases",
      "Pathway to longer-term visas"
    ],
    process: [
      "Initial consultation and eligibility assessment",
      "Document collection and verification",
      "Application form completion",
      "Biometrics appointment booking",
      "Application submission and tracking"
    ],
    processingTime: "3-4 weeks",
    fee: "£348"
  },

  "uk-sponsorship": {
    id: "uk-sponsorship",
    title: "UK Visa Sponsorship",
    country: "UK",
    countryId: "uk",
    flag: "🇬🇧",
    description: "Obtain a UK Visa Sponsorship Licence. This licence allows you to sponsor foreign workers, enabling them to apply for a Skilled Worker Visa.",
    fullDescription: "Our UK Visa Sponsorship service helps businesses obtain a Sponsor Licence to hire skilled workers from outside the UK. We provide comprehensive guidance through the application process, ensuring all compliance requirements are met. Once licensed, you can sponsor foreign workers for Skilled Worker, Intra-Company Transfer, and other work visas.",
    requirements: [
      "Business registered in the UK",
      "Genuine vacancy that meets skill level requirements",
      "Ability to pay the relevant salary thresholds",
      "No unspent criminal convictions for key personnel",
      "Compliance with UK employment laws"
    ],
    benefits: [
      "Access to global talent pool",
      "Fill skills gaps in your workforce",
      "Diverse and skilled team",
      "Long-term business growth"
    ],
    process: [
      "Eligibility assessment",
      "Documentation preparation",
      "Application submission to UKVI",
      "Compliance training for staff",
      "Post-licence support"
    ],
    processingTime: "8-12 weeks",
    fee: "£1,476 (small sponsor) / £1,476 (medium/large)"
  },

  "uk-student": {
    id: "uk-student",
    title: "Student Visa",
    country: "UK",
    countryId: "uk",
    flag: "🇬🇧",
    description: "Designed for international students aiming to pursue higher education in the UK for courses longer than 6 months.",
    fullDescription: "Our Student Visa service helps international students secure visas for undergraduate, postgraduate, and doctoral programs at UK universities. We assist with every step, from choosing the right course to preparing for your visa interview. The Student Visa (formerly Tier 4) allows you to work part-time during term and full-time during holidays.",
    requirements: [
      "Confirmation of Acceptance for Studies (CAS)",
      "Proof of funds for tuition and living costs",
      "Valid passport",
      "English language proficiency (IELTS/TOEFL)",
      "ATAS certificate (if required)"
    ],
    benefits: [
      "Work part-time during studies",
      "Bring dependents (for postgraduate courses)",
      "Graduate Route available after studies",
      "Access to NHS healthcare"
    ],
    process: [
      "University admission guidance",
      "CAS verification",
      "Financial document preparation",
      "Visa application submission",
      "Biometrics and interview preparation"
    ],
    processingTime: "3 weeks",
    fee: "£490"
  },

  "uk-skilled": {
    id: "uk-skilled",
    title: "Skilled Worker Visa",
    country: "UK",
    countryId: "uk",
    flag: "🇬🇧",
    description: "For individuals with a job offer in the UK in a qualifying skilled occupation.",
    fullDescription: "The Skilled Worker Visa allows professionals to work in the UK for an approved employer. This visa has replaced the Tier 2 (General) work visa and offers a flexible route to permanent settlement. We help both employees and employers navigate the sponsorship process, ensuring all requirements are met.",
    requirements: [
      "Job offer from a licensed sponsor",
      "Job at required skill level (RQF 3 or above)",
      "Salary meeting minimum thresholds",
      "English language proficiency",
      "Maintenance funds"
    ],
    benefits: [
      "Live and work in the UK",
      "Bring dependents",
      "Path to settlement (ILR) after 5 years",
      "Change employers with new sponsorship"
    ],
    process: [
      "Job offer confirmation",
      "Certificate of Sponsorship (CoS) issuance",
      "Document preparation",
      "Application submission",
      "Biometrics and decision"
    ],
    processingTime: "3-8 weeks",
    fee: "£625 to £1,423 (depending on circumstances)"
  },

  "uk-marriage": {
    id: "uk-marriage",
    title: "Marriage/Partner Visa",
    country: "UK",
    countryId: "uk",
    flag: "🇬🇧",
    description: "For those planning to join their partner or spouse in the UK, facilitating long-term residence based on your relationship status.",
    fullDescription: "Our Marriage/Partner Visa service helps couples reunite in the UK. Whether you are married, in a civil partnership, or in a long-term relationship, we guide you through the application process. This visa leads to permanent residency and eventual British citizenship for eligible applicants.",
    requirements: [
      "Genuine and subsisting relationship",
      "Meeting the financial requirement (£18,600/year)",
      "Adequate accommodation",
      "English language proficiency (A1 level)",
      "Proof of meeting each other"
    ],
    benefits: [
      "Live together in the UK",
      "Work without restrictions",
      "Access to public funds",
      "Path to settlement and citizenship"
    ],
    process: [
      "Relationship evidence collection",
      "Financial document preparation",
      "Accommodation assessment",
      "Online application",
      "Biometrics and decision"
    ],
    processingTime: "8-12 weeks",
    fee: "£1,538"
  },

  "uk-visitor": {
    id: "uk-visitor",
    title: "Tourism/Visitor Visa",
    country: "UK",
    countryId: "uk",
    flag: "🇬🇧",
    description: "Visit the UK for leisure, tourism, or family visits with a visitor visa, allowing stays of up to 6 months.",
    fullDescription: "Our Visitor Visa service helps you explore the UK's rich history and culture. Whether for tourism, visiting family, or short business trips, we ensure your application is complete and compelling. The Standard Visitor Visa allows multiple entries during its validity period.",
    requirements: [
      "Valid passport",
      "Proof of sufficient funds",
      "Travel itinerary",
      "Accommodation details",
      "Ties to home country"
    ],
    benefits: [
      "Visit for up to 6 months",
      "Multiple entries possible",
      "Can study for up to 30 days",
      "Participate in business activities"
    ],
    process: [
      "Application form completion",
      "Document compilation",
      "Biometrics appointment",
      "Application submission",
      "Passport return with decision"
    ],
    processingTime: "3 weeks",
    fee: "£115"
  },

  /* ================= CANADA ================= */
  "canada-student": {
    id: "canada-student",
    title: "Student Visa",
    country: "Canada",
    countryId: "canada",
    flag: "🇨🇦",
    description: "For international students aiming to study in Canada, covering a range of educational institutions.",
    fullDescription: "Our Canada Student Visa service helps you pursue world-class education in Canada. We assist with everything from choosing Designated Learning Institutions (DLIs) to preparing your study permit application. Canada offers excellent post-graduation work opportunities and a clear path to permanent residency.",
    requirements: [
      "Acceptance letter from DLI",
      "Proof of funds (tuition + living expenses)",
      "Valid passport",
      "Immigration medical exam",
      "Biometrics"
    ],
    benefits: [
      "Work part-time during studies (20 hours/week)",
      "Post-Graduation Work Permit available",
      "Path to permanent residency",
      "Healthcare coverage in most provinces"
    ],
    process: [
      "University/college selection",
      "Admission application",
      "Study permit application",
      "Biometrics and medical exam",
      "Arrival and study permit activation"
    ],
    processingTime: "8-12 weeks",
    fee: "CAD $150"
  },

  "canada-work": {
    id: "canada-work",
    title: "Worker Visa",
    country: "Canada",
    countryId: "canada",
    flag: "🇨🇦",
    description: "For individuals with a job offer in Canada in a qualifying skilled occupation.",
    fullDescription: "Our Canada Worker Visa service helps skilled professionals secure work permits to contribute to Canada's growing economy. Through programs like the Temporary Foreign Worker Program and International Mobility Program, we guide employers and employees through the process. Many work permits lead to permanent residency through Express Entry.",
    requirements: [
      "Job offer from Canadian employer",
      "Labour Market Impact Assessment (LMIA) or LMIA-exempt offer",
      "Qualifications and experience",
      "Language proficiency",
      "Medical exam"
    ],
    benefits: [
      "Live and work in Canada",
      "Bring family members",
      "Access to healthcare",
      "Path to permanent residency"
    ],
    process: [
      "Job search and offer",
      "LMIA processing (if required)",
      "Work permit application",
      "Biometrics and medical",
      "Arrival and work permit issuance"
    ],
    processingTime: "12-16 weeks",
    fee: "CAD $155"
  },

  "canada-pr": {
    id: "canada-pr",
    title: "Permanent Residency",
    country: "Canada",
    countryId: "canada",
    flag: "🇨🇦",
    description: "Through Express Entry and Provincial Nominee Program (PNP), live and work in Canada permanently.",
    fullDescription: "Our Canada PR service helps you achieve permanent residency through Express Entry, Provincial Nominee Programs, or other economic streams. We assess your eligibility, prepare your profile, and guide you through every step. Once you have PR, you can live, work, and study anywhere in Canada and eventually apply for citizenship.",
    requirements: [
      "Eligibility under Express Entry (FSW, CEC, FST)",
      "Provincial nomination (if applicable)",
      "Language test results",
      "Educational Credential Assessment (ECA)",
      "Sufficient settlement funds"
    ],
    benefits: [
      "Live, work, study anywhere in Canada",
      "Access to social benefits",
      "Healthcare coverage",
      "Path to citizenship"
    ],
    process: [
      "Eligibility assessment",
      "Language test and ECA",
      "Express Entry profile creation",
      "Invitation to Apply (ITA) receipt",
      "PR application and submission"
    ],
    processingTime: "6-12 months",
    fee: "CAD $1,365"
  },

  "canada-visitor": {
    id: "canada-visitor",
    title: "Visitor Visa",
    country: "Canada",
    countryId: "canada",
    flag: "🇨🇦",
    description: "Visit Canada for leisure, tourism, or family visits with a visitor visa.",
    fullDescription: "Our Canada Visitor Visa service helps you explore Canada's natural beauty and vibrant cities. The Temporary Resident Visa (TRV) allows for short-term stays and can be issued for single or multiple entries. We ensure your application demonstrates strong ties to your home country for the best chance of approval.",
    requirements: [
      "Valid passport",
      "Proof of sufficient funds",
      "Travel itinerary",
      "Accommodation details",
      "Ties to home country"
    ],
    benefits: [
      "Visit for up to 6 months",
      "Multiple entries possible",
      "Apply for extension while in Canada",
      "Can apply for study or work permits from within (rare)"
    ],
    process: [
      "Application form completion",
      "Document compilation",
      "Biometrics appointment",
      "Application submission",
      "Passport with visa return"
    ],
    processingTime: "14-30 days",
    fee: "CAD $100"
  },

  /* ================= USA ================= */
  "usa-visitor": {
    id: "usa-visitor",
    title: "Visitor Visa",
    country: "USA",
    countryId: "usa",
    flag: "🇺🇸",
    description: "Visit the United States for tourism, family visits, or short business trips with a visitor visa.",
    fullDescription: "Our USA Visitor Visa service helps you experience America's diverse attractions. The B-1/B-2 Visitor Visa is for temporary visitors for business (B-1) or pleasure (B-2). We guide you through the DS-160 form, document preparation, and visa interview to ensure the best chance of approval. This visa typically allows stays of up to 6 months per entry.",
    requirements: [
      "Valid passport",
      "DS-160 confirmation page",
      "Application fee payment receipt",
      "Photo meeting specifications",
      "Proof of strong ties to home country",
      "Travel itinerary (recommended)"
    ],
    benefits: [
      "Visit for tourism, business, or medical treatment",
      "Stay up to 6 months per entry",
      "Multiple entries during 10-year validity",
      "Can study short courses"
    ],
    process: [
      "DS-160 form completion",
      "Fee payment",
      "Interview appointment scheduling",
      "Document preparation",
      "Consular interview",
      "Visa issuance"
    ],
    processingTime: "3-5 weeks (interview wait times vary)",
    fee: "$185"
  },

  "usa-student": {
    id: "usa-student",
    title: "Student Visa",
    country: "USA",
    countryId: "usa",
    flag: "🇺🇸",
    description: "Pursue your education in the USA with a student visa, covering various educational levels.",
    fullDescription: "Our USA Student Visa service helps you achieve your American dream of studying in the United States. The F-1 visa is for academic studies, while M-1 is for vocational studies. We assist with SEVIS registration, I-20 form processing, and interview preparation. Studying in the USA offers unparalleled academic opportunities and cultural experiences.",
    requirements: [
      "SEVIS I-20 form from SEVP-approved school",
      "SEVIS fee payment receipt",
      "Proof of financial support",
      "Valid passport",
      "DS-160 confirmation",
      "Academic preparation evidence",
      "English proficiency"
    ],
    benefits: [
      "Study at world-renowned institutions",
      "Work on-campus",
      "Optional Practical Training (OPT) after studies",
      "Curricular Practical Training (CPT) during studies",
      "Path to work visas"
    ],
    process: [
      "University/school admission",
      "I-20 issuance",
      "SEVIS fee payment",
      "DS-160 completion",
      "Visa interview",
      "Arrival and SEVIS check-in"
    ],
    processingTime: "2-4 weeks (after interview)",
    fee: "$510 (including SEVIS fee)"
  },

  "usa-citizenship": {
    id: "usa-citizenship",
    title: "Citizenship Pathway",
    country: "USA",
    countryId: "usa",
    flag: "🇺🇸",
    description: "Gain permanent residency in USA, allowing you to live, work, and study indefinitely.",
    fullDescription: "Our USA Citizenship service guides you through the naturalization process to become a US citizen. To apply, you must first be a Lawful Permanent Resident (Green Card holder) for a certain period. We help with Form N-400, document preparation, and interview coaching. US citizenship offers the right to vote, a US passport, and the ability to sponsor family members.",
    requirements: [
      "Green Card holder for 3-5 years",
      "Continuous residence in US",
      "Physical presence requirements met",
      "Good moral character",
      "English and civics knowledge",
      "Attachment to US Constitution"
    ],
    benefits: [
      "Vote in federal elections",
      "US passport (travel to 180+ countries visa-free)",
      "Sponsor relatives for Green Cards",
      "Run for public office",
      "Federal government jobs",
      "Never face deportation"
    ],
    process: [
      "Eligibility assessment",
      "Form N-400 completion",
      "Document compilation",
      "Biometrics appointment",
      "Interview and test",
      "Oath ceremony"
    ],
    processingTime: "8-14 months",
    fee: "$760"
  },

  /* ================= AUSTRALIA ================= */
  "aus-student": {
    id: "aus-student",
    title: "Student Visa",
    country: "Australia",
    countryId: "australia",
    flag: "🇦🇺",
    description: "For international students who wish to pursue their studies in Australia.",
    fullDescription: "Our Australia Student Visa service helps you access Australia's world-class education system. The Student Visa (subclass 500) allows you to study full-time in a registered course, work part-time, and bring family members. Australia offers excellent post-study work opportunities and a clear path to permanent residency.",
    requirements: [
      "Confirmation of Enrolment (CoE)",
      "Genuine Temporary Entrant (GTE) statement",
      "Proof of funds",
      "Overseas Student Health Cover (OSHC)",
      "English language proficiency",
      "Health and character requirements"
    ],
    benefits: [
      "Work part-time (48 hours/fortnight)",
      "Post-Study Work Visa available",
      "Bring family members",
      "Path to permanent residency"
    ],
    process: [
      "Course selection and application",
      "CoE receipt",
      "GTE statement preparation",
      "Financial documentation",
      "Visa application submission"
    ],
    processingTime: "4-8 weeks",
    fee: "AUD $710"
  },

  "aus-pr": {
    id: "aus-pr",
    title: "Permanent Residency",
    country: "Australia",
    countryId: "australia",
    flag: "🇦🇺",
    description: "Gain permanent residency in Australia, allowing you to live, work, and study indefinitely.",
    fullDescription: "Our Australia PR service guides you through skilled migration pathways including the General Skilled Migration (GSM) program. Through points-tested visas (subclass 189, 190, 491), you can achieve permanent residency based on your skills, age, English ability, and work experience. Once you have PR, you can live anywhere in Australia and eventually apply for citizenship.",
    requirements: [
      "Occupation on skilled occupation list",
      "Positive skills assessment",
      "Competent English (IELTS 6.0 minimum)",
      "Points test score (minimum 65)",
      "Age under 45",
      "State nomination (for subclass 190/491)"
    ],
    benefits: [
      "Live, work, study anywhere in Australia",
      "Access to Medicare",
      "Sponsor eligible relatives",
      "Path to citizenship after 4 years",
      "Travel to and from Australia freely"
    ],
    process: [
      "Skills assessment",
      "English language test",
      "Expression of Interest (EOI) submission",
      "Invitation to Apply (ITA)",
      "Visa application and grant"
    ],
    processingTime: "8-14 months",
    fee: "AUD $4,240"
  },

  "aus-visitor": {
    id: "aus-visitor",
    title: "Visitor Visa",
    country: "Australia",
    countryId: "australia",
    flag: "🇦🇺",
    description: "Travel to Australia for leisure, tourism, or family visits with a visitor visa.",
    fullDescription: "Our Australia Visitor Visa service helps you explore the Land Down Under. The Visitor Visa (subclass 600) allows tourist activities, visiting family, or short business visits. We guide you through the application process, ensuring all requirements are met for a successful outcome.",
    requirements: [
      "Valid passport",
      "Genuine visitor intentions",
      "Proof of sufficient funds",
      "Health insurance (recommended)",
      "Ties to home country",
      "Health and character requirements"
    ],
    benefits: [
      "Stay up to 3, 6, or 12 months",
      "Multiple or single entry",
      "Can study for up to 3 months",
      "Business visitor activities allowed"
    ],
    process: [
      "Online application",
      "Document upload",
      "Biometrics (if required)",
      "Health examination (if required)",
      "Visa grant notification"
    ],
    processingTime: "20-35 days",
    fee: "AUD $190"
  },

  /* ================= EUROPE ================= */
  "eu-visitor": {
    id: "eu-visitor",
    title: "Schengen Visitor Visa",
    country: "Europe",
    countryId: "europe",
    flag: "🇪🇺",
    description: "Visit Europe for tourism, family visits, or short business trips with a visitor visa.",
    fullDescription: "Our Schengen Visitor Visa service helps you explore Europe's rich cultural heritage. The Schengen Visa allows travel to 27 European countries with a single visa, for stays up to 90 days within any 180-day period. We guide you through the application process, ensuring you visit the correct embassy and submit complete documentation.",
    requirements: [
      "Valid passport",
      "Completed visa application form",
      "Travel medical insurance",
      "Flight itinerary",
      "Accommodation proof",
      "Proof of sufficient funds",
      "Employment/leave proof"
    ],
    benefits: [
      "Travel to 27 Schengen countries",
      "Stay up to 90 days in 180-day period",
      "Multiple entries possible",
      "Experience diverse cultures"
    ],
    process: [
      "Determine main destination",
      "Complete application form",
      "Book appointments (varies by country)",
      "Submit biometrics",
      "Attend interview (if required)",
      "Passport collection"
    ],
    processingTime: "15-30 days",
    fee: "€90"
  },

  "eu-student": {
    id: "eu-student",
    title: "Student Visa",
    country: "Europe",
    countryId: "europe",
    flag: "🇪🇺",
    description: "For international students who wish to pursue their studies in Europe.",
    fullDescription: "Our Europe Student Visa service helps you access high-quality education across European universities. Requirements vary by country, but generally, you need admission to a recognized institution, proof of funds, and health insurance. Many European countries offer affordable tuition and excellent post-study work opportunities.",
    requirements: [
      "University acceptance letter",
      "Proof of sufficient funds",
      "Valid passport",
      "Health insurance",
      "Accommodation proof",
      "Language proficiency (varies)"
    ],
    benefits: [
      "High-quality education",
      "Affordable tuition in many countries",
      "Work part-time during studies",
      "Post-study work visas available",
      "Travel within Schengen area"
    ],
    process: [
      "University selection and application",
      "Visa/residence permit application",
      "Financial documentation",
      "Health insurance arrangement",
      "Biometrics and interview",
      "Arrival and registration"
    ],
    processingTime: "4-12 weeks (varies by country)",
    fee: "€50-€350 (varies by country)"
  }
};

// Helper function to get visa by ID
export const getVisaById = (visaId) => {
  return visaData[visaId] || null;
};

// Helper function to get all visas by country
export const getVisasByCountry = (countryId) => {
  return Object.values(visaData).filter(visa => visa.countryId === countryId);
};

// Helper function to get all countries
export const getCountries = () => {
  const countries = [];
  Object.values(visaData).forEach(visa => {
    if (!countries.find(c => c.id === visa.countryId)) {
      countries.push({
        id: visa.countryId,
        name: visa.country,
        flag: visa.flag
      });
    }
  });
  return countries;
};

export default visaData;
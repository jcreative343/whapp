import { generateClient } from "aws-amplify/api";
import { fetchUserAttributes, getCurrentUser } from "aws-amplify/auth";
import { useEffect, useState } from "react";
import { createNotifications } from "../graphql/mutations";
import { listAssessmentAnswers, listUserLinks } from "../graphql/queries";
const client = generateClient();

const traumaExperiences = [
  {
    key: "TRHurtfulNames",
    label:
      "Frequently Called Hurtful Names and Cussed at By Parent, Guardian, or Lover (e.g. mental abuse)",
  },
  {
    key: "TRNoNurturing",
    label:
      "Not Provided Attention, Support, or Nurturing Consistently By Parent or Guardian (e.g. emotional abuse)",
  },
  {
    key: "TRHit",
    label:
      "Punched, Smacked, Pushed, Tripped, etc. By a Parent, Guardian, or Lover (e.g. physical abuse)",
  },
  {
    key: "TRNeedsNotMet",
    label:
      "Not Provided Food or Clothing Consistently By a Parent or Guardian (e.g. neglect)",
  },
  {
    key: "TRForcedSex",
    label: "Involved in Unwanted or Forced Sexual Activity (e.g. rape)",
  },
  {
    key: "TRResponsible",
    label: "Adult Responsibilities as a Child Consistently (e.g. paying bills)",
  },
  { key: "TRViolence", label: "Witnessed Violence Consistently at Home" },
  {
    key: "TRSubstanceAbuse",
    label: "Witnessed Substance Abuse Consistently at Home",
  },
  {
    key: "TRMentalIllness",
    label: "Witnessed Mental Illness Consistently at Home",
  },
  { key: "TRParentDivorce", label: "Witnessed Parent(s) Separation/Divorce" },
  { key: "TRParentIncarcerated", label: "Witnessed Parent(s) Incarcerated" },
  {
    key: "TRHomelessness",
    label:
      "Experienced Homelessness or Moving Consistently (e.g. shelter, street, foster care)",
  },
  {
    key: "TRBodyFunction",
    label:
      "Experienced a Loss of Limb(s), Major Bodily Functions, or Extreme Sickness (e.g. cancer)",
  },
  {
    key: "TRNaturalDisaster",
    label:
      "Experienced a Significant Natural Disaster (e.g. loss of home/family)",
  },
  {
    key: "TRDirectTerrorism",
    label:
      "Directly Affected by Terrorism, Community, or School Violence (e.g. gangs, racism)",
  },
  {
    key: "TRIndirectTerrorism",
    label:
      "Indirectly Affected by Terrorism, Community, or School Violence (e.g. school shooting)",
  },
  {
    key: "TRLovedOne",
    label:
      "Absent, Inactive, or Death of a Close Loved One (e.g. parental figure or child)",
  },
];

const traumaResponseOptions = [
  {
    key: "TRResponseProfessional",
    label: "I talked to a professional or counselor about my trauma",
  },
  {
    key: "TRResponseFamilyFriend",
    label: "I talked to my family and/or friends about my trauma",
  },
  { key: "TRResponseGod", label: "I talked to God about my trauma" },
  { key: "TRResponseNoOne", label: "I didn’t talk to anyone about my trauma" },
  { key: "TRNoTrauma", label: "N/A (I didn't experience trauma)" },
];

const considerTraumaOptions = [
  { key: "Yes", label: "Yes" },
  { key: "No", label: "No" },
  { key: "NA", label: "N/A (I didn't experience any of the above)" },
];

const copingMechanisms = [
  { key: "CMAlcohol", label: "Alcohol" },
  { key: "CMDrugs", label: "Drugs" },
  { key: "CMOvereating", label: "Overeating" },
  { key: "CMSmoking", label: "Smoking" },
  { key: "CMGaming", label: "Gaming" },
  { key: "CMShopping", label: "Shopping" },
  { key: "CMGambling", label: "Gambling" },
  { key: "CMSex", label: "Casual Sex" },
  { key: "CMPorn", label: "Pornography" },
  { key: "CMBlaming", label: "Blaming Self or Others" },
  { key: "CMHurting", label: "Hurting Self or Others" },
  { key: "CMDisengage", label: "Disengagement/Detachment/Self Isolation" },
  { key: "CMArt", label: "Drawing/Painting/Art" },
  { key: "CMMusic", label: "Music" },
  { key: "CMPoetry", label: "Poetry/Poetical Lyrics" },
  { key: "CMReading", label: "Reading" },
  { key: "CMGroups", label: "Group Discussion" },
  { key: "CMCounseling", label: "Individual Counseling" },
  { key: "CMVenting", label: "Talking/Venting" },
  { key: "CMWriting", label: "Writing/Journaling" },
  { key: "CMSensory", label: "Sensory/Fidgets" },
  { key: "CMDancing", label: "Dancing" },
  { key: "CMExercising", label: "Exercising" },
  { key: "CMWalking", label: "Walking" },
  { key: "CMChange", label: "Change Something for Different Results" },
  { key: "CMAnalyze", label: "Analyze the Situation for Better Understanding" },
  { key: "CMDaydream", label: "Daydream or Imagine a Better Situation" },
  { key: "CMPositive", label: "Focus on the Positives" },
];

const frequencyOptions = [
  "5+x Week",
  "3-4x Week",
  "1-2x Week",
  "1-2x Month",
  "N/A-Rare",
];

const frequencyOptions2 = [
  "Strongly Agree",
  "Agree",
  "Neither",
  "Disagree",
  "Strongly Disagree",
];
const frequencyOptions3 = ["0-5", "6-9", "10-19", "20-29", "30+"];
const mentalHealthoptions = [
  { key: "MHDxPTSD", label: "Post-Traumatic Stress Disorder Diagnosis" },
  { key: "MHDxDepression", label: "Depression Diagnosis" },
  { key: "MHDxSUD", label: "Substance Use Disorder Diagnosis" },
  { key: "MHDxOtherMental", label: "Other Serious Mental Health Diagnosis" },
];
const mentalHealth = [
  { key: "MHSleeplessness", label: "Sleeplessness" },
  { key: "MHAlcoholUse", label: "Alcohol Use" },
  { key: "MHAnxiety", label: "Anxiety" },
  { key: "MHDepression", label: "Depression" },
  { key: "MHDrugUse", label: "Drug Use" },
  { key: "MHGrief", label: "Grief" },
  { key: "MHGuilt", label: "Guilt" },
  { key: "MHIrritability", label: "Irritability" },
  { key: "MHStress", label: "Stress" },
  { key: "MHRegret", label: "Regret" },
  { key: "MHSuicidalThoughts", label: "Suicidal Thoughts" },
  { key: "MHLoneliness", label: "Loneliness" },
  { key: "MHWorry", label: "Worry" },
];

const physicalHealthOptions = [
  { key: "PHDxInfertility", label: "Pregnancy/Fertility Issues" },
  { key: "PHDxCurableSTD", label: "Curable STD/STI Diagnosis" },
  { key: "PHDxIncurableSTD", label: "Incurable STD Diagnosis" },
  { key: "PHDxCancer", label: "Cancer Diagnosis" },
  { key: "PHDxDiabetes", label: "Diabetes Diagnosis" },
  { key: "PHDxHighBlood", label: "High Blood Pressure Diagnosis" },
  { key: "PHDxHeartDisease", label: "Heart Disease Diagnosis" },
  { key: "PHDxIrritableBowel", label: "Irritable Bowel Issues" },
  { key: "PHDxVitA", label: "Severe Vitamin A Deficiency" },
  { key: "PHDxVitB", label: "Severe Vitamin B Deficiency" },
  { key: "PHDxVitC", label: "Severe Vitamin C Deficiency" },
  { key: "PHDxVitD", label: "Severe Vitamin D Deficiency" },
  { key: "PHDxVitE", label: "Severe Vitamin E Deficiency" },
  { key: "PHDxVitK", label: "Severe Vitamin K Deficiency" },
  { key: "PHDxAutoimmune", label: "Autoimmune Disease Diagnosis" },
  {
    key: "PHDxOtherPhysical",
    label: "Other Serious Physical Health Diagnosis",
  },
];

const physicalHealth = [
  { key: "PHVegeFruits", label: "Vegetables and/or fruit?" },
  { key: "PHBeanLentils", label: "Beans and/or lentils?" },
  { key: "PHGrainBreads", label: "Grains and/or breads?" },
  { key: "PHDairy", label: "Dairy?" },
  { key: "PHMeat", label: "Animal Meat?" },
  { key: "PHFishSeafood", label: "Fish/seafood?" },
  { key: "PHSweets", label: "Sweets/desserts?" },
  { key: "PHWater", label: "Water?" },
  { key: "PHPhysicalActivity", label: "Physically active?" },
];

const spiritualHealthOptions = [
  { key: "SHSpiritualDefine", label: "Spirituality helps me define my goals." },
  {
    key: "SHSpiritualIntegrate",
    label: "Spirituality is integrated into my whole life.",
  },
  { key: "SHPrayer", label: "Pray?" },
  {
    key: "SHSpiritualActivity",
    label: "Communicate with like-minded individuals?",
  },
  { key: "SHReadText", label: "Read religious text?" },
  {
    key: "SHAlignText",
    label: "Consciously try to align your life with religious texts?",
  },
  {
    key: "SHCommunity",
    label: "Participate in religious gatherings / groups / prayer?",
  },
];

const outlookonlife = [
  { key: "OLHope", label: "Hope for the future and sense of purpose?" },
  { key: "OLPeace", label: "Peace of mind?" },
  { key: "OLLearning", label: "Willingness to learn and be corrected?" },
  { key: "OLJoy", label: "Joy even in trying times?" },
  { key: "OLStable", label: "Stable (e.g. housing, finances, etc.)?" },
  { key: "OLSafety", label: "Safe and secure?" },
  { key: "OLKindness", label: "Kindness toward others?" },
  {
    key: "OLForgiveness",
    label: "Like you were able to forgive yourself and others?",
  },
  { key: "OLPatience", label: "Patience with yourself and others?" },
  { key: "OLRelationships", label: "Supported in your relationships?" },
  {
    key: "OLBoundaries",
    label: "Like you were able to maintain healthy boundaries?",
  },
  {
    key: "OLEUnpleasant",
    label: "Unpleasant emotions (e.g. frustration, irritability)?",
  },
  {
    key: "OLEPleasant",
    label: "Pleasant emotions (e.g. appreciation, confidence)?",
  },
  { key: "OLEControl", label: "Control over your emotions?" },
  {
    key: "OLENumber",
    label: "Approximately how many emotions do you communicate consistently?",
  },
];

const schemaDefaults = {
  MHDxPTSD: false,
  MHDxDepression: false,
  MHDxSUD: false,
  MHDxOtherMental: false,
  MHSleeplessness: "No Answer",
  MHAlcoholUse: "No Answer",
  MHAnxiety: "No Answer",
  MHDepression: "No Answer",
  MHDrugUse: "No Answer",
  MHGrief: "No Answer",
  MHGuilt: "No Answer",
  MHIrritability: "No Answer",
  MHStress: "No Answer",
  MHRegret: "No Answer",
  MHSuicidalThoughts: "No Answer",
  MHLoneliness: "No Answer",
  MHWorry: "No Answer",

  PHDxInfertility: false,
  PHDxCurableSTD: false,
  PHDxIncurableSTD: false,
  PHDxCancer: false,
  PHDxDiabetes: false,
  PHDxHighBlood: false,
  PHDxHeartDisease: false,
  PHDxIrritableBowel: false,
  PHDxVitA: false,
  PHDxVitB: false,
  PHDxVitC: false,
  PHDxVitD: false,
  PHDxVitE: false,
  PHDxVitK: false,
  PHDxAutoimmune: false,
  PHDxOtherPhysical: false,

  PHVegeFruits: "No Answer",
  PHBeanLentils: "No Answer",
  PHGrainBreads: "No Answer",
  PHDairy: "No Answer",
  PHMeat: "No Answer",
  PHFishSeafood: "No Answer",
  PHSweets: "No Answer",
  PHWater: "No Answer",
  PHPhysicalActivity: "No Answer",

  SHSpiritualDefine: "No Answer",
  SHSpiritualIntegrate: "No Answer",
  SHPrayer: "No Answer",
  SHSpiritualActivity: "No Answer",
  SHReadText: "No Answer",
  SHAlignText: "No Answer",
  SHCommunity: "No Answer",

  OLHope: "No Answer",
  OLPeace: "No Answer",
  OLLearning: "No Answer",
  OLJoy: "No Answer",
  OLStable: "No Answer",
  OLSafety: "No Answer",
  OLKindness: "No Answer",
  OLForgiveness: "No Answer",
  OLPatience: "No Answer",
  OLRelationships: "No Answer",
  OLBoundaries: "No Answer",
  OLEUnpleasant: "No Answer",
  OLEPleasant: "No Answer",
  OLEControl: "No Answer",
  OLENumber: "No Answer",

  SDoHAgeRange: "No Answer",
  SDoHRace: "No Answer",
  SDoHGeographicRegion: "No Answer",
  SDoHEthnicity: "No Answer",
  SDoHState: "No Answer",
  SDoHZipCode: "No Answer",
  SDoHMaritalStatus: "No Answer",
  SDoHMilitaryStatus: "No Answer",
  SDoHGender: "No Answer",
  SDoHEducation: "No Answer",
  SDoHJobStatus: "No Answer",
  SDoHIncome: "No Answer",
  SDoHHousingStatus: "No Answer",
  SDoHHomeAsChild: "No Answer",
  SDoHReligion: "No Answer",
  SDoHDenomination: "No Answer",
};

const scoreDefaults = {
  // Trauma Scores
  TRHurtfulNames: 0,
  TRNoNurturing: 0,
  TRHit: 0,
  TRNeedsNotMet: 0,
  TRForcedSex: 0,
  TRResponsible: 0,
  TRViolence: 0,
  TRSubstanceAbuse: 0,
  TRMentalIllness: 0,
  TRParentDivorce: 0,
  TRParentIncarcerated: 0,
  TRHomelessness: 0,
  TRBodyFunction: 0,
  TRNaturalDisaster: 0,
  TRDirectTerrorism: 0,
  TRIndirectTerrorism: 0,
  TRLovedOne: 0,
  TRBelief: 0,
  TRResponseProfessional: 0,
  TRResponseFamilyFriend: 0,
  TRResponseGod: 0,
  TRResponseNoOne: 0,
  TRNoTrauma: 0,

  // Coping Mechanism Scores
  CMAlcohol: 0,
  CMDrugs: 0,
  CMOvereating: 0,
  CMSmoking: 0,
  CMGaming: 0,
  CMShopping: 0,
  CMGambling: 0,
  CMSex: 0,
  CMPorn: 0,
  CMBlaming: 0,
  CMHurting: 0,
  CMDisengage: 0,
  CMArt: 0,
  CMMusic: 0,
  CMPoetry: 0,
  CMReading: 0,
  CMGroups: 0,
  CMCounseling: 0,
  CMVenting: 0,
  CMWriting: 0,
  CMSensory: 0,
  CMDancing: 0,
  CMExercising: 0,
  CMWalking: 0,
  CMChange: 0,
  CMAnalyze: 0,
  CMDaydream: 0,
  CMPositive: 0,

  // Mental Health
  MHDxPTSD: 0,
  MHDxDepression: 0,
  MHDxSUD: 0,
  MHDxOtherMental: 0,
  MHSleeplessness: 0,
  MHAlcoholUse: 0,
  MHAnxiety: 0,
  MHDepression: 0,
  MHDrugUse: 0,
  MHGrief: 0,
  MHGuilt: 0,
  MHIrritability: 0,
  MHStress: 0,
  MHRegret: 0,
  MHSuicidalThoughts: 0,
  MHLoneliness: 0,
  MHWorry: 0,

  // Physical Health
  PHDxInfertility: 0,
  PHDxCurableSTD: 0,
  PHDxIncurableSTD: 0,
  PHDxCancer: 0,
  PHDxDiabetes: 0,
  PHDxHighBlood: 0,
  PHDxHeartDisease: 0,
  PHDxIrritableBowel: 0,
  PHDxVitA: 0,
  PHDxVitB: 0,
  PHDxVitC: 0,
  PHDxVitD: 0,
  PHDxVitE: 0,
  PHDxVitK: 0,
  PHDxAutoimmune: 0,
  PHDxOtherPhysical: 0,
  PHVegeFruits: 0,
  PHBeanLentils: 0,
  PHGrainBreads: 0,
  PHDairy: 0,
  PHMeat: 0,
  PHFishSeafood: 0,
  PHSweets: 0,
  PHWater: 0,
  PHPhysicalActivity: 0,

  // Spiritual
  SHSpiritualDefine: 0,
  SHSpiritualIntegrate: 0,
  SHPrayer: 0,
  SHSpiritualActivity: 0,
  SHReadText: 0,
  SHAlignText: 0,
  SHCommunity: 0,

  // Overall Life
  OLHope: 0,
  OLPeace: 0,
  OLLearning: 0,
  OLJoy: 0,
  OLStable: 0,
  OLSafety: 0,
  OLKindness: 0,
  OLForgiveness: 0,
  OLPatience: 0,
  OLRelationships: 0,
  OLBoundaries: 0,
  OLEUnpleasant: 0,
  OLEPleasant: 0,
  OLEControl: 0,
  OLENumber: 0,

  // Social Determinants of Health (set as No Answer since they are strings)
  SDoHAgeRange: "No Answer",
  SDoHRace: "No Answer",
  SDoHGeographicRegion: "No Answer",
  SDoHEthnicity: "No Answer",
  SDoHState: "No Answer",
  SDoHZipCode: "No Answer",
  SDoHMaritalStatus: "No Answer",
  SDoHMilitaryStatus: "No Answer",
  SDoHGender: "No Answer",
  SDoHEducation: "No Answer",
  SDoHJobStatus: "No Answer",
  SDoHIncome: "No Answer",
  SDoHHousingStatus: "No Answer",
  SDoHHomeAsChild: "No Answer",
  SDoHReligion: "No Answer",
  SDoHDenomination: "No Answer",
};

const createAssessmentAnswersMutation = `
  mutation CreateAssessmentAnswers($input: CreateAssessmentAnswersInput!) {
    createAssessmentAnswers(input: $input) {
      id
    }
  }
`;

const updateAssessmentAnswersMutation = `
  mutation UpdateAssessmentAnswers($input: UpdateAssessmentAnswersInput!) {
    updateAssessmentAnswers(input: $input) {
      id
    }
  }
`;

const createAssessmentScoresMutation = `
  mutation CreateAssessmentScores($input: CreateAssessmentScoresInput!) {
    createAssessmentScores(input: $input) {
      id
    }
  }
`;
const updateAssessmentScoresMutation = `
  mutation UpdateAssessmentScores($input: UpdateAssessmentScoresInput!) {
    updateAssessmentScores(input: $input) {
      id

    }
  }
`;
const SDOHKeys = [
  { key: "SDoHAgeRange" },
  { key: "SDoHRace" },
  { key: "SDoHGeographicRegion" },
  { key: "SDoHEthnicity" },
  { key: "SDoHState" },
  { key: "SDoHZipCode" },
  { key: "SDoHMaritalStatus" },
  { key: "SDoHMilitaryStatus" },
  { key: "SDoHGender" },
  { key: "SDoHEducation" },
  { key: "SDoHJobStatus" },
  { key: "SDoHIncome" },
  { key: "SDoHHousingStatus" },
  { key: "SDoHHomeAsChild" },
  { key: "SDoHReligion" },
  { key: "SDoHDenomination" },
];
const ethnicityOptions = [
  "Alaskan",
  "Algerian",
  "American",
  "Apache",
  "Argentinian",
  "Barbadian",
  "Brazilian",
  "Cambodian",
  "Canadian",
  "Caribbean",
  "Chamorros",
  "Cherokee",
  "Chinese",
  "Choctaw",
  "Columbian",
  "Cuban",
  "Dominican",
  "Dutch",
  "Ecuadorian",
  "Egyptian",
  "English",
  "Ethiopian",
  "Fijians",
  "Filipino",
  "French",
  "German",
  "Ghanian",
  "Guatemalan",
  "Haitian",
  "Hawaiian",
  "Indian",
  "Iranian",
  "Iraqi",
  "Irish",
  "Israeli",
  "Italian",
  "Jamaican",
  "Japanese",
  "Kanaka Maoli",
  "Korean",
  "Kurdish",
  "Lebanese",
  "Lumbee",
  "Mexican",
  "Moroccan",
  "Native",
  "Navajo",
  "Nigerian",
  "Norwegian",
  "Ojibwe",
  "Polish",
  "Pueblo Sioux",
  "Puerto Rican",
  "Rapanui",
  "Russian",
  "Salvadoran",
  "Samoan",
  "Somalian",
  "South African",
  "Spaniard",
  "Sun'aq",
  "Syrian",
  "Tahitians",
  "Taiwanese",
  "Tibetan",
  "Tokelau",
  "Tongan",
  "Vietnamese",
  "I Don’t Know",
  "Mixed",
  "Other",
  "No Answer",
  "",
];

const IdentifyAsOptions = [
  "Black",
  "Brown",
  "White",
  "I Choose Not to Respond",
  "Other",
  "No Answer",
  "",
];
const NationalityOptions = [
  "Africa",
  "Asia",
  "Australia",
  "Canada",
  "Europe",
  "Middle East",
  "Russia",
  "South America",
  "United States",
  "I Don’t Know",
  "Other",
  "No Answer",
  "",
];
const GenderIdentityOptions = [
  "A male born as male",
  "A female born as female",
  "A male born as female",
  "A female born as male",
  "Other",
  "No Answer",
  "",
];
const HousingOptions = [
  "Rent/Own",
  "Homeless",
  "Friend",
  "Family",
  "Shelter",
  "Prison/Jail",
  "Other",
  "No Answer",
  "",
];
const HomeGrewUpOptions = [
  "2 Guardians/Parents",
  "1 Guardian/Parent",
  "Foster Care",
  "Varied/Unstable",
  "Other",
  "No Answer",
  "",
];
const DenominationOptions = [
  "Baptist",
  "Jehovah’s Witness",
  "Latter Day Saints",
  "Lutheran",
  "Messianic Judaism",
  "Methodist",
  "Non-Denominational",
  "Presbyterian",
  "Roman Catholic",
  "Seventh Day Adventist",
  "Other",
  "No Answer",
  "",
];

const requiredFieldsBySection = {
  trauma: [
    "TRBelief", // whether they believe it was trauma
    // At least one trauma response
    "TRResponseProfessional",
    "TRResponseFamilyFriend",
    "TRResponseGod",
    "TRResponseNoOne",
    // At least one trauma experience UNLESS TRBelief is "N/A"
    "TRHit",
    "TRHurtfulNames",
    "TRNoNurturing",
    "TRNeedsNotMet",
    "TRForcedSex",
    "TRResponsible",
    "TRViolence",
    "TRSubstanceAbuse",
    "TRMentalIllness",
    "TRParentDivorce",
    "TRParentIncarcerated",
    "TRHomelessness",
    "TRBodyFunction",
    "TRNaturalDisaster",
    "TRDirectTerrorism",
    "TRIndirectTerrorism",
    "TRLovedOne",
  ],
  coping: [
    "CMAlcohol",
    "CMDrugs",
    "CMOvereating",
    "CMSmoking",
    "CMGaming",
    "CMShopping",
    "CMGambling",
    "CMSex",
    "CMPorn",
    "CMBlaming",
    "CMHurting",
    "CMDisengage",
    "CMArt",
    "CMMusic",
    "CMPoetry",
    "CMReading",
    "CMGroups",
    "CMCounseling",
    "CMVenting",
    "CMWriting",
    "CMSensory",
    "CMDancing",
    "CMExercising",
    "CMWalking",
    "CMChange",
    "CMAnalyze",
    "CMDaydream",
    "CMPositive",
  ],
  mental: [
    "MHSleeplessness",
    "MHAlcoholUse",
    "MHAnxiety",
    "MHDepression",
    "MHDrugUse",
    "MHGrief",
    "MHGuilt",
    "MHIrritability",
    "MHStress",
    "MHRegret",
    "MHSuicidalThoughts",
    "MHLoneliness",
    "MHWorry",
  ],
  sdoh: [
    "SDoHAgeRange",
    "SDoHRace",
    "SDoHGeographicRegion",
    "SDoHEthnicity",
    "SDoHState",
    "SDoHZipCode",
    "SDoHMaritalStatus",
    "SDoHMilitaryStatus",
    "SDoHGender",
    "SDoHEducation",
    "SDoHJobStatus",
    "SDoHIncome",
    "SDoHHousingStatus",
    "SDoHHomeAsChild",
    "SDoHReligion",
    // add "SDoHDenomination" only if SDoHReligion === "Christianity"
  ],
};

export default function Assessment() {
  const isAssessmentRequired = true; // toggle this to enable/disable *all* required validations
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState("trauma");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userId, setUserId] = useState("");
  const [existingRecordId, setExistingRecordId] = useState(null);
  const [existingScoreId, setExistingScoreId] = useState(null);
  const [copingWarning, setCopingWarning] = useState(false);
  const [traumaWarning, setTraumaWarning] = useState("");
  const [mentalWarning, setMentalWarning] = useState("");
  const [physicalWarning, setPhysicalWarning] = useState("");
  const [spiritualWarning, setSpiritualWarning] = useState("");
  const [outlookWarning, setOutlookWarning] = useState("");
  const [sdohWarning, setSdohWarning] = useState("");

  useEffect(() => {
    const section = localStorage.getItem("assessmentSection");
    if (section) {
      setStep(section);
      // Optional: clear it after reading
      localStorage.removeItem("assessmentSection");
    }
    async function loadUserAndRecord() {
      try {
        const user = await getCurrentUser();
        setUserId(user.userId);

        const res = await client.graphql({
          query: `
        query GetData {
          listAssessmentAnswers(filter: {
            userId: { eq: "${user.userId}" },
            isActive: { eq: true }
          }) {
            items {
              id
              ${[
                ...traumaExperiences,
                ...traumaResponseOptions,
                ...copingMechanisms,
                ...mentalHealthoptions,
                ...mentalHealth,
                ...physicalHealthOptions,
                ...physicalHealth,
                ...spiritualHealthOptions,
                ...outlookonlife,
                ...SDOHKeys,
              ]
                .map(({ key }) => key)
                .join("\n")}
              TRBelief
            }
          }
          listAssessmentScores(filter: {
            userId: { eq: "${user.userId}" },
            isActive: { eq: true }
          }) {
            items {
              id
              TRBelief
              
              isActive
            }
          }
        }
      `,
        });

        const existingAnswer = res?.data?.listAssessmentAnswers?.items?.[0];
        const scoreItems = res?.data?.listAssessmentScores?.items || [];
        const activeScore = scoreItems.find((item) => item.isActive);

        if (existingAnswer) {
          setExistingRecordId(existingAnswer.id);

          // Normalize booleans
          const normalized = { ...existingAnswer };
          traumaExperiences.forEach(({ key }) => {
            normalized[key] = !!normalized[key];
          });
          traumaResponseOptions.forEach(({ key }) => {
            normalized[key] = !!normalized[key];
          });

          // Set form data without traumaBeliefKey first
          setFormData(normalized);

          // Set traumaBeliefKey separately based on score data
          let traumaBeliefKey = "NA";

          if (activeScore) {
            const trBeliefScore = activeScore.TRBelief;
            if (trBeliefScore === 0.01) traumaBeliefKey = "Yes";
            else if (trBeliefScore === 0.02) traumaBeliefKey = "No";
          } else {
            if (normalized.TRBelief === true) traumaBeliefKey = "Yes";
            else if (normalized.TRBelief === false) traumaBeliefKey = "No";
          }

          // Update formData with traumaBeliefKey separately
          setFormData((prev) => ({ ...prev, traumaBeliefKey }));

          // Set existing score id if any
          if (activeScore) {
            setExistingScoreId(activeScore.id);
          }
        }
      } catch (err) {
        console.error("Error loading record:", err);
      }
    }

    loadUserAndRecord();
  }, []);

  function validateAssessmentData(data) {
    const missingSections = [];

    // Trauma
    const traumaKeys = [
      "TRHurtfulNames",
      "TRNoNurturing",
      "TRHit",
      "TRNeedsNotMet",
      "TRForcedSex",
      "TRResponsible",
      "TRViolence",
      "TRSubstanceAbuse",
      "TRMentalIllness",
      "TRParentDivorce",
      "TRParentIncarcerated",
      "TRHomelessness",
      "TRBodyFunction",
      "TRNaturalDisaster",
      "TRDirectTerrorism",
      "TRIndirectTerrorism",
      "TRLovedOne",
      "TRBelief",
      "TRResponseProfessional",
      "TRResponseFamilyFriend",
      "TRResponseGod",
      "TRResponseNoOne",
      "TRNoTrauma",
    ];
    const traumaComplete = traumaKeys.some((k) => data[k] === true);
    if (!traumaComplete) missingSections.push("Trauma");

    // Coping (CM) — should not be "N/A"
    const copingKeys = Object.keys(data).filter((k) => k.startsWith("CM"));
    const copingComplete = copingKeys.every(
      (k) => data[k] && data[k] !== "N/A" && data[k] !== "No Answer"
    );
    if (!copingComplete) missingSections.push("Coping Mechanisms");

    // Mental Health (MH)
    const mentalKeys = [
      "MHSleeplessness",
      "MHAlcoholUse",
      "MHAnxiety",
      "MHDepression",
      "MHDrugUse",
      "MHGrief",
      "MHGuilt",
      "MHIrritability",
      "MHStress",
      "MHRegret",
      "MHSuicidalThoughts",
      "MHLoneliness",
      "MHWorry",
    ];
    const mentalComplete = mentalKeys.every(
      (k) => data[k] && data[k] !== "No Answer"
    );
    if (!mentalComplete) missingSections.push("Mental Health");

    // Physical Health (PH)
    const physicalKeys = [
      "PHVegeFruits",
      "PHBeanLentils",
      "PHGrainBreads",
      "PHDairy",
      "PHMeat",
      "PHFishSeafood",
      "PHSweets",
      "PHWater",
      "PHPhysicalActivity",
    ];
    const physicalComplete = physicalKeys.every(
      (k) => data[k] && data[k] !== "No Answer"
    );
    if (!physicalComplete) missingSections.push("Physical Health");

    // Overall Life (OL)
    const olKeys = [
      "OLHope",
      "OLPeace",
      "OLLearning",
      "OLJoy",
      "OLStable",
      "OLSafety",
      "OLKindness",
      "OLForgiveness",
      "OLPatience",
      "OLRelationships",
      "OLBoundaries",
      "OLEUnpleasant",
      "OLEPleasant",
      "OLEControl",
      "OLENumber",
    ];
    const olComplete = olKeys.every((k) => data[k] && data[k] !== "No Answer");
    if (!olComplete) missingSections.push("Overall Life Satisfaction");

    // SDoH (basic required ones)
    // const sdohKeys = [
    // "SDoHAgeRange", "SDoHRace", "SDoHGeographicRegion", "SDoHEthnicity",
    //  "SDoHState", "SDoHZipCode", "SDoHMaritalStatus", "SDoHMilitaryStatus",
    //  "SDoHGender", "SDoHEducation", "SDoHJobStatus", "SDoHIncome",
    //  "SDoHHousingStatus", "SDoHHomeAsChild", "SDoHReligion"
    // ];
    //const sdohComplete = sdohKeys.every((k) => data[k] && data[k] !== "No Answer");
    //if (!sdohComplete) missingSections.push("Social Determinants of Health");

    return missingSections;
  }

  const mergeDefaults = (input, options = {}) => {
    const { skipSDOH = false } = options;

    for (let key in schemaDefaults) {
      // If skipping SDOH keys, and this is one of them, continue
      if (skipSDOH && key.startsWith("SDoH")) continue;

      if (!(key in input)) {
        input[key] = schemaDefaults[key];
      }
    }
    return input;
  };
  function mergeScoreDefaults(input) {
    for (let key in scoreDefaults) {
      if (!(key in input)) input[key] = scoreDefaults[key];
    }
    return input;
  }
  function calculateScores(formData) {
    const scoreData = {};

    // Trauma experiences: 1 if selected, 0 otherwise
    traumaExperiences.forEach(({ key }) => {
      scoreData[key] = formData[key] ? 1 : 0;
    });

    traumaResponseOptions.forEach(({ key }) => {
      scoreData[key] = formData[key] ? 0.01 : 0; // Keep as float for response options
    });

    // TRBelief special case (0.01 = yes, 0.02 = no, 0 = undefined)
    if (formData["TRBelief"] === true) {
      scoreData["TRBelief"] = 0.01;
    } else if (formData["TRBelief"] === false) {
      scoreData["TRBelief"] = 0.02;
    } else {
      scoreData["TRBelief"] = 0;
    }

    // Trauma Score: count trauma experiences + 4 if TRResponseNoOne selected
    let traumaCount = 0;
    traumaExperiences.forEach(({ key }) => {
      if (formData[key]) traumaCount += 1;
    });
    if (formData["TRResponseNoOne"]) traumaCount += 4;

    // Convert overall scores to strings
    scoreData.TRScore = String(Number.isFinite(traumaCount) ? traumaCount : 0);

    return scoreData;
  }

  function calculateScores6(formData, Domain) {
    const scoreData = {};
    let Total = 0;

    traumaExperiences.forEach(({ key }) => {
      scoreData[key] = formData[key] ? 1 : 0;
    });

    traumaResponseOptions.forEach(({ key }) => {
      scoreData[key] = formData[key] ? 0.01 : 0; // Keep as float for response options
    });

    // TRBelief special case (0.01 = yes, 0.02 = no, 0 = undefined)
    if (formData["TRBelief"] === true) {
      scoreData["TRBelief"] = 0.01;
    } else if (formData["TRBelief"] === false) {
      scoreData["TRBelief"] = 0.02;
    } else {
      scoreData["TRBelief"] = 0;
    }

    traumaExperiences.forEach(({ key }) => {
      if (formData[key])
        if (Domain === "TR") {
          Total += 1;
        }
    });
    if (formData["TRResponseNoOne"])
      if (Domain === "TR") {
        Total += 4;
      }

    const frequencyMapGroup1 = {
      "5+x Week": 4,
      "3-4x Week": 3,
      "1-2x Week": 2,
      "1-2x Month": 1,
      "N/A-Rare": 0,
      "No Answer": 0,
      "": 0,
      null: 0,
      undefined: 0,
    };

    // Define a different scoring for the second group
    // Example: simple boolean (1 if selected, else 0) or some custom mapping
    // For this example, let's assign 1 if selected, 0 if not
    const frequencyMapGroup2 = {
      "5+x Week": 0,
      "3-4x Week": 0.01,
      "1-2x Week": 0.02,
      "1-2x Month": 0.03,
      "N/A-Rare": 0.04,
      "No Answer": 0,
      "": 0,
      null: 0,
      undefined: 0,
    };

    // Separate coping mechanisms into two groups
    const group1Keys = copingMechanisms.slice(0, 12).map(({ key }) => key);
    // This includes: CMAlcohol, CMDrugs, CMOvereating, CMSmoking, CMGaming, CMShopping, CMGambling, CMSex, CMPorn, CMBlaming, CMHurting, CMDisengage
    const group2Keys = copingMechanisms.slice(12).map(({ key }) => key);
    // This includes: CMArt, CMMusic, CMPoetry, CMReading, CMGroups, CMCounseling, CMVenting, CMWriting, CMSensory, CMDancing, CMExercising, CMWalking, CMChange, CMAnalyze, CMDaydream, CMPositive

    // Calculate scores for group 1 with frequency map
    group1Keys.forEach((key) => {
      const freqScore = frequencyMapGroup1[formData[key]] ?? 0;
      scoreData[key] = freqScore;
      if (Domain === "CM") {
        Total += freqScore;
      }
    });

    // Calculate scores for group 2 with custom function
    group2Keys.forEach((key) => {
      const score = frequencyMapGroup2[formData[key]] ?? 0;
      scoreData[key] = score;
    });

    mentalHealthoptions.forEach(({ key }) => {
      scoreData[key] = formData[key] ? 0.01 : 0; // Keep as float for response options
    });

    const frequencyMapGroupm = {
      "5+x Week": 4,
      "3-4x Week": 3,
      "1-2x Week": 2,
      "1-2x Month": 1,
      "N/A-Rare": 0,
      "No Answer": 0,
      "": 0,
      null: 0,
      undefined: 0,
    };

    // Calculate scores for group 1 with frequency map
    mentalHealth.forEach(({ key }) => {
      const freqScore = frequencyMapGroupm[formData[key]] ?? 0;
      scoreData[key] = freqScore;
      if (Domain === "MH") {
        Total += freqScore;
      }
    });

    const trueCount = mentalHealthoptions.reduce((count, { key }) => {
      return count + (formData[key] ? 1 : 0);
    }, 0);

    // Add 2 if 2 or more are true
    if (trueCount >= 2) {
      if (Domain === "MH") {
        Total += 2;
      }
    }

    physicalHealthOptions.forEach(({ key }) => {
      scoreData[key] = formData[key] ? 0.01 : 0; // Keep as float for response options
    });

    const frequencyMapGroupp1 = {
      "5+x Week": 4,
      "3-4x Week": 3,
      "1-2x Week": 2,
      "1-2x Month": 1,
      "N/A-Rare": 0,
      "No Answer": 0,
      "": 0,
      null: 0,
      undefined: 0,
    };

    const frequencyMapGroupp2 = {
      "5+x Week": 0,
      "3-4x Week": 0.01,
      "1-2x Week": 0.02,
      "1-2x Month": 0.03,
      "N/A-Rare": 0.04,
      "No Answer": 0,
      "": 0,
      null: 0,
      undefined: 0,
    };
    const frequencyMapGroupp3 = {
      "5+x Week": 4,
      "3-4x Week": 0.01,
      "1-2x Week": 0.02,
      "1-2x Month": 0.03,
      "N/A-Rare": 0.04,
      "No Answer": 0,
      "": 0,
      null: 0,
      undefined: 0,
    };
    const frequencyMapGroupp4 = {
      "5+x Week": 0,
      "3-4x Week": 1,
      "1-2x Week": 2,
      "1-2x Month": 3,
      "N/A-Rare": 4,
      "No Answer": 0,
      "": 0,
      null: 0,
      undefined: 0,
    };

    // Calculate scores for group 1 with frequency map
    // First 2 items
    physicalHealth.slice(0, 2).forEach(({ key }) => {
      const freqScore = frequencyMapGroupp4[formData[key]] ?? 0;
      scoreData[key] = freqScore;
      if (Domain === "PH") {
        Total += freqScore;
      }
    });

    // Next 4 items (items 2–5)
    physicalHealth.slice(2, 4).forEach(({ key }) => {
      const freqScore = frequencyMapGroupp2[formData[key]] ?? 0;
      scoreData[key] = freqScore;
    });

    // Last 3 items (items 6–8)
    physicalHealth.slice(4, 6).forEach(({ key }) => {
      const freqScore = frequencyMapGroupp3[formData[key]] ?? 0;
      scoreData[key] = freqScore;
      if (freqScore === 4) {
        if (Domain === "PH") {
          Total += freqScore;
        }
      }
    });
    physicalHealth.slice(6, 7).forEach(({ key }) => {
      const freqScore = frequencyMapGroupp1[formData[key]] ?? 0;
      scoreData[key] = freqScore;
      if (Domain === "PH") {
        Total += freqScore;
      }
    });
    physicalHealth.slice(7, 9).forEach(({ key }) => {
      const freqScore = frequencyMapGroupp4[formData[key]] ?? 0;
      scoreData[key] = freqScore;
      if (Domain === "PH") {
        Total += freqScore;
      }
    });

    const trueCountPhysical = physicalHealthOptions.reduce((count, { key }) => {
      return count + (formData[key] ? 1 : 0);
    }, 0);

    // Add 2 if 2 or more are true
    if (trueCountPhysical >= 2) {
      if (Domain === "PH") {
        Total += 2;
      }
    }
    const frequencyMapGroups1 = {
      "5+x Week": 0,
      "3-4x Week": 1,
      "1-2x Week": 2,
      "1-2x Month": 3,
      "N/A-Rare": 4,
      "No Answer": 0,
      "": 0,
      null: 0,
      undefined: 0,
    };
    const frequencyMapGroups2 = {
      "Strongly Agree": 0,
      Agree: 1,
      Neither: 2,
      Disagree: 3,
      "Strongly Disagree": 4,
      "No Answer": 0,
      "": 0,
      null: 0,
      undefined: 0,
    };

    spiritualHealthOptions.slice(0, 2).forEach(({ key }) => {
      const freqScore = frequencyMapGroups2[formData[key]] ?? 0;
      scoreData[key] = freqScore;
      if (Domain === "SH") {
        Total += freqScore;
      }
    });

    spiritualHealthOptions.slice(2).forEach(({ key }) => {
      const freqScore = frequencyMapGroups1[formData[key]] ?? 0;
      scoreData[key] = freqScore;
      if (Domain === "SH") {
        Total += freqScore;
      }
    });

    const frequencyMapGroupo1 = {
      "5+x Week": 4,
      "3-4x Week": 3,
      "1-2x Week": 2,
      "1-2x Month": 1,
      "N/A-Rare": 0,
      "No Answer": 0,
      "": 0,
      null: 0,
      undefined: 0,
    };
    const frequencyMapGroupo2 = {
      "5+x Week": 0,
      "3-4x Week": 1,
      "1-2x Week": 2,
      "1-2x Month": 3,
      "N/A-Rare": 4,
      "No Answer": 0,
      "": 0,
      null: 0,
      undefined: 0,
    };
    const frequencyMapGroupo3 = {
      "0-5": 4,
      "6-9": 3,
      "10-19": 2,
      "20-29": 1,
      "30+": 0,
      "No Answer": 0,
      "": 0,
      null: 0,
      undefined: 0,
    };

    outlookonlife.slice(0, 11).forEach(({ key }) => {
      const freqScore = frequencyMapGroupo2[formData[key]] ?? 0;
      scoreData[key] = freqScore;
      if (Domain === "OL") {
        Total += freqScore;
      }
    });
    outlookonlife.slice(11, 12).forEach(({ key }) => {
      const freqScore = frequencyMapGroupo1[formData[key]] ?? 0;
      scoreData[key] = freqScore;
      if (Domain === "OL") {
        Total += freqScore;
      }
    });

    outlookonlife.slice(12, 14).forEach(({ key }) => {
      const freqScore = frequencyMapGroupo2[formData[key]] ?? 0;
      scoreData[key] = freqScore;
      if (Domain === "OL") {
        Total += freqScore;
      }
    });
    outlookonlife.slice(14, 15).forEach(({ key }) => {
      const freqScore = frequencyMapGroupo3[formData[key]] ?? 0;
      scoreData[key] = freqScore;
      if (Domain === "OL") {
        Total += freqScore;
      }
    });

    if (Domain === "TR") {
      scoreData.TRScore = String(Number.isFinite(Total) ? Total : 0);
    }
    if (Domain === "CM") {
      scoreData.CMScore = String(Total);
    }
    if (Domain === "MH") {
      scoreData.MHScore = String(Total);
    }
    if (Domain === "PH") {
      scoreData.PHScore = String(Total);
    }
    if (Domain === "SH") {
      scoreData.SHScore = String(Total);
    }
    if (Domain === "OL") {
      scoreData.OLScore = String(Total);
    }

    return scoreData;
  }

  const toggleBoolean = (key) =>
    setFormData((prev) => ({ ...prev, [key]: !prev[key] }));

  const setTraumaBelief = (key) =>
    setFormData((prev) => ({
      ...prev,
      TRBelief: key === "Yes" ? true : key === "No" ? false : undefined,
      traumaBeliefKey: key,
    }));

  const toggleTraumaResponse = (key) => {
    if (key === "TRNoTrauma") {
      const isSelected = !!formData[key];
      const cleared = {};
      traumaResponseOptions.forEach(({ key }) => (cleared[key] = false));
      if (!isSelected) cleared[key] = true;
      setFormData((prev) => ({ ...prev, ...cleared }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [key]: !prev[key],
        TRNoTrauma: false,
      }));
    }
  };
  const handleInputChange = (key, value) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  const handleCopingChange = (key, value) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  const handleTraumaNext = async () => {
    if (isAssessmentRequired) {
      const traumaSelected = traumaExperiences.some(({ key }) => formData[key]);
      const traumaBelief = formData.traumaBeliefKey;
      const traumaResponseSelected = traumaResponseOptions.some(
        ({ key }) => formData[key]
      );

      // Reset warning first
      setTraumaWarning("");

      if (!traumaBelief) {
        setTraumaWarning(
          "Please select one option for the second question regarding whether you consider your experience traumatic."
        );
        return;
      }

      if (!traumaResponseSelected) {
        setTraumaWarning(
          "Please select at least one statement from the third question regarding your trauma response."
        );
        return;
      }

      if (traumaBelief !== "NA" && !traumaSelected) {
        setTraumaWarning(
          "Since you did not select 'N/A' for the second question, please select at least one experience from the first question."
        );
        return;
      }
    }

    // Proceed with submitting or navigating
    setTimeout(() => {
      // example async or navigation delay

      setTraumaWarning("");
    }, 10000);

    setIsSubmitting(true);
    try {
      const input = {
        userId,
        CompletedDate: new Date().toISOString().slice(0, 10),
        CompletedTime: new Date().toLocaleTimeString(),
        isActive: true,
      };

      traumaExperiences.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      traumaResponseOptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      input["TRBelief"] =
        formData["TRBelief"] !== undefined
          ? formData["TRBelief"]
          : input["TRBelief"] ?? false;

      copingMechanisms.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      mentalHealthoptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      mentalHealth.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      physicalHealthOptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      physicalHealth.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      spiritualHealthOptions.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      outlookonlife.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });

      // Only run mergeDefaults when it's a new record (and allow SDoH keys to be included)
      if (!existingRecordId) {
        mergeDefaults(input);
      }

      if (existingRecordId) {
        await client.graphql({
          query: updateAssessmentAnswersMutation,
          variables: { input: { ...input, id: existingRecordId } },
        });
      } else {
        const res = await client.graphql({
          query: createAssessmentAnswersMutation,
          variables: { input },
        });
        setExistingRecordId(res.data.createAssessmentAnswers.id);
      }

      const scoreInput = {
        userId,
        CompletedDate: input.CompletedDate,
        CompletedTime: input.CompletedTime,
        isActive: true,
        ...mergeScoreDefaults(calculateScores6(formData, "TR")),
        SDoHAgeRange: input.SDoHAgeRange,
        SDoHRace: input.SDoHRace,
        SDoHGeographicRegion: input.SDoHGeographicRegion,
        SDoHEthnicity: input.SDoHEthnicity,
        SDoHState: input.SDoHState,
        SDoHZipCode: input.SDoHZipCode,
        SDoHMaritalStatus: input.SDoHMaritalStatus,
        SDoHMilitaryStatus: input.SDoHMilitaryStatus,
        SDoHGender: input.SDoHGender,
        SDoHEducation: input.SDoHEducation,
        SDoHJobStatus: input.SDoHJobStatus,
        SDoHIncome: input.SDoHIncome,
        SDoHHousingStatus: input.SDoHHousingStatus,
        SDoHHomeAsChild: input.SDoHHomeAsChild,
        SDoHReligion: input.SDoHReligion,
        SDoHDenomination: input.SDoHDenomination,
      };

      if (existingScoreId) {
        await client.graphql({
          query: updateAssessmentScoresMutation,
          variables: { input: { ...scoreInput, id: existingScoreId } },
        });
      } else {
        const res = await client.graphql({
          query: createAssessmentScoresMutation,
          variables: { input: scoreInput },
        });
        setExistingScoreId(res.data.createAssessmentScores.id);
      }

      setStep("coping");
    } catch (err) {
      console.error("Error submitting trauma:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopingSubmit = async () => {
    if (isAssessmentRequired) {
      const allAnswered = copingMechanisms.every(({ key }) => {
        return formData[key] && formData[key] !== "No Answer";
      });

      if (!allAnswered) {
        setCopingWarning(true); // Show warning
        return; // Don't proceed
      }
    }

    setCopingWarning(false); // Clear warning if all answered
    setIsSubmitting(true);
    try {
      const input = {
        id: existingRecordId,
        userId,
        CompletedDate: new Date().toISOString().slice(0, 10),
        CompletedTime: new Date().toLocaleTimeString(),
        isActive: true,
      };

      traumaExperiences.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      traumaResponseOptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      input["TRBelief"] =
        formData["TRBelief"] !== undefined
          ? formData["TRBelief"]
          : input["TRBelief"] ?? false;

      copingMechanisms.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      mentalHealthoptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      mentalHealth.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      physicalHealthOptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      physicalHealth.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      spiritualHealthOptions.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      outlookonlife.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });

      if (!existingRecordId) {
        mergeDefaults(input);
      }

      if (existingRecordId) {
        await client.graphql({
          query: updateAssessmentAnswersMutation,
          variables: { input },
        });
      }

      const scoreInput = {
        userId,
        CompletedDate: input.CompletedDate,
        CompletedTime: input.CompletedTime,
        isActive: true,
        ...mergeScoreDefaults(calculateScores6(formData, "CM")),
        SDoHAgeRange: input.SDoHAgeRange,
        SDoHRace: input.SDoHRace,
        SDoHGeographicRegion: input.SDoHGeographicRegion,
        SDoHEthnicity: input.SDoHEthnicity,
        SDoHState: input.SDoHState,
        SDoHZipCode: input.SDoHZipCode,
        SDoHMaritalStatus: input.SDoHMaritalStatus,
        SDoHMilitaryStatus: input.SDoHMilitaryStatus,
        SDoHGender: input.SDoHGender,
        SDoHEducation: input.SDoHEducation,
        SDoHJobStatus: input.SDoHJobStatus,
        SDoHIncome: input.SDoHIncome,
        SDoHHousingStatus: input.SDoHHousingStatus,
        SDoHHomeAsChild: input.SDoHHomeAsChild,
        SDoHReligion: input.SDoHReligion,
        SDoHDenomination: input.SDoHDenomination,
      };

      if (existingScoreId) {
        await client.graphql({
          query: updateAssessmentScoresMutation,
          variables: { input: { ...scoreInput, id: existingScoreId } },
        });
      } else {
        const res = await client.graphql({
          query: createAssessmentScoresMutation,
          variables: { input: scoreInput },
        });
        setExistingScoreId(res.data.createAssessmentScores.id);
      }

      setStep("mental");
    } catch (err) {
      console.error("Error submitting coping:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMentalSubmit = async () => {
    if (isAssessmentRequired) {
      const allFilled = mentalHealth.every(
        ({ key }) => formData[key] && formData[key] !== "No Answer"
      );

      if (!allFilled) {
        setMentalWarning("Please answer all dropdown questions to move on.");
        return;
      }
    }

    // Proceed with saving or navigating
    setMentalWarning("");

    setIsSubmitting(true);
    try {
      const input = {
        id: existingRecordId,
        userId,
        CompletedDate: new Date().toISOString().slice(0, 10),
        CompletedTime: new Date().toLocaleTimeString(),
        isActive: true,
      };

      traumaExperiences.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      traumaResponseOptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      input["TRBelief"] =
        formData["TRBelief"] !== undefined
          ? formData["TRBelief"]
          : input["TRBelief"] ?? false;

      copingMechanisms.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      mentalHealthoptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      mentalHealth.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      physicalHealthOptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      physicalHealth.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      spiritualHealthOptions.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      outlookonlife.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });

      if (!existingRecordId) {
        mergeDefaults(input);
      }

      if (existingRecordId) {
        await client.graphql({
          query: updateAssessmentAnswersMutation,
          variables: { input },
        });
      }

      const scoreInput = {
        userId,
        CompletedDate: input.CompletedDate,
        CompletedTime: input.CompletedTime,
        isActive: true,
        ...mergeScoreDefaults(calculateScores6(formData, "MH")),
        SDoHAgeRange: input.SDoHAgeRange,
        SDoHRace: input.SDoHRace,
        SDoHGeographicRegion: input.SDoHGeographicRegion,
        SDoHEthnicity: input.SDoHEthnicity,
        SDoHState: input.SDoHState,
        SDoHZipCode: input.SDoHZipCode,
        SDoHMaritalStatus: input.SDoHMaritalStatus,
        SDoHMilitaryStatus: input.SDoHMilitaryStatus,
        SDoHGender: input.SDoHGender,
        SDoHEducation: input.SDoHEducation,
        SDoHJobStatus: input.SDoHJobStatus,
        SDoHIncome: input.SDoHIncome,
        SDoHHousingStatus: input.SDoHHousingStatus,
        SDoHHomeAsChild: input.SDoHHomeAsChild,
        SDoHReligion: input.SDoHReligion,
        SDoHDenomination: input.SDoHDenomination,
      };

      if (existingScoreId) {
        await client.graphql({
          query: updateAssessmentScoresMutation,
          variables: { input: { ...scoreInput, id: existingScoreId } },
        });
      } else {
        const res = await client.graphql({
          query: createAssessmentScoresMutation,
          variables: { input: scoreInput },
        });
        setExistingScoreId(res.data.createAssessmentScores.id);
      }

      setStep("physical");
    } catch (err) {
      console.error("Error submitting mental:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhysicalSubmit = async () => {
    if (isAssessmentRequired) {
      const allFilled = physicalHealth.every(
        ({ key }) => formData[key] && formData[key] !== "No Answer"
      );

      if (!allFilled) {
        setPhysicalWarning("Please answer all dropdown questions to move on.");
        return;
      }
    }

    // Proceed with saving or navigating
    setPhysicalWarning("");
    setIsSubmitting(true);
    try {
      const input = {
        id: existingRecordId,
        userId,
        CompletedDate: new Date().toISOString().slice(0, 10),
        CompletedTime: new Date().toLocaleTimeString(),
        isActive: true,
      };

      traumaExperiences.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      traumaResponseOptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      input["TRBelief"] =
        formData["TRBelief"] !== undefined
          ? formData["TRBelief"]
          : input["TRBelief"] ?? false;

      copingMechanisms.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      mentalHealthoptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      mentalHealth.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      physicalHealthOptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      physicalHealth.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      spiritualHealthOptions.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      outlookonlife.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });

      if (!existingRecordId) {
        mergeDefaults(input);
      }

      if (existingRecordId) {
        await client.graphql({
          query: updateAssessmentAnswersMutation,
          variables: { input },
        });
      }

      const scoreInput = {
        userId,
        CompletedDate: input.CompletedDate,
        CompletedTime: input.CompletedTime,
        isActive: true,
        ...mergeScoreDefaults(calculateScores6(formData, "PH")),
        SDoHAgeRange: input.SDoHAgeRange,
        SDoHRace: input.SDoHRace,
        SDoHGeographicRegion: input.SDoHGeographicRegion,
        SDoHEthnicity: input.SDoHEthnicity,
        SDoHState: input.SDoHState,
        SDoHZipCode: input.SDoHZipCode,
        SDoHMaritalStatus: input.SDoHMaritalStatus,
        SDoHMilitaryStatus: input.SDoHMilitaryStatus,
        SDoHGender: input.SDoHGender,
        SDoHEducation: input.SDoHEducation,
        SDoHJobStatus: input.SDoHJobStatus,
        SDoHIncome: input.SDoHIncome,
        SDoHHousingStatus: input.SDoHHousingStatus,
        SDoHHomeAsChild: input.SDoHHomeAsChild,
        SDoHReligion: input.SDoHReligion,
        SDoHDenomination: input.SDoHDenomination,
      };

      if (existingScoreId) {
        await client.graphql({
          query: updateAssessmentScoresMutation,
          variables: { input: { ...scoreInput, id: existingScoreId } },
        });
      } else {
        const res = await client.graphql({
          query: createAssessmentScoresMutation,
          variables: { input: scoreInput },
        });
        setExistingScoreId(res.data.createAssessmentScores.id);
      }

      setStep("spiritual");
    } catch (err) {
      console.error("Error submitting physical:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSpiritualSubmit = async () => {
    // Proceed with saving or navigating
    setSpiritualWarning("");
    setIsSubmitting(true);
    try {
      const input = {
        id: existingRecordId,
        userId,
        CompletedDate: new Date().toISOString().slice(0, 10),
        CompletedTime: new Date().toLocaleTimeString(),
        isActive: true,
      };

      traumaExperiences.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      traumaResponseOptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      input["TRBelief"] =
        formData["TRBelief"] !== undefined
          ? formData["TRBelief"]
          : input["TRBelief"] ?? false;

      copingMechanisms.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      mentalHealthoptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      mentalHealth.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      physicalHealthOptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      physicalHealth.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      spiritualHealthOptions.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      outlookonlife.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });

      if (!existingRecordId) {
        mergeDefaults(input);
      }

      if (existingRecordId) {
        await client.graphql({
          query: updateAssessmentAnswersMutation,
          variables: { input },
        });
      }

      const scoreInput = {
        userId,
        CompletedDate: input.CompletedDate,
        CompletedTime: input.CompletedTime,
        isActive: true,
        ...mergeScoreDefaults(calculateScores6(formData, "SH")),
        SDoHAgeRange: input.SDoHAgeRange,
        SDoHRace: input.SDoHRace,
        SDoHGeographicRegion: input.SDoHGeographicRegion,
        SDoHEthnicity: input.SDoHEthnicity,
        SDoHState: input.SDoHState,
        SDoHZipCode: input.SDoHZipCode,
        SDoHMaritalStatus: input.SDoHMaritalStatus,
        SDoHMilitaryStatus: input.SDoHMilitaryStatus,
        SDoHGender: input.SDoHGender,
        SDoHEducation: input.SDoHEducation,
        SDoHJobStatus: input.SDoHJobStatus,
        SDoHIncome: input.SDoHIncome,
        SDoHHousingStatus: input.SDoHHousingStatus,
        SDoHHomeAsChild: input.SDoHHomeAsChild,
        SDoHReligion: input.SDoHReligion,
        SDoHDenomination: input.SDoHDenomination,
      };

      if (existingScoreId) {
        await client.graphql({
          query: updateAssessmentScoresMutation,
          variables: { input: { ...scoreInput, id: existingScoreId } },
        });
      } else {
        const res = await client.graphql({
          query: createAssessmentScoresMutation,
          variables: { input: scoreInput },
        });
        setExistingScoreId(res.data.createAssessmentScores.id);
      }

      setStep("outlook");
    } catch (err) {
      console.error("Error submitting spiritual:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOutlookSubmit = async () => {
    if (isAssessmentRequired) {
      const allFilled = outlookonlife.every(
        ({ key }) =>
          formData[key] &&
          formData[key] !== "No Answer" &&
          formData[key] !== "" &&
          formData[key] !== "Select"
      );

      if (!allFilled) {
        setOutlookWarning("Please answer all dropdown questions to move on.");
        return;
      }
    }

    // Proceed with saving or navigating
    setOutlookWarning("");
    setIsSubmitting(true);
    try {
      const input = {
        id: existingRecordId,
        userId,
        CompletedDate: new Date().toISOString().slice(0, 10),
        CompletedTime: new Date().toLocaleTimeString(),
        isActive: true,
      };

      traumaExperiences.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      traumaResponseOptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      input["TRBelief"] =
        formData["TRBelief"] !== undefined
          ? formData["TRBelief"]
          : input["TRBelief"] ?? false;

      copingMechanisms.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      mentalHealthoptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      mentalHealth.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      physicalHealthOptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });
      physicalHealth.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      spiritualHealthOptions.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });
      outlookonlife.forEach(({ key }) => {
        const value = formData[key];
        if (value === "" || value === undefined || value === null) {
          input[key] = "No Answer";
        } else {
          input[key] = value;
        }
      });

      if (!existingRecordId) {
        mergeDefaults(input);
      }

      if (existingRecordId) {
        await client.graphql({
          query: updateAssessmentAnswersMutation,
          variables: { input },
        });
      }

      const scoreInput = {
        userId,
        CompletedDate: input.CompletedDate,
        CompletedTime: input.CompletedTime,
        isActive: true,
        ...mergeScoreDefaults(calculateScores6(formData, "OL")),
        SDoHAgeRange: input.SDoHAgeRange,
        SDoHRace: input.SDoHRace,
        SDoHGeographicRegion: input.SDoHGeographicRegion,
        SDoHEthnicity: input.SDoHEthnicity,
        SDoHState: input.SDoHState,
        SDoHZipCode: input.SDoHZipCode,
        SDoHMaritalStatus: input.SDoHMaritalStatus,
        SDoHMilitaryStatus: input.SDoHMilitaryStatus,
        SDoHGender: input.SDoHGender,
        SDoHEducation: input.SDoHEducation,
        SDoHJobStatus: input.SDoHJobStatus,
        SDoHIncome: input.SDoHIncome,
        SDoHHousingStatus: input.SDoHHousingStatus,
        SDoHHomeAsChild: input.SDoHHomeAsChild,
        SDoHReligion: input.SDoHReligion,
        SDoHDenomination: input.SDoHDenomination,
      };

      if (existingScoreId) {
        await client.graphql({
          query: updateAssessmentScoresMutation,
          variables: { input: { ...scoreInput, id: existingScoreId } },
        });
      } else {
        const res = await client.graphql({
          query: createAssessmentScoresMutation,
          variables: { input: scoreInput },
        });
        setExistingScoreId(res.data.createAssessmentScores.id);
      }

      setStep("SDOH");
    } catch (err) {
      console.error("Error submitting outlook:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSDOHSubmit = async (createNew = false) => {
    if (!userId || !existingRecordId || !existingScoreId) {
      console.error("Missing user or record IDs");
      return;
    }
    if (isAssessmentRequired) {
      try {
        const { userId } = await getCurrentUser();

        const res = await client.graphql({
          query: listAssessmentAnswers,
          variables: {
            filter: {
              userId: { eq: userId },
              isActive: { eq: true },
            },
          },
        });

        const records = res?.data?.listAssessmentAnswers?.items || [];
        const activeRecord = records[0];

        if (!activeRecord) {
          setSdohWarning("No active assessment record found.");
          return;
        }

        const failedSections = validateAssessmentData(activeRecord);

        if (failedSections.length > 0) {
          setSdohWarning(
            `You did not complete all required fields for: ${failedSections.join(
              ", "
            )}.`
          );
          return;
        }

        // ✅ All good
        setSdohWarning("");
        // continue to next step or complete assessment
      } catch (err) {
        console.error("Validation error:", err);
        setSdohWarning("There was an error validating your data.");
      }
    }

    // ✅ Clear warning and proceed to submit
    setSdohWarning("");

    setIsSubmitting(true);

    try {
      const input = {
        id: existingRecordId,
        userId,
        CompletedDate: new Date().toISOString().slice(0, 10),
        CompletedTime: new Date().toLocaleTimeString(),
        isActive: true,
      };

      // Populate all previous sections
      traumaExperiences.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });

      traumaResponseOptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });

      input["TRBelief"] =
        formData["TRBelief"] !== undefined
          ? formData["TRBelief"]
          : input["TRBelief"] ?? false;

      copingMechanisms.forEach(({ key }) => {
        const value = formData[key];
        input[key] =
          value === "" || value === undefined || value === null
            ? "No Answer"
            : value;
      });

      mentalHealthoptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });

      mentalHealth.forEach(({ key }) => {
        const value = formData[key];
        input[key] =
          value === "" || value === undefined || value === null
            ? "No Answer"
            : value;
      });

      physicalHealthOptions.forEach(({ key }) => {
        input[key] =
          formData[key] !== undefined ? !!formData[key] : input[key] ?? false;
      });

      physicalHealth.forEach(({ key }) => {
        const value = formData[key];
        input[key] =
          value === "" || value === undefined || value === null
            ? "No Answer"
            : value;
      });

      spiritualHealthOptions.forEach(({ key }) => {
        const value = formData[key];
        input[key] =
          value === "" || value === undefined || value === null
            ? "No Answer"
            : value;
      });

      outlookonlife.forEach(({ key }) => {
        const value = formData[key];
        input[key] =
          value === "" || value === undefined || value === null
            ? "No Answer"
            : value;
      });

      // Add SDoH fields
      Object.assign(input, {
        SDoHAgeRange: formData.SDoHAgeRange || "No Answer",
        SDoHRace:
          formData.SDoHRace === "Other"
            ? formData.SDoHRaceCustom || "Other"
            : formData.SDoHRace || "No Answer",
        SDoHGeographicRegion:
          formData.SDoHGeographicRegion === "Other"
            ? formData.SDoHGeographicRegionCustom || "Other"
            : formData.SDoHGeographicRegion || "No Answer",
        SDoHEthnicity:
          formData.SDoHEthnicity === "Other"
            ? formData.SDoHEthnicityCustom || "Other"
            : formData.SDoHEthnicity || "No Answer",
        SDoHState: formData.SDoHState || "No Answer",
        SDoHZipCode: formData.SDoHZipCode || "No Answer",
        SDoHMaritalStatus: formData.SDoHMaritalStatus || "No Answer",
        SDoHMilitaryStatus: formData.SDoHMilitaryStatus || "No Answer",
        SDoHGender:
          formData.SDoHGender === "Other"
            ? formData.SDoHGenderCustom || "Other"
            : formData.SDoHGender || "No Answer",
        SDoHEducation: formData.SDoHEducation || "No Answer",
        SDoHJobStatus: formData.SDoHJobStatus || "No Answer",
        SDoHIncome: formData.SDoHIncome || "No Answer",
        SDoHHousingStatus:
          formData.SDoHHousingStatus === "Other"
            ? formData.SDoHHousingStatusCustom || "Other"
            : formData.SDoHHousingStatus || "No Answer",
        SDoHHomeAsChild:
          formData.SDoHHomeAsChild === "Other"
            ? formData.SDoHHomeAsChildCustom || "Other"
            : formData.SDoHHomeAsChild || "No Answer",
        SDoHReligion:
          formData.SDoHReligion === "Other"
            ? formData.SDoHReligionCustom || "Other"
            : formData.SDoHReligion || "No Answer",
        SDoHDenomination:
          formData.SDoHDenomination === "Christianity"
            ? formData.SDoHDenomination || "Other"
            : formData.SDoHDenomination || "No Answer",
      });

      // Save the full answers
      await client.graphql({
        query: updateAssessmentAnswersMutation,
        variables: { input },
      });

      const scoresInput = {
        ...mergeScoreDefaults(calculateScores6(formData, "")),
        id: existingScoreId,
        userId,
        CompletedDate: input.CompletedDate,
        CompletedTime: input.CompletedTime,

        SDoHAgeRange: input.SDoHAgeRange,
        SDoHRace: input.SDoHRace,
        SDoHGeographicRegion: input.SDoHGeographicRegion,
        SDoHEthnicity: input.SDoHEthnicity,
        SDoHState: input.SDoHState,
        SDoHZipCode: input.SDoHZipCode,
        SDoHMaritalStatus: input.SDoHMaritalStatus,
        SDoHMilitaryStatus: input.SDoHMilitaryStatus,
        SDoHGender: input.SDoHGender,
        SDoHEducation: input.SDoHEducation,
        SDoHJobStatus: input.SDoHJobStatus,
        SDoHIncome: input.SDoHIncome,
        SDoHHousingStatus: input.SDoHHousingStatus,
        SDoHHomeAsChild: input.SDoHHomeAsChild,
        SDoHReligion: input.SDoHReligion,
        SDoHDenomination: input.SDoHDenomination,
        isActive: true,
      };

      // Save scores
      await client.graphql({
        query: updateAssessmentScoresMutation,
        variables: { input: scoresInput },
      });

      setSuccessMessage("Social Determinants submitted successfully!");

      // If creating a new assessment after saving:
      if (createNew) {
        await client.graphql({
          query: updateAssessmentAnswersMutation,
          variables: {
            input: {
              id: existingRecordId,
              isActive: false,
            },
          },
        });

        await client.graphql({
          query: updateAssessmentScoresMutation,
          variables: {
            input: {
              id: existingScoreId,
              isActive: false,
            },
          },
        });

        setFormData({});
        setExistingRecordId(null);
        setExistingScoreId(null);
        setStep("trauma");
        setSuccessMessage("");
      }

      try {
        const userAttrs = await fetchUserAttributes();

        const userEmail = userAttrs.email;
        // 1. Query UserLink where clientEmail matches
        const userLinksData = await client.graphql({
          query: listUserLinks,
          variables: {
            filter: {
              clientEmail: { eq: userEmail },
            },
          },
        });

        const userLinks = userLinksData.data.listUserLinks.items;

        if (!userLinks.length) {
          console.log("No linked professionals found for this client.");
          return;
        }

        // 2. Extract all professional emails
        const professionalEmails = userLinks.map(
          (link) => link.professionalEmail
        );

        // 3. Loop through each professional to send a notification
        for (const email of professionalEmails) {
          try {
            // Update original notification status

            const userAttrs = await fetchUserAttributes();
            const responderId = userAttrs.sub;
            const responderFirstName = userAttrs["given_name"] || "";
            const responderLastName = userAttrs["family_name"] || "";
            const responderEmail = userAttrs.email;
            // Create RecommendationBack notification
            const newNote = {
              RecommedationNote: `${responderFirstName} ${responderLastName} has an assessment ready for you to reveiw`,

              SenderId: responderId,
              SenderFirstName: responderFirstName,
              SenderLastName: responderLastName,
              SenderEmail: userEmail,
              TargetEmail: email,
              NotificationType: "ReviewReady",
              Status: "pending",
              StatusDate: new Date().toISOString().split("T")[0],
            };
            console.log("Creating notification:", newNote);

            await client.graphql({
              query: createNotifications,
              variables: { input: newNote },
            });
          } catch (err) {
            console.error("Error responding to recommendation:", err);
          }
          console.log(`Notification sent to ${email}`);
        }
      } catch (error) {
        console.error("Error getting users professionals:", error);
      }
    } catch (err) {
      console.error("Failed to submit SDOH:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Shared styles to match glowing blue toggles
  const buttonBaseStyle = {
    minWidth: "100%",
    border: "2px solid",
    borderColor: "#ccc",
    padding: "10px",
    borderRadius: 12,
    background: "#fff",
    cursor: "pointer",
    fontWeight: "normal",
    fontSize: 14,
    textAlign: "center",
    boxShadow: "none",
    transition: "all 0.3s",

    margin: "10px auto",
  };

  const selectedButtonStyle = {
    border: "2px solid",
    borderColor: "#4da6ff",
    padding: "10px",
    borderRadius: 12,
    background: "#d9eaff",
    cursor: "pointer",
    fontWeight: "normal",
    fontSize: 14,
    textAlign: "center",
    boxShadow: "0 0 10px #4da6ffaa",
    transition: "all 0.3s",
  };

  const selectStyle = {
    minWidth: "100%",
    border: "2px solid",
    borderColor: "#ccc",
    padding: "10px",
    borderRadius: 12,
    background: "#fff",
    cursor: "pointer",
    fontWeight: "normal",
    fontSize: 14,
    textAlign: "center",
    boxShadow: "none",
    transition: "all 0.3s",
  };

  return (
    <div
      className="assessment-section"
      style={{
        maxWidth: 800,
        margin: "auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
      }}
    >
      <img
        src="/Wholistic-Depiction-Circle-Assessment.png"
        alt="Logo"
        style={{ width: 250, height: "auto", marginBottom: 70 }}
      />
      <div
        style={{ textAlign: "center", marginBottom: 14, marginTop: -80 }}
      ></div>
      {step === "trauma" && (
        <div
          className="trauma-box"
          style={{
            padding: 24,
            border: "1.5px solid #000000",
            borderRadius: 16,

            userSelect: "none",
          }}
        >
          <h1 style={{ marginBottom: 16, color: "#000000" }}>Trauma</h1>
          <hr style={{ border: "2px solid #ccc", margin: "34px 0" }} />
          <h3 style={{ marginBottom: 16, color: "#0077cc" }}>
            Do you consider yourself to have experienced any of the following?
            (Select all that apply)
          </h3>
          {traumaExperiences.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              className={`trauma-toggle ${formData[key] ? "selected" : ""}`}
              onClick={() => toggleBoolean(key)}
              style={{
                ...buttonBaseStyle,
                ...(formData[key] ? selectedButtonStyle : {}),
                textAlign: "center",
                display: "block",
              }}
            >
              {label}
            </button>
          ))}

          <h3 style={{ marginTop: 20, marginBottom: 10, color: "#0077cc" }}>
            For any experiences you chose above, do you consider them to be
            traumatic? (Trauma is defined as "an event, or series of events,
            that causes or caused moderate to severe stress reactions")
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {considerTraumaOptions.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                className={`trauma-toggle ${
                  formData.traumaBeliefKey === key ? "selected" : ""
                }`}
                onClick={() => setTraumaBelief(key)}
                style={{
                  ...buttonBaseStyle,

                  padding: "10px 20px",
                  ...(formData.traumaBeliefKey === key
                    ? selectedButtonStyle
                    : {}),
                }}
              >
                {label}
              </button>
            ))}
          </div>

          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            Which statements are true regarding the response to your traumatic
            experience(s)? (Select all that apply)
          </h3>
          {traumaResponseOptions.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              className={`trauma-toggle ${formData[key] ? "selected" : ""}`}
              onClick={() => toggleTraumaResponse(key)}
              style={{
                ...buttonBaseStyle,
                ...(formData[key] ? selectedButtonStyle : {}),
                textAlign: "center",
                display: "block",
              }}
            >
              {label}
            </button>
          ))}
          <hr style={{ border: "1px solid #ccc", margin: "24px 0" }} />
          <button
            onClick={handleTraumaNext}
            disabled={isSubmitting}
            style={{
              width: "100%",
              marginTop: 16,
              width: "100%",
              backgroundColor: "#0077cc",
              color: "white",
              fontWeight: "700",
              fontSize: 16,
              borderRadius: 8,
              padding: "12px 0",
              border: "none",
              cursor: "pointer",
              userSelect: "none",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
          >
            {isSubmitting ? "Submitting..." : "Next (Coping Mechanisms)"}
          </button>
          {traumaWarning && (
            <div
              style={{
                marginTop: 12,
                color: "#cc0000",
                fontWeight: "600",
                fontSize: 14,
                userSelect: "none",
              }}
            >
              {traumaWarning}
            </div>
          )}
        </div>
      )}

      {step === "coping" && (
        <div
          className="trauma-box"
          style={{
            padding: 24,
            border: "1.5px solid #000000",
            borderRadius: 16,

            userSelect: "none",
          }}
        >
          <h1 style={{ marginBottom: 16, color: "#000000" }}>
            Coping Mechanisms
          </h1>
          <hr style={{ border: "2px solid #ccc", margin: "34px 0" }} />
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            Within the last four weeks, approximately how often did you use the
            following coping mechanisms to deal with unpleasant experiences?
          </h3>
          {copingMechanisms.map(({ key, label }) => (
            <div
              key={key}
              className="coping-collumn"
              style={{
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                flexDirection: "column", // <-- vertical layout
              }}
            >
              <label
                htmlFor={key}
                style={{
                  flex: 1,
                  marginRight: 16,
                  fontWeight: "normal",
                  color: "#000000",
                }}
              >
                {label}
              </label>
              <select
                id={key}
                value={formData[key] || ""}
                onChange={(e) => handleCopingChange(key, e.target.value)}
                style={selectStyle}
              >
                <option value="">Select</option>
                {frequencyOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <hr style={{ border: "1px solid #ccc", margin: "24px 0" }} />
          <div className="coping-buttons" style={{ marginTop: 32 }}>
            <button
              onClick={() => setStep("trauma")}
              style={{
                marginTop: 16,
                width: "100%",
                backgroundColor: "#fff",
                color: "#333333",
                fontWeight: "700",
                fontSize: 16,
                borderRadius: 8,
                padding: "12px 0",
                border: "none",
                cursor: "pointer",
                userSelect: "none",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e6f0ff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#fff")
              }
            >
              Back
            </button>

            <button
              onClick={handleCopingSubmit}
              disabled={isSubmitting}
              style={{
                marginTop: 16,
                width: "100%",
                backgroundColor: "#0077cc",
                color: "white",
                fontWeight: "700",
                fontSize: 16,
                borderRadius: 8,
                padding: "12px 0",
                border: "none",
                cursor: "pointer",
                userSelect: "none",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              {isSubmitting ? "Submitting..." : "Next (Mental Health)"}
            </button>
          </div>
          {copingWarning && (
            <div
              style={{
                color: "#cc0000",
                backgroundColor: "#ffeeee",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "16px",
                width: "100%",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Please answer all coping mechanism questions before continuing.
            </div>
          )}
        </div>
      )}

      {step === "mental" && (
        <div
          className="mental-box"
          style={{
            padding: 24,
            border: "1.5px solid #000000",
            borderRadius: 16,

            userSelect: "none",
          }}
        >
          <h1 style={{ marginBottom: 16, color: "#000000" }}>Mental Health</h1>
          <hr style={{ border: "2px solid #ccc", margin: "34px 0" }} />
          <h3 style={{ marginBottom: 16, color: "#0077cc" }}>
            Do you have any mental health diagnoses? Select all that apply:
          </h3>
          {mentalHealthoptions.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              className={`trauma-toggle ${formData[key] ? "selected" : ""}`}
              onClick={() => toggleBoolean(key)}
              style={{
                ...buttonBaseStyle,
                ...(formData[key] ? selectedButtonStyle : {}),
                textAlign: "center",
                display: "block",
              }}
            >
              {label}
            </button>
          ))}
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            Within the last four weeks, how often did you experience:
          </h3>
          {mentalHealth.map(({ key, label }) => (
            <div
              key={key}
              className="coping-collumn"
              style={{
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                flexDirection: "column", // <-- vertical layout
              }}
            >
              <label
                htmlFor={key}
                style={{
                  flex: 1,
                  marginRight: 16,
                  fontWeight: "normal",
                  color: "#000000",
                }}
              >
                {label}
              </label>
              <select
                id={key}
                value={formData[key] || ""}
                onChange={(e) => handleCopingChange(key, e.target.value)}
                style={selectStyle}
              >
                <option value="">Select</option>
                {frequencyOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <hr style={{ border: "1px solid #ccc", margin: "24px 0" }} />
          <button
            onClick={() => setStep("coping")}
            style={{
              marginTop: 16,
              width: "100%",
              backgroundColor: "#fff",
              color: "#333333",
              fontWeight: "700",
              fontSize: 16,
              borderRadius: 8,
              padding: "12px 0",
              border: "none",
              cursor: "pointer",
              userSelect: "none",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#e6f0ff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#fff")
            }
          >
            Back
          </button>

          <button
            onClick={handleMentalSubmit}
            disabled={isSubmitting}
            style={{
              marginTop: 16,
              width: "100%",
              backgroundColor: "#0077cc",
              color: "white",
              fontWeight: "700",
              fontSize: 16,
              borderRadius: 8,
              padding: "12px 0",
              border: "none",
              cursor: "pointer",
              userSelect: "none",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
          >
            {isSubmitting ? "Submitting..." : "Next (Physical Health)"}
          </button>
          {mentalWarning && (
            <div
              style={{
                marginTop: 12,
                color: "red",
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              {mentalWarning}
            </div>
          )}
        </div>
      )}
      {step === "physical" && (
        <div
          className="physical-box"
          style={{
            padding: 24,
            border: "1.5px solid #000000",
            borderRadius: 16,

            userSelect: "none",
          }}
        >
          <h1 style={{ marginBottom: 16, color: "#000000" }}>
            Physical Health
          </h1>
          <hr style={{ border: "2px solid #ccc", margin: "34px 0" }} />
          <h3 style={{ marginBottom: 16, color: "#0077cc" }}>
            Do you have any physical health diagnoses? Select all that apply:
          </h3>
          {physicalHealthOptions.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              className={`trauma-toggle ${formData[key] ? "selected" : ""}`}
              onClick={() => toggleBoolean(key)}
              style={{
                ...buttonBaseStyle,
                ...(formData[key] ? selectedButtonStyle : {}),
                textAlign: "center",
                display: "block",
              }}
            >
              {label}
            </button>
          ))}
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            Within the last four weeks, how often did you consume at least one
            serving of:
          </h3>
          {physicalHealth.slice(0, 8).map(({ key, label }) => (
            <div
              key={key}
              className="coping-collumn"
              style={{
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                flexDirection: "column", // <-- vertical layout
              }}
            >
              <label
                htmlFor={key}
                style={{
                  flex: 1,
                  marginRight: 16,
                  fontWeight: "normal",
                  color: "#000000",
                }}
              >
                {label}
              </label>
              <select
                id={key}
                value={formData[key] || ""}
                onChange={(e) => handleCopingChange(key, e.target.value)}
                style={selectStyle}
              >
                <option value="">Select</option>
                {frequencyOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            Within the last four weeks, how often were you:
          </h3>
          {physicalHealth.slice(-1).map(({ key, label }) => (
            <div
              key={key}
              className="coping-collumn"
              style={{
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                flexDirection: "column", // <-- vertical layout
              }}
            >
              <label
                htmlFor={key}
                style={{
                  flex: 1,
                  marginRight: 16,
                  fontWeight: "normal",
                  color: "#000000",
                }}
              >
                {label}
              </label>
              <select
                id={key}
                value={formData[key] || ""}
                onChange={(e) => handleCopingChange(key, e.target.value)}
                style={selectStyle}
              >
                <option value="">Select</option>
                {frequencyOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <hr style={{ border: "1px solid #ccc", margin: "24px 0" }} />
          <button
            onClick={() => setStep("mental")}
            style={{
              marginTop: 16,
              width: "100%",
              backgroundColor: "#fff",
              color: "#333333",
              fontWeight: "700",
              fontSize: 16,
              borderRadius: 8,
              padding: "12px 0",
              border: "none",
              cursor: "pointer",
              userSelect: "none",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#e6f0ff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#fff")
            }
          >
            Back
          </button>

          <button
            onClick={handlePhysicalSubmit}
            disabled={isSubmitting}
            style={{
              marginTop: 16,
              width: "100%",
              backgroundColor: "#0077cc",
              color: "white",
              fontWeight: "700",
              fontSize: 16,
              borderRadius: 8,
              padding: "12px 0",
              border: "none",
              cursor: "pointer",
              userSelect: "none",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
          >
            {isSubmitting ? "Submitting..." : "Next (Spiritual Health)"}
          </button>
          {physicalWarning && (
            <div
              style={{
                marginTop: 12,
                color: "red",
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              {physicalWarning}
            </div>
          )}
          <button
            onClick={() => setStep("outlook")}
            style={{
              marginTop: 16,
              width: "100%",
              backgroundColor: "#d8d8d8",
              color: "#333333",
              fontWeight: "700",
              fontSize: 16,
              borderRadius: 8,
              padding: "12px 0",
              border: "none",
              cursor: "pointer",
              userSelect: "none",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#e6f0ff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#d8d8d8")
            }
          >
            Skip Spiritual Health
          </button>
        </div>
      )}

      {step === "spiritual" && (
        <div
          className="spiritual-box"
          style={{
            padding: 24,
            border: "1.5px solid #000000",
            borderRadius: 16,

            userSelect: "none",
          }}
        >
          <h1 style={{ marginBottom: 16, color: "#000000" }}>
            Spiritual Health
          </h1>
          <hr style={{ border: "2px solid #ccc", margin: "34px 0" }} />
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            How much do you agree with the following statements?
          </h3>
          {spiritualHealthOptions.slice(0, 2).map(({ key, label }) => (
            <div
              key={key}
              className="coping-collumn"
              style={{
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                flexDirection: "column", // <-- vertical layout
              }}
            >
              <label
                htmlFor={key}
                style={{
                  flex: 1,
                  marginRight: 16,
                  fontWeight: "normal",
                  color: "#000000",
                }}
              >
                {label}
              </label>
              <select
                id={key}
                value={formData[key] || ""}
                onChange={(e) => handleCopingChange(key, e.target.value)}
                style={selectStyle}
              >
                <option value="">Select</option>
                {frequencyOptions2.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            Within the last four weeks, how often did you:
          </h3>
          {spiritualHealthOptions.slice(2).map(({ key, label }) => (
            <div
              key={key}
              className="coping-collumn"
              style={{
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                flexDirection: "column", // <-- vertical layout
              }}
            >
              <label
                htmlFor={key}
                style={{
                  flex: 1,
                  marginRight: 16,
                  fontWeight: "normal",
                  color: "#000000",
                }}
              >
                {label}
              </label>
              <select
                id={key}
                value={formData[key] || ""}
                onChange={(e) => handleCopingChange(key, e.target.value)}
                style={selectStyle}
              >
                <option value="">Select</option>
                {frequencyOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <hr style={{ border: "1px solid #ccc", margin: "24px 0" }} />
          <div className="coping-buttons" style={{ marginTop: 32 }}>
            <button
              onClick={() => setStep("physical")}
              style={{
                marginTop: 16,
                width: "100%",
                backgroundColor: "#fff",
                color: "#333333",
                fontWeight: "700",
                fontSize: 16,
                borderRadius: 8,
                padding: "12px 0",
                border: "none",
                cursor: "pointer",
                userSelect: "none",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e6f0ff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#fff")
              }
            >
              Back
            </button>

            <button
              onClick={handleSpiritualSubmit}
              disabled={isSubmitting}
              style={{
                marginTop: 16,
                width: "100%",
                backgroundColor: "#0077cc",
                color: "white",
                fontWeight: "700",
                fontSize: 16,
                borderRadius: 8,
                padding: "12px 0",
                border: "none",
                cursor: "pointer",
                userSelect: "none",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              {isSubmitting ? "Submitting..." : "Next (Outlook on Life)"}
            </button>
            {spiritualWarning && (
              <div
                style={{
                  marginTop: 12,
                  color: "red",
                  textAlign: "center",
                  fontWeight: "500",
                }}
              >
                {spiritualWarning}
              </div>
            )}
          </div>
        </div>
      )}

      {step === "outlook" && (
        <div
          className="spiritual-box"
          style={{
            padding: 24,
            border: "1.5px solid #000000",
            borderRadius: 16,

            userSelect: "none",
          }}
        >
          <h1 style={{ marginBottom: 16, color: "#000000" }}>
            Outlook On Life
          </h1>
          <hr style={{ border: "2px solid #ccc", margin: "34px 0" }} />
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            Within the last four weeks, how often did you feel:
          </h3>
          {outlookonlife.slice(0, -1).map(({ key, label }) => (
            <div
              key={key}
              className="coping-collumn"
              style={{
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                flexDirection: "column", // <-- vertical layout
              }}
            >
              <label
                htmlFor={key}
                style={{
                  flex: 1,
                  marginRight: 16,
                  fontWeight: "normal",
                  color: "#000000",
                }}
              >
                {label}
              </label>
              <select
                id={key}
                value={formData[key] || ""}
                onChange={(e) => handleCopingChange(key, e.target.value)}
                style={selectStyle}
              >
                <option value="">Select</option>
                {frequencyOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            Within the last four weeks:
          </h3>
          {outlookonlife.slice(-1).map(({ key, label }) => (
            <div
              key={key}
              className="coping-collumn"
              style={{
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                flexDirection: "column", // <-- vertical layout
              }}
            >
              <label
                htmlFor={key}
                style={{
                  flex: 1,
                  marginRight: 16,
                  fontWeight: "normal",
                  color: "#000000",
                }}
              >
                {label}
              </label>
              <select
                id={key}
                value={formData[key] || ""}
                onChange={(e) => handleCopingChange(key, e.target.value)}
                style={selectStyle}
              >
                <option value="">Select</option>
                {frequencyOptions3.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <hr style={{ border: "1px solid #ccc", margin: "24px 0" }} />
          <div className="coping-buttons" style={{ marginTop: 32 }}>
            <button
              onClick={() => setStep("spiritual")}
              style={{
                marginTop: 16,
                width: "100%",
                backgroundColor: "#fff",
                color: "#333333",
                fontWeight: "700",
                fontSize: 16,
                borderRadius: 8,
                padding: "12px 0",
                border: "none",
                cursor: "pointer",
                userSelect: "none",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e6f0ff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#fff")
              }
            >
              Back
            </button>

            <button
              onClick={handleOutlookSubmit}
              disabled={isSubmitting}
              style={{
                marginTop: 16,
                width: "100%",
                backgroundColor: "#0077cc",
                color: "white",
                fontWeight: "700",
                fontSize: 16,
                borderRadius: 8,
                padding: "12px 0",
                border: "none",
                cursor: "pointer",
                userSelect: "none",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              {isSubmitting
                ? "Submitting..."
                : "Next (Social Determinants of Health)"}
            </button>
            {outlookWarning && (
              <div
                style={{
                  marginTop: 12,
                  color: "red",
                  textAlign: "center",
                  fontWeight: "500",
                }}
              >
                {outlookWarning}
              </div>
            )}
          </div>
        </div>
      )}

      {step === "SDOH" && (
        <div
          className="SDOH-box"
          style={{
            padding: 24,
            border: "1.5px solid #000000",
            borderRadius: 16,
            userSelect: "none",
          }}
        >
          <h1 style={{ marginBottom: 16, color: "#000000" }}>Demographics</h1>
          <hr style={{ border: "2px solid #ccc", margin: "34px 0" }} />

          {/* Age Range */}
          <h3 style={{ marginBottom: 12, color: "#0077cc" }}>Age Range</h3>
          <select
            name="ageRange"
            value={formData.SDoHAgeRange || ""}
            onChange={(e) => handleCopingChange("SDoHAgeRange", e.target.value)}
            style={selectStyle}
          >
            <option value="">Select Age Range</option>
            {[
              "9-12",
              "13-16",
              "17-19",
              "20-29",
              "30-39",
              "40-49",
              "50-59",
              "60-69",
              "70-79",
              "80-89",
              "90-99",
              "100+",
            ].map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>

          {/* I Identify As */}
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            I Identify As
          </h3>
          <select
            name="identify"
            value={
              IdentifyAsOptions.includes(formData.SDoHRace)
                ? formData.SDoHRace
                : formData.SDoHRace
                ? "Other"
                : ""
            }
            onChange={(e) => {
              const selected = e.target.value;
              handleCopingChange("SDoHRace", selected);
            }}
            style={selectStyle}
          >
            <option value="">Select Race</option>
            {IdentifyAsOptions.slice(0, -2).map((eth) => (
              <option key={eth} value={eth}>
                {eth}
              </option>
            ))}
          </select>

          {formData.SDoHRace &&
            (formData.SDoHRace === "Other" ||
              (!IdentifyAsOptions.includes(formData.SDoHRace) &&
                formData.SDoHRace !== "No Answer")) && (
              <input
                type="text"
                placeholder="Please specify"
                value={
                  formData.SDoHRace === "Other" ? "" : formData.SDoHRace || ""
                }
                onChange={(e) => handleCopingChange("SDoHRace", e.target.value)}
                style={{ ...selectStyle, marginTop: 8 }}
              />
            )}

          {/* Primary Nationality/Geographic Region */}
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            What is your primary nationality/geographic region?
          </h3>
          <select
            name="nationality"
            value={
              NationalityOptions.includes(formData.SDoHGeographicRegion)
                ? formData.SDoHGeographicRegion
                : formData.SDoHGeographicRegion
                ? "Other"
                : ""
            }
            onChange={(e) => {
              const selected = e.target.value;
              handleCopingChange("SDoHGeographicRegion", selected);
            }}
            style={selectStyle}
          >
            <option value="">Select Nationality</option>
            {NationalityOptions.slice(0, -2).map((eth) => (
              <option key={eth} value={eth}>
                {eth}
              </option>
            ))}
          </select>

          {formData.SDoHGeographicRegion &&
            (formData.SDoHGeographicRegion === "Other" ||
              (!NationalityOptions.includes(formData.SDoHGeographicRegion) &&
                formData.SDoHGeographicRegion !== "No Answer")) && (
              <input
                type="text"
                placeholder="Please specify"
                value={
                  formData.SDoHGeographicRegion === "Other"
                    ? ""
                    : formData.SDoHGeographicRegion || ""
                }
                onChange={(e) =>
                  handleCopingChange("SDoHGeographicRegion", e.target.value)
                }
                style={{ ...selectStyle, marginTop: 8 }}
              />
            )}

          {/* Primary Ethnicity */}
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            What is your primary ethnicity?
          </h3>
          <select
            name="ethnicity"
            value={
              ethnicityOptions.includes(formData.SDoHEthnicity)
                ? formData.SDoHEthnicity
                : formData.SDoHEthnicity
                ? "Other"
                : ""
            }
            onChange={(e) => {
              const selected = e.target.value;
              handleCopingChange("SDoHEthnicity", selected);
            }}
            style={selectStyle}
          >
            <option value="">Select Ethnicity</option>
            {ethnicityOptions.slice(0, -2).map((eth) => (
              <option key={eth} value={eth}>
                {eth}
              </option>
            ))}
          </select>

          {formData.SDoHEthnicity &&
            (formData.SDoHEthnicity === "Other" ||
              (!ethnicityOptions.includes(formData.SDoHEthnicity) &&
                formData.SDoHEthnicity !== "No Answer")) && (
              <input
                type="text"
                placeholder="Please specify"
                value={
                  formData.SDoHEthnicity === "Other"
                    ? ""
                    : formData.SDoHEthnicity || ""
                }
                onChange={(e) =>
                  handleCopingChange("SDoHEthnicity", e.target.value)
                }
                style={{ ...selectStyle, marginTop: 8 }}
              />
            )}

          {/* State */}
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            State
          </h3>
          <select
            name="state"
            value={formData.SDoHState || ""}
            onChange={(e) => handleCopingChange("SDoHState", e.target.value)}
            style={selectStyle}
          >
            <option value="">Select State</option>
            {[
              "Alabama",
              "Alaska",
              "Arizona",
              "Arkansas",
              "California",
              "Colorado",
              "Connecticut",
              "Delaware",
              "Florida",
              "Georgia",
              "Hawaii",
              "Idaho",
              "Illinois",
              "Indiana",
              "Iowa",
              "Kansas",
              "Kentucky",
              "Louisiana",
              "Maine",
              "Maryland",
              "Massachusetts",
              "Michigan",
              "Minnesota",
              "Mississippi",
              "Missouri",
              "Montana",
              "Nebraska",
              "Nevada",
              "New Hampshire",
              "New Jersey",
              "New Mexico",
              "New York",
              "North Carolina",
              "North Dakota",
              "Ohio",
              "Oklahoma",
              "Oregon",
              "Pennsylvania",
              "Rhode Island",
              "South Carolina",
              "South Dakota",
              "Tennessee",
              "Texas",
              "Utah",
              "Vermont",
              "Virginia",
              "Washington",
              "West Virginia",
              "Wisconsin",
              "Wyoming",
            ].map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          {/* Zip Code */}
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            Zip Code
          </h3>
          <input
            type="text"
            name="zipCode"
            placeholder="Enter Zip Code"
            value={formData.SDoHZipCode || ""}
            onChange={(e) => handleCopingChange("SDoHZipCode", e.target.value)}
            style={selectStyle}
          />

          {/* Current Marital Status */}
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            Current Marital Status
          </h3>
          <select
            name="maritalStatus"
            value={formData.SDoHMaritalStatus || ""}
            onChange={(e) =>
              handleCopingChange("SDoHMaritalStatus", e.target.value)
            }
            style={selectStyle}
          >
            <option value="">Select Marital Status</option>
            {["Single", "Married", "Divorced", "Widowed"].map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          {/* Military Status */}
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            Military Status
          </h3>
          <select
            name="militaryStatus"
            value={formData.SDoHMilitaryStatus || ""}
            onChange={(e) =>
              handleCopingChange("SDoHMilitaryStatus", e.target.value)
            }
            style={selectStyle}
          >
            <option value="">Select Military Status</option>
            {["Active", "Discharged", "Veteran", "Not Applicable"].map(
              (status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              )
            )}
          </select>

          {/* Gender Identity */}
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            I Identify As
          </h3>
          <select
            name="gender"
            value={
              GenderIdentityOptions.includes(formData.SDoHGender)
                ? formData.SDoHGender
                : formData.SDoHGender
                ? "Other"
                : ""
            }
            onChange={(e) => {
              const selected = e.target.value;
              handleCopingChange("SDoHGender", selected);
            }}
            style={selectStyle}
          >
            <option value="">Select Gender</option>
            {GenderIdentityOptions.slice(0, -2).map((eth) => (
              <option key={eth} value={eth}>
                {eth}
              </option>
            ))}
          </select>

          {formData.SDoHGender &&
            (formData.SDoHGender === "Other" ||
              (!GenderIdentityOptions.includes(formData.SDoHGender) &&
                formData.SDoHGender !== "No Answer")) && (
              <input
                type="text"
                placeholder="Please specify"
                value={
                  formData.SDoHGender === "Other"
                    ? ""
                    : formData.SDoHGender || ""
                }
                onChange={(e) =>
                  handleCopingChange("SDoHGender", e.target.value)
                }
                style={{ ...selectStyle, marginTop: 8 }}
              />
            )}

          {/* Education */}
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            Education
          </h3>
          <select
            name="education"
            value={formData.SDoHEducation || ""}
            onChange={(e) =>
              handleCopingChange("SDoHEducation", e.target.value)
            }
            style={selectStyle}
          >
            <option value="">Select Highest Education</option>
            {[
              "No Diploma",
              "HS Diploma",
              "Vocational",
              "Bachelors",
              "Masters",
              "Doctorate",
            ].map((edu) => (
              <option key={edu} value={edu}>
                {edu}
              </option>
            ))}
          </select>

          {/* Job Status */}
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            Job Status
          </h3>
          <select
            name="jobStatus"
            value={formData.SDoHJobStatus || ""}
            onChange={(e) =>
              handleCopingChange("SDoHJobStatus", e.target.value)
            }
            style={selectStyle}
          >
            <option value="">Select Job Status</option>
            {["Employed", "Unemployed", "Self Employed"].map((job) => (
              <option key={job} value={job}>
                {job}
              </option>
            ))}
          </select>

          {/* Income */}
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            Income
          </h3>
          <select
            name="income"
            value={formData.SDoHIncome || ""}
            onChange={(e) => handleCopingChange("SDoHIncome", e.target.value)}
            style={selectStyle}
          >
            <option value="">Select Income Range</option>
            {[
              "$0-$20K",
              "$21K-$40K",
              "$41K-$70K",
              "$71K-100K",
              "$101K-500K",
              "$501K +",
            ].map((income) => (
              <option key={income} value={income}>
                {income}
              </option>
            ))}
          </select>

          {/* Housing Status */}
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            Housing Status
          </h3>
          <select
            name="housing"
            value={
              HousingOptions.includes(formData.SDoHHousingStatus)
                ? formData.SDoHHousingStatus
                : formData.SDoHHousingStatus
                ? "Other"
                : ""
            }
            onChange={(e) => {
              const selected = e.target.value;
              handleCopingChange("SDoHHousingStatus", selected);
            }}
            style={selectStyle}
          >
            <option value="">Select Housing Status</option>
            {HousingOptions.slice(0, -2).map((eth) => (
              <option key={eth} value={eth}>
                {eth}
              </option>
            ))}
          </select>

          {formData.SDoHHousingStatus &&
            (formData.SDoHHousingStatus === "Other" ||
              (!HousingOptions.includes(formData.SDoHHousingStatus) &&
                formData.SDoHHousingStatus !== "No Answer")) && (
              <input
                type="text"
                placeholder="Please specify"
                value={
                  formData.SDoHHousingStatus === "Other"
                    ? ""
                    : formData.SDoHHousingStatus || ""
                }
                onChange={(e) =>
                  handleCopingChange("SDoHHousingStatus", e.target.value)
                }
                style={{ ...selectStyle, marginTop: 8 }}
              />
            )}

          {/* Type of home grew up in */}
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            What type of home did you grow up in?
          </h3>
          <select
            name="home"
            value={
              HomeGrewUpOptions.includes(formData.SDoHHomeAsChild)
                ? formData.SDoHHomeAsChild
                : formData.SDoHHomeAsChild
                ? "Other"
                : ""
            }
            onChange={(e) => {
              const selected = e.target.value;
              handleCopingChange("SDoHHomeAsChild", selected);
            }}
            style={selectStyle}
          >
            <option value="">Select Type</option>
            {HomeGrewUpOptions.slice(0, -2).map((eth) => (
              <option key={eth} value={eth}>
                {eth}
              </option>
            ))}
          </select>

          {formData.SDoHHomeAsChild &&
            (formData.SDoHHomeAsChild === "Other" ||
              (!HomeGrewUpOptions.includes(formData.SDoHHomeAsChild) &&
                formData.SDoHHomeAsChild !== "No Answer")) && (
              <input
                type="text"
                placeholder="Please specify"
                value={
                  formData.SDoHHomeAsChild === "Other"
                    ? ""
                    : formData.SDoHHomeAsChild || ""
                }
                onChange={(e) =>
                  handleCopingChange("SDoHHomeAsChild", e.target.value)
                }
                style={{ ...selectStyle, marginTop: 8 }}
              />
            )}

          {/* Religion */}
          <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
            Which religion provides you with strength and hope?
          </h3>
          <select
            name="religion"
            value={formData.SDoHReligion || ""}
            onChange={(e) => handleCopingChange("SDoHReligion", e.target.value)}
            style={selectStyle}
          >
            <option value="">Select Religion</option>
            {[
              "Buddhism",
              "Christianity",
              "Hinduism",
              "Islam",
              "Judaism",
              "None or N/A",
            ].map((religion) => (
              <option key={religion} value={religion}>
                {religion}
              </option>
            ))}
          </select>
          {formData.religion === "Other" && (
            <input
              type="text"
              name="religionOther"
              placeholder="Please specify"
              value={formData.religionOther || ""}
              onChange={handleInputChange}
              style={{ ...selectStyle, marginTop: 8 }}
            />
          )}

          {/* Denomination dropdown - only show if religion is exactly 'Christianity' */}
          {formData.SDoHReligion === "Christianity" && (
            <>
              <h3 style={{ marginTop: 24, marginBottom: 12, color: "#0077cc" }}>
                Please select your Christian denomination
              </h3>
              <select
                name="denomination"
                value={
                  DenominationOptions.includes(formData.SDoHDenomination)
                    ? formData.SDoHDenomination
                    : formData.SDoHDenomination
                    ? "Other"
                    : ""
                }
                onChange={(e) => {
                  const selected = e.target.value;
                  handleCopingChange("SDoHDenomination", selected);
                }}
                style={selectStyle}
              >
                <option value="">Select Denomination</option>
                {DenominationOptions.slice(0, -2).map((eth) => (
                  <option key={eth} value={eth}>
                    {eth}
                  </option>
                ))}
              </select>

              {formData.SDoHDenomination &&
                (formData.SDoHDenomination === "Other" ||
                  (!DenominationOptions.includes(formData.SDoHDenomination) &&
                    formData.SDoHDenomination !== "No Answer")) && (
                  <input
                    type="text"
                    placeholder="Please specify"
                    value={
                      formData.SDoHDenomination === "Other"
                        ? ""
                        : formData.SDoHDenomination || ""
                    }
                    onChange={(e) =>
                      handleCopingChange("SDoHDenomination", e.target.value)
                    }
                    style={{ ...selectStyle, marginTop: 8 }}
                  />
                )}
            </>
          )}

          <hr style={{ border: "1px solid #ccc", margin: "24px 0" }} />
          {/* Buttons */}
          <div style={{ marginTop: 32 }}>
            <button
              onClick={() => setStep("outlook")} // replace previousStep with actual previous step string
              style={{
                marginTop: 16,
                width: "100%",
                backgroundColor: "#fff",
                color: "#333333",
                fontWeight: "700",
                fontSize: 16,
                borderRadius: 8,
                padding: "12px 0",
                border: "none",
                cursor: "pointer",
                userSelect: "none",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e6f0ff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#fff")
              }
            >
              Back
            </button>

            <button
              onClick={() => handleSDOHSubmit(true)}
              disabled={isSubmitting}
              style={{
                marginTop: 16,
                width: "100%",
                backgroundColor: "#0077cc",
                color: "white",
                fontWeight: "700",
                fontSize: 16,
                borderRadius: 8,
                padding: "12px 0",
                border: "none",
                cursor: "pointer",
                userSelect: "none",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            {sdohWarning && (
              <div
                style={{
                  marginTop: 12,
                  color: "red",
                  textAlign: "center",
                  fontWeight: "500",
                }}
              >
                {sdohWarning}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

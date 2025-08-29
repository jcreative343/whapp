import { generateClient } from "aws-amplify/api";
import { fetchUserAttributes, getCurrentUser } from "aws-amplify/auth";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // ✅ important
import { useEffect, useRef, useState } from "react";
import {
  listAssessmentAnswers,
  listAssessmentScores,
  listCreatePlans,
  listProfessionalReviews,
} from "../graphql/queries";

const todayStr = new Date().toISOString().slice(0, 10);
const oneYearAgo = new Date();
oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
const oneYearAgoStr = oneYearAgo.toISOString().slice(0, 10);
// ✅ Patch the jsPDF instance (important!)

const client = generateClient();

const keyToQuestionMap = {
  // Trauma-related (boolean)
  TRHurtfulNames: "Were you called hurtful names",
  TRNoNurturing: "Was your environment lacking nurturing",
  TRHit: "Have you experienced physical hitting or abuse",
  TRNeedsNotMet: "Were your basic needs not met",
  TRForcedSex: "Have you experienced forced sexual acts",
  TRResponsible: "Were you wrongly held responsible for something",
  TRViolence: "Have you experienced violence",
  TRSubstanceAbuse: "Has substance abuse affected you or your family",
  TRMentalIllness: "Has mental illness affected you or your family",
  TRParentDivorce: "Have your parents divorced or separated",
  TRParentIncarcerated: "Has a parent been incarcerated",
  TRHomelessness: "Have you experienced homelessness",
  TRBodyFunction:
    "Have you experienced issues with body function or disability",
  TRNaturalDisaster: "Have you been affected by a natural disaster",
  TRDirectTerrorism: "Have you been directly affected by terrorism",
  TRIndirectTerrorism: "Have you been indirectly affected by terrorism",
  TRLovedOne: "Have you lost a loved one",
  TRBelief: "Have you experienced trauma related to your beliefs",
  TRResponseProfessional: "Did you receive help from a professional",
  TRResponseFamilyFriend: "Did you receive help from family or friends",
  TRResponseGod: "Did you find support through spiritual beliefs",
  TRResponseNoOne: "Did you receive no support",
  TRNoTrauma: "Have you experienced no trauma",

  // Coping Mechanisms (string frequencies)
  CMAlcohol: "Use alcohol to cope",
  CMDrugs: "Use drugs to cope",
  CMOvereating: "Overeat to cope",
  CMSmoking: "Smoke to cope",
  CMGaming: "Use gaming to cope",
  CMShopping: "Use shopping to cope",
  CMGambling: "Use gambling to cope",
  CMSex: "Use sex to cope",
  CMPorn: "Use pornography to cope",
  CMBlaming: "Blame others to cope",
  CMHurting: "Hurt yourself to cope",
  CMDisengage: "Disengage to cope",
  CMArt: "Use art to cope",
  CMMusic: "Use music to cope",
  CMPoetry: "Use poetry to cope",
  CMReading: "Use reading to cope",
  CMGroups: "Participate in groups to cope",
  CMCounseling: "Seek counseling to cope",
  CMVenting: "Vent to cope",
  CMWriting: "Write to cope",
  CMSensory: "Use sensory methods to cope",
  CMDancing: "Dance to cope",
  CMExercising: "Exercise to cope",
  CMWalking: "Walk to cope",
  CMChange: "Change environment to cope",
  CMAnalyze: "Analyze to cope",
  CMDaydream: "Daydream to cope",
  CMPositive: "Use positive thinking to cope",

  // Mental Health Diagnoses (boolean)
  MHDxPTSD: "Diagnosed with PTSD",
  MHDxDepression: "Diagnosed with Depression",
  MHDxSUD: "Diagnosed with Substance Use Disorder",
  MHDxOtherMental: "Diagnosed with other mental health conditions",

  // Mental Health Symptoms (string frequency)
  MHSleeplessness: "Experience sleeplessness",
  MHAlcoholUse: "Use alcohol",
  MHAnxiety: "Experience anxiety",
  MHDepression: "Experience depression",
  MHDrugUse: "Use drugs",
  MHGrief: "Experience grief",
  MHGuilt: "Experience guilt",
  MHIrritability: "Experience irritability",
  MHStress: "Experience stress",
  MHRegret: "Experience regret",
  MHSuicidalThoughts: "Have suicidal thoughts",
  MHLoneliness: "Feel loneliness",
  MHWorry: "Feel worried",

  // Physical Health Diagnoses (boolean)
  PHDxInfertility: "Diagnosed with infertility",
  PHDxCurableSTD: "Diagnosed with a curable STD",
  PHDxIncurableSTD: "Diagnosed with an incurable STD",
  PHDxCancer: "Diagnosed with cancer",
  PHDxDiabetes: "Diagnosed with diabetes",
  PHDxHighBlood: "Diagnosed with high blood pressure",
  PHDxHeartDisease: "Diagnosed with heart disease",
  PHDxIrritableBowel: "Diagnosed with irritable bowel syndrome",
  PHDxVitA: "Vitamin A deficiency",
  PHDxVitB: "Vitamin B deficiency",
  PHDxVitC: "Vitamin C deficiency",
  PHDxVitD: "Vitamin D deficiency",
  PHDxVitE: "Vitamin E deficiency",
  PHDxVitK: "Vitamin K deficiency",
  PHDxAutoimmune: "Diagnosed with autoimmune condition",
  PHDxOtherPhysical: "Diagnosed with other physical health conditions",

  // Physical Health Behaviors (string frequency)
  PHVegeFruits: "Eat vegetables and fruits",
  PHBeanLentils: "Eat beans and lentils",
  PHGrainBreads: "Eat grains and breads",
  PHDairy: "Consume dairy products",
  PHMeat: "Eat meat",
  PHFishSeafood: "Eat fish and seafood",
  PHSweets: "Consume sweets",
  PHWater: "Drink water",
  PHPhysicalActivity: "Engage in physical activity",

  // Spiritual Health (strings)
  SHSpiritualDefine: "Spirituality defines lifestyle",
  SHSpiritualIntegrate: "Spirituality integrated into lifestyle",
  SHPrayer: "Frequency of prayer",
  SHSpiritualActivity: "Frequency of healthy spiritual activities",
  SHReadText: "Frequency of reading religious text",
  SHAlignText: "Frequency of aligning life with religious beliefs",
  SHCommunity: "Frequency of engaging with religious community",

  // Overall Life Quality (strings)
  OLHope: "Hope for future and sense of purpose",
  OLPeace: "Peace of mind",
  OLLearning: "Openness to learn and grow",
  OLJoy: "Joy in trying times",
  OLStable: "Financial stability",
  OLSafety: "Safety and security",
  OLKindness: "Kindness toward self and others",
  OLForgiveness: "Forgiving of self and others",
  OLPatience: "Patient with self and others",
  OLRelationships: "Healthy relationships",
  OLBoundaries: "Healthy boundaries",
  OLEUnpleasant: "Experience unpleasant emotions",
  OLEPleasant: "Experience pleasant emotions",
  OLEControl: "Control over emotions",
  OLENumber: "Number of emotions expressed",

  // Social Determinants of Health (strings)
  SDoHAgeRange: "Age range",
  SDoHRace: "Race",
  SDoHGeographicRegion: "Geographic region",
  SDoHEthnicity: "Ethnicity",
  SDoHState: "State",
  SDoHZipCode: "Zip code",
  SDoHMaritalStatus: "Marital status",
  SDoHMilitaryStatus: "Military status",
  SDoHGender: "Gender",
  SDoHEducation: "Highest education level",
  SDoHJobStatus: "Job status",
  SDoHIncome: "Income level",
  SDoHHousingStatus: "Housing status",
  SDoHHomeAsChild: "Home environment as a child",
  SDoHReligion: "Religion",
  SDoHDenomination: "Religious denomination",

  // System fields
  CompletedDate: "Assessment completed on",
  CompletedTime: "Assessment completed at",
  isActive: "Is this assessment currently active",
};

// Domains grouped by keys for rendering
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
];

const traumaResponseKeys = [
  "TRResponseProfessional",
  "TRResponseFamilyFriend",
  "TRResponseGod",
  "TRResponseNoOne",
  "TRNoTrauma",
];

const copingKeys = [
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
];

const mentalHealthDxKeys = [
  "MHDxPTSD",
  "MHDxDepression",
  "MHDxSUD",
  "MHDxOtherMental",
];

const mentalHealthSymptomKeys = [
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

const physicalHealthDxKeys = [
  "PHDxInfertility",
  "PHDxCurableSTD",
  "PHDxIncurableSTD",
  "PHDxCancer",
  "PHDxDiabetes",
  "PHDxHighBlood",
  "PHDxHeartDisease",
  "PHDxIrritableBowel",
  "PHDxVitA",
  "PHDxVitB",
  "PHDxVitC",
  "PHDxVitD",
  "PHDxVitE",
  "PHDxVitK",
  "PHDxAutoimmune",
  "PHDxOtherPhysical",
];

const physicalHealthBehaviorKeys = [
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

const spiritualHealthKeys = [
  "SHSpiritualDefine",
  "SHSpiritualIntegrate",
  "SHPrayer",
  "SHSpiritualActivity",
  "SHReadText",
  "SHAlignText",
  "SHCommunity",
];

const overallLifeQualityKeys = [
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

const sdoHKeys = [
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
  "SDoHDenomination",
];
const LIST_TRACK_PLANS_CUSTOM = `
  query ListTrackPlans($filter: ModelTrackPlanFilterInput) {
    listTrackPlans(filter: $filter) {
      items {
        id
        Discontinued
        Successful
        Action
        ActionQuestion
        CompletedDate
        Frequency
        ActionNote
        DiscontinuedDate
        SuccessfulDate
        Percentage
        Update1Note
        Update1Date
        Update2Note
        Update2Date
        Update3Note
        Update3Date
        Update4Note
        Update4Date
        Update5Note
        Update5Date
        Update6Note
        Update6Date
        Update7Note
        Update7Date
        Update8Note
        Update8Date
      }
    }
  }
`;

// Combined keys to exclude from generic Q&A (to avoid duplicates)
const keysInLists = [
  ...traumaKeys,
  ...traumaResponseKeys,
  ...copingKeys,
  ...mentalHealthDxKeys,
  ...mentalHealthSymptomKeys,
  ...physicalHealthDxKeys,
  ...physicalHealthBehaviorKeys,
  ...spiritualHealthKeys,
  ...overallLifeQualityKeys,
  ...sdoHKeys,
];

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    minHeight: "100vh",
    marginTop: -100,
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: "center",
    color: "#003366",
  },
  planCard: {
    width: 500,
    border: "2px solid #d8d8d8",
    borderRadius: 14,
    padding: 24,
    marginBottom: 32,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  planTitle: { marginBottom: -6, color: "#004080" },
  planQuestion: {
    marginBottom: 6,
    fontSize: 25,
    fontWeight: 600,
    color: "#004080",
  },
  planText: { marginBottom: 16, fontSize: 15, color: "#004080" },
  weeksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 14,
    marginTop: 20,
  },
  weekButton: {
    borderColor: "#ccc",
    height: 60,
    width: "100%",
    border: "2px solid #ccc",
    padding: 10,
    borderRadius: 12,
    background: "#fff",
    cursor: "pointer",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  weekButtonActive: {
    borderColor: "#4da6ff",
    background: "#d9eaff",
    boxShadow: "0 0 10px #4da6ffaa",
  },
  weekEmoji: {
    fontSize: 36,
    lineHeight: 1,
  },
  expandedWeek: {
    marginTop: 24,
    padding: 20,
    border: "2px solid #0077cc",
    borderRadius: 14,
    backgroundColor: "#fff",
    color: "#003366",
  },
  expandedWeekTitle: {
    marginBottom: 10,
    color: "#0077cc",
  },
  moodButtons: {
    display: "flex",
    gap: 24,
    marginBottom: 16,
    justifyContent: "center",
  },
  moodButton: {
    fontSize: 48,
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    userSelect: "none",
    padding: 0,
    transition: "transform 0.3s ease",
  },
  moodButtonSelected: {
    animation: "bounce 0.6s",
  },
  textarea: {
    width: "100%",
    padding: 12,
    fontSize: 15,
    borderRadius: 10,
    border: "1px solid #aaa",
    resize: "vertical",
    fontFamily: "inherit",
  },
  discontinueButton: {
    width: 130,
    marginTop: 12,
    padding: "8px 16px",
    backgroundColor: "transparent",
    border: "2px solid #cc4444",
    borderRadius: 12,
    color: "#cc4444",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    alignSelf: "flex-start",
  },
  editButton: {
    width: 130,
    marginTop: 12,
    padding: "8px 16px",
    backgroundColor: "#0077cc",
    border: "none",
    borderRadius: 12,
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s",
    alignSelf: "flex-start",
  },
  frequencySelect: {
    marginTop: 10,
    width: "100%",
    padding: "8px 12px",
    borderRadius: 10,
    border: "1px solid #0077cc",
    fontSize: 14,
    color: "#003366",
  },

  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#ffffff",
    border: "2px solid #004080",
    borderRadius: "16px",
    padding: "30px 24px",
    width: "90%",
    maxWidth: "420px",
    textAlign: "center",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
    animation: "fadeInScale 0.3s ease-in-out",
  },
  modalButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginTop: "20px",
    flexWrap: "wrap",
  },
  modalButtonConfirm: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "999px",
    padding: "10px 20px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  modalButtonCancel: {
    backgroundColor: "#ccc",
    color: "#000",
    border: "none",
    borderRadius: "999px",
    padding: "10px 20px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function PercentageWheel({ percentage }) {
  const progress = Math.min(Math.max(percentage, 0), 100);
  const dashOffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  // Determine color based on percentage
  let strokeColor = "#cc4444"; // red default
  if (progress >= 80) {
    strokeColor = "#44cc44"; // green
  } else if (progress >= 70) {
    strokeColor = "#cccc44"; // yellow
  }

  return (
    <svg
      width={120}
      height={120}
      viewBox="0 0 120 120"
      aria-label={`Progress: ${progress}%`}
      role="img"
    >
      {/* Background circle */}
      <circle
        cx="60"
        cy="60"
        r={RADIUS}
        stroke="#e6e6e6"
        strokeWidth="12"
        fill="none"
      />
      {/* Progress arc */}
      <circle
        cx="60"
        cy="60"
        r={RADIUS}
        stroke={strokeColor}
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={dashOffset}
        style={{
          transition: "stroke-dashoffset 0.6s ease",
          transform: "rotate(-90deg)",
          transformOrigin: "50% 50%",
        }}
      />
      {/* Percentage Text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="30"
        fontWeight="600"
        fill="#004080"
        fontFamily="Arial, sans-serif"
      >
        {progress}%
      </text>
    </svg>
  );
}

const categoryThresholds = {
  CMScore: [
    { min: 0, max: 1, color: "#28a745" },
    { min: 2, max: 3, color: "#ffc107" },
    { min: 4, max: 48, color: "#B00000" },
  ],
  TRScore: [
    { min: 0, max: 10, color: "#28a745" }, // green
    { min: 11, max: 20, color: "#ffc107" }, // yellow
    { min: 21, max: 40, color: "#B00000" }, // red
  ],

  MHScore: [
    { min: 0, max: 13, color: "#28a745" },
    { min: 14, max: 26, color: "#ffc107" },
    { min: 27, max: 54, color: "#B00000" },
  ],
  PHScore: [
    { min: 0, max: 5, color: "#28a745" },
    { min: 6, max: 10, color: "#ffc107" },
    { min: 11, max: 30, color: "#B00000" },
  ],
  SHScore: [
    { min: 0, max: 7, color: "#28a745" },
    { min: 8, max: 14, color: "#ffc107" },
    { min: 15, max: 28, color: "#B00000" },
  ],
  OLScore: [
    { min: 0, max: 15, color: "#28a745" },
    { min: 16, max: 30, color: "#ffc107" },
    { min: 31, max: 60, color: "#B00000" },
  ],
};

function describeTextArc(cx, cy, radius, startAngle, endAngle) {
  const rad = (deg) => (deg * Math.PI) / 180;
  const startX = cx + radius * Math.cos(rad(startAngle));
  const startY = cy + radius * Math.sin(rad(startAngle));
  const endX = cx + radius * Math.cos(rad(endAngle));
  const endY = cy + radius * Math.sin(rad(endAngle));

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
}
function AssessmentDetails({ assessmentScores, categoryThresholds, answers }) {
  // Define your domains with keys & questions keys to include (excluding trauma and diagnoses)
  const domains = [
    {
      key: "CMScore",
      label: "Coping Mechanisms",
      questionKeys: [
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
    },
    {
      key: "MHScore",
      label: "Mental Health Symptoms",
      questionKeys: [
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
    },
    {
      key: "PHScore",
      label: "Physical Health Behaviors",
      questionKeys: [
        "PHVegeFruits",
        "PHBeanLentils",
        "PHGrainBreads",
        "PHDairy",
        "PHMeat",
        "PHFishSeafood",
        "PHSweets",
        "PHWater",
        "PHPhysicalActivity",
      ],
    },
    {
      key: "SHScore",
      label: "Spiritual Health",
      questionKeys: [
        "SHSpiritualDefine",
        "SHSpiritualIntegrate",
        "SHPrayer",
        "SHSpiritualActivity",
        "SHReadText",
        "SHAlignText",
        "SHCommunity",
      ],
    },
    {
      key: "OLScore",
      label: "Outlook On Life",
      questionKeys: [
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
      ],
    },
  ];

  // Helper: get color for domain by score (same as your thresholds)
  const getDomainColor = (score, domainKey) => {
    const t = categoryThresholds[domainKey];
    if (!t) return "gray";
    for (const threshold of t) {
      if (score >= threshold.min && score <= threshold.max)
        return threshold.color;
    }
    return "gray";
  };

  const getQuestionColor = (value) => {
    if (value === undefined || value === null) return "gray";
    if (typeof value === "string") return "black"; // categorical strings no color fill
    if (value >= 0 && value <= 1) return "#28a745"; // green
    if (value === 2) return "#ffc107"; // yellow
    if (value >= 3 && value <= 4) return "#B00000"; // red
    return "gray";
  };

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {domains.map(({ key, label, questionKeys, isCategorical }) => {
        const domainScore = assessmentScores?.[key];
        const domainColor = getDomainColor(domainScore, key);

        return (
          <section key={key} style={{ marginBottom: 40 }}>
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                color: "#004a99",
                borderBottom: "3px solid #004a99",
                paddingBottom: 6,
                fontWeight: "700",
                fontSize: "1.3rem",
              }}
            >
              <span>{label}</span>
              <span
                style={{
                  minWidth: 20,
                  minHeight: 20,
                  borderRadius: "50%",
                  backgroundColor: domainColor,

                  display: "inline-block",
                }}
                title={`Domain score: ${domainScore}`}
              />
            </h3>

            <ul
              style={{ marginLeft: 24, listStyleType: "none", paddingLeft: 0 }}
            >
              {questionKeys.map((qKey) => {
                // Get the answer text/value from answers (not scores)
                const answerVal = answers?.[qKey];
                // Get the numeric score for coloring
                const scoreVal = assessmentScores?.[qKey];
                const color = isCategorical
                  ? "black"
                  : getQuestionColor(scoreVal);

                return (
                  <li
                    key={qKey}
                    style={{
                      display: "flex",
                      alignItems: "flex-start", // align circle to top of text
                      gap: 12,
                      marginBottom: 6,
                      color: "#333",
                    }}
                  >
                    {!isCategorical && (
                      <span
                        style={{
                          width: 14,
                          height: 14,
                          flexShrink: 0,
                          borderRadius: "50%",
                          backgroundColor: color,

                          display: "inline-block",
                          marginTop: 2, // small adjustment so it visually aligns with first text line
                        }}
                        title={`Score: ${scoreVal}`}
                      />
                    )}
                    <span
                      style={{ flex: 1, textAlign: "left", lineHeight: 1.4 }}
                    >
                      <strong>{keyToQuestionMap?.[qKey]}</strong>:{" "}
                      {answerVal !== undefined ? answerVal.toString() : "N/A"}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

// Helper function stays the same
function describeArc(cx, cy, innerRadius, outerRadius, startAngle, endAngle) {
  const startRad = (startAngle - 90) * (Math.PI / 180);
  const endRad = (endAngle - 90) * (Math.PI / 180);

  const x1Outer = cx + outerRadius * Math.cos(startRad);
  const y1Outer = cy + outerRadius * Math.sin(startRad);

  const x2Outer = cx + outerRadius * Math.cos(endRad);
  const y2Outer = cy + outerRadius * Math.sin(endRad);

  const x1Inner = cx + innerRadius * Math.cos(endRad);
  const y1Inner = cy + innerRadius * Math.sin(endRad);

  const x2Inner = cx + innerRadius * Math.cos(startRad);
  const y2Inner = cy + innerRadius * Math.sin(startRad);

  return `
    M ${x1Outer} ${y1Outer}
    A ${outerRadius} ${outerRadius} 0 0 1 ${x2Outer} ${y2Outer}
    L ${x1Inner} ${y1Inner}
    A ${innerRadius} ${innerRadius} 0 0 0 ${x2Inner} ${y2Inner}
    Z
  `;
}

export default function ViewReports() {
  const [assessments, setAssessments] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const [viewFilter, setViewFilter] = useState("assessments"); // NEW: assessments or trackPlans
  const [trackPlans, setTrackPlans] = useState([]); // if you're loading track plans later
  const [showPercentages, setShowPercentages] = useState(true);
  const [assessmentScores, setAssessmentScores] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [startDate, setStartDate] = useState(oneYearAgoStr);
  const [endDate, setEndDate] = useState(todayStr);
  const [professionalReviews, setProfessionalReviews] = useState([]);
  const [healthPlanReviews, setHealthPlanReviews] = useState([]);
  const [selectedFields, setSelectedFields] = useState({
    triggers: [],
    warningSigns: [],
    strengths: [],
    barriers: [],
  });

  useEffect(() => {
    const fetchPlan = async () => {
      const user = await getCurrentUser();
      try {
        console.log("Fetching CreatePlan for userId:", user.userId);

        const response = await client.graphql({
          query: listCreatePlans,
          variables: { filter: { userId: { eq: user.userId } } },
        });

        console.log("GraphQL response:", response);

        const plan = response?.data?.listCreatePlans?.items?.[0];
        if (!plan) {
          console.log("No plan found for this user");
          return;
        }

        console.log("Fetched plan:", plan);

        const getChecked = (prefix, fields) => {
          const checked = fields.filter((f) => plan[f] === true);
          console.log(`Checked fields for ${prefix}:`, checked);
          return checked.map((f) => f.replace(prefix, ""));
        };

        const newSelectedFields = {
          triggers: getChecked("TG", [
            "TGBetrayal",
            "TGBoundaries",
            "TGDisorder",
            "TGPain",
            "TGRejection",
            "TGStress",
            "TGMemories",
            "TGUnjustTreatment",
            "TGUnpleasantConversations",
            "TGUnsafeEnvironments",
            "TGOther",
          ]),
          warningSigns: getChecked("WS", [
            "WSFlashbacks",
            "WSIncreasedAppetite",
            "WSDecreasedAppetite",
            "WSIntenseEmotions",
            "WSDisconnecting",
            "WSTime",
            "WSNegativeSelfTalk",
            "WSNeglectingSelfCare",
            "WSNightmares",
            "WSRecklessBehavior",
            "WSOther",
          ]),
          strengths: getChecked("PS", [
            "PSProblemSolving",
            "PSSelfEsteem",
            "PSChoiceAutonomy",
            "PSSelfCare",
            "PSSelfAwareness",
            "PSCreativity",
          ])
            .concat(
              getChecked("CS", [
                "CSForgiveness",
                "CSKindness",
                "CSGratitude",
                "CSPatience",
                "CSCourage",
              ])
            )
            .concat(
              getChecked("CMS", [
                "CMSCopingChoice",
                "CMSResilience",
                "CMSSelfRegulation",
                "CMSOptimism",
              ])
            )
            .concat(
              getChecked("COM", [
                "COMSupportSystem",
                "COMSocialIntelligence",
                "COMCommunication",
                "COMFaithCommunity",
                "COMAccomplishments",
              ])
            ),
          barriers: getChecked("BR", [
            "BRStableHousing",
            "BRQualityHealthcare",
            "BRProfessionalAccess",
            "BRInsuranceCoverage",
            "BRFinancialConstraints",
            "BREducationAttainment",
            "BRSocialStigma",
            "BRUnsupportiveCommunity",
            "BRNonexistentCommunity",
            "BRCommunityResources",
            "BRProfessionalTrust",
            "BRHealthcareSystemTrust",
            "BRCognitiveImpairments",
            "BRDependentCare",
            "BRTransportation",
            "BRTechnologyAccess",
            "BRLanguage",
            "BRHealthcareProcess",
            "BROther",
            "BRResponseNote",
          ]),
        };

        console.log("Selected fields to set:", newSelectedFields);

        setSelectedFields(newSelectedFields);
      } catch (err) {
        console.error("Error fetching plan:", err);
      }
    };

    fetchPlan();
  }, [client.userId]);

  useEffect(() => {
    async function fetchHealthPlanReviewsForClient() {
      const user = await getCurrentUser();
      if (!user) {
        setHealthPlanReviews([]);
        return;
      }

      try {
        const healthPlanResponse = await client.graphql({
          query: listCreatePlans,
          variables: {
            filter: {
              userId: { eq: user.userId },
            },
          },
        });

        const healthPlans =
          healthPlanResponse.data.listCreatePlans?.items || [];
        const healthPlanId = healthPlans.length > 0 ? healthPlans[0].id : null;
        console.log("Health Plan ID:", healthPlanId);

        if (!healthPlanId) {
          setHealthPlanReviews([]);
          return;
        }

        const reviewResponse = await client.graphql({
          query: listProfessionalReviews,
          variables: {
            filter: {
              ReviewedId: { eq: healthPlanId },
            },
          },
        });

        const reviews =
          reviewResponse.data.listProfessionalReviews?.items || [];
        setHealthPlanReviews(reviews);
      } catch (error) {
        console.error("Error fetching health plan reviews:", error);
        setHealthPlanReviews([]);
      }
    }

    fetchHealthPlanReviewsForClient();
  }, [viewFilter]);

  useEffect(() => {
    async function fetchProfessionalReviews() {
      if (!selectedId || viewFilter !== "assessments") {
        setProfessionalReviews([]);
        return;
      }

      try {
        const response = await client.graphql({
          query: listProfessionalReviews,
          variables: {
            filter: {
              ReviewedId: { eq: selectedId },
            },
          },
        });

        const items = response.data.listProfessionalReviews?.items || [];
        setProfessionalReviews(items);
      } catch (error) {
        console.error("Error loading professional reviews:", error);
        setProfessionalReviews([]);
      }
    }

    fetchProfessionalReviews();
  }, [selectedId, viewFilter]);
  // filtered plans based on dates
  const filteredPlans = trackPlans.filter((plan) => {
    if (!plan.CompletedDate) return false;
    // direct string comparison
    return plan.CompletedDate >= startDate && plan.CompletedDate <= endDate;
  });

  function RadialScoreChart({
    scores,
    thresholds = categoryThresholds,
    size = isMobile ? 200 : 400,
  }) {
    const center = size / 2;
    const radiusStep = isMobile ? 20 : 40;

    const categories = [
      { key: "SHScore", label: "Spiritual" },
      { key: "CMScore", label: "Coping" },
      { key: "OLScore", label: "Outlook" },
      { key: "TRScore", label: "Trauma" },
      { key: "PHScore", label: "Physical" },
      { key: "MHScore", label: "Mental" },
    ];

    const sliceAngle = 360 / categories.length;
    const ringColors = ["#28a745", "#ffc107", "#B00000"];

    // Helper to describe arcs for rings (outerRadius added for thickness)
    function describeArc(
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle
    ) {
      const rad = (deg) => (deg * Math.PI) / 180;

      // Points for outer arc
      const x1 = cx + outerRadius * Math.cos(rad(startAngle));
      const y1 = cy + outerRadius * Math.sin(rad(startAngle));
      const x2 = cx + outerRadius * Math.cos(rad(endAngle));
      const y2 = cy + outerRadius * Math.sin(rad(endAngle));

      // Points for inner arc
      const x3 = cx + innerRadius * Math.cos(rad(endAngle));
      const y3 = cy + innerRadius * Math.sin(rad(endAngle));
      const x4 = cx + innerRadius * Math.cos(rad(startAngle));
      const y4 = cy + innerRadius * Math.sin(rad(startAngle));

      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

      return [
        `M ${x1} ${y1}`,
        `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
        `L ${x3} ${y3}`,
        `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4}`,
        "Z",
      ].join(" ");
    }

    // Function to get threshold index for a score and category
    const getThresholdIndex = (score, categoryKey) => {
      const t = thresholds[categoryKey];
      if (!t) return -1;
      for (let i = 0; i < t.length; i++) {
        if (score >= t[i].min && score <= t[i].max) return i;
      }
      return -1;
    };

    return (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ background: "transparent" }}
      >
        <g transform={`rotate(-30 ${center} ${center})`}>
          {/* Colored background split into pie slices */}
          {categories.map((cat, i) => {
            const startAngle = i * sliceAngle;
            const endAngle = startAngle + sliceAngle;
            const innerRadius = 0; // start from center (full circle)
            const outerRadius = radiusStep * 3; // covers the 3 rings (green, yellow, red)

            return (
              <path
                key={`bg-slice-${i}`}
                d={describeArc(
                  center,
                  center,
                  innerRadius,
                  outerRadius,
                  startAngle,
                  endAngle
                )}
                fill="rgba(235, 235, 235, 1)" // light orange color
                stroke="white"
                strokeWidth={2}
              />
            );
          })}

          {/* Your existing rings per slice */}
          {categories.map((cat, i) => {
            const score = scores?.[cat.key] ?? 0;
            const thresholdIndex = getThresholdIndex(score, cat.key);

            const rings = [];
            for (let ring = 0; ring <= thresholdIndex; ring++) {
              const innerRadius = radiusStep * ring;
              const outerRadius = radiusStep * (ring + 1);

              const startAngle = i * sliceAngle;
              const endAngle = startAngle + sliceAngle;

              rings.push(
                <path
                  key={`${cat.key}-ring-${ring}`}
                  d={describeArc(
                    center,
                    center,
                    innerRadius,
                    outerRadius,
                    startAngle,
                    endAngle
                  )}
                  fill={ringColors[ring]}
                  stroke="white"
                  strokeWidth="2"
                />
              );
            }
            return rings;
          })}

          {/* NEW 4th ring: full grey circle outside all others */}
          {/* Grey ring split into 6 slices with white stroke dividers */}
          {categories.map((cat, i) => {
            const startAngle = i * sliceAngle;
            const endAngle = startAngle + sliceAngle;
            const innerRadius = radiusStep * 3.5 - 15; // slightly smaller to fit stroke nicely
            const outerRadius = radiusStep * 3.5 + 15; // match strokeWidth of 30

            return (
              <path
                key={`grey-ring-slice-${i}`}
                d={describeArc(
                  center,
                  center,
                  innerRadius,
                  outerRadius,
                  startAngle,
                  endAngle
                )}
                fill="#888888"
                stroke="white"
                strokeWidth={2}
              />
            );
          })}
          {categories.map((cat, i) => {
            const startAngle = i * sliceAngle;
            const endAngle = startAngle + sliceAngle;

            // Text radius: halfway through the grey ring thickness
            const textRadius = radiusStep * 3.4;

            // Create unique path id
            const pathId = `textPath-${cat.key}`;

            return (
              <g key={`text-label-${cat.key}`}>
                {/* Define path for text */}
                <path
                  id={pathId}
                  d={describeTextArc(
                    center,
                    center,
                    textRadius,
                    startAngle + 5,
                    endAngle - 5
                  )} // small padding inside slice angle
                  fill="none"
                />
                <text
                  fill="#ffffffff"
                  fontSize="16"
                  fontWeight="Normal"
                  textAnchor="middle"
                >
                  <textPath href={`#${pathId}`} startOffset="50%">
                    {cat.label}
                  </textPath>
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    );
  }
  function RadialScoreChartWrapper(props) {
    const svgRef = useRef();

    // Pass ref to your RadialScoreChart component
    return <RadialScoreChart {...props} svgRef={svgRef} />;
  }
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    async function loadAssessmentScores() {
      if (!selectedAssessment) return;

      try {
        // Replace with your actual query and logic
        const res = await client.graphql({
          query: listAssessmentScores,
          variables: {
            filter: {
              userId: { eq: selectedAssessment.userId },
            },
          },
        });

        const allScores = res.data?.listAssessmentScores?.items || [];

        // Find closest createdAt score to selectedAssessment.createdAt
        const selectedDate = new Date(selectedAssessment.createdAt);

        let closestScore = null;
        let minDiff = Infinity;

        allScores.forEach((score) => {
          const scoreDate = new Date(score.createdAt);
          const diff = Math.abs(scoreDate - selectedDate);
          if (diff < minDiff) {
            minDiff = diff;
            closestScore = score;
          }
        });

        setAssessmentScores(closestScore);
      } catch (error) {
        console.error("Failed to load assessment scores:", error);
        setAssessmentScores(null);
      }
    }

    loadAssessmentScores();
  }, [selectedAssessment]);
  useEffect(() => {
    async function loadData() {
      try {
        const user = await getCurrentUser();

        // Load assessments (replace with your actual query or import)
        const assessmentResult = await client.graphql({
          query: listAssessmentAnswers, // make sure this is imported or defined
          variables: {
            filter: {
              userId: { eq: user.userId },
              isActive: { eq: false },
            },
          },
        });

        const assessmentsRaw =
          assessmentResult.data.listAssessmentAnswers.items;
        const sortedAssessments = [...assessmentsRaw].sort(
          (a, b) => new Date(b.CompletedDate) - new Date(a.CompletedDate)
        );
        setAssessments(sortedAssessments);

        if (sortedAssessments.length > 0) {
          setSelectedId(sortedAssessments[0].id);
          setSelectedAssessment(sortedAssessments[0]);
        }

        // Load track plans with your custom query
        const trackResult = await client.graphql({
          query: LIST_TRACK_PLANS_CUSTOM,
          variables: {
            filter: {
              userId: { eq: user.userId },
            },
          },
        });

        const trackPlansRaw = trackResult.data.listTrackPlans.items || [];
        setTrackPlans(trackPlansRaw); // ← No more filtering by status
      } catch (error) {
        console.error("Error loading data:", error);
        alert(
          "Failed to load data: " +
            (error?.errors?.[0]?.message || error.message || "Unknown error")
        );
      }
    }

    loadData();
  }, []);

  const handleViewToggle = (view) => {
    setViewFilter(view);
  };
  function svgToPng(svgElement, width, height) {
    return new Promise((resolve) => {
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgData], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(svgBlob);

      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        URL.revokeObjectURL(url);
        resolve(canvas.toDataURL("image/png"));
      };
      img.src = url;
    });
  }

  const handleChange = (e) => {
    const id = e.target.value;
    setSelectedId(id);
    const found = assessments.find((a) => a.id === id);
    setSelectedAssessment(found);
  };
  const trackPlanRef = useRef(null);

  const downloadTrackPlansPDF = async (includePercentages = true) => {
    if (!trackPlans || trackPlans.length === 0) return;

    const doc = new jsPDF();
    const loadImageAsBase64 = (url, width, height) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = width || img.width;
          canvas.height = height || img.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL("image/png"));
        };
        img.onerror = (err) => reject(err);
        img.src = url;
      });
    };

    let logoBase64 = null;
    try {
      logoBase64 = await loadImageAsBase64(
        "/Outcomes-Excellence-Logo-Badge-Grow-White.png",
        150,
        50
      );
    } catch (err) {
      console.error("Logo load failed:", err);
    }
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const headerHeight = 50;
    doc.setFillColor("#0077cc");
    doc.rect(0, 0, pageWidth, headerHeight, "F");

    if (logoBase64) {
      const logoWidth = 20; // increase for less blur
      const logoHeight = 20;
      const logoX = (pageWidth - logoWidth) / 2;
      const logoY = 10; // top margin
      doc.addImage(logoBase64, "PNG", logoX, logoY, logoWidth, logoHeight);
    }

    // ===== Title under logo =====
    const title = "Health Plan";
    doc.setTextColor("#ffffff"); // match your blue text
    doc.setFontSize(18);
    let y = headerHeight + 15;
    const titleWidth = doc.getTextWidth(title);
    doc.text(title, (pageWidth - titleWidth) / 2, headerHeight - 8);
    const attr = await fetchUserAttributes();

    const addSelectedFields = (fieldsObj) => {
      const sections = [
        { label: "Triggers", items: fieldsObj.triggers },
        { label: "Warning Signs", items: fieldsObj.warningSigns },
        { label: "Strengths", items: fieldsObj.strengths },
        { label: "Barriers", items: fieldsObj.barriers },
      ];

      doc.setFontSize(12);
      doc.setTextColor("#004a99");

      const clientName = attr.given_name || "Unknown";
      const clientLastName = attr.family_name || "";

      // Then render
      [`Name: ${clientName} ${clientLastName}`].forEach((line) => {
        doc.text(line, 20, y);
        y += 8;
      });
      y += 10;
      sections.forEach((section) => {
        doc.text(`${section.label}:`, 20, y);
        y += 6;

        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);

        if (section.items.length > 0) {
          section.items.forEach((item) => {
            const lines = doc.splitTextToSize(`- ${item}`, 170);
            lines.forEach((line) => {
              doc.text(line, 25, y);
              y += 5;
            });
          });
        } else {
          doc.text("None selected", 25, y);
          y += 5;
        }

        y += 4; // spacing after each section
      });

      y += 8; // extra spacing before plans start
    };
    addSelectedFields(selectedFields);
    const addPlan = (plan, index) => {
      doc.setFontSize(14);
      doc.setTextColor("#004a99");
      doc.text(`${index + 1}. ${plan.Action}`, 20, y);
      y += 8;

      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);

      const details = [
        { label: "Question", value: plan.ActionQuestion },

        { label: "Start Date", value: plan.CompletedDate || "Unknown" },
        { label: "Frequency", value: plan.Frequency },
        { label: "Note", value: plan.ActionNote },
      ];
      if (plan.Discontinued === false && plan.Successful === false) {
        doc.setTextColor("#004a99"); // 🔴 Red
        doc.text(`In Progress`, 25, y);
        y += 6;
      }

      if (plan.Discontinued === true && plan.DiscontinuedDate) {
        doc.setTextColor(204, 68, 68); // 🔴 Red
        doc.text(`Discontinued: ${plan.DiscontinuedDate}`, 25, y);
        y += 6;
      }

      if (plan.Successful === true && plan.SuccessfulDate) {
        doc.setTextColor(34, 139, 34); // 🟢 Green
        doc.text(`Successful: ${plan.SuccessfulDate}`, 25, y);
        y += 6;
      }

      doc.setTextColor(0, 0, 0); // reset to black

      details.forEach(({ label, value }) => {
        const lines = doc.splitTextToSize(`${label}: ${value}`, 170);
        lines.forEach((line) => {
          doc.text(line, 25, y);
          y += 6;
        });
      });

      if (includePercentages) {
        // WEEKLY TABLE
        const weekRows = [];
        for (let i = 1; i <= 8; i++) {
          const date =
            plan[`Update${i}Date`] != null ? plan[`Update${i}Date`] : "N/A";
          const note =
            plan[`Update${i}Note`] != null
              ? plan[`Update${i}Note`]
              : "No note provided.";
          weekRows.push([`Update ${i}`, date, note]);
        }

        autoTable(doc, {
          startY: y + 4,
          head: [["Update", "Date", "Note"]],
          body: weekRows,
          styles: { fontSize: 10, cellPadding: 3 },
          headStyles: { fillColor: [0, 74, 153], textColor: 255 },
          margin: { left: 20, right: 20 },
          theme: "grid",
          columnStyles: {
            0: { cellWidth: 25 }, // "Update"
            1: { cellWidth: 40 }, // "Date"
            2: { cellWidth: 105 }, // "Note" — takes more space
          },
        });

        y = doc.lastAutoTable.finalY + 10;
        const percent = Math.min(plan.Percentage || 0, 100);
        doc.setDrawColor(0, 74, 153);
        doc.setFillColor(0, 74, 153);
        doc.rect(25, y + 4, (percent / 100) * 150, 6, "F");
        doc.setDrawColor(150);
        doc.rect(25, y + 4, 150, 6);
        doc.text(`Percentage: ${percent}%`, 25, y + 16);
        y += 34;
      } else {
        y += 10;
      }

      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    };

    trackPlans.forEach((plan, index) => addPlan(plan, index));
    if (healthPlanReviews && healthPlanReviews.length > 0) {
      if (y > 270) {
        // page break if near bottom
        doc.addPage();
        y = 20;
      }

      doc.setFontSize(16);
      doc.setTextColor("#004a99");
      doc.text("Health Plan Reviews", 20, y);
      y += 10;

      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);

      healthPlanReviews.forEach((review) => {
        if (y > 270) {
          doc.addPage();
          y = 20;
        }

        doc.text(
          `Professional Name: ${review.ProfessionalName || "N/A"}`,
          25,
          y
        );
        y += 7;
        doc.text(
          `Professional Role: ${review.ProfessionalRole || "N/A"}`,
          25,
          y
        );
        y += 7;
        doc.text(`Date: ${review.ReviewDate || "N/A"}`, 25, y);
        y += 7;

        y += 10;
      });
    }
    doc.save("Track_Plans.pdf");
  };
  const handleDownloadPdf = async () => {
    if (!selectedAssessment) return;

    // --- Grab the radial chart as PNG ---
    const svgElement = document.querySelector("#radialChartContainer svg");
    let radialChartImgData = null;
    if (svgElement) {
      radialChartImgData = await new Promise((resolve) => {
        svgToPngBase64(svgElement, 400, 400, (pngBase64) => {
          resolve(pngBase64 || null);
        });
      });
    }

    // --- Load the logo from /public folder ---
    const loadImageAsBase64 = (url, width, height) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = width || img.width;
          canvas.height = height || img.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL("image/png"));
        };
        img.onerror = (err) => reject(err);
        img.src = url;
      });
    };

    let logoBase64 = null;
    try {
      logoBase64 = await loadImageAsBase64(
        "/Outcomes-Excellence-Logo-Badge-Grow-White.png",
        150,
        50
      );
    } catch (err) {
      console.error("Logo load failed:", err);
    }

    // --- Helpers for colors ---
    const getDomainColor = (score, domainKey) => {
      const t = categoryThresholds[domainKey];
      if (!t) return "gray";
      for (const threshold of t) {
        if (score >= threshold.min && score <= threshold.max)
          return threshold.color;
      }
      return "gray";
    };

    const getQuestionColor = (value) => {
      if (value === undefined || value === null) return "gray";
      if (typeof value === "string") return "black";
      if (value >= 0 && value <= 1) return "#28a745"; // green
      if (value === 2) return "#ffc107"; // yellow
      if (value >= 3 && value <= 4) return "#B00000"; // red
      return "gray";
    };

    // --- PDF setup ---
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Header
    const headerHeight = 50;
    doc.setFillColor("#0077cc");
    doc.rect(0, 0, pageWidth, headerHeight, "F");

    if (logoBase64) {
      const logoWidth = 20; // increase for less blur
      const logoHeight = 20;
      const logoX = (pageWidth - logoWidth) / 2;
      const logoY = 10; // top margin
      doc.addImage(logoBase64, "PNG", logoX, logoY, logoWidth, logoHeight);
    }

    // ===== Title under logo =====
    const title = "Assessment Results";
    doc.setTextColor("#ffffff"); // match your blue text
    doc.setFontSize(18);
    const titleWidth = doc.getTextWidth(title);

    doc.text(title, (pageWidth - titleWidth) / 2, headerHeight - 8);

    // Info section
    let y = headerHeight + 15;
    doc.setFontSize(12);
    doc.setTextColor("#004a99");
    const attr = fetchUserAttributes();
    const clientName = (await attr).given_name; // replace with actual client name
    const clientNamel = (await attr).family_name; // replace with actual client name
    const rawDate = selectedAssessment?.createdAt || selectedAssessment?.date;
    const assessmentDate = rawDate
      ? new Date(rawDate).toLocaleDateString() // formats as "MM/DD/YYYY" by default
      : "N/A";

    // then render them
    [
      `Name: ${clientName} ${clientNamel}`,
      `Assessment Date: ${assessmentDate}`,
    ].forEach((line) => {
      doc.text(line, 20, y);
      y += 8;
    });
    y += 10;

    // Radial chart image (centered)
    if (radialChartImgData) {
      const imgWidth = 90;
      const x = (pageWidth - imgWidth) / 2;
      doc.addImage(radialChartImgData, "PNG", x, y, imgWidth, 90);
      y += 100;
    }

    const checkPageBreak = () => {
      if (y > pageHeight - 30) {
        doc.addPage();
        y = 20;
      }
    };

    // --- Domains ---
    const domains = [
      {
        key: "CMScore",
        label: "Coping Mechanisms",
        questionKeys: [
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
      },
      {
        key: "MHScore",
        label: "Mental Health Symptoms",
        questionKeys: [
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
      },
      {
        key: "PHScore",
        label: "Physical Health Behaviors",
        questionKeys: [
          "PHVegeFruits",
          "PHBeanLentils",
          "PHGrainBreads",
          "PHDairy",
          "PHMeat",
          "PHFishSeafood",
          "PHSweets",
          "PHWater",
          "PHPhysicalActivity",
        ],
      },
      {
        key: "SHScore",
        label: "Spiritual Health",
        questionKeys: [
          "SHSpiritualDefine",
          "SHSpiritualIntegrate",
          "SHPrayer",
          "SHSpiritualActivity",
          "SHReadText",
          "SHAlignText",
          "SHCommunity",
        ],
      },
      {
        key: "OLScore",
        label: "Outlook On Life",
        questionKeys: [
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
        ],
      },
    ];

    // --- Loop over domains and questions ---
    domains.forEach(({ key, label, questionKeys }) => {
      const domainScore = assessmentScores[key];
      if (domainScore === undefined || domainScore === null) return;

      checkPageBreak();

      const domainColor = getDomainColor(domainScore, key);
      const circleX = 22;
      const circleRadius = 4;
      const textX = circleX + circleRadius * 2 + 1;

      doc.setDrawColor(0);
      doc.setFillColor(domainColor);
      doc.circle(circleX, y - 1, circleRadius, "F");

      doc.setFontSize(14);
      doc.setTextColor("#004a99");
      doc.text(label, textX, y);
      y += 10;

      // Line under title
      doc.setDrawColor("#004a99");
      doc.setLineWidth(0.8);
      doc.line(20, y - 4, 180, y - 4);
      y += 10;

      doc.setFontSize(11);
      doc.setTextColor("#333");

      questionKeys.forEach((qKey) => {
        const valAnswer = selectedAssessment[qKey];
        const valScore = assessmentScores[qKey];
        if (valAnswer === undefined || valAnswer === null) return;

        checkPageBreak();

        const qColor = getQuestionColor(valScore);
        doc.setDrawColor(0);
        doc.setFillColor(qColor);
        doc.circle(22, y - 1, 2, "F");

        const questionText = keyToQuestionMap?.[qKey] ?? qKey;
        const displayVal =
          typeof valAnswer === "string" ? valAnswer : valAnswer.toString();
        const text = `${questionText}: ${displayVal}`;

        const lines = doc.splitTextToSize(text, 160);
        lines.forEach((line, i) => {
          doc.text(line, 30, y + i * 2);
        });
        y += 3 * lines.length + 4;
      });

      y += 12;
    });
    if (professionalReviews && professionalReviews.length > 0) {
      if (y > 270) {
        // page break if near bottom
        doc.addPage();
        y = 20;
      }

      doc.setFontSize(16);
      doc.setTextColor("#004a99");
      doc.text("Assessment Reviews", 20, y);
      y += 10;

      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);

      professionalReviews.forEach((review) => {
        if (y > 270) {
          doc.addPage();
          y = 20;
        }

        doc.text(
          `Professional Name: ${review.ProfessionalName || "N/A"}`,
          25,
          y
        );
        y += 7;
        doc.text(
          `Professional Role: ${review.ProfessionalRole || "N/A"}`,
          25,
          y
        );
        y += 7;
        doc.text(`Date: ${review.ReviewDate || "N/A"}`, 25, y);
        y += 7;

        y += 10;
      });
    }
    doc.save("AssessmentResults.pdf");
  };

  function svgToPngBase64(svgElement, width, height, callback) {
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      // clear canvas
      ctx.clearRect(0, 0, width, height);
      // Draw white background (optional)
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, width, height);
      // Draw the SVG image
      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(url);
      const pngBase64 = canvas.toDataURL("image/png");
      callback(pngBase64);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      callback(null);
    };
    img.src = url;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 40,
        maxWidth: 900,
        width: isMobile ? "100%" : 400, // full width on mobile, fixed width on desktop

        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",

        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,

          marginBottom: 24,
        }}
      >
        <button
          onClick={() => handleViewToggle("assessments")}
          type="button"
          style={{
            padding: "10px 24px",
            borderRadius: 12,
            border:
              viewFilter === "assessments"
                ? "2px solid #0077cc"
                : "2px solid #ccc",
            backgroundColor: viewFilter === "assessments" ? "#d9eaff" : "#fff",
            color: viewFilter === "assessments" ? "#004080" : "#666",
            fontWeight: "600",
            cursor: "pointer",
            minWidth: 160,
            transition: "all 0.3s ease",
          }}
          aria-pressed={viewFilter === "assessments"}
        >
          Assessments
        </button>
        <button
          onClick={() => handleViewToggle("trackPlans")}
          type="button"
          style={{
            padding: "10px 24px",
            borderRadius: 12,
            border:
              viewFilter === "trackPlans"
                ? "2px solid #0077cc"
                : "2px solid #ccc",
            backgroundColor: viewFilter === "trackPlans" ? "#d9eaff" : "#fff",
            color: viewFilter === "trackPlans" ? "#004080" : "#666",
            fontWeight: "600",
            cursor: "pointer",
            minWidth: 160,
            transition: "all 0.3s ease",
          }}
          aria-pressed={viewFilter === "trackPlans"}
        >
          Health Plans
        </button>
      </div>

      <h2
        style={{
          textAlign: "center",
          color: "#004a99",
          marginBottom: 30,
          fontWeight: "700",

          fontSize: "2rem",
        }}
      >
        {viewFilter === "assessments" ? "View Assessments" : "View Actions"}
      </h2>

      {viewFilter === "assessments" ? (
        assessments.length > 0 ? (
          <>
            <select
              value={selectedId}
              onChange={handleChange}
              style={{
                padding: "12px",
                marginBottom: "10px",
                width: "100%",

                fontSize: 16,
                borderRadius: 8,
                border: "2px solid #004a99",
                boxShadow: "0 2px 6px rgba(0, 74, 153, 0.3)",
              }}
            >
              {assessments.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.CompletedDate} at {a.CompletedTime}
                </option>
              ))}
            </select>

            <button
              onClick={handleDownloadPdf}
              style={{
                marginLeft: 620,
                marginTop: 30,
                backgroundColor: "#0077cc",
                color: "white",
                padding: "14px 28px",
                borderRadius: 8,
                fontSize: 14,
                cursor: "pointer",
                width: "100%",
                margin: "30px auto 0",
                display: "block",
                height: 40,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                marginBottom: 30,
              }}
            >
              📤 Download PDF
            </button>

            {/* Replace the whole big <div> with this: */}
            <div
              style={{
                maxHeight: 650,
                overflowY: "auto",
                backgroundColor: "#f0f4fb",
                padding: "12px",
                marginBottom: "30px",
                width: isMobile ? "130%" : 800, // full width on mobile, fixed width on desktop
                fontSize: 16,
                borderRadius: 8,
                border: "2px solid #004a99",
                boxShadow: "0 2px 6px rgba(0, 74, 153, 0.3)",
              }}
            >
              <div id="radialChartContainer">
                <RadialScoreChart scores={assessmentScores} />
              </div>

              <AssessmentDetails
                answers={selectedAssessment} // <-- pass original answers here
                assessmentScores={assessmentScores}
                categoryThresholds={{
                  CMScore: [
                    { min: 0, max: 1, color: "#28a745" },
                    { min: 2, max: 3, color: "#ffc107" },
                    { min: 4, max: 48, color: "#B00000" },
                  ],

                  MHScore: [
                    { min: 0, max: 13, color: "#28a745" },
                    { min: 14, max: 26, color: "#ffc107" },
                    { min: 27, max: 54, color: "#B00000" },
                  ],
                  PHScore: [
                    { min: 0, max: 5, color: "#28a745" },
                    { min: 6, max: 10, color: "#ffc107" },
                    { min: 11, max: 30, color: "#B00000" },
                  ],
                  SHScore: [
                    { min: 0, max: 7, color: "#28a745" },
                    { min: 8, max: 14, color: "#ffc107" },
                    { min: 15, max: 28, color: "#B00000" },
                  ],
                  OLScore: [
                    { min: 0, max: 15, color: "#28a745" },
                    { min: 16, max: 30, color: "#ffc107" },
                    { min: 31, max: 60, color: "#B00000" },
                  ],
                  // Add others if needed
                }}
              />
              {professionalReviews.length > 0 ? (
                <section
                  style={{
                    marginTop: 40,
                    padding: 16,
                    borderTop: "2px solid #004a99",
                    width: isMobile ? "100%" : "100%",
                    backgroundColor: "#e6f0ff",
                    borderRadius: 8,
                  }}
                >
                  <h3 style={{ color: "#004a99", marginBottom: 16 }}>
                    Professional Reviews
                  </h3>
                  <ul style={{ listStyleType: "none", padding: 0 }}>
                    {professionalReviews.map((review) => (
                      <li
                        key={review.id}
                        style={{
                          backgroundColor: "#fff",
                          padding: 12,
                          width: "100%",
                          marginBottom: 12,
                          borderRadius: 6,
                          boxShadow: "0 1px 3px rgba(0, 74, 153, 0.2)",
                        }}
                      >
                        <strong>Name:</strong> {review.ProfessionalName} <br />
                        <strong>Role:</strong> {review.ProfessionalRole} <br />
                        <strong>Date:</strong> {review.ReviewDate}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : (
                <p style={{ marginTop: 40, color: "#666" }}>
                  No professional reviews for this assessment.
                </p>
              )}
            </div>
          </>
        ) : (
          <p style={{ textAlign: "center", color: "#666", fontSize: 16 }}>
            No Assessment Found.
          </p>
        )
      ) : (
        <div
          style={{
            textAlign: "center",
            width: "130%",
            marginTop: 20,
            alignItems: "center",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              marginBottom: 24,
              marginTop: -30,
              flexWrap: "wrap", // allows wrapping on small screens
              maxWidth: isMobile ? "100%" : 400,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div style={{ flex: "1 1 150px", minWidth: 150 }}>
              <label
                htmlFor="start-date"
                style={{
                  display: "block",
                  marginBottom: 1,
                  fontWeight: "600",
                  color: "#004a99",
                }}
              >
                Start Date
              </label>
              <input
                id="start-date"
                type="date"
                value={startDate}
                max={endDate}
                onChange={(e) => setStartDate(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  borderRadius: 6,
                  border: "1.5px solid #004a99",
                  fontSize: 16,
                  boxShadow: "0 1px 3px rgba(0, 74, 153, 0.2)",
                }}
              />
            </div>

            <div style={{ flex: "1 1 150px", minWidth: 150 }}>
              <label
                htmlFor="end-date"
                style={{
                  display: "block",
                  marginBottom: 1,
                  fontWeight: "600",
                  color: "#004a99",
                }}
              >
                End Date
              </label>
              <input
                id="end-date"
                type="date"
                value={endDate}
                min={startDate}
                max={todayStr}
                onChange={(e) => setEndDate(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  borderRadius: 6,
                  border: "1.5px solid #004a99",
                  fontSize: 16,
                  boxShadow: "0 1px 3px rgba(0, 74, 153, 0.2)",
                }}
              />
            </div>
          </div>

          {filteredPlans.length > 0 ? (
            <>
              {/* 📤 Download Button */}
              <button
                onClick={() => downloadTrackPlansPDF(showPercentages)}
                style={{
                  marginLeft: 620,
                  marginTop: 30,
                  backgroundColor: "#0077cc",
                  color: "white",
                  padding: "14px 28px",
                  borderRadius: 8,
                  fontSize: 14,
                  cursor: "pointer",
                  width: "100%",
                  margin: "30px auto 0",
                  display: "block",
                  height: 40,

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  marginBottom: 30,
                }}
              >
                📤 Download Plans PDF
              </button>
              <button
                onClick={() => setShowPercentages((prev) => !prev)}
                style={{
                  backgroundColor: showPercentages ? "#B00000" : "#3B7D23",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: 8,
                  fontSize: 14,
                  width: "100%",
                  height: 40,
                  cursor: "pointer",
                  marginBottom: 20,
                }}
              >
                {showPercentages ? "Hide" : "Show"} Progress Percentages
              </button>

              {/* 📄 Content to Capture in PDF */}
              <div ref={trackPlanRef}>
                <ul
                  style={{
                    maxHeight: 650,
                    overflowY: "auto",
                    backgroundColor: "#f0f4fb",
                    padding: "12px",
                    marginBottom: "30px",
                    width: isMobile ? "100%" : 450,
                    fontSize: 16,
                    borderRadius: 8,
                    border: "2px solid #004a99",
                    boxShadow: "0 2px 6px rgba(0, 74, 153, 0.3)",
                    marginLeft: "auto",
                    marginRight: "auto", // ✅ centers the block
                  }}
                >
                  <h3>Triggers</h3>
                  {selectedFields.triggers.length > 0 ? (
                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        marginBottom: 16,
                      }}
                    >
                      {selectedFields.triggers.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ marginBottom: 16 }}>None selected</p>
                  )}

                  <h3>Warning Signs</h3>
                  {selectedFields.warningSigns.length > 0 ? (
                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        marginBottom: 16,
                      }}
                    >
                      {selectedFields.warningSigns.map((w) => (
                        <li key={w}>{w}</li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ marginBottom: 16 }}>None selected</p>
                  )}

                  <h3>Strengths</h3>
                  {selectedFields.strengths.length > 0 ? (
                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        marginBottom: 16,
                      }}
                    >
                      {selectedFields.strengths.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ marginBottom: 16 }}>None selected</p>
                  )}

                  <h3>Barriers</h3>
                  {selectedFields.barriers.length > 0 ? (
                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        marginBottom: 16,
                      }}
                    >
                      {selectedFields.barriers.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ marginBottom: 16 }}>None selected</p>
                  )}
                  {filteredPlans.map((plan) => (
                    <div
                      key={plan.id}
                      style={{
                        ...styles.planCard,
                        width: isMobile ? "100%" : 400,
                        background: "#ffffff",
                        padding: "20px",
                        borderRadius: 8,
                        marginBottom: 20,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      }}
                    >
                      <h2 style={styles.planTitle}>{plan.Action}</h2>
                      <p style={styles.planText}>
                        <strong>Question:</strong> {plan.ActionQuestion}
                      </p>
                      <p style={styles.planText}>
                        <strong>Start Date:</strong>{" "}
                        {plan.CompletedDate || "Unknown"}
                      </p>
                      <p style={styles.planText}>
                        <strong>Frequency:</strong> {plan.Frequency}
                      </p>
                      <p style={styles.planText}>
                        <strong>Note:</strong> {plan.ActionNote}
                      </p>

                      {plan.Discontinued === true && plan.DiscontinuedDate && (
                        <p
                          style={{
                            color: "#cc4444",
                            fontWeight: "600",
                            marginTop: 4,
                          }}
                        >
                          Discontinued: {plan.DiscontinuedDate}
                        </p>
                      )}
                      {plan.Successful === true && plan.SuccessfulDate && (
                        <p
                          style={{
                            color: "#228B22",
                            fontWeight: "600",
                            marginTop: 4,
                          }}
                        >
                          Successful: {plan.SuccessfulDate}
                        </p>
                      )}

                      {showPercentages && (
                        <div
                          style={{
                            marginTop: 20,
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <PercentageWheel percentage={plan.Percentage || 0} />
                        </div>
                      )}
                    </div>
                  ))}
                  {healthPlanReviews.length > 0 ? (
                    <section
                      style={{
                        marginTop: 40,
                        padding: 16,
                        borderTop: "2px solid #004a99",
                        width: isMobile ? "100%" : "100%",
                        backgroundColor: "#e6f0ff",
                        borderRadius: 8,
                      }}
                    >
                      <h3 style={{ color: "#004a99", marginBottom: 16 }}>
                        Professional Reviews
                      </h3>
                      <ul style={{ listStyleType: "none", padding: 0 }}>
                        {healthPlanReviews.map((review) => (
                          <li
                            key={review.id}
                            style={{
                              backgroundColor: "#fff",
                              padding: 12,
                              width: "100%",
                              marginBottom: 12,
                              borderRadius: 6,
                              boxShadow: "0 1px 3px rgba(0, 74, 153, 0.2)",
                            }}
                          >
                            <strong>Name:</strong> {review.ProfessionalName}{" "}
                            <br />
                            <strong>Role:</strong> {review.ProfessionalRole}{" "}
                            <br />
                            <strong>Date:</strong> {review.ReviewDate}
                          </li>
                        ))}
                      </ul>
                    </section>
                  ) : (
                    <p style={{ marginTop: 40, color: "#666" }}>
                      No professional reviews for this health plan.
                    </p>
                  )}
                </ul>
              </div>
            </>
          ) : (
            <p style={{ color: "#666" }}>No Health Plan Found.</p>
          )}
        </div>
      )}
    </div>
  );
}

import { generateClient } from "aws-amplify/api";
import { fetchUserAttributes, getCurrentUser } from "aws-amplify/auth";
import { useCallback, useEffect, useMemo, useState } from "react";
import Select from "react-select";
import { createCreatePlan, createNotifications, createUserPayments, updateCoupon, updateCreatePlan, updateUserPayments } from "../graphql/mutations";
import { getCoupon, getUserPayments, listCreatePlans, listUserLinks, listUserPayments } from "../graphql/queries";
// PayPal components
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
const strengthOptions = [
  {
    label: "Problem-Solving Skills",
    options: [
      { value: "PSProblemSolving", label: "Problem-Solving Skills" },
      { value: "PSSelfEsteem", label: "Self-Esteem and Confidence" },
      { value: "PSChoiceAutonomy", label: "Choice Autonomy" },
      { value: "PSSelfCare", label: "Self-Care" },
      { value: "PSSelfAwareness", label: "Self-Awareness" },
      { value: "PSCreativity", label: "Creativity" },
    ],
  },
  {
    label: "Character Strengths",
    options: [
      { value: "CSForgiveness", label: "Forgiveness" },
      { value: "CSKindness", label: "Kindness" },
      { value: "CSGratitude", label: "Gratitude" },
      { value: "CSPatience", label: "Patience" },
      { value: "CSCourage", label: "Courage" },
    ],
  },
  {
    label: "Coping Strengths",
    options: [
      { value: "CMSCopingChoice", label: "Coping Mechanisms" },
      { value: "CMSResilience", label: "Resilience and Perseverance" },
      { value: "CMSSelfRegulation", label: "Self-Regulation" },
      { value: "CMSOptimism", label: "Hope and Optimism" },
    ],
  },
  {
    label: "Community Strengths",
    options: [
      { value: "COMSupportSystem", label: "Strong Support System" },
      { value: "COMSocialIntelligence", label: "Social Intelligence" },
      { value: "COMCommunication", label: "Communication Skills" },
      { value: "COMFaithCommunity", label: "Faith Based Community" },
      { value: "COMAccomplishments", label: "Accomplishments" },
    ],
  },
];

const barrierOptions = [
  {
    label: "Barriers",
    options: [
      { value: "BRStableHousing", label: "Access to Safe Stable Housing" },
      { value: "BRQualityHealthcare", label: "Access to Quality Healthcare" },
      { value: "BRProfessionalAccess", label: "Access to Clinical Professionals" },
      { value: "BRInsuranceCoverage", label: "Insurance Coverage" },
      { value: "BRFinancialConstraints", label: "Financial Constraints" },
      { value: "BREducationAttainment", label: "Education Attainment" },
      { value: "BRSocialStigma", label: "Social Stigma and Misconceptions" },
      { value: "BRUnsupportiveCommunity", label: "Unsupportive Personal Community" },
      { value: "BRNonexistentCommunity", label: "Nonexistent Personal Community" },
      { value: "BRCommunityResources", label: "Awareness of Community Resources" },
      { value: "BRProfessionalTrust", label: "Personal Trust in Clinical Professionals" },
      { value: "BRHealthcareSystemTrust", label: "Personal Trust in Healthcare System" },
      { value: "BRCognitiveImpairments", label: "Cognitive Impairments (e.g., memory, concentration)" },
      { value: "BRDependentCare", label: "Child / Elder Care" },
      { value: "BRTransportation", label: "Transportation" },
      { value: "BRTechnologyAccess", label: "Access to Technology" },
      { value: "BRLanguage", label: "Language or Communication" },
      { value: "BRHealthcareProcess", label: "Navigating Healthcare Processes" },
      { value: "BROther", label: "Other" }, // Note your schema uses BROther for 'Other' barrier
    ],
  },
];

const noteTriggersOptions = [
  {
    label: "Note Triggers",
    options: [
      { value: "TGBetrayal", label: "Betrayal" },
      { value: "TGBoundaries", label: "Ignored Boundaries" },
      { value: "TGDisorder", label: "Loud Noise / Disorder / Chaos" },
      { value: "TGPain", label: "Pain (Emotional or Physical)" },
      { value: "TGRejection", label: "Rejection" },
      { value: "TGStress", label: "Stressful Life Events" },
      { value: "TGMemories", label: "Traumatic Memories" },
      { value: "TGUnjustTreatment", label: "Unjust Treatment" },
      { value: "TGUnpleasantConversations", label: "Unpleasant Conversations (e.g. yelling, criticism, etc.)" },
      { value: "TGUnsafeEnvironments", label: "Unsafe Environments" },
      { value: "TGOther", label: "Other" },
    ],
  },
];

const noteWarningSignsOptions = [
  {
    label: "Note Warning Signs",
    options: [
      { value: "WSFlashbacks", label: "Flashbacks" },
      { value: "WSIncreasedAppetite", label: "Increased Appetite" },
      { value: "WSDecreasedAppetite", label: "Decreased Appetite" },
      { value: "WSIntenseEmotions", label: "Intense Emotions / Irritability" },
      { value: "WSDisconnecting", label: "Isolation / Disconnecting" },
      { value: "WSTime", label: "Losing Track of Time" },
      { value: "WSNegativeSelfTalk", label: "Negative Self Talk" },
      { value: "WSNeglectingSelfCare", label: "Neglecting Self Care" },
      { value: "WSNightmares", label: "Nightmares" },
      { value: "WSRecklessBehavior", label: "Reckless / Destructive Behavior" },
      { value: "WSOther", label: "Other" },
    ],
  },
];

const Actions = {
  CMAlcohol: [
    "Call 988 When Triggered (No Frequency)",
    "Avoid High Risk Environments (No Frequency)",
    "Engage in Meaningful Work, Education, or Volunteerism",
    "Engage in Professional Individual Therapy",
    "Complete a Support Group / Program (when chosen provide free text)",
    "Engage in a Positive Coping Mechanism (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  CMDrugs: [
    "Call 988 When Triggered (No Frequency)",
    "Avoid High Risk Environments / Connections (No Frequency)",
    "Engage in Meaningful Work, Education, or Volunteerism",
    "Engage in Professional Individual Therapy",
    "Complete a Support Group / Program (when chosen provide free text)",
    "Engage in a Positive Coping Mechanism (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  CMOvereating: [
    "Consciously Eat – Chew Thoroughly Focusing on Taste, Smell, and Texture",
    "Practice Deep Breathing for Stress Management (Stimulates the parasympathetic nervous system-rest/relaxation)",
    "Practice Stretching for Stress Management",
    "Focus on Whole, Unprocessed, Home Cooked Foods",
    "Increase Fiber Rich Foods (e.g. Vegetables, Beans, etc.)",
    "Choose Water Over Sugary Drinks and/or Alcohol",
    "Keep a Food Journal to Identify Trends and Triggers",
    "Prep Environment - Smaller Dishware, Storing Food Out of Sight",
    "Engage in a Positive Coping Mechanism (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  CMSmoking: [
    "Avoid High Risk Environments / Connections (No Frequency)",
    "Practice Deep Breathing for Stress Management (Stimulates the parasympathetic nervous system-rest/relaxation)",
    "Practice Stretching for Stress Management",
    "Engage in Professional Individual Therapy",
    "Complete a Support Group / Program (when chosen provide free text)",
    "Engage in a Positive Coping Mechanism (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  CMGaming: [
    "Establish Time Limits (No Frequency)",
    "Remove Devices that Provide Access (No Frequency)",
    "Engage in Meaningful Work, Education, or Volunteerism",
    "Engage in Professional Individual Therapy",
    "Complete a Support Group / Program (when chosen provide free text)",
    "Engage in a Positive Coping Mechanism (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  CMShopping: [
    "Avoid High Risk Environments / Connections (No Frequency)",
    "Practice Deep Breathing for Stress Management (Stimulates the parasympathetic nervous system-rest/relaxation)",
    "Practice Stretching for Stress Management",
    "Keep a Journal to Identify Trends and Triggers",
    "Complete a Support Group / Program (when chosen provide free text)",
    "Engage in a Positive Coping Mechanism (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  CMGambling: [
    "Remove Devices that Provide Access (No Frequency)",
    "Avoid High Risk Environments / Connections (No Frequency)",
    "Engage in Professional Individual Therapy",
    "Engage in Professional Family Therapy",
    "Complete a Support Group / Program (when chosen provide free text)",
    "Engage in a Positive Coping Mechanism (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  CMSex: [
    "Call 988 When Triggered (No Frequency)",
    "Avoid High Risk Environments / Connections (No Frequency)",
    "Engage in Meaningful Work, Education, or Volunteerism",
    "Engage in Professional Individual Therapy",
    "Complete a Support Group / Program (when chosen provide free text)",
    "Engage in a Positive Coping Mechanism (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  CMPorn: [
    "Call 988 When Triggered (No Frequency)",
    "Remove Devices that Provide Access (No Frequency)",
    "Engage in Professional Individual Therapy",
    "Engage in Professional Family Therapy",
    "Complete a Support Group / Program (when chosen provide free text)",
    "Engage in a Positive Coping Mechanism (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  CMBlaming: [
    "Examine and Correct Beliefs / Thoughts / Words About Self (No Frequency)",
    "Practice Enforcing Healthy Boundaries (No Frequency)",
    "Practice Communicating Mistakes as Opportunities (No Frequency)",
    "Engage in Professional Individual Therapy",
    "Engage in Professional Family Therapy",
    "Complete a Self-Development Book / Program (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  CMHurting: [
    "Call 988 When Triggered (No Frequency)",
    "Avoid High Risk Environments / Connections (No Frequency)",
    "Engage in Professional Individual Therapy",
    "Engage in Professional Family Therapy",
    "Complete a Support Group / Program (when chosen provide free text)",
    "Engage in a Positive Coping Mechanism (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  CMDisengage: [
    "Practice Enforcing Healthy Boundaries (No Frequency)",
    "Practice Having Challenging Conversations / Problem Solving (No Frequency)",
    "Practice Forgiveness and / or Conflict Resolution (No Frequency)",
    "Engage in Professional Individual Therapy",
    "Engage in Professional Family Therapy",
    "Complete a Book / Program on Healthy Relationships/Communication (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  MHSleeplessness: [
    "Use the Bed for Common Bed Activities Only (No Frequency)",
    "Challenge Unhelpful Beliefs About Sleep (No Frequency)",
    "Keep a Consistent Sleep-Wake Schedule",
    "Create a Dark and Quiet Sleep Environment",
    "No Caffeine, Nicotine, and/or Alcohol 5 Hours Before Bed",
    "No Screen Time 1 Hour Before Bed",
    "No Meals, Fluids, or Exercise 2 Hours Before Bed",
    "Play Soft, Peaceful, Instrumental Music While Sleeping",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  MHAlcoholUse: [
    "Avoid High Risk Environments (No Frequency)",
    "Engage in Meaningful Work, Education, or Volunteerism",
    "Engage in Professional Individual Therapy",
    "Engage in Professional Family Therapy",
    "Complete a Support Group / Program (when chosen provide free text)",
    "Engage in a Positive Coping Mechanism (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  MHAnxiety: [
    "Actively Correct Anxious Thoughts (No Frequency)",
    "Increase Aerobic Exercise (Boosts mood and decreases stress hormones)",
    "Increase Anti-Inflammatory and Nutrient-Rich Foods",
    "Reduce Caffeine, Sugar, and/or Alcohol",
    "Practice Breathing and Relaxation Techniques (Stimulates the parasympathetic nervous system-rest/relaxation)",
    "Journal or Practice Expressive Writing",
    "Improve Sleep Quality (when chosen provide free text)",
    "Complete a Support Group / Program (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  MHDepression: [
    "Increase Aerobic Exercise (Boosts mood and decreases stress hormones)",
    "Increase Anti-Inflammatory and Nutrient-Rich Foods",
    "Reduce Processed Food and Sugar",
    "Increase Engagement in Meaningful and Pleasurable Activities",
    "Address Relationship Issues, Grief, or Life Transitions",
    "Journal or Practice Expressive Writing",
    "Improve Sleep Quality (when chosen provide free text)",
    "Complete a Support Group / Program (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  MHDrugUse: [
    "Avoid High Risk Environments (No Frequency)",
    "Engage in Meaningful Work, Education, or Volunteerism",
    "Keep a Journal to Identify Trends and Triggers",
    "Engage in Professional Individual Therapy",
    "Complete a Support Group / Program (when chosen provide free text)",
    "Engage in a Positive Coping Mechanism (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  MHGrief: [
    "Work on a Legacy Project (No Frequency)",
    "Engage in Meaningful Work, Education, or Volunteerism",
    "Journal or Practice Expressive Writing",
    "Engage in Professional Individual Therapy",
    "Complete a Support Group / Program (when chosen provide free text)",
    "Engage in a Positive Coping Mechanism (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  MHGuilt: [
    "Reframe Guilt in Terms of Growth and Learning (No Frequency)",
    "Verbalize or Internalize Forgiving Yourself (No Frequency)",
    "Externally Apologize and Ask for Forgiveness (No Frequency)",
    "Journal or Practice Expressive Writing",
    "Engage in Professional Individual Therapy",
    "Engage in Professional Family Therapy",
    "Complete a Support Group / Program (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  MHIrritability: [
    "Practice Enforcing Healthy Boundaries (No Frequency)",
    "Practice Healthy Assertive Communication (No Frequency)",
    "Increase Aerobic Exercise (Regulates cortisol and boosts serotonin)",
    "Increase Anti-Inflammatory and Nutrient-Rich Foods",
    "Reduce Caffeine, Sugar, and/or Alcohol",
    "Journal or Practice Expressive Writing",
    "Engage in Professional Individual Therapy",
    "Improve Sleep Quality (when chosen provide free text)",
    "Engage in a Positive Coping Mechanism (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  MHStress: [
    "De-Clutter Living Space",
    "Practice Gratefulness",
    "Laugh / Watch Comedy",
    "Spend Time in Nature (Stress management)",
    "Engage in Professional Individual Therapy",
    "Engage in Professional Family Therapy",
    "Engage in a Positive Coping Mechanism (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  MHRegret: [
    "Reframe Thoughts of Regret as a Positive Call to Action (No Frequency)",
    "Practice Self Compassion and Forgive Yourself (No Frequency)",
    "Make Amends / Apologize / Remedy (No Frequency)",
    "Practice Gratefulness",
    "Journal or Practice Expressive Writing",
    "Engage in Professional Individual Therapy",
    "Engage in Professional Family Therapy",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  MHSuicidalThoughts: [
    "Call 988 When Triggered (No Frequency)",
    "Examine and Correct Beliefs / Thoughts / Words About Self (No Frequency)",
    "Practice Granular Emotions",
    "Engage in Meaningful Work, Education, or Volunteerism",
    "Engage in Professional Individual Therapy",
    "Complete a Support Group / Program (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  MHLoneliness: [
    "Engage in Self Reflection / Self Discovery (No Frequency)",
    "Spend Time in Nature and Outdoors",
    "Participate in a Club or Interest Group",
    "Engage in Meaningful Work, Education, or Volunteerism",
    "Engage in Professional Individual Therapy",
    "Nurture Existing Relationship(s) (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  MHWorry: [
    "Actively Correct Worrisome Thoughts (No Frequency)",
    "Practice Gratefulness",
    "Spend Time in Nature (Stress management)",
    "Journal or Practice Expressive Writing",
    "Engage in Professional Individual Therapy",
    "Engage in a Positive Coping Mechanism (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],
  PHVegeFruits: [
    "Create and Follow Weekly Menu",
    "Eat at Least One Serving of Vegetables",
    "Eat at Least One Serving of Fruit",
    "Remove Processed Food from Home",
    "Prepare Cooked Meals in Advance",
    "Eat Home Cooked Meal for Lunch",
    "Other (when chosen provide free text)",
  ],

  PHBeanLentils: [
    "Create and Follow Weekly Menu",
    "Eat at Least One Serving of Legumes / Beans",
    "Prepare Cooked Meals in Advance",
    "Eat Home Cooked Meal for Lunch",
    "Other (when chosen provide free text)",
  ],

  PHMeat: [
    "Create and Follow Weekly Menu",
    "Eat a Meatless Meal",
    "Prepare Cooked Meals in Advance",
    "Eat Home Cooked Meal for Lunch",
    "Other (when chosen provide free text)",
  ],

  PHFishSeafood: [
    "Create and Follow Weekly Menu",
    "Eat a Meal without Fish / Seafood",
    "Prepare Cooked Meals in Advance",
    "Eat Home Cooked Meal for Lunch",
    "Other (when chosen provide free text)",
  ],

  PHSweets: [
    "Create and Follow Weekly Menu",
    "Remove Simple Sugars from Meals / Snacks",
    "Remove Sugary Drinks and Snacks from Home",
    "Other (when chosen provide free text)",
  ],

  PHWater: [
    "Drink at Least Four Cups of Water",
    "Remove Sugary Drinks",
    "Other (when chosen provide free text)",
  ],

  PHPhysicalActivity: [
    "At Least 30 Minutes of Cardio Exercise",
    "At Least 30 Reps for Weight Lifting",
    "At Least 30 Minutes of Stretching",
    "At Least 30 Minutes of Walking / Jogging / Running",
    "Other (when chosen provide free text)",
  ],

  SHSpiritualDefine: [
    "Pray",
    "Complete a Fast",
    "At Least 10 Minutes of Reading Religious Text",
    "Engage in Personal Devotion",
    "Other (when chosen provide free text)",
  ],

  SHSpiritualIntegrate: [
    "Pray",
    "Complete a Fast",
    "Read a Faith Based Book",
    "Participate in a Ministry",
    "Participate in a Small Group",
    "Participate in Formal Gatherings",
    "Listen to / Sing Worship Music",
    "Share Personal Testimony",
    "Engage in Personal Devotion",
    "Other (when chosen provide free text)",
  ],

  SHPrayer: [
    "Pray",
    "Complete a Fast",
    "At Least 10 Minutes of Reading Religious Text",
    "Participate in a Small Group",
    "Participate in Formal Gatherings",
    "Engage in Personal Devotion",
    "Other (when chosen provide free text)",
  ],

  SHSpiritualActivity: [
    "Pray",
    "Complete a Fast",
    "At Least 10 Minutes of Reading Religious Text",
    "Participate in a Ministry",
    "Participate in a Small Group",
    "Participate in Formal Gatherings",
    "Engage in Personal Devotion",
    "Other (when chosen provide free text)",
  ],

  SHReadText: [
    "Pray",
    "Complete a Fast",
    "At Least 10 Minutes of Reading Religious Text",
    "At Least 10 Minutes of Listening Religious Text",
    "Listen to / Sing Scripture Songs",
    "Engage in Personal Devotion",
    "Other (when chosen provide free text)",
  ],

  SHAlignText: [
    "Pray",
    "Complete a Fast",
    "Engage in Personal Devotion",
    "Other (when chosen provide free text)",
  ],

  SHCommunity: [
    "Pray",
    "Participate in a Group Fast",
    "Participate in a Ministry",
    "Participate in a Small Group",
    "Participate in Formal Gatherings",
    "Other (when chosen provide free text)",
  ],

  OLHope: [
    "Practice Setting Clear Expectations (No Frequency)",
    "Focus on One Step at a Time (No Frequency)",
    "Develop a Vision for Your Life (No Frequency)",
    "Journal Expectations and Fulfillment of Expectations (No Frequency)",
    "Practice Gratefulness",
    "Engage in Professional Individual Therapy",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  OLPeace: [
    "Resolve Conflicts (No Frequency)",
    "Establish and Maintain Healthy Boundaries (No Frequency)",
    "De-Clutter Living Space",
    "Practice Acknowledging Granular Emotions",
    "Practice Communicating Granular Emotions",
    "Spend Time in Nature (Stress management)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  OLLearning: [
    "Mentor Someone",
    "Secure and Meet with a Mentor",
    "Listen to Others Thoughts",
    "Choose a Strength You Want to Cultivate and Practice It",
    "Seek Honest Feedback from Safe People and Practice Improving",
    "Learn Something New and Useful (when chosen provide free text)",
    "Complete Classes for Degree, License, or Certification (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  OLJoy: [
    "Practice Positive Thoughts (No Frequency)",
    "Practice Gratefulness",
    "Help Someone Else / Volunteer",
    "Mentor Someone",
    "Other (when chosen provide free text)",
  ],

  OLStable: [
    "Avoid Spending Money Unnecessarily (No Frequency)",
    "Build a Positive Support System (No Frequency)",
    "Add Money to Savings",
    "Journal or Practice Expressive Writing",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  OLSafety: [
    "Build a Positive Support System (No Frequency)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  OLKindness: [
    "Practice Telling the Truth Gently (No Frequency)",
    "Journal or Practice Expressive Writing",
    "Other (when chosen provide free text)",
  ],

  OLForgiveness: [
    "Apologize to Someone / Make Amends (No Frequency)",
    "Verbalize or Internalize Forgiving Yourself (No Frequency)",
    "Verbalize or Internalize Forgiving Someone Else (No Frequency)",
    "Journal or Practice Expressive Writing",
    "Other (when chosen provide free text)",
  ],

  OLPatience: [
    "Practice Patience / Waiting with a Positive Attitude (No Frequency)",
    "Practice Gratefulness While Waiting (No Frequency)",
    "Other (when chosen provide free text)",
  ],

  OLRelationships: [
    "Resolve Conflicts (No Frequency)",
    "Establish and Maintain Healthy Boundaries (No Frequency)",
    "Practice Communicating Granular Emotions (No Frequency)",
    "(Re)evaluate Social Circle / Support System (No Frequency)",
    "Mentor Someone",
    "Engage in Professional Family Therapy",
    "Complete a Book / Program on Healthy Relationships/Communication (when chosen provide free text)",
    "Engage Additional Support from Family or Friends (when chosen provide free text)",
    "Engage Additional Support from Faith Community (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  OLBoundaries: [
    "Identify Healthy Boundaries (No Frequency)",
    "Enforce Healthy Boundaries (No Frequency)",
    "Develop a Vision for Your Life (No Frequency)",
    "Practice Acknowledging Granular Emotions (No Frequency)",
    "Practice Communicating Granular Emotions (No Frequency)",
    "Practice Having Challenging Conversations (No Frequency)",
    "Engage in Professional Individual Therapy",
    "Engage in Professional Family Therapy",
    "Complete a Book on Healthy Boundaries (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  OLEUnpleasant: [
    "Practice Acknowledging Granular Emotions (No Frequency)",
    "Practice Communicating Granular Emotions (No Frequency)",
    "Journal or Practice Expressive Writing",
    "Engage in a Positive Coping Mechanism (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  OLEPleasant: [
    "Practice Acknowledging Granular Emotions (No Frequency)",
    "Practice Communicating Granular Emotions (No Frequency)",
    "Practice Vulnerable Communication with Safe People (No Frequency)",
    "Help Someone Else / Volunteer",
    "Other (when chosen provide free text)",
  ],

  OLEControl: [
    "Practice Acknowledging Granular Emotions (No Frequency)",
    "Practice Communicating Granular Emotions (No Frequency)",
    "Journal Emotions to See Trends / Patterns (No Frequency)",
    "Engage in Professional Individual Therapy",
    "Engage in Professional Family Therapy",
    "Complete a Support Group / Program (when chosen provide free text)",
    "Engage Additional Support from Referral (when chosen provide free text)",
    "Other (when chosen provide free text)",
  ],

  OLENumber: [
    "Practice Acknowledging Granular Emotions (No Frequency)",
    "Practice Communicating Granular Emotions (No Frequency)",
    "Other (when chosen provide free text)",
  ],
};
const labels = {
  // Coping Mechanisms
  CMAlcohol: "Alcohol Abuse",
  CMDrugs: "Drug Abuse",
  CMOvereating: "Overeating",
  CMSmoking: "Smoking",
  CMGaming: "Excessive Gaming",
  CMShopping: "Excessive Shopping",
  CMGambling: "Gambling",
  CMSex: "Casual Sex",
  CMPorn: "Pornography",
  CMBlaming: "Blaming Self or Others",
  CMHurting: "Hurting Self or Others",
  CMDisengage: "Disengagement/Detachment/Self Isolation",
  CMArt: "Drawing/Painting/Art",
  CMMusic: "Music",
  CMPoetry: "Poetry/Poetical Lyrics",
  CMReading: "Reading",
  CMGroups: "Group Discussion",
  CMCounseling: "Individual Counseling",
  CMVenting: "Talking/Venting",
  CMWriting: "Writing/Journaling",
  CMSensory: "Sensory/Fidgets",
  CMDancing: "Dancing",
  CMExercising: "Exercising",
  CMWalking: "Walking",
  CMChange: "Change Something for Different Results",
  CMAnalyze: "Analyze the Situation for Better Understanding",
  CMDaydream: "Daydream or Imagine a Better Situation",
  CMPositive: "Focus on the Positives",

  // Mental Health
  MHSleeplessness: "Sleeplessness",
  MHAlcoholUse: "Alcohol Use",
  MHAnxiety: "Anxiety",
  MHDepression: "Depression",
  MHDrugUse: "Drug Use",
  MHGrief: "Grief",
  MHGuilt: "Guilt",
  MHIrritability: "Irritability",
  MHStress: "Stress",
  MHRegret: "Regret",
  MHSuicidalThoughts: "Suicidal Thoughts",
  MHLoneliness: "Loneliness",
  MHWorry: "Worry",

  // Physical Health
  PHVegeFruits: "Vegetables and Fruit",
  PHBeanLentils: "Beans and Lentils",
  PHGrainBreads: "Grains and Breads",
  PHDairy: "Dairy",
  PHMeat: "Animal Meat",
  PHFishSeafood: "Fish/Seafood",
  PHSweets: "Sweets/Desserts",
  PHWater: "Water",
  PHPhysicalActivity: "Physically Active",

  // Spiritual Health
  SHSpiritualDefine: "Spirituality Defining Goals",
  SHSpiritualIntegrate: "Integrating Spirituality Into Life",
  SHPrayer: "Prayer",
  SHSpiritualActivity: "Communication With Like-Minded Individuals",
  SHReadText: "Reading Religious Text",
  SHAlignText: "Aligning Life With Religious Texts",
  SHCommunity: "Participating in Religious Gatherings / Groups / Prayer",

  // Outlook on Life
  OLHope: "Hope for the Future and Sense of Purpose",
  OLPeace: "Peace of Mind",
  OLLearning: "Willingness to Learn and Be Corrected",
  OLJoy: "Joy Even in Trying Times",
  OLStable: "Stability (e.g., Housing, Finances, etc.)",
  OLSafety: "Safety and Security",
  OLKindness: "Kindness Toward Others",
  OLForgiveness: "Forgiveness of Yourself and Others",
  OLPatience: "Patience With Yourself and Others",
  OLRelationships: "Support in Your Relationships",
  OLBoundaries: "Maintaining Healthy Boundaries",
  OLEUnpleasant: "Unpleasant Emotions",
  OLEPleasant: "Pleasant Emotions",
  OLEControl: "Control Over Your Emotions",
  OLENumber: "Communicating Emotions"
};
const domainMap = {
  CM: "Coping Mechanisms",
  MH: "Mental Health",
  PH: "Physical Health",
  SH: "Spiritual Health",
  OL: "Outlook On Life",
  SDoH: "Social Determinants of Health",
  TR: "Trauma",
};

function getDomainName(key) {
  if (key.startsWith("SDoH")) return domainMap["SDoH"];
  const prefix = key.match(/^[A-Z]+/)?.[0] || "NA";
  return domainMap[prefix] || "Unknown";
}


const client = generateClient();

function CopingPlanCard({
  categoryKey,
  actions,
  onPlanUpdate,
  maxAllowed,
  totalSelectedCount,
  savedActionCount, resetFlag, existingCount,
}) {


  const [visible, setVisible] = useState(false);
  const [selectedActions, setSelectedActions] = useState({});
  const [frequencies, setFrequencies] = useState({});
  const [notes, setNotes] = useState({});
  const [otherInputs, setOtherInputs] = useState({});
  const [flipped, setFlipped] = useState({});
  const [warningIndex, setWarningIndex] = useState(null);
const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    setSelectedActions({});
    setFrequencies({});
    setNotes({});
    setOtherInputs({});
    setFlipped({});
  }, [resetFlag]);

  const toggleAction = (index) => {
    const newState = !selectedActions[index];
    const currentSelectedCount = Object.values(selectedActions).filter(Boolean).length;
    const newTotal = existingCount + (newState ? currentSelectedCount + 1 : currentSelectedCount - 1);
    const alreadySelected = selectedActions[index];


    const newSelectedCount = Object.values(selectedActions).filter(Boolean).length + 1; // assume trying to add one
    if (!alreadySelected && (totalSelectedCount + 1 > maxAllowed)) {
      setWarningIndex(index);
      setTimeout(() => setWarningIndex(null), 12000);
      return;
    }

    setSelectedActions((prev) => ({ ...prev, [index]: newState }));
  };


  const selected = useMemo(() => {
    return Object.entries(selectedActions)
      .filter(([_, isSelected]) => isSelected)
      .map(([index]) => {
        const rawAction = actions[index];
        const clean = rawAction.replace(" (when chosen provide free text)", "");
        return {
          action: otherInputs[index] || clean,
          frequency: frequencies[index] || "",
          note: notes[index] || "",
          needsNote: rawAction.toLowerCase().includes("(when chosen provide free text)"),
        };
      });
  }, [selectedActions, frequencies, notes, otherInputs, actions]);

  useEffect(() => {
    onPlanUpdate(categoryKey, selected);
  }, [selected, categoryKey, onPlanUpdate]);

  const safetyPlanCategories = [
    "MHSuicidalThoughts",
    "CMAlcohol",
    "CMDrugs",
    "CMSex",
    "CMPorn",
    "CMHurting",
  ];

  const buttonLabel = visible
    ? "Hide"
    : safetyPlanCategories.includes(categoryKey)
      ? "Create Safety Plan"
      : "Improve Your Score";

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "40px auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 12,
      }}
    >
      <h2
  style={{
    textAlign: "center",
    marginBottom: 12,
    wordWrap: "break-word", // break long words
    overflowWrap: "break-word", // modern equivalent
    hyphens: "auto", // optional: hyphenates when breaking
  }}
>
  {labels[categoryKey] || categoryKey}
</h2>

      <button
        onClick={() => setVisible((v) => !v)}
        style={{
          backgroundColor: safetyPlanCategories.includes(categoryKey)
            ? "#B00000"
            : "#808080",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: 10,
          width: "100%",
          cursor: "pointer",
          marginBottom: 20,
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        {buttonLabel}
      </button>

      {visible &&
        actions.map((action, index) => {
          const isOther = action.toLowerCase().startsWith("other");
          const needsNote = action.toLowerCase().includes(
            "when chosen provide free text"
          );
          const noFrequency = action.toLowerCase().includes("(no frequency)"); // detect "(No Frequency)"
          const isActive = selectedActions[index] || (isOther && otherInputs[index]);
          // Clean action label removes both tags:
          const cleanAction = action
            .replace(/\(when chosen provide free text\)/i, "")
            .replace(/\(No Frequency\)/i, "")
            .replace(/\(info text\)/i, "")
            .replace(/\([^)]+\)/g, "") // remove any remaining ()
            .trim();

          return (
            <div key={index} style={{ marginBottom: 20 }}>
              {isOther ? (
                <div
                  style={{
                    display: "grid",
                    transition: "transform 0.6s",
                    transformStyle: "preserve-3d",
                    transform: flipped[index] ? "rotateY(180deg)" : "none",
                  }}
                >
                  {/* FRONT side (default view) */}
                  <div
                    onClick={() => toggleAction(index)}
                    style={{
                      backfaceVisibility: "hidden",
                      border: "2px solid",
                      padding: "10px 12px",
                      borderRadius: 12,
                      borderColor: isActive ? "#4da6ff" : "#ccc",
                      background: isActive ? "#d9eaff" : "#fff",
                      textAlign: "left",
                      cursor: "pointer",
                      boxShadow: isActive ? "0 0 10px #4da6ffaa" : "none",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* Text area */}
                    <div style={{ flex: 1, paddingRight: 10, fontWeight: "normal" }}>
                      Other
                    </div>

                    {/* Info tab */}
                    <div
                      onClick={(e) => {
                        e.stopPropagation(); // prevent toggle
                        setFlipped((prev) => ({ ...prev, [index]: true }));
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 25,
                        height: 48,
                        fontSize: 16,
                        color: "#0077cc",
                        cursor: "pointer",
                        fontWeight: "bold",
                        userSelect: "none",
                        borderLeft: "1px solid #0077cc",
                        borderRadius: "0 12px 12px 0",
                        flexShrink: 0,
                        paddingLeft: 10,
                      }}
                      title="More Info"
                    >
                      ⓘ
                    </div>
                  </div>

                  {/* BACK side (flipped view) */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      padding: "10px 12px",
                      borderRadius: 12,
                      background: "#f0f8ff",
                      border: "2px solid #0077cc",
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      textAlign: "center",
                      cursor: "pointer",
                      minHeight: "100%",
                      maxHeight: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                    onClick={() => setFlipped((prev) => ({ ...prev, [index]: false }))}
                  >
                    <div style={{ fontSize: "80%" }}>
                      <strong>More Info:</strong>{" "}Click Other to customize your action below.

                    </div>
                    <div style={{ fontSize: 9, marginTop: 2, color: "#0077cc", textAlign: "center", }}>
                      (Click to return)
                    </div>
                  </div>
                </div>

              ) : (
                <div
                  style={{
                    perspective: "1000px",
                    position: "relative",
                    height: "auto",
                    minHeight: 60,
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      transition: "transform 0.6s",
                      transformStyle: "preserve-3d",
                      transform: flipped[index] ? "rotateY(180deg)" : "none",
                    }}
                  >
                    {/* FRONT side (default view) */}
                    <div
                      onClick={() => toggleAction(index)}
                      style={{
                        backfaceVisibility: "hidden",
                        border: "2px solid",
                        padding: "10px 12px",
                        borderRadius: 12,
                        borderColor: isActive ? "#4da6ff" : "#ccc",
                        background: isActive ? "#d9eaff" : "#fff",
                        textAlign: "left",
                        cursor: "pointer",
                        boxShadow: isActive ? "0 0 10px #4da6ffaa" : "none",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Text area */}
                      <div style={{ flex: 1, paddingRight: 10, fontWeight: "normal" }}>
                        {cleanAction}
                      </div>

                      {/* Info tab */}
                      <div
                        onClick={(e) => {
                          e.stopPropagation(); // prevent toggle
                          setFlipped((prev) => ({ ...prev, [index]: true }));
                        }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 25,
                          height: 48,
                          fontSize: 16,
                          color: "#0077cc",
                          cursor: "pointer",
                          fontWeight: "bold",
                          userSelect: "none",
                          borderLeft: "1px solid #0077cc",
                          borderRadius: "0 12px 12px 0",
                          flexShrink: 0,
                          paddingLeft: 10,
                        }}
                        title="More Info"
                      >
                        ⓘ
                      </div>
                    </div>

                    {/* BACK side (flipped view) */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        padding: "10px 12px",
                        borderRadius: 12,
                        background: "#f0f8ff",
                        border: "2px solid #0077cc",
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        textAlign: "center",
                        cursor: "pointer",
                        minHeight: "100%",
                        maxHeight: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                      onClick={() => setFlipped((prev) => ({ ...prev, [index]: false }))}
                    >
                      <div style={{ fontSize: "80%" }}>
                        <strong>More Info:</strong>{" "}
                        {action
                          .match(/\(([^)]+)\)/g)
                          ?.map((s) => s.slice(1, -1)) // remove parentheses
                          ?.filter(
                            (s) =>
                              !/no frequency|free text|info text/i.test(s.toLowerCase()) &&
                              s.length > 2
                          )
                          ?.join(" ") || "No additional information."}
                      </div>
                      <div style={{ fontSize: 9, marginTop: 2, color: "#0077cc", textAlign: "center", }}>
                        (Click to return)
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {warningIndex === index && (
                <div style={{
                  marginTop: 6,
                  fontSize: 13,
                  color: "#b00000",
                  fontWeight: "bold",
                }}>
                  You have {existingCount} finalized action{savedActionCount === 1 ? "" : "s"}.
                  You can only select {maxAllowed}. (Max 10)
                </div>
              )}


              {isActive && (
                <>
                  {/* Only show frequency dropdown if NOT noFrequency */}
                  {!noFrequency && (
                    <select
                      style={{
                        width: "100%",
                        marginTop: 8,
                        padding: 10,
                        borderRadius: 8,
                        border: "1px solid #ccc",
                        fontSize: 14,
                      }}
                      value={frequencies[index] || ""}
                      onChange={(e) =>
                        setFrequencies((prev) => ({ ...prev, [index]: e.target.value }))
                      }
                    >
                      <option value="">Select Frequency</option>
                      <option>1x Per Day</option>
                      <option>1x Per Week</option>
                      <option>2x Per Week</option>
                      <option>3x Per Week</option>
                      <option>5x Per Week</option>
                      <option>1x Per Month</option>
                      <option>2x Per Month</option>
                      <option>3x Per Month</option>
                      <option>1x Per Year</option>
                      <option>2x Per Year</option>
                      <option>1x Per Quarter</option>
                    </select>
                  )}

                  {needsNote && (
                    <input
                      type="text"
                      placeholder="Add a note..."
                      value={notes[index] || ""}
                      onChange={(e) =>
                        setNotes((prev) => ({ ...prev, [index]: e.target.value }))
                      }
                      style={{
                        marginTop: 8,
                        width: "100%",
                        padding: 10,
                        borderRadius: 8,
                        border: "1px solid #ccc",
                        fontSize: 14,
                      }}
                    />
                  )}
                </>
              )}
            </div>
          );
        })}
    </div>
  );
}
const createTrackPlanMutation = `
  mutation CreateTrackPlan($input: CreateTrackPlanInput!) {
    createTrackPlan(input: $input) {
      id
    }
  }
`;

export async function fetchFlaggedData(
  setSelectedCategories,
  setUserId,
  setAllPlans,
  setExistingCount,
  setSavedActionCount,
  setRemainingSlots,
  setLoading,
  setError
) {
  try {
    setLoading(true);
    const user = await getCurrentUser();
    const uid = user?.userId || "";
    if (!uid) throw new Error("User not authenticated");

    setUserId(uid);

    const trackPlanQuery = `
      query ListTrackPlans {
        listTrackPlans(filter: { 
          userId: { eq: "${uid}" },
          Discontinued: { eq: false },
          Successful: { eq: false }
        }) {
          items { id }
        }
      }
    `;

    const query = `
      query ListAssessments {
        listAssessmentScores(limit: 50, filter: {
          userId: { eq: "${user.username}" }, isActive: { eq: false }
        }) {
          items { id updatedAt }
        }
      }
    `;

    const assessmentRes = await client.graphql({ query });
    const items = assessmentRes?.data?.listAssessmentScores?.items || [];
    if (items.length === 0) throw new Error("You need to complete an assessment to create a health plan");

    const trackPlanRes = await client.graphql({ query: trackPlanQuery });
    const existingItems = trackPlanRes?.data?.listTrackPlans?.items || [];

    const maxTotalAllowed = 10;
    const remaining = maxTotalAllowed - existingItems.length;

    setExistingCount(existingItems.length);
    setSavedActionCount(existingItems.length);
    setRemainingSlots(remaining);

    const latest = items.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))[0];

    const getQuery = `
      query GetAssessment {
        getAssessmentScores(id: "${latest.id}") {
          ${Object.keys(Actions).join("\n")}
        }
      }
    `;

    const getRes = await client.graphql({ query: getQuery });
    const record = getRes?.data?.getAssessmentScores;
    if (!record) throw new Error("Could not fetch assessment");

    const flagged = Object.entries(record)
      .filter(([k, v]) => Object.keys(Actions).includes(k) && (v === 3 || v === 4))
      .map(([k]) => k);

    setSelectedCategories(flagged);
  } catch (err) {
    setError(err.message || "Unknown error");
  } finally {
    setLoading(false);
  }
}

export default function CopingPlanManager() {
  // States
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allPlans, setAllPlans] = useState({});
  const [userId, setUserId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [savedActionCount, setSavedActionCount] = useState(0);
  const [remainingSlots, setRemainingSlots] = useState(10);
  const [resetFlag, setResetFlag] = useState(false);
  const [existingCount, setExistingCount] = useState(0);
  const [hasAccess, setHasAccess] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [coupon, setCoupon] = useState("");
  const [couponError, setCouponError] = useState("");
  const [couponData, setCouponData] = useState(null);
  const [validating, setValidating] = useState(false);
  const hasExistingPlans = existingCount > 0;
  const basePrice = 10.0;
  const [selectedStrengths, setSelectedStrengths] = useState([]);

  const [selectedBarriers, setSelectedBarriers] = useState([]);
  const [otherBarrierText, setOtherBarrierText] = useState("");
  const isOtherBarrierSelected = selectedBarriers.some(item => item.value === "other");
  const [selectedNoteTriggers, setSelectedNoteTriggers] = useState([]);
  const [selectedNoteWarningSigns, setSelectedNoteWarningSigns] = useState([]);
  const [barrierNote, setBarrierNote] = useState("");
  const specialCategories = [
    "MHSuicidalThoughts",
    "CMAlcohol",
    "CMDrugs",
    "CMSex",
    "CMPorn",
    "CMHurting",
  ];
  async function loadCreatePlan(userId) {
    try {
      const res = await client.graphql({
        query: listCreatePlans,
        variables: { filter: { userId: { eq: userId } } },
      });
      const items = res?.data?.listCreatePlans?.items || [];
      if (items.length === 0) return null; // no plan found
      return items[0];
    } catch (err) {
      console.error("Failed to load create plan:", err);
      return null;
    }
  }
  function flattenOptions(optionGroups) {
    return optionGroups.reduce((acc, group) => {
      return acc.concat(group.options);
    }, []);
  }

  function parseCreatePlanToSelections(plan) {
    if (!plan) return {
      strengths: [],
      barriers: [],
      otherBarrierText: "",
      noteTriggers: [],
      noteWarningSigns: [],
      barrierNote: "",
    };

    const strengthKeys = [
      "PSProblemSolving", "PSSelfEsteem", "PSChoiceAutonomy", "PSSelfCare", "PSSelfAwareness", "PSCreativity",
      "CSForgiveness", "CSKindness", "CSGratitude", "CSPatience", "CSCourage",
      "CMSCopingChoice", "CMSResilience", "CMSSelfRegulation", "CMSOptimism",
      "COMSupportSystem", "COMSocialIntelligence", "COMCommunication", "COMFaithCommunity", "COMAccomplishments",
    ];

    const barrierKeys = [
      "BRStableHousing", "BRQualityHealthcare", "BRProfessionalAccess", "BRInsuranceCoverage", "BRFinancialConstraints",
      "BREducationAttainment", "BRSocialStigma", "BRUnsupportiveCommunity", "BRNonexistentCommunity", "BRCommunityResources",
      "BRProfessionalTrust", "BRHealthcareSystemTrust", "BRCognitiveImpairments", "BRDependentCare", "BRTransportation",
      "BRTechnologyAccess", "BRLanguage", "BRHealthcareProcess", "BROther",
    ];

    const noteTriggerKeys = [
      "TGBetrayal", "TGBoundaries", "TGDisorder", "TGPain", "TGRejection",
      "TGStress", "TGMemories", "TGUnjustTreatment", "TGUnpleasantConversations",
      "TGUnsafeEnvironments", "TGOther",
    ];

    const noteWarningSignKeys = [
      "WSFlashbacks", "WSIncreasedAppetite", "WSDecreasedAppetite", "WSIntenseEmotions", "WSDisconnecting",
      "WSTime", "WSNegativeSelfTalk", "WSNeglectingSelfCare", "WSNightmares", "WSRecklessBehavior", "WSOther",
    ];

    // Flatten all options once
    const allStrengthOptions = flattenOptions(strengthOptions);
    const allBarrierOptions = flattenOptions(barrierOptions);
    const allNoteTriggerOptions = flattenOptions(noteTriggersOptions);
    const allNoteWarningSignOptions = flattenOptions(noteWarningSignsOptions);

    // Helper to map selected keys to full option objects
    const mapSelected = (keys, allOptions) =>
      keys.reduce((acc, key) => {
        if (plan[key]) {
          // Find full option object by value === key
          const fullOption = allOptions.find(opt => opt.value === key);
          if (fullOption) acc.push(fullOption);
        }
        return acc;
      }, []);

    const selectedStrengths = mapSelected(strengthKeys, allStrengthOptions);
    const selectedBarriers = mapSelected(barrierKeys, allBarrierOptions);
    const selectedNoteTriggers = mapSelected(noteTriggerKeys, allNoteTriggerOptions);
    const selectedNoteWarningSigns = mapSelected(noteWarningSignKeys, allNoteWarningSignOptions);

    // Other Barrier text and barrier note
    const otherBarrierText = plan.BRResponseNote || "";
    const barrierNote = plan.BRResponseNote || "";

    return {
      strengths: selectedStrengths,
      barriers: selectedBarriers,
      otherBarrierText,
      noteTriggers: selectedNoteTriggers,
      noteWarningSigns: selectedNoteWarningSigns,
      barrierNote,
    };
  }
  useEffect(() => {
    if (!userId) return;

    async function loadPlan() {
      setLoading(true);
      const plan = await loadCreatePlan(userId);
      if (plan) {
        const {
          strengths,
          barriers,
          otherBarrierText,
          noteTriggers,
          noteWarningSigns,
          barrierNote,
        } = parseCreatePlanToSelections(plan);

        setSelectedStrengths(strengths);
        setSelectedBarriers(barriers);
        setOtherBarrierText(otherBarrierText);
        setSelectedNoteTriggers(noteTriggers);
        setSelectedNoteWarningSigns(noteWarningSigns);
        setBarrierNote(barrierNote);
      }
      setLoading(false);
    }
    loadPlan();
  }, [userId]);

  function mapSelectionsToInput(selectedStrengths, selectedBarriers, selectedNoteTriggers, selectedNoteWarningSigns, otherBarrierText, barrierNote) {
    // Initialize all boolean fields to false
    const input = {
      // strengths
      PSProblemSolving: false,
      PSSelfEsteem: false,
      PSChoiceAutonomy: false,
      PSSelfCare: false,
      PSSelfAwareness: false,
      PSCreativity: false,

      CSForgiveness: false,
      CSKindness: false,
      CSGratitude: false,
      CSPatience: false,
      CSCourage: false,

      CMSCopingChoice: false,
      CMSResilience: false,
      CMSSelfRegulation: false,
      CMSOptimism: false,

      COMSupportSystem: false,
      COMSocialIntelligence: false,
      COMCommunication: false,
      COMFaithCommunity: false,
      COMAccomplishments: false,

      // barriers
      BRStableHousing: false,
      BRQualityHealthcare: false,
      BRProfessionalAccess: false,
      BRInsuranceCoverage: false,
      BRFinancialConstraints: false,
      BREducationAttainment: false,
      BRSocialStigma: false,
      BRUnsupportiveCommunity: false,
      BRNonexistentCommunity: false,
      BRCommunityResources: false,
      BRProfessionalTrust: false,
      BRHealthcareSystemTrust: false,
      BRCognitiveImpairments: false,
      BRDependentCare: false,
      BRTransportation: false,
      BRTechnologyAccess: false,
      BRLanguage: false,
      BRHealthcareProcess: false,
      BROther: false,
      BRResponseNote: "",

      // note triggers
      TGBetrayal: false,
      TGBoundaries: false,
      TGDisorder: false,
      TGPain: false,
      TGRejection: false,
      TGStress: false,
      TGMemories: false,
      TGUnjustTreatment: false,
      TGUnpleasantConversations: false,
      TGUnsafeEnvironments: false,
      TGOther: false,

      // note warning signs
      WSFlashbacks: false,
      WSIncreasedAppetite: false,
      WSDecreasedAppetite: false,
      WSIntenseEmotions: false,
      WSDisconnecting: false,
      WSTime: false,
      WSNegativeSelfTalk: false,
      WSNeglectingSelfCare: false,
      WSNightmares: false,
      WSRecklessBehavior: false,
      WSOther: false,
    };

    // Mark selected strengths true
    selectedStrengths.forEach(({ value }) => {
      if (value in input) input[value] = true;
    });

    // Mark selected barriers true
    selectedBarriers.forEach(({ value }) => {
      if (value === "BROther") {
        // If "Other" barrier text provided
        input.BROther = true;
        input.BRResponseNote = otherBarrierText || "";
      } else if (value in input) {
        input[value] = true;
      }
    });

    // Mark selected note triggers true
    selectedNoteTriggers.forEach(({ value }) => {
      if (value in input) input[value] = true;
    });

    // Mark selected warning signs true
    selectedNoteWarningSigns.forEach(({ value }) => {
      if (value in input) input[value] = true;
    });

    // You can add any other notes (like barrierNote) to the input object if needed

    return input;
  }

  // Check if user has any of these categories selected or in plans
  const showNoteDropdowns = selectedCategories.some(cat => specialCategories.includes(cat))
    || Object.keys(allPlans).some(cat => specialCategories.includes(cat));

  const handleBarrierChange = (selectedOptions) => {
    setSelectedBarriers(selectedOptions || []);
    if (!selectedOptions?.some(item => item.value === "other")) {
      setOtherBarrierText("");
    }
  };

  function setStrengths(e) {
    const options = e.target.options;
    const selected = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    setSelectedStrengths(selected);
  }
  // Calculate final price given coupon
  const calculateFinalPrice = () => {
    if (!couponData) return basePrice.toFixed(2);

    let final = basePrice;
    if (couponData.type === "amount") {
      final = Math.max(0.01, basePrice - couponData.value);
    } else if (couponData.type === "percent") {
      final = Math.max(0.01, basePrice - basePrice * (couponData.value / 100));
    }
    return final.toFixed(2);
  };

  // Load user + check payment access on mount
  useEffect(() => {
    async function checkAccessAndFetch() {
      try {
        const user = await getCurrentUser();
        const uid = user?.userId || "";
        if (!uid) throw new Error("User not authenticated");
        setUserId(uid);

        const res = await client.graphql({
          query: listUserPayments,
          variables: { filter: { userId: { eq: uid } } },
        });
        const paymentRecords = res?.data?.listUserPayments?.items || [];
        const paymentRecord = paymentRecords.length ? paymentRecords[0] : null;

        const now = new Date();
        const validPayments = paymentRecords.filter(pr => new Date(pr.paidUntil) > now);

        if (validPayments.length > 0) {
          setHasAccess(true);
          await fetchFlaggedData(
            setSelectedCategories,
            setUserId,
            setAllPlans,
            setExistingCount,
            setSavedActionCount,
            setRemainingSlots,
            setLoading,
            setError
          );
        }
      } catch (err) {
        console.log("Access check failed:", err);
      } finally {
        setCheckingAccess(false);
        setLoading(false);
      }
    }

    checkAccessAndFetch();
  }, []);

  // Validate coupon and handle free 100% off coupons
  const handleValidateCoupon = async () => {
    if (couponData) {
      setCouponError("You can only use one coupon at a time.");
      return;
    }

    const code = coupon.trim().toUpperCase();
    if (!code) {
      setCouponError("Please enter a coupon code.");
      return;
    }
    setValidating(true);
    setCouponError("");
    try {
      console.log("Validating coupon:", code);

      const res = await client.graphql({
        query: getCoupon,
        variables: { id: code },
      });

      const data = res?.data?.getCoupon;

      if (
        !data ||
        !data.isActive ||
        (data.expiresAt && new Date(data.expiresAt) < new Date()) ||
        data.timesUsed >= data.maxUses
      ) {
        throw new Error("Invalid or expired coupon");
      }

      setCouponData(data);

      // Calculate final price with coupon
      let finalPrice = basePrice;
      if (data.type === "amount") {
        finalPrice = Math.max(0.01, basePrice - data.value);
      } else if (data.type === "percent") {
        finalPrice = Math.max(0.01, basePrice - basePrice * (data.value / 100));
      }
      finalPrice = parseFloat(finalPrice.toFixed(2));

      // If coupon makes it effectively free (≤ $0.01), grant immediate access
      if (finalPrice <= 0.01) {
        if (!userId) throw new Error("User not authenticated");

        const paidUntilDate = new Date();
        paidUntilDate.setFullYear(paidUntilDate.getFullYear() + 1);

        try {
          // Check existing payments record
          const checkRes = await client.graphql({
            query: getUserPayments,
            variables: { id: userId },
          });
          const existingPayment = checkRes?.data?.getUserPayments;

          if (existingPayment) {
            console.log("Updating existing payment record:", existingPayment.id);
            await client.graphql({
              query: updateUserPayments,
              variables: {
                input: {
                  id: existingPayment.id,
                  userId,
                  paidUntil: paidUntilDate.toISOString(),
                  paymentFor: "Individual",
                },
              },
            });
          } else {
            console.log("Creating new payment record");
            await client.graphql({
              query: createUserPayments,
              variables: {
                input: {
                  userId,
                  paidUntil: paidUntilDate.toISOString(),
                  paymentFor: "Individual",
                },
              },
            });
          }

          // Update coupon usage
          await client.graphql({
            query: updateCoupon,
            variables: {
              input: {
                id: data.id,
                timesUsed: data.timesUsed + 1,
              },
            },
          });

          setHasAccess(true);
          await fetchFlaggedData(
            setSelectedCategories,
            setUserId,
            setAllPlans,
            setExistingCount,
            setSavedActionCount,
            setRemainingSlots,
            setLoading,
            setError
          );
          setCouponError("");
          setSuccessMsg("Free coupon applied! Access granted for 1 year.");
        } catch (err) {
          console.error("Error applying free coupon:", err);
          setCouponError("Failed to apply free coupon. Please try again.");
          setSuccessMsg("");
        } finally {
          setValidating(false);
        }
        return;
      }

      setCouponError("");
      setValidating(false);
      setSuccessMsg(`Coupon applied! New price: $${finalPrice}`);

    } catch (err) {
      console.error("Error during coupon validation:", err);
      setCouponData(null);
      setCouponError("Invalid coupon");
      setValidating(false);
      setSuccessMsg("");
    }
  };

  // fetch flagged data initially (even if user already has access)
  useEffect(() => {
    if (!hasAccess) return; // only if has access
    fetchFlaggedData(
      setSelectedCategories,
      setUserId,
      setAllPlans,
      setExistingCount,
      setSavedActionCount,
      setRemainingSlots,
      setLoading,
      setError
    );
  }, [hasAccess]);

  // Update category plans
  const updateCategoryPlan = useCallback((key, plan) => {
    setAllPlans((prev) => ({ ...prev, [key]: plan }));
  }, []);

  // Submit selected plans/actions
  const handleSubmitAll = async () => {
    try {
      if (!userId) throw new Error("User not authenticated");

      // Fetch existing finalized plans count
      const trackPlanQuery = `
        query ListTrackPlans {
          listTrackPlans(filter: { userId: { eq: "${userId}" } }) {
            items { id }
          }
        }
      `;
      const trackPlanRes = await client.graphql({ query: trackPlanQuery });
      const existingItems = trackPlanRes?.data?.listTrackPlans?.items || [];
      const existingCount = existingItems.length;

      // Count new selected actions
      let newActionCount = 0;
      for (const category of selectedCategories) {
        const actions = allPlans[category] || [];
        for (const actionObj of actions) {
          if (actionObj.action) newActionCount++;
        }
      }

      if (existingCount + newActionCount > 10) {
        setSuccessMsg("");
        setErrorMsg(
          `You can select/work on up to 10 actions total. You have ${existingCount} finalized. Please discontinue an action before adding more.`
        );
        setTimeout(() => setErrorMsg(""), 22000);
        return;
      }

      // Validate frequency and notes requirements
      let hasErrors = false;
      let frequencyMissing = false;
      let noteMissing = false;
      for (const category of selectedCategories) {
        const actions = allPlans[category] || [];
        for (const actionObj of actions) {
          if (!actionObj.action) continue;
          const noFrequency = actionObj.action.toLowerCase().includes("no frequency");
          if (!noFrequency && (!actionObj.frequency || !actionObj.frequency.trim())) {
            frequencyMissing = true;
            hasErrors = true;
          }
          if (actionObj.needsNote && (!actionObj.note || !actionObj.note.trim())) {
            noteMissing = true;
            hasErrors = true;
          }
        }
      }
      if (hasErrors) {
        setSuccessMsg("");
        if (frequencyMissing && noteMissing) {
          setErrorMsg("Frequency is required for all actions, and notes are required for some.");
        } else if (frequencyMissing) {
          setErrorMsg("Frequency is required for all actions.");
        } else if (noteMissing) {
          setErrorMsg("Note is required for some actions.");
        }
        setTimeout(() => setErrorMsg(""), 8000);
        return;
      }

      // Total selected actions limit check
      let totalSelected = 0;
      for (const category of selectedCategories) {
        const actions = allPlans[category] || [];
        totalSelected += actions.filter(a => a.action).length;
      }
      if (totalSelected > 10) {
        setSuccessMsg("");
        setErrorMsg("You can only select up to 10 total actions.");
        setTimeout(() => setErrorMsg(""), 8000);
        return;
      }

      setErrorMsg("");

      // Submit each valid action
      let count = 0;
      for (const category of selectedCategories) {
        const actions = allPlans[category] || [];
        for (const actionObj of actions) {
          if (!actionObj.action) continue;
          const noFrequency = actionObj.action.toLowerCase().includes("no frequency");
          if (!noFrequency && (!actionObj.frequency || !actionObj.frequency.trim())) continue;

          const input = {
            userId,
            CompletedDate: new Date().toISOString().slice(0, 10),
            CompletedTime: new Date().toISOString().slice(11, 19),
            ActionDomain: getDomainName(category.slice(0, 2)),
            ActionQuestion: labels[category] || "",
            Action: actionObj.action.replace(/\s*\(.*?\)\s*/g, "").trim(),
            Frequency: noFrequency ? "N/A" : actionObj.frequency,
            ActionNote: actionObj.note || "N/A",
            Update1Points: null,
            Update1Note: null,
            Update1Date: null,
            Update2Points: null,
            Update2Note: null,
            Update2Date: null,
            Update3Points: null,
            Update3Note: null,
            Update3Date: null,
            Update4Points: null,
            Update4Note: null,
            Update4Date: null,
            Update5Points: null,
            Update5Note: null,
            Update5Date: null,
            Update6Points: null,
            Update6Note: null,
            Update6Date: null,
            Update7Points: null,
            Update7Note: null,
            Update7Date: null,
            Update8Points: null,
            Update8Note: null,
            Update8Date: null,
            Percentage: 0,
            Discontinued: false,
            DiscontinuedDate: null,
            Successful: false,
            SuccessfulDate: null,
          };

          await client.graphql({
            query: createTrackPlanMutation,
            variables: { input },
          });

          count++;
          try {
            // Check if a CreatePlan record already exists
            const existingCreatePlanRes = await client.graphql({
              query: listCreatePlans,
              variables: { filter: { userId: { eq: userId } } },
            });

            const existingCreatePlans = existingCreatePlanRes?.data?.listCreatePlans?.items || [];
            const existingCreatePlan = existingCreatePlans.length > 0 ? existingCreatePlans[0] : null;

            if (existingCreatePlan) {
              // Update existing record
              await client.graphql({
                query: updateCreatePlan,
                variables: {
                  input: {
                    id: existingCreatePlan.id,
                    ...createPlanInput,
                  },
                },
              });
              console.log("CreatePlan updated successfully");
            } else {
              // Create new record
              await client.graphql({
                query: createCreatePlan,
                variables: { input: createPlanInput },
              });
              console.log("CreatePlan created successfully");
            }
          } catch (err) {
            console.error("Failed to save CreatePlan:", err);
            // optionally set error state here
          }
        }
      }

      if (count === 0) {
        setSuccessMsg("");
        setErrorMsg("No valid actions were selected.");
        setTimeout(() => setErrorMsg(""), 8000);
      } else {
        setErrorMsg("");
        setSuccessMsg(`Finalized ${count} action(s) successfully!`);
        setTimeout(() => setSuccessMsg(""), 8000);
        setAllPlans({});
        setResetFlag((prev) => !prev);

        // Refresh existing count
        const refreshQuery = `
          query ListTrackPlans {
            listTrackPlans(filter: { userId: { eq: "${userId}" } }) {
              items { id }
            }
          }
        `;
        const refreshRes = await client.graphql({ query: refreshQuery });
        const refreshedItems = refreshRes?.data?.listTrackPlans?.items || [];
        setExistingCount(refreshedItems.length);
        setSavedActionCount(refreshedItems.length);
      }
      try {
              const userAttrs = await fetchUserAttributes();
      
              const userEmail = userAttrs.email;
              // 1. Query UserLink where clientEmail matches
              const userLinksData = await client.graphql({
                query: listUserLinks,
                variables: {
                  filter: {
                    clientEmail: { eq: userEmail }
                  },
                },
              });
      
      
              const userLinks = userLinksData.data.listUserLinks.items;
      
              if (!userLinks.length) {
                console.log("No linked professionals found for this client.");
                return;
              }
      
              // 2. Extract all professional emails
              const professionalEmails = userLinks.map(link => link.professionalEmail);
      
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
      
                    RecommedationNote: `${responderFirstName} ${responderLastName} has an plan ready for you to reveiw`,
      
                    SenderId: responderId,
                    SenderFirstName: responderFirstName,
                    SenderLastName: responderLastName,
                    SenderEmail: userEmail,
                    TargetEmail: email,
                    NotificationType: "ReviewReady",
                    Status: "pending",
                    StatusDate: new Date().toISOString().split("T")[0],
      
                  };
      
      
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
      console.error("Submission error:", err);
      setSuccessMsg("");
      setErrorMsg("Submission failed: " + (err?.errors?.[0]?.message || err?.message));
      setTimeout(() => setErrorMsg(""), 4000);
    }
  };
  const createPlanInput = mapSelectionsToCreatePlanInput({
    selectedStrengths,
    selectedBarriers,
    otherBarrierText,
    selectedNoteTriggers,
    selectedNoteWarningSigns,
    barrierNote,
    userId,
  });

  function mapSelectionsToCreatePlanInput({
    selectedStrengths,
    selectedBarriers,
    otherBarrierText,
    selectedNoteTriggers,
    selectedNoteWarningSigns,
    barrierNote,
    userId,
  }) {
    // Start with all booleans false, and empty string notes
    const input = {
      userId,
      PSProblemSolving: false,
      PSSelfEsteem: false,
      PSChoiceAutonomy: false,
      PSSelfCare: false,
      PSSelfAwareness: false,
      PSCreativity: false,

      CSForgiveness: false,
      CSKindness: false,
      CSGratitude: false,
      CSPatience: false,
      CSCourage: false,

      CMSCopingChoice: false,
      CMSResilience: false,
      CMSSelfRegulation: false,
      CMSOptimism: false,

      COMSupportSystem: false,
      COMSocialIntelligence: false,
      COMCommunication: false,
      COMFaithCommunity: false,
      COMAccomplishments: false,

      BRStableHousing: false,
      BRQualityHealthcare: false,
      BRProfessionalAccess: false,
      BRInsuranceCoverage: false,
      BRFinancialConstraints: false,
      BREducationAttainment: false,
      BRSocialStigma: false,
      BRUnsupportiveCommunity: false,
      BRNonexistentCommunity: false,
      BRCommunityResources: false,
      BRProfessionalTrust: false,
      BRHealthcareSystemTrust: false,
      BRCognitiveImpairments: false,
      BRDependentCare: false,
      BRTransportation: false,
      BRTechnologyAccess: false,
      BRLanguage: false,
      BRHealthcareProcess: false,
      BROther: false,
      BRResponseNote: barrierNote || "",

      TGBetrayal: false,
      TGBoundaries: false,
      TGDisorder: false,
      TGPain: false,
      TGRejection: false,
      TGStress: false,
      TGMemories: false,
      TGUnjustTreatment: false,
      TGUnpleasantConversations: false,
      TGUnsafeEnvironments: false,
      TGOther: false,

      WSFlashbacks: false,
      WSIncreasedAppetite: false,
      WSDecreasedAppetite: false,
      WSIntenseEmotions: false,
      WSDisconnecting: false,
      WSTime: false,
      WSNegativeSelfTalk: false,
      WSNeglectingSelfCare: false,
      WSNightmares: false,
      WSRecklessBehavior: false,
      WSOther: false,
    };

    // Mark selected strengths true
    selectedStrengths.forEach(({ value }) => {
      if (value in input) input[value] = true;
    });

    // Mark selected barriers true
    selectedBarriers.forEach(({ value }) => {
      if (value === "BROther") {
        input.BROther = true;
        input.BRResponseNote = otherBarrierText || "";
      } else if (value in input) {
        input[value] = true;
      }
    });

    // Mark note triggers true
    selectedNoteTriggers.forEach(({ value }) => {
      if (value in input) input[value] = true;
    });

    // Mark warning signs true
    selectedNoteWarningSigns.forEach(({ value }) => {
      if (value in input) input[value] = true;
    });

    return input;
  }

  if (loading) return <p style={{ padding: 20 }}>Loading your health plan...</p>;
  if (error) return <p style={{ padding: 20, color: "black" }}> {error}</p>;
  if (checkingAccess) return <p style={{ padding: 20 }}>Checking your subscription...</p>;

  const totalSelectedCount = Object.values(allPlans)
    .flat()
    .filter((a) => a?.action)
    .length;

  if (!hasAccess) {
    const finalPrice = calculateFinalPrice();

    return (
      <div style={{ padding: 20, maxWidth: 500, margin: "auto" }}>
        <h2 style={{ marginBottom: 16 }}>Access Your Health Plan</h2>
        <p>
          This feature is <strong>$10</strong> per year. During this time you will
          have unlimited access to create and edit your plan, track your progress,
          make notes, and view and download your reports. If you have a coupon add it below.
        </p>

        <div style={{ marginTop: 16 }}>
          <input
            placeholder="Enter Coupon Code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            style={{ width: "100%", padding: 8 }}
            disabled={validating}
          />
          <button
            onClick={handleValidateCoupon}
            disabled={validating || !coupon.trim()}
            style={{ marginTop: 8, width: "100%", padding: 10 }}
          >
            {validating ? "Checking..." : "Apply Coupon"}
          </button>
          {couponData && (
            <button
              onClick={() => {
                setCouponData(null);
                setCoupon("");
                setCouponError("");
                setSuccessMsg("");
              }}
              style={{ marginTop: 8 }}
            >
              Remove Coupon
            </button>
          )}

          {couponError && <p style={{ color: "red" }}>{couponError}</p>}
          {successMsg && <p style={{ color: "green" }}>{successMsg}</p>}
          {couponData && !successMsg && (
            <p style={{ color: "green", marginTop: 8 }}>
              Coupon applied:{" "}
              {couponData.type === "percent"
                ? `${couponData.value}% off`
                : `$${couponData.value} off`}
            </p>
          )}
        </div>

        <div style={{ marginTop: 24 }}>
          <p>
            <strong>Total:</strong> ${finalPrice}
          </p>

          <PayPalScriptProvider options={{ "client-id": "ATuJ4tRAoRQahAlb6Wlsg4alE8ihFOP46xNOD-rIPne9C55rRq1TI7oaqiBNDYUpaJJiZ6hYgNjyhrTv" }}>
            <PayPalButtons
              style={{ layout: "vertical" }}
              forceReRender={[finalPrice]}
              createOrder={(data, actions) =>
                actions.order.create({
                  purchase_units: [
                    {
                      amount: { value: finalPrice },
                    },
                  ],
                })
              }
              onApprove={async (data, actions) => {
                const details = await actions.order.capture();
                console.log("Payment successful:", details);

                try {
                  await client.graphql({
                    query: updateUserPayments,
                    variables: {
                      input: {
                        id: userId, // Make sure your schema uses userId as PK for UserPayments or adjust accordingly
                        userId,
                        paidUntil: new Date(
                          new Date().setFullYear(new Date().getFullYear() + 1)
                        ).toISOString(),
                      },
                    },
                  });

                  if (couponData) {
                    await client.graphql({
                      query: updateCoupon,
                      variables: {
                        input: {
                          id: couponData.id,
                          timesUsed: couponData.timesUsed + 1,
                        },
                      },
                    });
                  }

                  setHasAccess(true);
                  await fetchFlaggedData(
                    setSelectedCategories,
                    setUserId,
                    setAllPlans,
                    setExistingCount,
                    setSavedActionCount,
                    setRemainingSlots,
                    setLoading,
                    setError
                  );
                } catch (err) {
                  console.error("Error updating payment after PayPal success:", err);
                }
              }}
              onError={(err) => {
                console.error("PayPal error:", err);
                alert("Payment failed. Please try again.");
              }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    );
  }

  return (

    <div style={{ padding: 20, maxWidth: 400 }}>

      <h1 style={{ fontSize: 28, marginBottom: 8, marginTop: -80 }}>Create Health Plan</h1>
      <p style={{ fontSize: 16, marginBottom: 24 }}>

        The areas below are shown because your scores were outside of a healthy range.
        Click actions to select and set your personal plan. You can select / work on 10 actions at one time.
      </p>
      {hasExistingPlans && (
        <div style={{
          backgroundColor: "#fffbe6",
          border: "1px solid #ffd700",
          padding: "12px 16px",
          borderRadius: 8,
          marginBottom: 16,
          color: "#997c00",
          fontWeight: "bold",
          textAlign: "center"
        }}>
          You have actions in progress. To track or discontinue an action visit the <strong>Track Progress</strong> page.
        </div>
      )}
      <h1 style={{ marginBottom: 16, fontSize: 24, fontWeight: "bold" }}>
        Strengths
      </h1>
      <Select
        options={strengthOptions}
        value={selectedStrengths}
        onChange={setSelectedStrengths}
        isMulti
        closeMenuOnSelect={false}
        placeholder="Select your strengths..."
      />
      <h1 style={{ marginBottom: 16, fontSize: 24, fontWeight: "bold" }}>
        Barriers
      </h1>
      <Select
        options={barrierOptions}
        isMulti
        closeMenuOnSelect={false}
        placeholder="Select barriers..."
        value={selectedBarriers}
        onChange={handleBarrierChange}
      />
      {isOtherBarrierSelected && (
        <textarea
          placeholder="Please specify other barrier..."
          value={otherBarrierText}
          onChange={e => setOtherBarrierText(e.target.value)}
          style={{
            marginTop: 8,
            width: "100%",
            minHeight: 70,
            padding: 8,
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: 14,
            resize: "vertical",
          }}
        />
      )}
      {showNoteDropdowns && (
        <>
          {/* New note textarea for barriers */}
          <textarea
            placeholder="What can be/is being done to remove barriers?"
            value={barrierNote}
            onChange={e => setBarrierNote(e.target.value)}
            style={{
              marginTop: 16,
              width: "100%",
              minHeight: 90,
              padding: 10,
              borderRadius: 6,
              border: "1px solid #ccc",
              fontSize: 15,
              resize: "vertical",
            }}
          />
          <h2>Note Triggers</h2>
          <Select
            options={noteTriggersOptions}
            isMulti
            closeMenuOnSelect={false}
            placeholder="Select note triggers..."
            value={selectedNoteTriggers}
            onChange={setSelectedNoteTriggers}
          />

          <h2 style={{ marginTop: 24 }}>Note Warning Signs</h2>
          <Select
            options={noteWarningSignsOptions}
            isMulti
            closeMenuOnSelect={false}
            placeholder="Select warning signs..."
            value={selectedNoteWarningSigns}
            onChange={setSelectedNoteWarningSigns}
          />
        </>
      )}
      {selectedCategories.map((key) => (
        <CopingPlanCard
          key={key}
          categoryKey={key}
          actions={Actions[key]}
          onPlanUpdate={updateCategoryPlan}
          maxAllowed={remainingSlots}  // <-- pass remainingSlots here
          totalSelectedCount={totalSelectedCount}
          resetFlag={resetFlag}
          existingCount={existingCount}
        />
      ))}


      <button
        onClick={handleSubmitAll}
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
        Finalize Chosen Actions
      </button>
      {errorMsg && (
        <div style={{
          marginTop: 12,
          padding: "10px 16px",
          backgroundColor: "#ffe6e6",
          color: "#b00000",
          borderRadius: 8,
          textAlign: "center",
          fontWeight: "bold",
          border: "1px solid #b00000"
        }}>
          {errorMsg}
        </div>
      )}
      {successMsg && (
        <div style={{
          marginTop: 12,
          padding: "10px 16px",
          backgroundColor: "#e0f0ff",
          color: "#0077cc",
          borderRadius: 8,
          textAlign: "center",
          fontWeight: "bold",
          border: "1px solid #0077cc"
        }}>
          {successMsg}
        </div>
      )}

    </div>
  );
}
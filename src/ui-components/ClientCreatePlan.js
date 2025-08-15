import { generateClient } from "aws-amplify/api";
import { getCurrentUser } from "aws-amplify/auth";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useConnectedClient } from "../ui-components/ConnectedClientContext";


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
  PHMeat: "Meat",
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
const { connectedClient } = useConnectedClient();
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
        width: 300,
        margin: "40px auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 12,
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 12 }}>
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

export default function CopingPlanManager() {

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allPlans, setAllPlans] = useState({});
  const { connectedClient } = useConnectedClient();
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [savedActionCount, setSavedActionCount] = useState(0); // ← already added below too
  const [remainingSlots, setRemainingSlots] = useState(10);

  const [resetFlag, setResetFlag] = useState(false);

  const [existingCount, setExistingCount] = useState(0);
  const hasExistingPlans = existingCount > 0;

  useEffect(() => {
    async function fetchFlagged() {
      try {
        setLoading(true);
        const user = await getCurrentUser();
        const uid = user?.userId || "";
        if (!uid) throw new Error("User not authenticated");

        
        const trackPlanQuery = `
  query ListTrackPlans {
    listTrackPlans(filter: { 
      userId: { eq: "${connectedClient.clientId}" }

      Discontinued: { eq: false },
      Successful: { eq: false }
    }) {
      items { id }
    }
  }
`;


        // Fetch latest assessments flagged for intervention
        const query = `
  query ListAssessments {
    listAssessmentScores(limit: 50, filter: {
      userId: { eq: "${connectedClient.clientId}" }, isActive: { eq: false }
    }) {
      items { id updatedAt }
    }
  }
`;

        const assessmentRes = await client.graphql({ query });
        const items = assessmentRes?.data?.listAssessmentScores?.items || [];

        if (items.length === 0) throw new Error("No assessment records found");




        const trackPlanRes = await client.graphql({ query: trackPlanQuery });
        const existingItems = trackPlanRes?.data?.listTrackPlans?.items || [];

        // Calculate remaining slots:
        const maxTotalAllowed = 10;
        const remaining = maxTotalAllowed - existingItems.length;

        setExistingCount(existingItems.length);
        setSavedActionCount(existingItems.length);
        setRemainingSlots(remaining);
        if (items.length === 0) throw new Error("No assessment records found");

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

    fetchFlagged();
  }, []);

  const updateCategoryPlan = useCallback((key, plan) => {
    setAllPlans((prev) => ({ ...prev, [key]: plan }));
  }, []);


  const handleSubmitAll = async () => {
    try {
      const trackPlanQuery = `
  query ListTrackPlans {
    listTrackPlans(filter: { userId: { eq: "${connectedClient.clientId}" } }) {
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

      // Check if total would exceed 10
      if (existingCount + newActionCount > 10) {
        setSuccessMsg("");
        setErrorMsg(`You can select / work on up to 10 actions at one time. You have ${existingCount} action(s) finalized. Go to Track Progress to discontinue an action, before adding another.`);
        setTimeout(() => setErrorMsg(""), 22000);
        return;
      }
      
      let hasErrors = false;
      let frequencyMissing = false;
      let noteMissing = false;

      for (const category of selectedCategories) {
        const actions = allPlans[category] || [];
        for (let i = 0; i < actions.length; i++) {
          const actionObj = actions[i];
          if (!actionObj.action) continue;

          // Check if this action has noFrequency tag
          const noFrequency = actionObj.action.toLowerCase().includes("no frequency");

          if (!noFrequency) {  // Only require frequency if noFrequency is false
            if (!actionObj.frequency || actionObj.frequency.trim() === "") {
              frequencyMissing = true;
              hasErrors = true;
            }
          }

          if (actionObj.needsNote && (!actionObj.note || actionObj.note.trim() === "")) {
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
        setTimeout(() => setErrorMsg(""), 8000); // hide after 4 seconds
        return; // stop submission
      }
      let count = 0;
      let totalSelected = 0;

      for (const category of selectedCategories) {
        const actions = allPlans[category] || [];
        totalSelected += actions.length;
      }
      if (totalSelected > 10) {
        setSuccessMsg("")
        setErrorMsg("You can only select up to 10 total actions.");
        setTimeout(() => setErrorMsg(""), 8000); // hide after 4 seconds
        return;
      }
      setErrorMsg(""); // Clear error if valid


      for (const category of selectedCategories) {
        const actions = allPlans[category] || [];

        for (const actionObj of actions) {
          if (!actionObj.action) continue;

          const noFrequency = actionObj.action.toLowerCase().includes("no frequency");

          // Skip if frequency is missing and frequency is required
          if (!noFrequency && (!actionObj.frequency || actionObj.frequency.trim() === "")) continue;


          const input = {
           
            CompletedDate: new Date().toISOString().slice(0, 10),
            CompletedTime: new Date().toISOString().slice(11, 19),
            ActionDomain: getDomainName(category.slice(0, 2)),
            ActionQuestion: labels[category],
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

          count++;  // count valid actions
        }
      }

      if (count === 0) {
        setSuccessMsg("")
        setErrorMsg("No Valid Actions were selected.");
        setTimeout(() => setErrorMsg(""), 8000); // hide after 4 seconds
      } else {
        setErrorMsg("");
        setSuccessMsg(`Finalized ${count} action(s) successfully!`);
        setTimeout(() => setSuccessMsg(""), 8000); // hide after 4 seconds
        setAllPlans({});
        setResetFlag((prev) => !prev); // <-- triggers the UI reset
        // ✅ Re-fetch updated action count
        const refreshQuery = `
    query ListTrackPlans {
      listTrackPlans(filter: { userId: { eq: "${connectedClient.clientId}" } }) {
        items { id }
      }
    }
  `;
        const refreshRes = await client.graphql({ query: refreshQuery });
        const refreshedItems = refreshRes?.data?.listTrackPlans?.items || [];
        setExistingCount(refreshedItems.length);
        setSavedActionCount(refreshedItems.length);
      }


    } catch (err) {
      console.error("Submission error:", err);
      setSuccessMsg("")
      setErrorMsg("Submission failed: " + (err?.errors?.[0]?.message || err?.message));
      setTimeout(() => setErrorMsg(""), 4000); // hide after 4 seconds
    }
  };

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        <div style={{
          width: 48,
          height: 48,
          border: '6px solid #ccc',
          borderTop: '6px solid #3498db',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }} />
        <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      </div>
    );
  }
  if (error) return <p style={{ padding: 20, color: "red" }}>Error: {error}</p>;
  const totalSelectedCount = Object.values(allPlans)
    .flat()
    .filter((a) => a?.action)
    .length;

  return (

    <div style={{ padding: 20 }}>

      <h1 style={{ fontSize: 28, marginBottom: 8, marginTop: -20 }}>Client Health Plan</h1>
      
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
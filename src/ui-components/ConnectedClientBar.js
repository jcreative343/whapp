import { generateClient } from "aws-amplify/api";
import { fetchUserAttributes } from "aws-amplify/auth";
import { useEffect, useRef, useState } from "react";
import { createNotifications } from '../graphql/mutations';
import { listAssessmentScores, listTrackPlans, } from "../graphql/queries";
import { useConnectedClient } from "./ConnectedClientContext";
const client = generateClient();
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
const fullHeight = () =>
  typeof window !== "undefined" && window.innerWidth < 768 ? "100dvh" : "100vh";

export default function ConnectedClientBar() {
  const { connectedClient, setConnectedClient } = useConnectedClient();
  const [recommendations, setRecommendations] = useState([
    { id: Date.now(), field: "", type: "", text: "", frequency: "", frequencyDisabled: false }
  ]);

  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [barVisible, setBarVisible] = useState(false);
  const hideTimeout = useRef(null);
  const [readyToRender, setReadyToRender] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [isUnmounting, setIsUnmounting] = useState(false);
  const [inProgressActions, setInProgressActions] = useState([]);

  // Show both on new client connection
  // Show sidebar + top bar with slight delay (so they slide in)
  // Animate entrance on every client switch
  // When client is unselected, slide out both UI components
  useEffect(() => {
    const fetchDropdownOptions = async () => {
      if (!connectedClient) return;

      try {
        // Fetch scores only by userId and isActive
        const scoreResponse = await client.graphql({
          query: listAssessmentScores,
          variables: {
            filter: {
              userId: { eq: connectedClient.clientId },
              isActive: { eq: false }
            }
          }
        });

        const allScores = scoreResponse?.data?.listAssessmentScores?.items || [];
        const redFlagOptions = [];

        // Fetch track progress
        const progressResponse = await client.graphql({
          query: listTrackPlans,
          variables: {
            filter: {
              userId: { eq: connectedClient.clientId },
              Successful: { eq: false },
              Discontinued: { eq: false },
            },
          },
        });

        const inProgressActions = progressResponse?.data?.listTrackPlans?.items || [];
        setInProgressActions(inProgressActions);

        // Create a set of in-progress action strings for quick lookup
        const inProgressSet = new Set(
          inProgressActions.map(item => item.Action.trim())
        );

        const addedActionsSet = new Set(); // to prevent duplicates

        allScores.forEach(item => {
          Object.entries(item).forEach(([field, value]) => {
            if (value === 3 || value === 4) {
              const actionsForField = Actions[field];
              if (Array.isArray(actionsForField)) {
                let filteredActions = [...actionsForField];

                const lastAction = filteredActions[filteredActions.length - 1];
                if (lastAction && lastAction.includes("Other (when chosen provide free text)")) {
                  filteredActions.pop();
                }

                filteredActions.forEach(action => {
                  const cleanedAction = action.replace(/\s*\([^)]*\)/g, '').trim();
                  const uniqueKey = `${field}-${cleanedAction}`;

                  if (!inProgressSet.has(cleanedAction) && !addedActionsSet.has(uniqueKey)) {
                    addedActionsSet.add(uniqueKey);

                    const originalAction = action.trim(); // unmodified action, including (No Frequency)

                    redFlagOptions.push({
                      label: `(${labels[field] || field}) ${cleanedAction}`,
                      value: `red-${item.id}-${field}-${cleanedAction.replace(/\s+/g, "-").toLowerCase()}`,
                      field: field,
                      originalAction,   // save full action text including (No Frequency)
                    });

                  }
                });
              }
            }
          });
        });

        const reverseLabels = Object.entries(labels).reduce((acc, [key, value]) => {
          acc[value] = key;
          return acc;
        }, {});
        // Combine the two arrays: progress + red flags
        const formattedOptions = [
          // In-progress actions with ActionDomain + ActionQuestion
          ...inProgressActions
            .filter(item => item.ActionDomain && item.ActionQuestion)
            .map(item => {
              const field = reverseLabels[item.ActionQuestion] || "Unknown";
              return {
                label: `(In progress) ${item.Action}`,
                value: `progress-${item.id}`,
                field, // important to categorize the dropdown
              };
            }),

          // Red flags as before
          ...redFlagOptions,
        ];


        setDropdownOptions(formattedOptions);

      } catch (error) {
        console.error("Error loading dropdown options", error);
      }
    };

    fetchDropdownOptions();
  }, [connectedClient]);



  useEffect(() => {
    if (connectedClient) {
      // show
      setIsUnmounting(false);
      setReadyToRender(true);
      setSidebarVisible(false);
      setBarVisible(false);

      const timeout = setTimeout(() => {
        setSidebarVisible(true);
        setBarVisible(true);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      if (isClosing) {
        // Closing: start slide-out animation
        setIsUnmounting(true);
        setSidebarVisible(false);
        setBarVisible(false);

        const timeout = setTimeout(() => {
          setReadyToRender(false);
          setIsUnmounting(false);
          setIsClosing(false); // reset closing flag here
        }, 400); // match CSS transition duration

        return () => clearTimeout(timeout);
      } else {
        // No client, not closing - hide immediately
        setReadyToRender(false);
      }
    }
  }, [connectedClient, isClosing]);






  useEffect(() => {
    if (barVisible && !isClosing) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = setTimeout(() => {
        setBarVisible(false);
      }, 5000);
    }

    return () => clearTimeout(hideTimeout.current);
  }, [barVisible, isClosing]);
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isClosing) return;  // Ignore while closing
      if (e.clientY < 60) {
        setBarVisible(true);
      }
    };

    const handleClick = (e) => {
      if (isClosing) return;  // Ignore while closing
      if (e.clientY < 60) {
        setBarVisible(true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [isClosing]);


  // Show bar on hover or click near top


  if (!readyToRender && !isUnmounting) return null;

  const handleStopViewing = () => {
    if (isClosing) return; // prevent double click
    setIsClosing(true);
    setConnectedClient(null);
  };



  const sidebarTabButton = {
    position: "fixed",
    top: "50%",
    right: sidebarVisible ? 300 : 0,
    transform: "translateY(-50%)",
    backgroundColor: "#ccc",
    padding: "10px 8px",
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
    cursor: "pointer",
    zIndex: 1060,
    fontWeight: "bold",
    boxShadow: "-1px 0 4px rgba(0,0,0,0.2)",
  };

  const handleAddRecommendation = () => {
    setRecommendations((prev) => [
      ...prev,
      { id: Date.now(), field: "", type: "", text: "" }
    ]);
  };

  const handleSubmit = async () => {
    try {

      const attrs = await fetchUserAttributes();
      const senderFirstName = attrs["given_name"] || "";
      const senderLastName = attrs["family_name"] || "";
      const senderEmail = attrs["email"] || "";
      const senderId = attrs.sub || "";

      const today = new Date().toISOString().split('T')[0]; // yyyy-mm-dd

      for (const rec of recommendations) {
        if (!rec.field || !rec.type) continue; // skip incomplete entries

        const selectedOption = dropdownOptions.find(opt => opt.value === rec.type);
        const cleanedLabel = selectedOption?.label?.replace(/^\([^)]*\)\s*/, '') || rec.type;

        const input = {
          RecommedationResult: rec.field,
          RecommedationAction: cleanedLabel,
          RecommedationActionFrequency: rec.frequency || '',
          RecommedationType: rec.status || '',
          RecommedationNote: rec.text || '',
          RecommendationDate: today,
          SenderId: senderId,
          SenderFirstName: senderFirstName,
          SenderLastName: senderLastName,
          SenderEmail: senderEmail,
          TargetEmail: connectedClient?.email,
          NotificationType: "Recommendation",
          StatusDate: today,
          Status: "pending"
        };

        await client.graphql({
          query: createNotifications,
          variables: { input },
        });
      }

      alert('Recommendations submitted successfully!');
      // Optionally clear or reset recommendations here

    } catch (error) {
      console.error('Error submitting recommendations:', error);
      alert('Failed to submit recommendations.');
    }
  };
  const handleChange = (index, field, value) => {
    const updated = [...recommendations];
    updated[index][field] = value;

    // Reset dependent fields if base values change
    if (field === "field") {
      updated[index]["type"] = "";
      updated[index]["frequency"] = "";
      updated[index]["frequencyDisabled"] = false;
    }

    // Check frequency rules when 'type' changes
    if (field === "type") {
      const selectedValue = value;

      let frequency = "";
      let frequencyDisabled = false;

      if (selectedValue.startsWith("progress-")) {
        // Find matching in-progress item
        const inProgressItem = dropdownOptions.find(opt => opt.value === selectedValue);
        const matched = inProgressActions.find(item => `progress-${item.id}` === selectedValue);

        if (matched) {
          frequency = matched.Frequency !== "N/A" ? matched.Frequency : "";
          frequencyDisabled = matched.Frequency === "N/A";
        }

      } else if (selectedValue.startsWith("red-")) {
        const matched = dropdownOptions.find(opt => opt.value === selectedValue);
        if (matched && matched.originalAction && matched.originalAction.includes("(No Frequency)")) {
          frequencyDisabled = true;
          frequency = "";
        }
      }

      updated[index]["frequency"] = frequency;
      updated[index]["frequencyDisabled"] = frequencyDisabled;
    }

    setRecommendations(updated);
  };
  const statusOptions = [
    "Recommend Adding to Plan",
    "Recommend Changing Frequency",
    "Making Good Progress, No Change Recommended",
    "Having Some Challenges, Reassess Action Later",
    "Recommend Discontinuing Action",
  ];


  return (
    <>
      {/* Top Bar */}
      <div
        style={{
          ...barStyle,
          transform: barVisible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.4s ease-in-out",
        }}
      >
        <div style={infoContainerStyle}>
          <div style={infoTextStyle}>
            <strong>Viewing:</strong> {connectedClient?.firstName || ""} {connectedClient?.lastName || ""}

          </div>
          <div style={dividerStyle} />
          <div style={infoTextStyle}>
            <strong>Email:</strong> {connectedClient?.email || ""}

          </div>
        </div>

        <button
          style={disconnectBtn}
          onClick={handleStopViewing}
          disabled={isClosing}
        >
          Stop Viewing
        </button>
      </div>

      {/* Sidebar */}
      <div
        style={{
          ...sidebarContainerStyle,
          transform: sidebarVisible ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s ease-in-out",
        }}
      >
        {/* Tab Button inside the sidebar */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: -28,
            transform: "translateY(-50%)",
            backgroundColor: "#ccc",
            padding: "6px 6px",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
            cursor: "pointer",
            zIndex: 1060,
            fontWeight: "bold",
            boxShadow: "-1px 0 4px rgba(0,0,0,0.2)",
          }}
          onClick={() => setSidebarVisible((prev) => !prev)}
        >
          {sidebarVisible ? "→" : "←"}
        </div>

        <div style={recommendationsScrollStyle}>
          <button onClick={handleAddRecommendation} style={addBtnStyle}>
            + Add Recommendation or Note
          </button>
          {recommendations.map((rec, index) => (
            <div key={rec.id} style={recommendationBoxStyle}>
              {/* Remove button */}
              <button
                onClick={() => {
                  setRecommendations((prev) => prev.filter((_, i) => i !== index));
                }}
                style={{
                  marginTop: 10,
                  backgroundColor: "#B00000",
                  color: "#fff",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: 6,
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: 14,
                  marginBottom: 8,
                  height: 36,
                }}
              >
                Remove Recommendation
              </button>
              <label>
                Choose Result:
                <select
                  value={rec.field}
                  onChange={(e) => handleChange(index, "field", e.target.value)}
                  style={selectStyle}
                >
                  <option value="">Select...</option>
                  {Array.from(new Set(dropdownOptions.map(opt => opt.field))).map((field) => (
                    <option key={field} value={field}>
                      {labels[field] || field} {/* Use readable label from your labels object */}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Choose Action:
                <select
                  value={rec.type}
                  onChange={(e) => handleChange(index, "type", e.target.value)}
                  style={selectStyle}
                >
                  <option value="">Select...</option>
                  {dropdownOptions
                    .filter(opt => opt.field === rec.field) // Filter by selected field
                    .map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}

                </select>
              </label>
              {rec.type && (
                <label >
                  Choose Frequency:
                  <select
                    value={rec.frequency}
                    onChange={(e) => handleChange(index, "frequency", e.target.value)}
                    disabled={rec.frequencyDisabled}
                    style={selectStyle}
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
                </label>
              )}
              <label>Choose Recommendation:</label>
              {/* Status toggle buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 12, alignItems: "center" }}>
                {statusOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      const updated = [...recommendations];
                      updated[index].status = updated[index].status === option ? "" : option;
                      setRecommendations(updated);
                    }}
                    style={{
                      height: "auto",            // let height adjust if needed
                      minHeight: 60,
                      cursor: "pointer",
                      padding: "8px 16px",
                      borderRadius: 8,
                      border: rec.status === option ? "2px solid #4da6ff" : "1px solid #ccc",
                      backgroundColor: rec.status === option ? "#d9eaff" : "#fff",
                      fontWeight: "normal",
                      fontSize: 14,
                      userSelect: "none",
                      whiteSpace: "normal",      // allow line breaks
                      wordWrap: "break-word",    // break long words if needed
                      textAlign: "center",
                      maxWidth: 300,             // limit max width
                      width: "100%",             // size based on content
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>



              <label style={{ marginTop: 8 }}>
                Additional Notes:
                <textarea
                  value={rec.text}
                  onChange={(e) => handleChange(index, "text", e.target.value)}
                  placeholder="Type recommendation..."
                  style={textareaStyle}
                />
              </label>
            </div>
          ))}


        </div>

        <div style={finalizeBarStyle}>
          <button style={finalizeBtnStyle}
            onClick={handleSubmit}
          >Finalize</button>
        </div>
      </div>

      {/* Sidebar Toggle Tab (always visible) */}

      {/* Invisible hover zone to reveal top bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: 20,
          zIndex: 1090,
          cursor: "pointer",
        }}
        onMouseEnter={() => setBarVisible(true)}
        title="Reveal top bar"
      />

    </>
  );
}

const barStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  backgroundColor: "#d8d8d8",
  padding: "10px 24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 1100,
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  overflowX: "auto",
};

const infoContainerStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 12,
  minWidth: 0,
  overflowX: "auto",
  whiteSpace: "nowrap",
  flexGrow: 1,
  scrollbarWidth: "none",
  msOverflowStyle: "none",
};

const infoTextStyle = {
  fontSize: 14,
  color: "#333",
};

const dividerStyle = {
  height: 18,
  width: 1,
  backgroundColor: "#ccc",
};

const disconnectBtn = {
  backgroundColor: "#B00000",
  height: 36,
  color: "#fff",
  border: "none",
  padding: "6px 12px",
  borderRadius: 6,
  cursor: "pointer",
  fontWeight: "bold",
  marginLeft: 12,
};

// ==== Sidebar Styles ====

const sidebarContainerStyle = {
  position: "fixed",
  top: 0,
  right: 0,
  height: fullHeight(),
  width: 300,
  backgroundColor: "#f4f4f4",
  borderLeft: "1px solid #ccc",
  boxShadow: "-2px 0 5px rgba(0,0,0,0.1)",
  zIndex: 1050,
  display: "flex",
  flexDirection: "column",
  transform: "translateX(100%)",
  transition: "transform 0.4s ease-in-out",
};


const recommendationsScrollStyle = {
  marginTop: 70,
  flex: 1,
  overflowY: "auto",
  padding: "20px",
};

const recommendationBoxStyle = {


  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: 8,
  padding: 12,
  marginBottom: 16,
  display: "flex",
  flexDirection: "column",
};

const selectStyle = {
  marginTop: 4,
  marginBottom: 20,
  padding: 6,
  borderRadius: 8,
  border: "1px solid #ccc",
  width: "100%",
};

const textareaStyle = {
  marginTop: 4,
  padding: 8,
  borderRadius: 4,
  border: "1px solid #ccc",
  width: "100%",
  minHeight: 80,
  resize: "vertical",
};

const addBtnStyle = {
  padding: "10px 16px",
  border: "1px solid #ccc",
  backgroundColor: "#fff",
  borderRadius: 6,
  cursor: "pointer",
  fontWeight: "bold",
  marginBottom: 16,
};

const finalizeBarStyle = {
  borderTop: "1px solid #ccc",
  padding: 12,
  backgroundColor: "#f4f4f4",
};

const finalizeBtnStyle = {
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
};

const toggleBtnStyle = {
  marginBottom: 12,
  backgroundColor: "#eee",
  border: "1px solid #ccc",
  padding: "6px 12px",
  borderRadius: 6,
  cursor: "pointer",
  fontWeight: "bold",
  width: "100%",
};

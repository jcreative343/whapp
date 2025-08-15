/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Radio,
  RadioGroupField,
  SelectField,
  SwitchField,
  Text,
  TextField,
  ToggleButton,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createAssessmentAnswers } from "../../graphql/mutations";
const client = generateClient();
export default function WholisticHealthAssessment(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    CompletedDate: "",
    CompletedTime: "",
    TRHurtfulNames: false,
    TRNoNurturing: false,
    TRHit: false,
    TRNeedsNotMet: false,
    TRForcedSex: false,
    TRResponsible: false,
    TRViolence: false,
    TRSubstanceAbuse: false,
    TRMentalIllness: false,
    TRParentDivorce: false,
    TRParentIncarcerated: false,
    TRHomelessness: false,
    TRBodyFunction: false,
    TRNaturalDisaster: false,
    TRDirectTerrorism: false,
    TRIndirectTerrorism: false,
    TRLovedOne: false,
    TRBelief: undefined,
    TRResponseProfessional: false,
    TRResponseFamilyFriend: false,
    TRResponseGod: false,
    TRResponseNoOne: false,
    TRNoTrauma: false,
    CMAlcohol: "",
    CMDrugs: "",
    CMOvereating: "",
    CMSmoking: "",
    CMGaming: "",
    CMShopping: "",
    CMGambling: "",
    CMSex: "",
    CMPorn: "",
    CMBlaming: "",
    CMHurting: "",
    CMDisengage: "",
    CMArt: "",
    CMMusic: "",
    CMPoetry: "",
    CMReading: "",
    CMGroups: "",
    CMCounseling: "",
    CMVenting: "",
    CMWriting: "",
    CMSensory: "",
    CMDancing: "",
    CMExercising: "",
    CMWalking: "",
    CMChange: "",
    CMAnalyze: "",
    CMDaydream: "",
    CMPositive: "",
    MHDxPTSD: false,
    MHDxDepression: false,
    MHDxSUD: false,
    MHDxOtherMental: false,
    MHSleeplessness: "",
    MHAlcoholUse: "",
    MHAnxiety: "",
    MHDepression: "",
    MHDrugUse: "",
    MHGrief: "",
    MHGuilt: "",
    MHIrritability: "",
    MHStress: "",
    MHRegret: "",
    MHSuicidalThoughts: "",
    MHLoneliness: "",
    MHWorry: "",
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
    PHVegeFruits: "",
    PHBeanLentils: "",
    PHGrainBreads: "",
    PHDairy: "",
    PHMeat: "",
    PHFishSeafood: "",
    PHSweets: "",
    PHWater: "",
    PHPhysicalActivity: "",
    SHSpiritualDefine: "",
    SHSpiritualIntegrate: "",
    SHPrayer: "",
    SHSpiritualActivity: "",
    SHReadText: "",
    SHAlignText: "",
    SHCommunity: "",
    OLHope: "",
    OLPeace: "",
    OLLearning: "",
    OLJoy: "",
    OLStable: "",
    OLSafety: "",
    OLKindness: "",
    OLForgiveness: "",
    OLPatience: "",
    OLRelationships: "",
    OLBoundaries: "",
    OLEUnpleasant: "",
    OLEPleasant: "",
    OLEControl: "",
    OLENumber: "",
    SDoHAgeRange: "",
    SDoHRace: "",
    SDoHGeographicRegion: "",
    userId: "",
    SDoHEthnicity: "",
    SDoHState: "",
    SDoHZipCode: "",
    SDoHMaritalStatus: "",
    SDoHMilitaryStatus: "",
    SDoHGender: "",
    SDoHEducation: "",
    SDoHJobStatus: "",
    SDoHIncome: "",
    SDoHHousingStatus: "",
    SDoHHomeAsChild: "",
    SDoHReligion: "",
    SDoHDenomination: "",
    isActive: false,
  };
  const [CompletedDate, setCompletedDate] = React.useState(
    initialValues.CompletedDate
  );
  const [CompletedTime, setCompletedTime] = React.useState(
    initialValues.CompletedTime
  );
  const [TRHurtfulNames, setTRHurtfulNames] = React.useState(
    initialValues.TRHurtfulNames
  );
  const [TRNoNurturing, setTRNoNurturing] = React.useState(
    initialValues.TRNoNurturing
  );
  const [TRHit, setTRHit] = React.useState(initialValues.TRHit);
  const [TRNeedsNotMet, setTRNeedsNotMet] = React.useState(
    initialValues.TRNeedsNotMet
  );
  const [TRForcedSex, setTRForcedSex] = React.useState(
    initialValues.TRForcedSex
  );
  const [TRResponsible, setTRResponsible] = React.useState(
    initialValues.TRResponsible
  );
  const [TRViolence, setTRViolence] = React.useState(initialValues.TRViolence);
  const [TRSubstanceAbuse, setTRSubstanceAbuse] = React.useState(
    initialValues.TRSubstanceAbuse
  );
  const [TRMentalIllness, setTRMentalIllness] = React.useState(
    initialValues.TRMentalIllness
  );
  const [TRParentDivorce, setTRParentDivorce] = React.useState(
    initialValues.TRParentDivorce
  );
  const [TRParentIncarcerated, setTRParentIncarcerated] = React.useState(
    initialValues.TRParentIncarcerated
  );
  const [TRHomelessness, setTRHomelessness] = React.useState(
    initialValues.TRHomelessness
  );
  const [TRBodyFunction, setTRBodyFunction] = React.useState(
    initialValues.TRBodyFunction
  );
  const [TRNaturalDisaster, setTRNaturalDisaster] = React.useState(
    initialValues.TRNaturalDisaster
  );
  const [TRDirectTerrorism, setTRDirectTerrorism] = React.useState(
    initialValues.TRDirectTerrorism
  );
  const [TRIndirectTerrorism, setTRIndirectTerrorism] = React.useState(
    initialValues.TRIndirectTerrorism
  );
  const [TRLovedOne, setTRLovedOne] = React.useState(initialValues.TRLovedOne);
  const [TRBelief, setTRBelief] = React.useState(initialValues.TRBelief);
  const [TRResponseProfessional, setTRResponseProfessional] = React.useState(
    initialValues.TRResponseProfessional
  );
  const [TRResponseFamilyFriend, setTRResponseFamilyFriend] = React.useState(
    initialValues.TRResponseFamilyFriend
  );
  const [TRResponseGod, setTRResponseGod] = React.useState(
    initialValues.TRResponseGod
  );
  const [TRResponseNoOne, setTRResponseNoOne] = React.useState(
    initialValues.TRResponseNoOne
  );
  const [TRNoTrauma, setTRNoTrauma] = React.useState(initialValues.TRNoTrauma);
  const [CMAlcohol, setCMAlcohol] = React.useState(initialValues.CMAlcohol);
  const [CMDrugs, setCMDrugs] = React.useState(initialValues.CMDrugs);
  const [CMOvereating, setCMOvereating] = React.useState(
    initialValues.CMOvereating
  );
  const [CMSmoking, setCMSmoking] = React.useState(initialValues.CMSmoking);
  const [CMGaming, setCMGaming] = React.useState(initialValues.CMGaming);
  const [CMShopping, setCMShopping] = React.useState(initialValues.CMShopping);
  const [CMGambling, setCMGambling] = React.useState(initialValues.CMGambling);
  const [CMSex, setCMSex] = React.useState(initialValues.CMSex);
  const [CMPorn, setCMPorn] = React.useState(initialValues.CMPorn);
  const [CMBlaming, setCMBlaming] = React.useState(initialValues.CMBlaming);
  const [CMHurting, setCMHurting] = React.useState(initialValues.CMHurting);
  const [CMDisengage, setCMDisengage] = React.useState(
    initialValues.CMDisengage
  );
  const [CMArt, setCMArt] = React.useState(initialValues.CMArt);
  const [CMMusic, setCMMusic] = React.useState(initialValues.CMMusic);
  const [CMPoetry, setCMPoetry] = React.useState(initialValues.CMPoetry);
  const [CMReading, setCMReading] = React.useState(initialValues.CMReading);
  const [CMGroups, setCMGroups] = React.useState(initialValues.CMGroups);
  const [CMCounseling, setCMCounseling] = React.useState(
    initialValues.CMCounseling
  );
  const [CMVenting, setCMVenting] = React.useState(initialValues.CMVenting);
  const [CMWriting, setCMWriting] = React.useState(initialValues.CMWriting);
  const [CMSensory, setCMSensory] = React.useState(initialValues.CMSensory);
  const [CMDancing, setCMDancing] = React.useState(initialValues.CMDancing);
  const [CMExercising, setCMExercising] = React.useState(
    initialValues.CMExercising
  );
  const [CMWalking, setCMWalking] = React.useState(initialValues.CMWalking);
  const [CMChange, setCMChange] = React.useState(initialValues.CMChange);
  const [CMAnalyze, setCMAnalyze] = React.useState(initialValues.CMAnalyze);
  const [CMDaydream, setCMDaydream] = React.useState(initialValues.CMDaydream);
  const [CMPositive, setCMPositive] = React.useState(initialValues.CMPositive);
  const [MHDxPTSD, setMHDxPTSD] = React.useState(initialValues.MHDxPTSD);
  const [MHDxDepression, setMHDxDepression] = React.useState(
    initialValues.MHDxDepression
  );
  const [MHDxSUD, setMHDxSUD] = React.useState(initialValues.MHDxSUD);
  const [MHDxOtherMental, setMHDxOtherMental] = React.useState(
    initialValues.MHDxOtherMental
  );
  const [MHSleeplessness, setMHSleeplessness] = React.useState(
    initialValues.MHSleeplessness
  );
  const [MHAlcoholUse, setMHAlcoholUse] = React.useState(
    initialValues.MHAlcoholUse
  );
  const [MHAnxiety, setMHAnxiety] = React.useState(initialValues.MHAnxiety);
  const [MHDepression, setMHDepression] = React.useState(
    initialValues.MHDepression
  );
  const [MHDrugUse, setMHDrugUse] = React.useState(initialValues.MHDrugUse);
  const [MHGrief, setMHGrief] = React.useState(initialValues.MHGrief);
  const [MHGuilt, setMHGuilt] = React.useState(initialValues.MHGuilt);
  const [MHIrritability, setMHIrritability] = React.useState(
    initialValues.MHIrritability
  );
  const [MHStress, setMHStress] = React.useState(initialValues.MHStress);
  const [MHRegret, setMHRegret] = React.useState(initialValues.MHRegret);
  const [MHSuicidalThoughts, setMHSuicidalThoughts] = React.useState(
    initialValues.MHSuicidalThoughts
  );
  const [MHLoneliness, setMHLoneliness] = React.useState(
    initialValues.MHLoneliness
  );
  const [MHWorry, setMHWorry] = React.useState(initialValues.MHWorry);
  const [PHDxInfertility, setPHDxInfertility] = React.useState(
    initialValues.PHDxInfertility
  );
  const [PHDxCurableSTD, setPHDxCurableSTD] = React.useState(
    initialValues.PHDxCurableSTD
  );
  const [PHDxIncurableSTD, setPHDxIncurableSTD] = React.useState(
    initialValues.PHDxIncurableSTD
  );
  const [PHDxCancer, setPHDxCancer] = React.useState(initialValues.PHDxCancer);
  const [PHDxDiabetes, setPHDxDiabetes] = React.useState(
    initialValues.PHDxDiabetes
  );
  const [PHDxHighBlood, setPHDxHighBlood] = React.useState(
    initialValues.PHDxHighBlood
  );
  const [PHDxHeartDisease, setPHDxHeartDisease] = React.useState(
    initialValues.PHDxHeartDisease
  );
  const [PHDxIrritableBowel, setPHDxIrritableBowel] = React.useState(
    initialValues.PHDxIrritableBowel
  );
  const [PHDxVitA, setPHDxVitA] = React.useState(initialValues.PHDxVitA);
  const [PHDxVitB, setPHDxVitB] = React.useState(initialValues.PHDxVitB);
  const [PHDxVitC, setPHDxVitC] = React.useState(initialValues.PHDxVitC);
  const [PHDxVitD, setPHDxVitD] = React.useState(initialValues.PHDxVitD);
  const [PHDxVitE, setPHDxVitE] = React.useState(initialValues.PHDxVitE);
  const [PHDxVitK, setPHDxVitK] = React.useState(initialValues.PHDxVitK);
  const [PHDxAutoimmune, setPHDxAutoimmune] = React.useState(
    initialValues.PHDxAutoimmune
  );
  const [PHDxOtherPhysical, setPHDxOtherPhysical] = React.useState(
    initialValues.PHDxOtherPhysical
  );
  const [PHVegeFruits, setPHVegeFruits] = React.useState(
    initialValues.PHVegeFruits
  );
  const [PHBeanLentils, setPHBeanLentils] = React.useState(
    initialValues.PHBeanLentils
  );
  const [PHGrainBreads, setPHGrainBreads] = React.useState(
    initialValues.PHGrainBreads
  );
  const [PHDairy, setPHDairy] = React.useState(initialValues.PHDairy);
  const [PHMeat, setPHMeat] = React.useState(initialValues.PHMeat);
  const [PHFishSeafood, setPHFishSeafood] = React.useState(
    initialValues.PHFishSeafood
  );
  const [PHSweets, setPHSweets] = React.useState(initialValues.PHSweets);
  const [PHWater, setPHWater] = React.useState(initialValues.PHWater);
  const [PHPhysicalActivity, setPHPhysicalActivity] = React.useState(
    initialValues.PHPhysicalActivity
  );
  const [SHSpiritualDefine, setSHSpiritualDefine] = React.useState(
    initialValues.SHSpiritualDefine
  );
  const [SHSpiritualIntegrate, setSHSpiritualIntegrate] = React.useState(
    initialValues.SHSpiritualIntegrate
  );
  const [SHPrayer, setSHPrayer] = React.useState(initialValues.SHPrayer);
  const [SHSpiritualActivity, setSHSpiritualActivity] = React.useState(
    initialValues.SHSpiritualActivity
  );
  const [SHReadText, setSHReadText] = React.useState(initialValues.SHReadText);
  const [SHAlignText, setSHAlignText] = React.useState(
    initialValues.SHAlignText
  );
  const [SHCommunity, setSHCommunity] = React.useState(
    initialValues.SHCommunity
  );
  const [OLHope, setOLHope] = React.useState(initialValues.OLHope);
  const [OLPeace, setOLPeace] = React.useState(initialValues.OLPeace);
  const [OLLearning, setOLLearning] = React.useState(initialValues.OLLearning);
  const [OLJoy, setOLJoy] = React.useState(initialValues.OLJoy);
  const [OLStable, setOLStable] = React.useState(initialValues.OLStable);
  const [OLSafety, setOLSafety] = React.useState(initialValues.OLSafety);
  const [OLKindness, setOLKindness] = React.useState(initialValues.OLKindness);
  const [OLForgiveness, setOLForgiveness] = React.useState(
    initialValues.OLForgiveness
  );
  const [OLPatience, setOLPatience] = React.useState(initialValues.OLPatience);
  const [OLRelationships, setOLRelationships] = React.useState(
    initialValues.OLRelationships
  );
  const [OLBoundaries, setOLBoundaries] = React.useState(
    initialValues.OLBoundaries
  );
  const [OLEUnpleasant, setOLEUnpleasant] = React.useState(
    initialValues.OLEUnpleasant
  );
  const [OLEPleasant, setOLEPleasant] = React.useState(
    initialValues.OLEPleasant
  );
  const [OLEControl, setOLEControl] = React.useState(initialValues.OLEControl);
  const [OLENumber, setOLENumber] = React.useState(initialValues.OLENumber);
  const [SDoHAgeRange, setSDoHAgeRange] = React.useState(
    initialValues.SDoHAgeRange
  );
  const [SDoHRace, setSDoHRace] = React.useState(initialValues.SDoHRace);
  const [SDoHGeographicRegion, setSDoHGeographicRegion] = React.useState(
    initialValues.SDoHGeographicRegion
  );
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [SDoHEthnicity, setSDoHEthnicity] = React.useState(
    initialValues.SDoHEthnicity
  );
  const [SDoHState, setSDoHState] = React.useState(initialValues.SDoHState);
  const [SDoHZipCode, setSDoHZipCode] = React.useState(
    initialValues.SDoHZipCode
  );
  const [SDoHMaritalStatus, setSDoHMaritalStatus] = React.useState(
    initialValues.SDoHMaritalStatus
  );
  const [SDoHMilitaryStatus, setSDoHMilitaryStatus] = React.useState(
    initialValues.SDoHMilitaryStatus
  );
  const [SDoHGender, setSDoHGender] = React.useState(initialValues.SDoHGender);
  const [SDoHEducation, setSDoHEducation] = React.useState(
    initialValues.SDoHEducation
  );
  const [SDoHJobStatus, setSDoHJobStatus] = React.useState(
    initialValues.SDoHJobStatus
  );
  const [SDoHIncome, setSDoHIncome] = React.useState(initialValues.SDoHIncome);
  const [SDoHHousingStatus, setSDoHHousingStatus] = React.useState(
    initialValues.SDoHHousingStatus
  );
  const [SDoHHomeAsChild, setSDoHHomeAsChild] = React.useState(
    initialValues.SDoHHomeAsChild
  );
  const [SDoHReligion, setSDoHReligion] = React.useState(
    initialValues.SDoHReligion
  );
  const [SDoHDenomination, setSDoHDenomination] = React.useState(
    initialValues.SDoHDenomination
  );
  const [isActive, setIsActive] = React.useState(initialValues.isActive);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCompletedDate(initialValues.CompletedDate);
    setCompletedTime(initialValues.CompletedTime);
    setTRHurtfulNames(initialValues.TRHurtfulNames);
    setTRNoNurturing(initialValues.TRNoNurturing);
    setTRHit(initialValues.TRHit);
    setTRNeedsNotMet(initialValues.TRNeedsNotMet);
    setTRForcedSex(initialValues.TRForcedSex);
    setTRResponsible(initialValues.TRResponsible);
    setTRViolence(initialValues.TRViolence);
    setTRSubstanceAbuse(initialValues.TRSubstanceAbuse);
    setTRMentalIllness(initialValues.TRMentalIllness);
    setTRParentDivorce(initialValues.TRParentDivorce);
    setTRParentIncarcerated(initialValues.TRParentIncarcerated);
    setTRHomelessness(initialValues.TRHomelessness);
    setTRBodyFunction(initialValues.TRBodyFunction);
    setTRNaturalDisaster(initialValues.TRNaturalDisaster);
    setTRDirectTerrorism(initialValues.TRDirectTerrorism);
    setTRIndirectTerrorism(initialValues.TRIndirectTerrorism);
    setTRLovedOne(initialValues.TRLovedOne);
    setTRBelief(initialValues.TRBelief);
    setTRResponseProfessional(initialValues.TRResponseProfessional);
    setTRResponseFamilyFriend(initialValues.TRResponseFamilyFriend);
    setTRResponseGod(initialValues.TRResponseGod);
    setTRResponseNoOne(initialValues.TRResponseNoOne);
    setTRNoTrauma(initialValues.TRNoTrauma);
    setCMAlcohol(initialValues.CMAlcohol);
    setCMDrugs(initialValues.CMDrugs);
    setCMOvereating(initialValues.CMOvereating);
    setCMSmoking(initialValues.CMSmoking);
    setCMGaming(initialValues.CMGaming);
    setCMShopping(initialValues.CMShopping);
    setCMGambling(initialValues.CMGambling);
    setCMSex(initialValues.CMSex);
    setCMPorn(initialValues.CMPorn);
    setCMBlaming(initialValues.CMBlaming);
    setCMHurting(initialValues.CMHurting);
    setCMDisengage(initialValues.CMDisengage);
    setCMArt(initialValues.CMArt);
    setCMMusic(initialValues.CMMusic);
    setCMPoetry(initialValues.CMPoetry);
    setCMReading(initialValues.CMReading);
    setCMGroups(initialValues.CMGroups);
    setCMCounseling(initialValues.CMCounseling);
    setCMVenting(initialValues.CMVenting);
    setCMWriting(initialValues.CMWriting);
    setCMSensory(initialValues.CMSensory);
    setCMDancing(initialValues.CMDancing);
    setCMExercising(initialValues.CMExercising);
    setCMWalking(initialValues.CMWalking);
    setCMChange(initialValues.CMChange);
    setCMAnalyze(initialValues.CMAnalyze);
    setCMDaydream(initialValues.CMDaydream);
    setCMPositive(initialValues.CMPositive);
    setMHDxPTSD(initialValues.MHDxPTSD);
    setMHDxDepression(initialValues.MHDxDepression);
    setMHDxSUD(initialValues.MHDxSUD);
    setMHDxOtherMental(initialValues.MHDxOtherMental);
    setMHSleeplessness(initialValues.MHSleeplessness);
    setMHAlcoholUse(initialValues.MHAlcoholUse);
    setMHAnxiety(initialValues.MHAnxiety);
    setMHDepression(initialValues.MHDepression);
    setMHDrugUse(initialValues.MHDrugUse);
    setMHGrief(initialValues.MHGrief);
    setMHGuilt(initialValues.MHGuilt);
    setMHIrritability(initialValues.MHIrritability);
    setMHStress(initialValues.MHStress);
    setMHRegret(initialValues.MHRegret);
    setMHSuicidalThoughts(initialValues.MHSuicidalThoughts);
    setMHLoneliness(initialValues.MHLoneliness);
    setMHWorry(initialValues.MHWorry);
    setPHDxInfertility(initialValues.PHDxInfertility);
    setPHDxCurableSTD(initialValues.PHDxCurableSTD);
    setPHDxIncurableSTD(initialValues.PHDxIncurableSTD);
    setPHDxCancer(initialValues.PHDxCancer);
    setPHDxDiabetes(initialValues.PHDxDiabetes);
    setPHDxHighBlood(initialValues.PHDxHighBlood);
    setPHDxHeartDisease(initialValues.PHDxHeartDisease);
    setPHDxIrritableBowel(initialValues.PHDxIrritableBowel);
    setPHDxVitA(initialValues.PHDxVitA);
    setPHDxVitB(initialValues.PHDxVitB);
    setPHDxVitC(initialValues.PHDxVitC);
    setPHDxVitD(initialValues.PHDxVitD);
    setPHDxVitE(initialValues.PHDxVitE);
    setPHDxVitK(initialValues.PHDxVitK);
    setPHDxAutoimmune(initialValues.PHDxAutoimmune);
    setPHDxOtherPhysical(initialValues.PHDxOtherPhysical);
    setPHVegeFruits(initialValues.PHVegeFruits);
    setPHBeanLentils(initialValues.PHBeanLentils);
    setPHGrainBreads(initialValues.PHGrainBreads);
    setPHDairy(initialValues.PHDairy);
    setPHMeat(initialValues.PHMeat);
    setPHFishSeafood(initialValues.PHFishSeafood);
    setPHSweets(initialValues.PHSweets);
    setPHWater(initialValues.PHWater);
    setPHPhysicalActivity(initialValues.PHPhysicalActivity);
    setSHSpiritualDefine(initialValues.SHSpiritualDefine);
    setSHSpiritualIntegrate(initialValues.SHSpiritualIntegrate);
    setSHPrayer(initialValues.SHPrayer);
    setSHSpiritualActivity(initialValues.SHSpiritualActivity);
    setSHReadText(initialValues.SHReadText);
    setSHAlignText(initialValues.SHAlignText);
    setSHCommunity(initialValues.SHCommunity);
    setOLHope(initialValues.OLHope);
    setOLPeace(initialValues.OLPeace);
    setOLLearning(initialValues.OLLearning);
    setOLJoy(initialValues.OLJoy);
    setOLStable(initialValues.OLStable);
    setOLSafety(initialValues.OLSafety);
    setOLKindness(initialValues.OLKindness);
    setOLForgiveness(initialValues.OLForgiveness);
    setOLPatience(initialValues.OLPatience);
    setOLRelationships(initialValues.OLRelationships);
    setOLBoundaries(initialValues.OLBoundaries);
    setOLEUnpleasant(initialValues.OLEUnpleasant);
    setOLEPleasant(initialValues.OLEPleasant);
    setOLEControl(initialValues.OLEControl);
    setOLENumber(initialValues.OLENumber);
    setSDoHAgeRange(initialValues.SDoHAgeRange);
    setSDoHRace(initialValues.SDoHRace);
    setSDoHGeographicRegion(initialValues.SDoHGeographicRegion);
    setUserId(initialValues.userId);
    setSDoHEthnicity(initialValues.SDoHEthnicity);
    setSDoHState(initialValues.SDoHState);
    setSDoHZipCode(initialValues.SDoHZipCode);
    setSDoHMaritalStatus(initialValues.SDoHMaritalStatus);
    setSDoHMilitaryStatus(initialValues.SDoHMilitaryStatus);
    setSDoHGender(initialValues.SDoHGender);
    setSDoHEducation(initialValues.SDoHEducation);
    setSDoHJobStatus(initialValues.SDoHJobStatus);
    setSDoHIncome(initialValues.SDoHIncome);
    setSDoHHousingStatus(initialValues.SDoHHousingStatus);
    setSDoHHomeAsChild(initialValues.SDoHHomeAsChild);
    setSDoHReligion(initialValues.SDoHReligion);
    setSDoHDenomination(initialValues.SDoHDenomination);
    setIsActive(initialValues.isActive);
    setErrors({});
  };
  const validations = {
    CompletedDate: [],
    CompletedTime: [],
    TRHurtfulNames: [],
    TRNoNurturing: [],
    TRHit: [],
    TRNeedsNotMet: [],
    TRForcedSex: [],
    TRResponsible: [],
    TRViolence: [],
    TRSubstanceAbuse: [],
    TRMentalIllness: [],
    TRParentDivorce: [],
    TRParentIncarcerated: [],
    TRHomelessness: [],
    TRBodyFunction: [],
    TRNaturalDisaster: [],
    TRDirectTerrorism: [],
    TRIndirectTerrorism: [],
    TRLovedOne: [],
    TRBelief: [],
    TRResponseProfessional: [],
    TRResponseFamilyFriend: [],
    TRResponseGod: [],
    TRResponseNoOne: [],
    TRNoTrauma: [],
    CMAlcohol: [{ type: "Required" }],
    CMDrugs: [{ type: "Required" }],
    CMOvereating: [{ type: "Required" }],
    CMSmoking: [{ type: "Required" }],
    CMGaming: [{ type: "Required" }],
    CMShopping: [{ type: "Required" }],
    CMGambling: [{ type: "Required" }],
    CMSex: [{ type: "Required" }],
    CMPorn: [{ type: "Required" }],
    CMBlaming: [{ type: "Required" }],
    CMHurting: [{ type: "Required" }],
    CMDisengage: [{ type: "Required" }],
    CMArt: [{ type: "Required" }],
    CMMusic: [{ type: "Required" }],
    CMPoetry: [{ type: "Required" }],
    CMReading: [{ type: "Required" }],
    CMGroups: [{ type: "Required" }],
    CMCounseling: [{ type: "Required" }],
    CMVenting: [{ type: "Required" }],
    CMWriting: [{ type: "Required" }],
    CMSensory: [{ type: "Required" }],
    CMDancing: [{ type: "Required" }],
    CMExercising: [{ type: "Required" }],
    CMWalking: [{ type: "Required" }],
    CMChange: [{ type: "Required" }],
    CMAnalyze: [{ type: "Required" }],
    CMDaydream: [{ type: "Required" }],
    CMPositive: [{ type: "Required" }],
    MHDxPTSD: [{ type: "Required" }],
    MHDxDepression: [{ type: "Required" }],
    MHDxSUD: [{ type: "Required" }],
    MHDxOtherMental: [{ type: "Required" }],
    MHSleeplessness: [{ type: "Required" }],
    MHAlcoholUse: [{ type: "Required" }],
    MHAnxiety: [{ type: "Required" }],
    MHDepression: [{ type: "Required" }],
    MHDrugUse: [{ type: "Required" }],
    MHGrief: [{ type: "Required" }],
    MHGuilt: [{ type: "Required" }],
    MHIrritability: [{ type: "Required" }],
    MHStress: [{ type: "Required" }],
    MHRegret: [{ type: "Required" }],
    MHSuicidalThoughts: [{ type: "Required" }],
    MHLoneliness: [{ type: "Required" }],
    MHWorry: [{ type: "Required" }],
    PHDxInfertility: [{ type: "Required" }],
    PHDxCurableSTD: [{ type: "Required" }],
    PHDxIncurableSTD: [{ type: "Required" }],
    PHDxCancer: [{ type: "Required" }],
    PHDxDiabetes: [{ type: "Required" }],
    PHDxHighBlood: [{ type: "Required" }],
    PHDxHeartDisease: [{ type: "Required" }],
    PHDxIrritableBowel: [{ type: "Required" }],
    PHDxVitA: [{ type: "Required" }],
    PHDxVitB: [{ type: "Required" }],
    PHDxVitC: [{ type: "Required" }],
    PHDxVitD: [{ type: "Required" }],
    PHDxVitE: [{ type: "Required" }],
    PHDxVitK: [{ type: "Required" }],
    PHDxAutoimmune: [{ type: "Required" }],
    PHDxOtherPhysical: [{ type: "Required" }],
    PHVegeFruits: [{ type: "Required" }],
    PHBeanLentils: [{ type: "Required" }],
    PHGrainBreads: [{ type: "Required" }],
    PHDairy: [{ type: "Required" }],
    PHMeat: [{ type: "Required" }],
    PHFishSeafood: [{ type: "Required" }],
    PHSweets: [{ type: "Required" }],
    PHWater: [{ type: "Required" }],
    PHPhysicalActivity: [{ type: "Required" }],
    SHSpiritualDefine: [],
    SHSpiritualIntegrate: [],
    SHPrayer: [],
    SHSpiritualActivity: [],
    SHReadText: [],
    SHAlignText: [],
    SHCommunity: [],
    OLHope: [{ type: "Required" }],
    OLPeace: [{ type: "Required" }],
    OLLearning: [{ type: "Required" }],
    OLJoy: [{ type: "Required" }],
    OLStable: [{ type: "Required" }],
    OLSafety: [{ type: "Required" }],
    OLKindness: [{ type: "Required" }],
    OLForgiveness: [{ type: "Required" }],
    OLPatience: [{ type: "Required" }],
    OLRelationships: [{ type: "Required" }],
    OLBoundaries: [{ type: "Required" }],
    OLEUnpleasant: [{ type: "Required" }],
    OLEPleasant: [{ type: "Required" }],
    OLEControl: [{ type: "Required" }],
    OLENumber: [{ type: "Required" }],
    SDoHAgeRange: [],
    SDoHRace: [],
    SDoHGeographicRegion: [],
    userId: [{ type: "Required" }],
    SDoHEthnicity: [],
    SDoHState: [],
    SDoHZipCode: [],
    SDoHMaritalStatus: [],
    SDoHMilitaryStatus: [],
    SDoHGender: [],
    SDoHEducation: [],
    SDoHJobStatus: [],
    SDoHIncome: [],
    SDoHHousingStatus: [],
    SDoHHomeAsChild: [],
    SDoHReligion: [],
    SDoHDenomination: [],
    isActive: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding={tokens.space.xxs.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          CompletedDate,
          CompletedTime,
          TRHurtfulNames,
          TRNoNurturing,
          TRHit,
          TRNeedsNotMet,
          TRForcedSex,
          TRResponsible,
          TRViolence,
          TRSubstanceAbuse,
          TRMentalIllness,
          TRParentDivorce,
          TRParentIncarcerated,
          TRHomelessness,
          TRBodyFunction,
          TRNaturalDisaster,
          TRDirectTerrorism,
          TRIndirectTerrorism,
          TRLovedOne,
          TRBelief,
          TRResponseProfessional,
          TRResponseFamilyFriend,
          TRResponseGod,
          TRResponseNoOne,
          TRNoTrauma,
          CMAlcohol,
          CMDrugs,
          CMOvereating,
          CMSmoking,
          CMGaming,
          CMShopping,
          CMGambling,
          CMSex,
          CMPorn,
          CMBlaming,
          CMHurting,
          CMDisengage,
          CMArt,
          CMMusic,
          CMPoetry,
          CMReading,
          CMGroups,
          CMCounseling,
          CMVenting,
          CMWriting,
          CMSensory,
          CMDancing,
          CMExercising,
          CMWalking,
          CMChange,
          CMAnalyze,
          CMDaydream,
          CMPositive,
          MHDxPTSD,
          MHDxDepression,
          MHDxSUD,
          MHDxOtherMental,
          MHSleeplessness,
          MHAlcoholUse,
          MHAnxiety,
          MHDepression,
          MHDrugUse,
          MHGrief,
          MHGuilt,
          MHIrritability,
          MHStress,
          MHRegret,
          MHSuicidalThoughts,
          MHLoneliness,
          MHWorry,
          PHDxInfertility,
          PHDxCurableSTD,
          PHDxIncurableSTD,
          PHDxCancer,
          PHDxDiabetes,
          PHDxHighBlood,
          PHDxHeartDisease,
          PHDxIrritableBowel,
          PHDxVitA,
          PHDxVitB,
          PHDxVitC,
          PHDxVitD,
          PHDxVitE,
          PHDxVitK,
          PHDxAutoimmune,
          PHDxOtherPhysical,
          PHVegeFruits,
          PHBeanLentils,
          PHGrainBreads,
          PHDairy,
          PHMeat,
          PHFishSeafood,
          PHSweets,
          PHWater,
          PHPhysicalActivity,
          SHSpiritualDefine,
          SHSpiritualIntegrate,
          SHPrayer,
          SHSpiritualActivity,
          SHReadText,
          SHAlignText,
          SHCommunity,
          OLHope,
          OLPeace,
          OLLearning,
          OLJoy,
          OLStable,
          OLSafety,
          OLKindness,
          OLForgiveness,
          OLPatience,
          OLRelationships,
          OLBoundaries,
          OLEUnpleasant,
          OLEPleasant,
          OLEControl,
          OLENumber,
          SDoHAgeRange,
          SDoHRace,
          SDoHGeographicRegion,
          userId,
          SDoHEthnicity,
          SDoHState,
          SDoHZipCode,
          SDoHMaritalStatus,
          SDoHMilitaryStatus,
          SDoHGender,
          SDoHEducation,
          SDoHJobStatus,
          SDoHIncome,
          SDoHHousingStatus,
          SDoHHomeAsChild,
          SDoHReligion,
          SDoHDenomination,
          isActive,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createAssessmentAnswers.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "WholisticHealthAssessment")}
      {...rest}
    >
      <TextField
        label="Date Completed"
        isRequired={false}
        isReadOnly={false}
        value={CompletedDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate: value,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CompletedDate ?? value;
          }
          if (errors.CompletedDate?.hasError) {
            runValidationTasks("CompletedDate", value);
          }
          setCompletedDate(value);
        }}
        onBlur={() => runValidationTasks("CompletedDate", CompletedDate)}
        errorMessage={errors.CompletedDate?.errorMessage}
        hasError={errors.CompletedDate?.hasError}
        {...getOverrideProps(overrides, "CompletedDate")}
      ></TextField>
      <TextField
        label="Time Completed"
        isRequired={false}
        isReadOnly={false}
        value={CompletedTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime: value,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CompletedTime ?? value;
          }
          if (errors.CompletedTime?.hasError) {
            runValidationTasks("CompletedTime", value);
          }
          setCompletedTime(value);
        }}
        onBlur={() => runValidationTasks("CompletedTime", CompletedTime)}
        errorMessage={errors.CompletedTime?.errorMessage}
        hasError={errors.CompletedTime?.hasError}
        {...getOverrideProps(overrides, "CompletedTime")}
      ></TextField>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Divider>
      <Heading
        level={4}
        children="TRAUMA"
        {...getOverrideProps(overrides, "SectionalElement22")}
      ></Heading>
      <Heading
        level={6}
        children="Do you consider yourself to have experienced any of the following? Select all that apply:"
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Heading>
      <ToggleButton
        children="Frequently Called Hurtful Names and Cussed at By Parent, Guardian, or Lover (e.g. mental abuse)"
        isDisabled={false}
        defaultPressed={false}
        isPressed={TRHurtfulNames}
        onChange={(e) => {
          let value = !TRHurtfulNames;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames: value,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRHurtfulNames ?? value;
          }
          if (errors.TRHurtfulNames?.hasError) {
            runValidationTasks("TRHurtfulNames", value);
          }
          setTRHurtfulNames(value);
        }}
        onBlur={() => runValidationTasks("TRHurtfulNames", TRHurtfulNames)}
        errorMessage={errors.TRHurtfulNames?.errorMessage}
        hasError={errors.TRHurtfulNames?.hasError}
        {...getOverrideProps(overrides, "TRHurtfulNames")}
      ></ToggleButton>
      <SwitchField
        label="Not Provided Attention, Support, or Nurturing Consistently By Parent or Guardian (e.g. emotional abuse)"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRNoNurturing}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing: value,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRNoNurturing ?? value;
          }
          if (errors.TRNoNurturing?.hasError) {
            runValidationTasks("TRNoNurturing", value);
          }
          setTRNoNurturing(value);
        }}
        onBlur={() => runValidationTasks("TRNoNurturing", TRNoNurturing)}
        errorMessage={errors.TRNoNurturing?.errorMessage}
        hasError={errors.TRNoNurturing?.hasError}
        {...getOverrideProps(overrides, "TRNoNurturing")}
      ></SwitchField>
      <SwitchField
        label="Punched, Smacked, Pushed, Tripped, etc. By a Parent, Guardian, or Lover (e.g. physical abuse)"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRHit}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit: value,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRHit ?? value;
          }
          if (errors.TRHit?.hasError) {
            runValidationTasks("TRHit", value);
          }
          setTRHit(value);
        }}
        onBlur={() => runValidationTasks("TRHit", TRHit)}
        errorMessage={errors.TRHit?.errorMessage}
        hasError={errors.TRHit?.hasError}
        {...getOverrideProps(overrides, "TRHit")}
      ></SwitchField>
      <SwitchField
        label="Not Provided Food or Clothing Consistently By a Parent or Guardian (e.g. neglect)"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRNeedsNotMet}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet: value,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRNeedsNotMet ?? value;
          }
          if (errors.TRNeedsNotMet?.hasError) {
            runValidationTasks("TRNeedsNotMet", value);
          }
          setTRNeedsNotMet(value);
        }}
        onBlur={() => runValidationTasks("TRNeedsNotMet", TRNeedsNotMet)}
        errorMessage={errors.TRNeedsNotMet?.errorMessage}
        hasError={errors.TRNeedsNotMet?.hasError}
        {...getOverrideProps(overrides, "TRNeedsNotMet")}
      ></SwitchField>
      <SwitchField
        label="Involved in Unwanted or Forced Sexual Activity (e.g. rape)"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRForcedSex}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex: value,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRForcedSex ?? value;
          }
          if (errors.TRForcedSex?.hasError) {
            runValidationTasks("TRForcedSex", value);
          }
          setTRForcedSex(value);
        }}
        onBlur={() => runValidationTasks("TRForcedSex", TRForcedSex)}
        errorMessage={errors.TRForcedSex?.errorMessage}
        hasError={errors.TRForcedSex?.hasError}
        {...getOverrideProps(overrides, "TRForcedSex")}
      ></SwitchField>
      <SwitchField
        label="Adult Responsibilities as a Child Consistently (e.g. paying bills)"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRResponsible}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible: value,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRResponsible ?? value;
          }
          if (errors.TRResponsible?.hasError) {
            runValidationTasks("TRResponsible", value);
          }
          setTRResponsible(value);
        }}
        onBlur={() => runValidationTasks("TRResponsible", TRResponsible)}
        errorMessage={errors.TRResponsible?.errorMessage}
        hasError={errors.TRResponsible?.hasError}
        {...getOverrideProps(overrides, "TRResponsible")}
      ></SwitchField>
      <SwitchField
        label="Witnessed Violence Consistently at Home "
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRViolence}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence: value,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRViolence ?? value;
          }
          if (errors.TRViolence?.hasError) {
            runValidationTasks("TRViolence", value);
          }
          setTRViolence(value);
        }}
        onBlur={() => runValidationTasks("TRViolence", TRViolence)}
        errorMessage={errors.TRViolence?.errorMessage}
        hasError={errors.TRViolence?.hasError}
        {...getOverrideProps(overrides, "TRViolence")}
      ></SwitchField>
      <SwitchField
        label="Witnessed Substance Abuse Consistently at Home"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRSubstanceAbuse}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse: value,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRSubstanceAbuse ?? value;
          }
          if (errors.TRSubstanceAbuse?.hasError) {
            runValidationTasks("TRSubstanceAbuse", value);
          }
          setTRSubstanceAbuse(value);
        }}
        onBlur={() => runValidationTasks("TRSubstanceAbuse", TRSubstanceAbuse)}
        errorMessage={errors.TRSubstanceAbuse?.errorMessage}
        hasError={errors.TRSubstanceAbuse?.hasError}
        {...getOverrideProps(overrides, "TRSubstanceAbuse")}
      ></SwitchField>
      <SwitchField
        label="Witnessed Mental Illness Consistently at Home"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRMentalIllness}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness: value,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRMentalIllness ?? value;
          }
          if (errors.TRMentalIllness?.hasError) {
            runValidationTasks("TRMentalIllness", value);
          }
          setTRMentalIllness(value);
        }}
        onBlur={() => runValidationTasks("TRMentalIllness", TRMentalIllness)}
        errorMessage={errors.TRMentalIllness?.errorMessage}
        hasError={errors.TRMentalIllness?.hasError}
        {...getOverrideProps(overrides, "TRMentalIllness")}
      ></SwitchField>
      <SwitchField
        label="Witnessed Parent(s) Separation/Divorce"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRParentDivorce}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce: value,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRParentDivorce ?? value;
          }
          if (errors.TRParentDivorce?.hasError) {
            runValidationTasks("TRParentDivorce", value);
          }
          setTRParentDivorce(value);
        }}
        onBlur={() => runValidationTasks("TRParentDivorce", TRParentDivorce)}
        errorMessage={errors.TRParentDivorce?.errorMessage}
        hasError={errors.TRParentDivorce?.hasError}
        {...getOverrideProps(overrides, "TRParentDivorce")}
      ></SwitchField>
      <SwitchField
        label="Witnessed Parent(s) Incarcerated"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRParentIncarcerated}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated: value,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRParentIncarcerated ?? value;
          }
          if (errors.TRParentIncarcerated?.hasError) {
            runValidationTasks("TRParentIncarcerated", value);
          }
          setTRParentIncarcerated(value);
        }}
        onBlur={() =>
          runValidationTasks("TRParentIncarcerated", TRParentIncarcerated)
        }
        errorMessage={errors.TRParentIncarcerated?.errorMessage}
        hasError={errors.TRParentIncarcerated?.hasError}
        {...getOverrideProps(overrides, "TRParentIncarcerated")}
      ></SwitchField>
      <SwitchField
        label="Experienced Homelessness or Moving Consistently (e.g. shelter, street, foster care)"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRHomelessness}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness: value,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRHomelessness ?? value;
          }
          if (errors.TRHomelessness?.hasError) {
            runValidationTasks("TRHomelessness", value);
          }
          setTRHomelessness(value);
        }}
        onBlur={() => runValidationTasks("TRHomelessness", TRHomelessness)}
        errorMessage={errors.TRHomelessness?.errorMessage}
        hasError={errors.TRHomelessness?.hasError}
        {...getOverrideProps(overrides, "TRHomelessness")}
      ></SwitchField>
      <SwitchField
        label="Experienced a Loss of Limb(s), Major Bodily Functions, or Extreme Sickness (e.g. cancer)"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRBodyFunction}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction: value,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRBodyFunction ?? value;
          }
          if (errors.TRBodyFunction?.hasError) {
            runValidationTasks("TRBodyFunction", value);
          }
          setTRBodyFunction(value);
        }}
        onBlur={() => runValidationTasks("TRBodyFunction", TRBodyFunction)}
        errorMessage={errors.TRBodyFunction?.errorMessage}
        hasError={errors.TRBodyFunction?.hasError}
        {...getOverrideProps(overrides, "TRBodyFunction")}
      ></SwitchField>
      <SwitchField
        label="Experienced a Significant Natural Disaster (e.g. loss of home/family)"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRNaturalDisaster}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster: value,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRNaturalDisaster ?? value;
          }
          if (errors.TRNaturalDisaster?.hasError) {
            runValidationTasks("TRNaturalDisaster", value);
          }
          setTRNaturalDisaster(value);
        }}
        onBlur={() =>
          runValidationTasks("TRNaturalDisaster", TRNaturalDisaster)
        }
        errorMessage={errors.TRNaturalDisaster?.errorMessage}
        hasError={errors.TRNaturalDisaster?.hasError}
        {...getOverrideProps(overrides, "TRNaturalDisaster")}
      ></SwitchField>
      <SwitchField
        label="Directly Affected by Terrorism, Community, or School Violence (e.g. gangs, racism)"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRDirectTerrorism}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism: value,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRDirectTerrorism ?? value;
          }
          if (errors.TRDirectTerrorism?.hasError) {
            runValidationTasks("TRDirectTerrorism", value);
          }
          setTRDirectTerrorism(value);
        }}
        onBlur={() =>
          runValidationTasks("TRDirectTerrorism", TRDirectTerrorism)
        }
        errorMessage={errors.TRDirectTerrorism?.errorMessage}
        hasError={errors.TRDirectTerrorism?.hasError}
        {...getOverrideProps(overrides, "TRDirectTerrorism")}
      ></SwitchField>
      <SwitchField
        label="Indirectly Affected by Terrorism, Community, or School Violence (e.g. school shooting)"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRIndirectTerrorism}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism: value,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRIndirectTerrorism ?? value;
          }
          if (errors.TRIndirectTerrorism?.hasError) {
            runValidationTasks("TRIndirectTerrorism", value);
          }
          setTRIndirectTerrorism(value);
        }}
        onBlur={() =>
          runValidationTasks("TRIndirectTerrorism", TRIndirectTerrorism)
        }
        errorMessage={errors.TRIndirectTerrorism?.errorMessage}
        hasError={errors.TRIndirectTerrorism?.hasError}
        {...getOverrideProps(overrides, "TRIndirectTerrorism")}
      ></SwitchField>
      <SwitchField
        label="Absent, Inactive, or Death of a Close Loved One (e.g. parental figure or child)"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRLovedOne}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne: value,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRLovedOne ?? value;
          }
          if (errors.TRLovedOne?.hasError) {
            runValidationTasks("TRLovedOne", value);
          }
          setTRLovedOne(value);
        }}
        onBlur={() => runValidationTasks("TRLovedOne", TRLovedOne)}
        errorMessage={errors.TRLovedOne?.errorMessage}
        hasError={errors.TRLovedOne?.hasError}
        {...getOverrideProps(overrides, "TRLovedOne")}
      ></SwitchField>
      <RadioGroupField
        label='For any experiences you chose above, do you consider them to be traumatic? (Trauma is defined as "an event, or series of events, that causes or caused moderate to severe stress reactions")'
        name="TRBelief"
        isReadOnly={false}
        isRequired={false}
        onChange={(e) => {
          let value = e.target.value === "true";
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief: value,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRBelief ?? value;
          }
          if (errors.TRBelief?.hasError) {
            runValidationTasks("TRBelief", value);
          }
          setTRBelief(value);
        }}
        onBlur={() => runValidationTasks("TRBelief", TRBelief)}
        errorMessage={errors.TRBelief?.errorMessage}
        hasError={errors.TRBelief?.hasError}
        {...getOverrideProps(overrides, "TRBelief")}
      >
        <Radio
          children="Yes"
          value="true"
          {...getOverrideProps(overrides, "TRBeliefRadio0")}
        ></Radio>
        <Radio
          children="No"
          value="false"
          {...getOverrideProps(overrides, "TRBeliefRadio1")}
        ></Radio>
      </RadioGroupField>
      <Heading
        children="Which statements are true regarding the response to your traumatic experience(s)? Select all that apply:"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Heading>
      <SwitchField
        label="I talked to a professional or counselor about my trauma"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRResponseProfessional}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional: value,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRResponseProfessional ?? value;
          }
          if (errors.TRResponseProfessional?.hasError) {
            runValidationTasks("TRResponseProfessional", value);
          }
          setTRResponseProfessional(value);
        }}
        onBlur={() =>
          runValidationTasks("TRResponseProfessional", TRResponseProfessional)
        }
        errorMessage={errors.TRResponseProfessional?.errorMessage}
        hasError={errors.TRResponseProfessional?.hasError}
        {...getOverrideProps(overrides, "TRResponseProfessional")}
      ></SwitchField>
      <SwitchField
        label="I talked to my family and/or friends about my trauma"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRResponseFamilyFriend}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend: value,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRResponseFamilyFriend ?? value;
          }
          if (errors.TRResponseFamilyFriend?.hasError) {
            runValidationTasks("TRResponseFamilyFriend", value);
          }
          setTRResponseFamilyFriend(value);
        }}
        onBlur={() =>
          runValidationTasks("TRResponseFamilyFriend", TRResponseFamilyFriend)
        }
        errorMessage={errors.TRResponseFamilyFriend?.errorMessage}
        hasError={errors.TRResponseFamilyFriend?.hasError}
        {...getOverrideProps(overrides, "TRResponseFamilyFriend")}
      ></SwitchField>
      <SwitchField
        label="I talked to God about my trauma"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRResponseGod}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod: value,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRResponseGod ?? value;
          }
          if (errors.TRResponseGod?.hasError) {
            runValidationTasks("TRResponseGod", value);
          }
          setTRResponseGod(value);
        }}
        onBlur={() => runValidationTasks("TRResponseGod", TRResponseGod)}
        errorMessage={errors.TRResponseGod?.errorMessage}
        hasError={errors.TRResponseGod?.hasError}
        {...getOverrideProps(overrides, "TRResponseGod")}
      ></SwitchField>
      <SwitchField
        label="I didn’t talk to anyone about my trauma"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRResponseNoOne}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne: value,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRResponseNoOne ?? value;
          }
          if (errors.TRResponseNoOne?.hasError) {
            runValidationTasks("TRResponseNoOne", value);
          }
          setTRResponseNoOne(value);
        }}
        onBlur={() => runValidationTasks("TRResponseNoOne", TRResponseNoOne)}
        errorMessage={errors.TRResponseNoOne?.errorMessage}
        hasError={errors.TRResponseNoOne?.hasError}
        {...getOverrideProps(overrides, "TRResponseNoOne")}
      ></SwitchField>
      <SwitchField
        label="N/A (I didn't experience trauma)"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TRNoTrauma}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma: value,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.TRNoTrauma ?? value;
          }
          if (errors.TRNoTrauma?.hasError) {
            runValidationTasks("TRNoTrauma", value);
          }
          setTRNoTrauma(value);
        }}
        onBlur={() => runValidationTasks("TRNoTrauma", TRNoTrauma)}
        errorMessage={errors.TRNoTrauma?.errorMessage}
        hasError={errors.TRNoTrauma?.hasError}
        {...getOverrideProps(overrides, "TRNoTrauma")}
      ></SwitchField>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement3")}
      ></Divider>
      <Heading
        level={4}
        children="COPING MECHANISMS"
        {...getOverrideProps(overrides, "SectionalElement23")}
      ></Heading>
      <Heading
        children="Within the last four weeks, approximately how often did you use the following coping mechanisms to deal with unpleasant experiences?"
        {...getOverrideProps(overrides, "SectionalElement5")}
      ></Heading>
      <SelectField
        label="Alcohol"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMAlcohol}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol: value,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMAlcohol ?? value;
          }
          if (errors.CMAlcohol?.hasError) {
            runValidationTasks("CMAlcohol", value);
          }
          setCMAlcohol(value);
        }}
        onBlur={() => runValidationTasks("CMAlcohol", CMAlcohol)}
        errorMessage={errors.CMAlcohol?.errorMessage}
        hasError={errors.CMAlcohol?.hasError}
        {...getOverrideProps(overrides, "CMAlcohol")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMAlcoholoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMAlcoholoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMAlcoholoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMAlcoholoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMAlcoholoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Drugs"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMDrugs}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs: value,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMDrugs ?? value;
          }
          if (errors.CMDrugs?.hasError) {
            runValidationTasks("CMDrugs", value);
          }
          setCMDrugs(value);
        }}
        onBlur={() => runValidationTasks("CMDrugs", CMDrugs)}
        errorMessage={errors.CMDrugs?.errorMessage}
        hasError={errors.CMDrugs?.hasError}
        {...getOverrideProps(overrides, "CMDrugs")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMDrugsoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMDrugsoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMDrugsoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMDrugsoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMDrugsoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Overeating"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMOvereating}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating: value,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMOvereating ?? value;
          }
          if (errors.CMOvereating?.hasError) {
            runValidationTasks("CMOvereating", value);
          }
          setCMOvereating(value);
        }}
        onBlur={() => runValidationTasks("CMOvereating", CMOvereating)}
        errorMessage={errors.CMOvereating?.errorMessage}
        hasError={errors.CMOvereating?.hasError}
        {...getOverrideProps(overrides, "CMOvereating")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMOvereatingoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMOvereatingoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMOvereatingoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMOvereatingoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMOvereatingoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Smoking"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMSmoking}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking: value,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMSmoking ?? value;
          }
          if (errors.CMSmoking?.hasError) {
            runValidationTasks("CMSmoking", value);
          }
          setCMSmoking(value);
        }}
        onBlur={() => runValidationTasks("CMSmoking", CMSmoking)}
        errorMessage={errors.CMSmoking?.errorMessage}
        hasError={errors.CMSmoking?.hasError}
        {...getOverrideProps(overrides, "CMSmoking")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMSmokingoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMSmokingoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMSmokingoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMSmokingoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMSmokingoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Gaming"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMGaming}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming: value,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMGaming ?? value;
          }
          if (errors.CMGaming?.hasError) {
            runValidationTasks("CMGaming", value);
          }
          setCMGaming(value);
        }}
        onBlur={() => runValidationTasks("CMGaming", CMGaming)}
        errorMessage={errors.CMGaming?.errorMessage}
        hasError={errors.CMGaming?.hasError}
        {...getOverrideProps(overrides, "CMGaming")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMGamingoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMGamingoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMGamingoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMGamingoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMGamingoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Shopping"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMShopping}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping: value,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMShopping ?? value;
          }
          if (errors.CMShopping?.hasError) {
            runValidationTasks("CMShopping", value);
          }
          setCMShopping(value);
        }}
        onBlur={() => runValidationTasks("CMShopping", CMShopping)}
        errorMessage={errors.CMShopping?.errorMessage}
        hasError={errors.CMShopping?.hasError}
        {...getOverrideProps(overrides, "CMShopping")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMShoppingoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMShoppingoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMShoppingoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMShoppingoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMShoppingoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Gambling"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMGambling}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling: value,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMGambling ?? value;
          }
          if (errors.CMGambling?.hasError) {
            runValidationTasks("CMGambling", value);
          }
          setCMGambling(value);
        }}
        onBlur={() => runValidationTasks("CMGambling", CMGambling)}
        errorMessage={errors.CMGambling?.errorMessage}
        hasError={errors.CMGambling?.hasError}
        {...getOverrideProps(overrides, "CMGambling")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMGamblingoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMGamblingoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMGamblingoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMGamblingoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMGamblingoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Casual Sex"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMSex}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex: value,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMSex ?? value;
          }
          if (errors.CMSex?.hasError) {
            runValidationTasks("CMSex", value);
          }
          setCMSex(value);
        }}
        onBlur={() => runValidationTasks("CMSex", CMSex)}
        errorMessage={errors.CMSex?.errorMessage}
        hasError={errors.CMSex?.hasError}
        {...getOverrideProps(overrides, "CMSex")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMSexoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMSexoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMSexoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMSexoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMSexoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Pornography"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMPorn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn: value,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMPorn ?? value;
          }
          if (errors.CMPorn?.hasError) {
            runValidationTasks("CMPorn", value);
          }
          setCMPorn(value);
        }}
        onBlur={() => runValidationTasks("CMPorn", CMPorn)}
        errorMessage={errors.CMPorn?.errorMessage}
        hasError={errors.CMPorn?.hasError}
        {...getOverrideProps(overrides, "CMPorn")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMPornoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMPornoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMPornoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMPornoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMPornoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Blaming Self or Others"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMBlaming}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming: value,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMBlaming ?? value;
          }
          if (errors.CMBlaming?.hasError) {
            runValidationTasks("CMBlaming", value);
          }
          setCMBlaming(value);
        }}
        onBlur={() => runValidationTasks("CMBlaming", CMBlaming)}
        errorMessage={errors.CMBlaming?.errorMessage}
        hasError={errors.CMBlaming?.hasError}
        {...getOverrideProps(overrides, "CMBlaming")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMBlamingoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMBlamingoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMBlamingoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMBlamingoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMBlamingoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Hurting Self or Others"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMHurting}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting: value,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMHurting ?? value;
          }
          if (errors.CMHurting?.hasError) {
            runValidationTasks("CMHurting", value);
          }
          setCMHurting(value);
        }}
        onBlur={() => runValidationTasks("CMHurting", CMHurting)}
        errorMessage={errors.CMHurting?.errorMessage}
        hasError={errors.CMHurting?.hasError}
        {...getOverrideProps(overrides, "CMHurting")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMHurtingoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMHurtingoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMHurtingoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMHurtingoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMHurtingoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Disengagement / Detachment / Self Isolation"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMDisengage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage: value,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMDisengage ?? value;
          }
          if (errors.CMDisengage?.hasError) {
            runValidationTasks("CMDisengage", value);
          }
          setCMDisengage(value);
        }}
        onBlur={() => runValidationTasks("CMDisengage", CMDisengage)}
        errorMessage={errors.CMDisengage?.errorMessage}
        hasError={errors.CMDisengage?.hasError}
        {...getOverrideProps(overrides, "CMDisengage")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMDisengageoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMDisengageoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMDisengageoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMDisengageoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMDisengageoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Drawing / Painting / Art"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMArt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt: value,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMArt ?? value;
          }
          if (errors.CMArt?.hasError) {
            runValidationTasks("CMArt", value);
          }
          setCMArt(value);
        }}
        onBlur={() => runValidationTasks("CMArt", CMArt)}
        errorMessage={errors.CMArt?.errorMessage}
        hasError={errors.CMArt?.hasError}
        {...getOverrideProps(overrides, "CMArt")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMArtoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMArtoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMArtoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMArtoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMArtoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Music"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMMusic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic: value,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMMusic ?? value;
          }
          if (errors.CMMusic?.hasError) {
            runValidationTasks("CMMusic", value);
          }
          setCMMusic(value);
        }}
        onBlur={() => runValidationTasks("CMMusic", CMMusic)}
        errorMessage={errors.CMMusic?.errorMessage}
        hasError={errors.CMMusic?.hasError}
        {...getOverrideProps(overrides, "CMMusic")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMMusicoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMMusicoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMMusicoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMMusicoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMMusicoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Poetry / Poetical Lyrics"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMPoetry}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry: value,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMPoetry ?? value;
          }
          if (errors.CMPoetry?.hasError) {
            runValidationTasks("CMPoetry", value);
          }
          setCMPoetry(value);
        }}
        onBlur={() => runValidationTasks("CMPoetry", CMPoetry)}
        errorMessage={errors.CMPoetry?.errorMessage}
        hasError={errors.CMPoetry?.hasError}
        {...getOverrideProps(overrides, "CMPoetry")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMPoetryoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMPoetryoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMPoetryoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMPoetryoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMPoetryoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Reading"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMReading}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading: value,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMReading ?? value;
          }
          if (errors.CMReading?.hasError) {
            runValidationTasks("CMReading", value);
          }
          setCMReading(value);
        }}
        onBlur={() => runValidationTasks("CMReading", CMReading)}
        errorMessage={errors.CMReading?.errorMessage}
        hasError={errors.CMReading?.hasError}
        {...getOverrideProps(overrides, "CMReading")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMReadingoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMReadingoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMReadingoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMReadingoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMReadingoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Group Discussion"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMGroups}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups: value,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMGroups ?? value;
          }
          if (errors.CMGroups?.hasError) {
            runValidationTasks("CMGroups", value);
          }
          setCMGroups(value);
        }}
        onBlur={() => runValidationTasks("CMGroups", CMGroups)}
        errorMessage={errors.CMGroups?.errorMessage}
        hasError={errors.CMGroups?.hasError}
        {...getOverrideProps(overrides, "CMGroups")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMGroupsoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMGroupsoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMGroupsoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMGroupsoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMGroupsoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Individual Counseling"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMCounseling}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling: value,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMCounseling ?? value;
          }
          if (errors.CMCounseling?.hasError) {
            runValidationTasks("CMCounseling", value);
          }
          setCMCounseling(value);
        }}
        onBlur={() => runValidationTasks("CMCounseling", CMCounseling)}
        errorMessage={errors.CMCounseling?.errorMessage}
        hasError={errors.CMCounseling?.hasError}
        {...getOverrideProps(overrides, "CMCounseling")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMCounselingoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMCounselingoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMCounselingoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMCounselingoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMCounselingoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Talking / Venting"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMVenting}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting: value,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMVenting ?? value;
          }
          if (errors.CMVenting?.hasError) {
            runValidationTasks("CMVenting", value);
          }
          setCMVenting(value);
        }}
        onBlur={() => runValidationTasks("CMVenting", CMVenting)}
        errorMessage={errors.CMVenting?.errorMessage}
        hasError={errors.CMVenting?.hasError}
        {...getOverrideProps(overrides, "CMVenting")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMVentingoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMVentingoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMVentingoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMVentingoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMVentingoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Writing / Journaling"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMWriting}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting: value,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMWriting ?? value;
          }
          if (errors.CMWriting?.hasError) {
            runValidationTasks("CMWriting", value);
          }
          setCMWriting(value);
        }}
        onBlur={() => runValidationTasks("CMWriting", CMWriting)}
        errorMessage={errors.CMWriting?.errorMessage}
        hasError={errors.CMWriting?.hasError}
        {...getOverrideProps(overrides, "CMWriting")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMWritingoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMWritingoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMWritingoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMWritingoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMWritingoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Sensory / Fidgets"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMSensory}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory: value,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMSensory ?? value;
          }
          if (errors.CMSensory?.hasError) {
            runValidationTasks("CMSensory", value);
          }
          setCMSensory(value);
        }}
        onBlur={() => runValidationTasks("CMSensory", CMSensory)}
        errorMessage={errors.CMSensory?.errorMessage}
        hasError={errors.CMSensory?.hasError}
        {...getOverrideProps(overrides, "CMSensory")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMSensoryoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMSensoryoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMSensoryoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMSensoryoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMSensoryoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Dancing"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMDancing}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing: value,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMDancing ?? value;
          }
          if (errors.CMDancing?.hasError) {
            runValidationTasks("CMDancing", value);
          }
          setCMDancing(value);
        }}
        onBlur={() => runValidationTasks("CMDancing", CMDancing)}
        errorMessage={errors.CMDancing?.errorMessage}
        hasError={errors.CMDancing?.hasError}
        {...getOverrideProps(overrides, "CMDancing")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMDancingoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMDancingoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMDancingoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMDancingoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMDancingoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Exercising"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMExercising}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising: value,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMExercising ?? value;
          }
          if (errors.CMExercising?.hasError) {
            runValidationTasks("CMExercising", value);
          }
          setCMExercising(value);
        }}
        onBlur={() => runValidationTasks("CMExercising", CMExercising)}
        errorMessage={errors.CMExercising?.errorMessage}
        hasError={errors.CMExercising?.hasError}
        {...getOverrideProps(overrides, "CMExercising")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMExercisingoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMExercisingoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMExercisingoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMExercisingoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMExercisingoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Walking"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMWalking}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking: value,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMWalking ?? value;
          }
          if (errors.CMWalking?.hasError) {
            runValidationTasks("CMWalking", value);
          }
          setCMWalking(value);
        }}
        onBlur={() => runValidationTasks("CMWalking", CMWalking)}
        errorMessage={errors.CMWalking?.errorMessage}
        hasError={errors.CMWalking?.hasError}
        {...getOverrideProps(overrides, "CMWalking")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMWalkingoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMWalkingoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMWalkingoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMWalkingoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMWalkingoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Change Something for Different Results"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMChange}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange: value,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMChange ?? value;
          }
          if (errors.CMChange?.hasError) {
            runValidationTasks("CMChange", value);
          }
          setCMChange(value);
        }}
        onBlur={() => runValidationTasks("CMChange", CMChange)}
        errorMessage={errors.CMChange?.errorMessage}
        hasError={errors.CMChange?.hasError}
        {...getOverrideProps(overrides, "CMChange")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMChangeoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMChangeoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMChangeoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMChangeoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMChangeoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Analyze the Situation for Better Understanding"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMAnalyze}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze: value,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMAnalyze ?? value;
          }
          if (errors.CMAnalyze?.hasError) {
            runValidationTasks("CMAnalyze", value);
          }
          setCMAnalyze(value);
        }}
        onBlur={() => runValidationTasks("CMAnalyze", CMAnalyze)}
        errorMessage={errors.CMAnalyze?.errorMessage}
        hasError={errors.CMAnalyze?.hasError}
        {...getOverrideProps(overrides, "CMAnalyze")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMAnalyzeoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMAnalyzeoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMAnalyzeoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMAnalyzeoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMAnalyzeoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Daydream or Imagine a Better Situation"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMDaydream}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream: value,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMDaydream ?? value;
          }
          if (errors.CMDaydream?.hasError) {
            runValidationTasks("CMDaydream", value);
          }
          setCMDaydream(value);
        }}
        onBlur={() => runValidationTasks("CMDaydream", CMDaydream)}
        errorMessage={errors.CMDaydream?.errorMessage}
        hasError={errors.CMDaydream?.hasError}
        {...getOverrideProps(overrides, "CMDaydream")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMDaydreamoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMDaydreamoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMDaydreamoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMDaydreamoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMDaydreamoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Focus on the Positives"
        placeholder="Please select an option"
        isDisabled={false}
        value={CMPositive}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive: value,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.CMPositive ?? value;
          }
          if (errors.CMPositive?.hasError) {
            runValidationTasks("CMPositive", value);
          }
          setCMPositive(value);
        }}
        onBlur={() => runValidationTasks("CMPositive", CMPositive)}
        errorMessage={errors.CMPositive?.errorMessage}
        hasError={errors.CMPositive?.hasError}
        {...getOverrideProps(overrides, "CMPositive")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "CMPositiveoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "CMPositiveoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "CMPositiveoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "CMPositiveoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "CMPositiveoption4")}
        ></option>
      </SelectField>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement4")}
      ></Divider>
      <Heading
        level={4}
        children="MENTAL HEALTH"
        {...getOverrideProps(overrides, "SectionalElement24")}
      ></Heading>
      <Heading
        children="Do you have any mental health diagnoses? Select all that apply."
        {...getOverrideProps(overrides, "SectionalElement6")}
      ></Heading>
      <SwitchField
        label="Post-Traumatic Stress Disorder Diagnosis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={MHDxPTSD}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD: value,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.MHDxPTSD ?? value;
          }
          if (errors.MHDxPTSD?.hasError) {
            runValidationTasks("MHDxPTSD", value);
          }
          setMHDxPTSD(value);
        }}
        onBlur={() => runValidationTasks("MHDxPTSD", MHDxPTSD)}
        errorMessage={errors.MHDxPTSD?.errorMessage}
        hasError={errors.MHDxPTSD?.hasError}
        {...getOverrideProps(overrides, "MHDxPTSD")}
      ></SwitchField>
      <SwitchField
        label="Depression Diagnosis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={MHDxDepression}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression: value,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.MHDxDepression ?? value;
          }
          if (errors.MHDxDepression?.hasError) {
            runValidationTasks("MHDxDepression", value);
          }
          setMHDxDepression(value);
        }}
        onBlur={() => runValidationTasks("MHDxDepression", MHDxDepression)}
        errorMessage={errors.MHDxDepression?.errorMessage}
        hasError={errors.MHDxDepression?.hasError}
        {...getOverrideProps(overrides, "MHDxDepression")}
      ></SwitchField>
      <SwitchField
        label="Substance Use Disorder Diagnosis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={MHDxSUD}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD: value,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.MHDxSUD ?? value;
          }
          if (errors.MHDxSUD?.hasError) {
            runValidationTasks("MHDxSUD", value);
          }
          setMHDxSUD(value);
        }}
        onBlur={() => runValidationTasks("MHDxSUD", MHDxSUD)}
        errorMessage={errors.MHDxSUD?.errorMessage}
        hasError={errors.MHDxSUD?.hasError}
        {...getOverrideProps(overrides, "MHDxSUD")}
      ></SwitchField>
      <SwitchField
        label="Other Serious Mental Health Diagnosis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={MHDxOtherMental}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental: value,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.MHDxOtherMental ?? value;
          }
          if (errors.MHDxOtherMental?.hasError) {
            runValidationTasks("MHDxOtherMental", value);
          }
          setMHDxOtherMental(value);
        }}
        onBlur={() => runValidationTasks("MHDxOtherMental", MHDxOtherMental)}
        errorMessage={errors.MHDxOtherMental?.errorMessage}
        hasError={errors.MHDxOtherMental?.hasError}
        {...getOverrideProps(overrides, "MHDxOtherMental")}
      ></SwitchField>
      <Heading
        children="Within the last four weeks, how often did you experience:"
        {...getOverrideProps(overrides, "SectionalElement7")}
      ></Heading>
      <SelectField
        label="Sleeplessness"
        placeholder="Please select an option"
        isDisabled={false}
        value={MHSleeplessness}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness: value,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.MHSleeplessness ?? value;
          }
          if (errors.MHSleeplessness?.hasError) {
            runValidationTasks("MHSleeplessness", value);
          }
          setMHSleeplessness(value);
        }}
        onBlur={() => runValidationTasks("MHSleeplessness", MHSleeplessness)}
        errorMessage={errors.MHSleeplessness?.errorMessage}
        hasError={errors.MHSleeplessness?.hasError}
        {...getOverrideProps(overrides, "MHSleeplessness")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "MHSleeplessnessoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "MHSleeplessnessoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "MHSleeplessnessoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "MHSleeplessnessoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "MHSleeplessnessoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Alcohol Use"
        placeholder="Please select an option"
        isDisabled={false}
        value={MHAlcoholUse}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse: value,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.MHAlcoholUse ?? value;
          }
          if (errors.MHAlcoholUse?.hasError) {
            runValidationTasks("MHAlcoholUse", value);
          }
          setMHAlcoholUse(value);
        }}
        onBlur={() => runValidationTasks("MHAlcoholUse", MHAlcoholUse)}
        errorMessage={errors.MHAlcoholUse?.errorMessage}
        hasError={errors.MHAlcoholUse?.hasError}
        {...getOverrideProps(overrides, "MHAlcoholUse")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "MHAlcoholUseoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "MHAlcoholUseoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "MHAlcoholUseoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "MHAlcoholUseoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "MHAlcoholUseoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Anxiety"
        placeholder="Please select an option"
        isDisabled={false}
        value={MHAnxiety}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety: value,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.MHAnxiety ?? value;
          }
          if (errors.MHAnxiety?.hasError) {
            runValidationTasks("MHAnxiety", value);
          }
          setMHAnxiety(value);
        }}
        onBlur={() => runValidationTasks("MHAnxiety", MHAnxiety)}
        errorMessage={errors.MHAnxiety?.errorMessage}
        hasError={errors.MHAnxiety?.hasError}
        {...getOverrideProps(overrides, "MHAnxiety")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "MHAnxietyoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "MHAnxietyoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "MHAnxietyoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "MHAnxietyoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "MHAnxietyoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Depression"
        placeholder="Please select an option"
        isDisabled={false}
        value={MHDepression}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression: value,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.MHDepression ?? value;
          }
          if (errors.MHDepression?.hasError) {
            runValidationTasks("MHDepression", value);
          }
          setMHDepression(value);
        }}
        onBlur={() => runValidationTasks("MHDepression", MHDepression)}
        errorMessage={errors.MHDepression?.errorMessage}
        hasError={errors.MHDepression?.hasError}
        {...getOverrideProps(overrides, "MHDepression")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "MHDepressionoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "MHDepressionoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "MHDepressionoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "MHDepressionoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "MHDepressionoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Drug Use"
        placeholder="Please select an option"
        isDisabled={false}
        value={MHDrugUse}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse: value,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.MHDrugUse ?? value;
          }
          if (errors.MHDrugUse?.hasError) {
            runValidationTasks("MHDrugUse", value);
          }
          setMHDrugUse(value);
        }}
        onBlur={() => runValidationTasks("MHDrugUse", MHDrugUse)}
        errorMessage={errors.MHDrugUse?.errorMessage}
        hasError={errors.MHDrugUse?.hasError}
        {...getOverrideProps(overrides, "MHDrugUse")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "MHDrugUseoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "MHDrugUseoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "MHDrugUseoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "MHDrugUseoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "MHDrugUseoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Grief"
        placeholder="Please select an option"
        isDisabled={false}
        value={MHGrief}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief: value,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.MHGrief ?? value;
          }
          if (errors.MHGrief?.hasError) {
            runValidationTasks("MHGrief", value);
          }
          setMHGrief(value);
        }}
        onBlur={() => runValidationTasks("MHGrief", MHGrief)}
        errorMessage={errors.MHGrief?.errorMessage}
        hasError={errors.MHGrief?.hasError}
        {...getOverrideProps(overrides, "MHGrief")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "MHGriefoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "MHGriefoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "MHGriefoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "MHGriefoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "MHGriefoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Guilt"
        placeholder="Please select an option"
        isDisabled={false}
        value={MHGuilt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt: value,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.MHGuilt ?? value;
          }
          if (errors.MHGuilt?.hasError) {
            runValidationTasks("MHGuilt", value);
          }
          setMHGuilt(value);
        }}
        onBlur={() => runValidationTasks("MHGuilt", MHGuilt)}
        errorMessage={errors.MHGuilt?.errorMessage}
        hasError={errors.MHGuilt?.hasError}
        {...getOverrideProps(overrides, "MHGuilt")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "MHGuiltoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "MHGuiltoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "MHGuiltoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "MHGuiltoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "MHGuiltoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Irritability"
        placeholder="Please select an option"
        isDisabled={false}
        value={MHIrritability}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability: value,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.MHIrritability ?? value;
          }
          if (errors.MHIrritability?.hasError) {
            runValidationTasks("MHIrritability", value);
          }
          setMHIrritability(value);
        }}
        onBlur={() => runValidationTasks("MHIrritability", MHIrritability)}
        errorMessage={errors.MHIrritability?.errorMessage}
        hasError={errors.MHIrritability?.hasError}
        {...getOverrideProps(overrides, "MHIrritability")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "MHIrritabilityoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "MHIrritabilityoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "MHIrritabilityoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "MHIrritabilityoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "MHIrritabilityoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Stress"
        placeholder="Please select an option"
        isDisabled={false}
        value={MHStress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress: value,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.MHStress ?? value;
          }
          if (errors.MHStress?.hasError) {
            runValidationTasks("MHStress", value);
          }
          setMHStress(value);
        }}
        onBlur={() => runValidationTasks("MHStress", MHStress)}
        errorMessage={errors.MHStress?.errorMessage}
        hasError={errors.MHStress?.hasError}
        {...getOverrideProps(overrides, "MHStress")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "MHStressoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "MHStressoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "MHStressoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "MHStressoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "MHStressoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Regret"
        placeholder="Please select an option"
        isDisabled={false}
        value={MHRegret}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret: value,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.MHRegret ?? value;
          }
          if (errors.MHRegret?.hasError) {
            runValidationTasks("MHRegret", value);
          }
          setMHRegret(value);
        }}
        onBlur={() => runValidationTasks("MHRegret", MHRegret)}
        errorMessage={errors.MHRegret?.errorMessage}
        hasError={errors.MHRegret?.hasError}
        {...getOverrideProps(overrides, "MHRegret")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "MHRegretoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "MHRegretoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "MHRegretoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "MHRegretoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "MHRegretoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Suicidal Thoughts"
        placeholder="Please select an option"
        isDisabled={false}
        value={MHSuicidalThoughts}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts: value,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.MHSuicidalThoughts ?? value;
          }
          if (errors.MHSuicidalThoughts?.hasError) {
            runValidationTasks("MHSuicidalThoughts", value);
          }
          setMHSuicidalThoughts(value);
        }}
        onBlur={() =>
          runValidationTasks("MHSuicidalThoughts", MHSuicidalThoughts)
        }
        errorMessage={errors.MHSuicidalThoughts?.errorMessage}
        hasError={errors.MHSuicidalThoughts?.hasError}
        {...getOverrideProps(overrides, "MHSuicidalThoughts")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "MHSuicidalThoughtsoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "MHSuicidalThoughtsoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "MHSuicidalThoughtsoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "MHSuicidalThoughtsoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "MHSuicidalThoughtsoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Loneliness"
        placeholder="Please select an option"
        isDisabled={false}
        value={MHLoneliness}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness: value,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.MHLoneliness ?? value;
          }
          if (errors.MHLoneliness?.hasError) {
            runValidationTasks("MHLoneliness", value);
          }
          setMHLoneliness(value);
        }}
        onBlur={() => runValidationTasks("MHLoneliness", MHLoneliness)}
        errorMessage={errors.MHLoneliness?.errorMessage}
        hasError={errors.MHLoneliness?.hasError}
        {...getOverrideProps(overrides, "MHLoneliness")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "MHLonelinessoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "MHLonelinessoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "MHLonelinessoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "MHLonelinessoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "MHLonelinessoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Worry"
        placeholder="Please select an option"
        isDisabled={false}
        value={MHWorry}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry: value,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.MHWorry ?? value;
          }
          if (errors.MHWorry?.hasError) {
            runValidationTasks("MHWorry", value);
          }
          setMHWorry(value);
        }}
        onBlur={() => runValidationTasks("MHWorry", MHWorry)}
        errorMessage={errors.MHWorry?.errorMessage}
        hasError={errors.MHWorry?.hasError}
        {...getOverrideProps(overrides, "MHWorry")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "MHWorryoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "MHWorryoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "MHWorryoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "MHWorryoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "MHWorryoption4")}
        ></option>
      </SelectField>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement8")}
      ></Divider>
      <Heading
        level={4}
        children="PHYSICAL HEALTH"
        {...getOverrideProps(overrides, "SectionalElement25")}
      ></Heading>
      <Heading
        children="Do you have any physical health diagnoses? Select all that apply. "
        {...getOverrideProps(overrides, "SectionalElement9")}
      ></Heading>
      <SwitchField
        label="Infertility Diagnosis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PHDxInfertility}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility: value,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHDxInfertility ?? value;
          }
          if (errors.PHDxInfertility?.hasError) {
            runValidationTasks("PHDxInfertility", value);
          }
          setPHDxInfertility(value);
        }}
        onBlur={() => runValidationTasks("PHDxInfertility", PHDxInfertility)}
        errorMessage={errors.PHDxInfertility?.errorMessage}
        hasError={errors.PHDxInfertility?.hasError}
        {...getOverrideProps(overrides, "PHDxInfertility")}
      ></SwitchField>
      <SwitchField
        label="Curable STD Diagnosis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PHDxCurableSTD}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD: value,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHDxCurableSTD ?? value;
          }
          if (errors.PHDxCurableSTD?.hasError) {
            runValidationTasks("PHDxCurableSTD", value);
          }
          setPHDxCurableSTD(value);
        }}
        onBlur={() => runValidationTasks("PHDxCurableSTD", PHDxCurableSTD)}
        errorMessage={errors.PHDxCurableSTD?.errorMessage}
        hasError={errors.PHDxCurableSTD?.hasError}
        {...getOverrideProps(overrides, "PHDxCurableSTD")}
      ></SwitchField>
      <SwitchField
        label="Incurable STD Diagnosis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PHDxIncurableSTD}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD: value,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHDxIncurableSTD ?? value;
          }
          if (errors.PHDxIncurableSTD?.hasError) {
            runValidationTasks("PHDxIncurableSTD", value);
          }
          setPHDxIncurableSTD(value);
        }}
        onBlur={() => runValidationTasks("PHDxIncurableSTD", PHDxIncurableSTD)}
        errorMessage={errors.PHDxIncurableSTD?.errorMessage}
        hasError={errors.PHDxIncurableSTD?.hasError}
        {...getOverrideProps(overrides, "PHDxIncurableSTD")}
      ></SwitchField>
      <SwitchField
        label="Cancer Diagnosis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PHDxCancer}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer: value,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHDxCancer ?? value;
          }
          if (errors.PHDxCancer?.hasError) {
            runValidationTasks("PHDxCancer", value);
          }
          setPHDxCancer(value);
        }}
        onBlur={() => runValidationTasks("PHDxCancer", PHDxCancer)}
        errorMessage={errors.PHDxCancer?.errorMessage}
        hasError={errors.PHDxCancer?.hasError}
        {...getOverrideProps(overrides, "PHDxCancer")}
      ></SwitchField>
      <SwitchField
        label="Diabetes Diagnosis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PHDxDiabetes}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes: value,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHDxDiabetes ?? value;
          }
          if (errors.PHDxDiabetes?.hasError) {
            runValidationTasks("PHDxDiabetes", value);
          }
          setPHDxDiabetes(value);
        }}
        onBlur={() => runValidationTasks("PHDxDiabetes", PHDxDiabetes)}
        errorMessage={errors.PHDxDiabetes?.errorMessage}
        hasError={errors.PHDxDiabetes?.hasError}
        {...getOverrideProps(overrides, "PHDxDiabetes")}
      ></SwitchField>
      <SwitchField
        label="High Blood Diagnosis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PHDxHighBlood}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood: value,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHDxHighBlood ?? value;
          }
          if (errors.PHDxHighBlood?.hasError) {
            runValidationTasks("PHDxHighBlood", value);
          }
          setPHDxHighBlood(value);
        }}
        onBlur={() => runValidationTasks("PHDxHighBlood", PHDxHighBlood)}
        errorMessage={errors.PHDxHighBlood?.errorMessage}
        hasError={errors.PHDxHighBlood?.hasError}
        {...getOverrideProps(overrides, "PHDxHighBlood")}
      ></SwitchField>
      <SwitchField
        label="Heart Disease Diagnosis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PHDxHeartDisease}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease: value,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHDxHeartDisease ?? value;
          }
          if (errors.PHDxHeartDisease?.hasError) {
            runValidationTasks("PHDxHeartDisease", value);
          }
          setPHDxHeartDisease(value);
        }}
        onBlur={() => runValidationTasks("PHDxHeartDisease", PHDxHeartDisease)}
        errorMessage={errors.PHDxHeartDisease?.errorMessage}
        hasError={errors.PHDxHeartDisease?.hasError}
        {...getOverrideProps(overrides, "PHDxHeartDisease")}
      ></SwitchField>
      <SwitchField
        label="Irritable Bowel Issues"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PHDxIrritableBowel}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel: value,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHDxIrritableBowel ?? value;
          }
          if (errors.PHDxIrritableBowel?.hasError) {
            runValidationTasks("PHDxIrritableBowel", value);
          }
          setPHDxIrritableBowel(value);
        }}
        onBlur={() =>
          runValidationTasks("PHDxIrritableBowel", PHDxIrritableBowel)
        }
        errorMessage={errors.PHDxIrritableBowel?.errorMessage}
        hasError={errors.PHDxIrritableBowel?.hasError}
        {...getOverrideProps(overrides, "PHDxIrritableBowel")}
      ></SwitchField>
      <SwitchField
        label="Severe Vitamin A Deficiency"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PHDxVitA}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA: value,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHDxVitA ?? value;
          }
          if (errors.PHDxVitA?.hasError) {
            runValidationTasks("PHDxVitA", value);
          }
          setPHDxVitA(value);
        }}
        onBlur={() => runValidationTasks("PHDxVitA", PHDxVitA)}
        errorMessage={errors.PHDxVitA?.errorMessage}
        hasError={errors.PHDxVitA?.hasError}
        {...getOverrideProps(overrides, "PHDxVitA")}
      ></SwitchField>
      <SwitchField
        label="Severe Vitamin B Deficiency"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PHDxVitB}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB: value,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHDxVitB ?? value;
          }
          if (errors.PHDxVitB?.hasError) {
            runValidationTasks("PHDxVitB", value);
          }
          setPHDxVitB(value);
        }}
        onBlur={() => runValidationTasks("PHDxVitB", PHDxVitB)}
        errorMessage={errors.PHDxVitB?.errorMessage}
        hasError={errors.PHDxVitB?.hasError}
        {...getOverrideProps(overrides, "PHDxVitB")}
      ></SwitchField>
      <SwitchField
        label="Severe Vitamin C Deficiency"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PHDxVitC}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC: value,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHDxVitC ?? value;
          }
          if (errors.PHDxVitC?.hasError) {
            runValidationTasks("PHDxVitC", value);
          }
          setPHDxVitC(value);
        }}
        onBlur={() => runValidationTasks("PHDxVitC", PHDxVitC)}
        errorMessage={errors.PHDxVitC?.errorMessage}
        hasError={errors.PHDxVitC?.hasError}
        {...getOverrideProps(overrides, "PHDxVitC")}
      ></SwitchField>
      <SwitchField
        label="Severe Vitamin D Deficiency"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PHDxVitD}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD: value,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHDxVitD ?? value;
          }
          if (errors.PHDxVitD?.hasError) {
            runValidationTasks("PHDxVitD", value);
          }
          setPHDxVitD(value);
        }}
        onBlur={() => runValidationTasks("PHDxVitD", PHDxVitD)}
        errorMessage={errors.PHDxVitD?.errorMessage}
        hasError={errors.PHDxVitD?.hasError}
        {...getOverrideProps(overrides, "PHDxVitD")}
      ></SwitchField>
      <SwitchField
        label="Severe Vitamin E Deficiency"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PHDxVitE}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE: value,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHDxVitE ?? value;
          }
          if (errors.PHDxVitE?.hasError) {
            runValidationTasks("PHDxVitE", value);
          }
          setPHDxVitE(value);
        }}
        onBlur={() => runValidationTasks("PHDxVitE", PHDxVitE)}
        errorMessage={errors.PHDxVitE?.errorMessage}
        hasError={errors.PHDxVitE?.hasError}
        {...getOverrideProps(overrides, "PHDxVitE")}
      ></SwitchField>
      <SwitchField
        label="Severe Vitamin K Deficiency"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PHDxVitK}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK: value,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHDxVitK ?? value;
          }
          if (errors.PHDxVitK?.hasError) {
            runValidationTasks("PHDxVitK", value);
          }
          setPHDxVitK(value);
        }}
        onBlur={() => runValidationTasks("PHDxVitK", PHDxVitK)}
        errorMessage={errors.PHDxVitK?.errorMessage}
        hasError={errors.PHDxVitK?.hasError}
        {...getOverrideProps(overrides, "PHDxVitK")}
      ></SwitchField>
      <SwitchField
        label="Autoimmune Disease Diagnosis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PHDxAutoimmune}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune: value,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHDxAutoimmune ?? value;
          }
          if (errors.PHDxAutoimmune?.hasError) {
            runValidationTasks("PHDxAutoimmune", value);
          }
          setPHDxAutoimmune(value);
        }}
        onBlur={() => runValidationTasks("PHDxAutoimmune", PHDxAutoimmune)}
        errorMessage={errors.PHDxAutoimmune?.errorMessage}
        hasError={errors.PHDxAutoimmune?.hasError}
        {...getOverrideProps(overrides, "PHDxAutoimmune")}
      ></SwitchField>
      <SwitchField
        label="Other Serious Physical Health Diagnosis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PHDxOtherPhysical}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical: value,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHDxOtherPhysical ?? value;
          }
          if (errors.PHDxOtherPhysical?.hasError) {
            runValidationTasks("PHDxOtherPhysical", value);
          }
          setPHDxOtherPhysical(value);
        }}
        onBlur={() =>
          runValidationTasks("PHDxOtherPhysical", PHDxOtherPhysical)
        }
        errorMessage={errors.PHDxOtherPhysical?.errorMessage}
        hasError={errors.PHDxOtherPhysical?.hasError}
        {...getOverrideProps(overrides, "PHDxOtherPhysical")}
      ></SwitchField>
      <Heading
        children="Within the last four weeks, how often did you consume:"
        {...getOverrideProps(overrides, "SectionalElement13")}
      ></Heading>
      <SelectField
        label="Vegetables and Fruits"
        placeholder="Please select an option"
        isDisabled={false}
        value={PHVegeFruits}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits: value,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHVegeFruits ?? value;
          }
          if (errors.PHVegeFruits?.hasError) {
            runValidationTasks("PHVegeFruits", value);
          }
          setPHVegeFruits(value);
        }}
        onBlur={() => runValidationTasks("PHVegeFruits", PHVegeFruits)}
        errorMessage={errors.PHVegeFruits?.errorMessage}
        hasError={errors.PHVegeFruits?.hasError}
        {...getOverrideProps(overrides, "PHVegeFruits")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "PHVegeFruitsoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "PHVegeFruitsoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "PHVegeFruitsoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "PHVegeFruitsoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "PHVegeFruitsoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Beans and Lentils"
        placeholder="Please select an option"
        isDisabled={false}
        value={PHBeanLentils}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils: value,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHBeanLentils ?? value;
          }
          if (errors.PHBeanLentils?.hasError) {
            runValidationTasks("PHBeanLentils", value);
          }
          setPHBeanLentils(value);
        }}
        onBlur={() => runValidationTasks("PHBeanLentils", PHBeanLentils)}
        errorMessage={errors.PHBeanLentils?.errorMessage}
        hasError={errors.PHBeanLentils?.hasError}
        {...getOverrideProps(overrides, "PHBeanLentils")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "PHBeanLentilsoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "PHBeanLentilsoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "PHBeanLentilsoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "PHBeanLentilsoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "PHBeanLentilsoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Grains and Breads"
        placeholder="Please select an option"
        isDisabled={false}
        value={PHGrainBreads}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads: value,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHGrainBreads ?? value;
          }
          if (errors.PHGrainBreads?.hasError) {
            runValidationTasks("PHGrainBreads", value);
          }
          setPHGrainBreads(value);
        }}
        onBlur={() => runValidationTasks("PHGrainBreads", PHGrainBreads)}
        errorMessage={errors.PHGrainBreads?.errorMessage}
        hasError={errors.PHGrainBreads?.hasError}
        {...getOverrideProps(overrides, "PHGrainBreads")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "PHGrainBreadsoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "PHGrainBreadsoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "PHGrainBreadsoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "PHGrainBreadsoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "PHGrainBreadsoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Dairy"
        placeholder="Please select an option"
        isDisabled={false}
        value={PHDairy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy: value,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHDairy ?? value;
          }
          if (errors.PHDairy?.hasError) {
            runValidationTasks("PHDairy", value);
          }
          setPHDairy(value);
        }}
        onBlur={() => runValidationTasks("PHDairy", PHDairy)}
        errorMessage={errors.PHDairy?.errorMessage}
        hasError={errors.PHDairy?.hasError}
        {...getOverrideProps(overrides, "PHDairy")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "PHDairyoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "PHDairyoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "PHDairyoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "PHDairyoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "PHDairyoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Meat"
        placeholder="Please select an option"
        isDisabled={false}
        value={PHMeat}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat: value,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHMeat ?? value;
          }
          if (errors.PHMeat?.hasError) {
            runValidationTasks("PHMeat", value);
          }
          setPHMeat(value);
        }}
        onBlur={() => runValidationTasks("PHMeat", PHMeat)}
        errorMessage={errors.PHMeat?.errorMessage}
        hasError={errors.PHMeat?.hasError}
        {...getOverrideProps(overrides, "PHMeat")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "PHMeatoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "PHMeatoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "PHMeatoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "PHMeatoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "PHMeatoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Fish and Seafood"
        placeholder="Please select an option"
        isDisabled={false}
        value={PHFishSeafood}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood: value,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHFishSeafood ?? value;
          }
          if (errors.PHFishSeafood?.hasError) {
            runValidationTasks("PHFishSeafood", value);
          }
          setPHFishSeafood(value);
        }}
        onBlur={() => runValidationTasks("PHFishSeafood", PHFishSeafood)}
        errorMessage={errors.PHFishSeafood?.errorMessage}
        hasError={errors.PHFishSeafood?.hasError}
        {...getOverrideProps(overrides, "PHFishSeafood")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "PHFishSeafoodoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "PHFishSeafoodoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "PHFishSeafoodoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "PHFishSeafoodoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "PHFishSeafoodoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Sweets and Desserts"
        placeholder="Please select an option"
        isDisabled={false}
        value={PHSweets}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets: value,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHSweets ?? value;
          }
          if (errors.PHSweets?.hasError) {
            runValidationTasks("PHSweets", value);
          }
          setPHSweets(value);
        }}
        onBlur={() => runValidationTasks("PHSweets", PHSweets)}
        errorMessage={errors.PHSweets?.errorMessage}
        hasError={errors.PHSweets?.hasError}
        {...getOverrideProps(overrides, "PHSweets")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "PHSweetsoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "PHSweetsoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "PHSweetsoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "PHSweetsoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "PHSweetsoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Water"
        placeholder="Please select an option"
        isDisabled={false}
        value={PHWater}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater: value,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHWater ?? value;
          }
          if (errors.PHWater?.hasError) {
            runValidationTasks("PHWater", value);
          }
          setPHWater(value);
        }}
        onBlur={() => runValidationTasks("PHWater", PHWater)}
        errorMessage={errors.PHWater?.errorMessage}
        hasError={errors.PHWater?.hasError}
        {...getOverrideProps(overrides, "PHWater")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "PHWateroption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "PHWateroption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "PHWateroption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "PHWateroption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "PHWateroption4")}
        ></option>
      </SelectField>
      <Heading
        children="Within the last four weeks, how often were you:"
        {...getOverrideProps(overrides, "SectionalElement14")}
      ></Heading>
      <SelectField
        label="Physical Activity"
        placeholder="Please select an option"
        isDisabled={false}
        value={PHPhysicalActivity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity: value,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.PHPhysicalActivity ?? value;
          }
          if (errors.PHPhysicalActivity?.hasError) {
            runValidationTasks("PHPhysicalActivity", value);
          }
          setPHPhysicalActivity(value);
        }}
        onBlur={() =>
          runValidationTasks("PHPhysicalActivity", PHPhysicalActivity)
        }
        errorMessage={errors.PHPhysicalActivity?.errorMessage}
        hasError={errors.PHPhysicalActivity?.hasError}
        {...getOverrideProps(overrides, "PHPhysicalActivity")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "PHPhysicalActivityoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "PHPhysicalActivityoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "PHPhysicalActivityoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "PHPhysicalActivityoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "PHPhysicalActivityoption4")}
        ></option>
      </SelectField>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement10")}
      ></Divider>
      <Heading
        level={4}
        children="SPIRITUAL HEALTH"
        {...getOverrideProps(overrides, "SectionalElement20")}
      ></Heading>
      <Text
        children="Spiritual health is defined as “a person’s faith and relationship with a higher power in finding meaning and connection with self and all creation”. "
        {...getOverrideProps(overrides, "SectionalElement26")}
      ></Text>
      <Heading
        children="How much do you  agree with the following statements?"
        {...getOverrideProps(overrides, "SectionalElement11")}
      ></Heading>
      <SelectField
        label="Spirituality helps me define my goals."
        placeholder="Please select an option"
        isDisabled={false}
        value={SHSpiritualDefine}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine: value,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SHSpiritualDefine ?? value;
          }
          if (errors.SHSpiritualDefine?.hasError) {
            runValidationTasks("SHSpiritualDefine", value);
          }
          setSHSpiritualDefine(value);
        }}
        onBlur={() =>
          runValidationTasks("SHSpiritualDefine", SHSpiritualDefine)
        }
        errorMessage={errors.SHSpiritualDefine?.errorMessage}
        hasError={errors.SHSpiritualDefine?.hasError}
        {...getOverrideProps(overrides, "SHSpiritualDefine")}
      >
        <option
          children="Strongly Agree"
          value="Strongly Agree"
          {...getOverrideProps(overrides, "SHSpiritualDefineoption0")}
        ></option>
        <option
          children="Agree"
          value="Agree"
          {...getOverrideProps(overrides, "SHSpiritualDefineoption1")}
        ></option>
        <option
          children="Neither"
          value="Neither"
          {...getOverrideProps(overrides, "SHSpiritualDefineoption2")}
        ></option>
        <option
          children="Disagree"
          value="Disagree"
          {...getOverrideProps(overrides, "SHSpiritualDefineoption3")}
        ></option>
        <option
          children="Strongly Disagree"
          value="Strongly Disagree"
          {...getOverrideProps(overrides, "SHSpiritualDefineoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Spirituality is integrated into my whole life."
        placeholder="Please select an option"
        isDisabled={false}
        value={SHSpiritualIntegrate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate: value,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SHSpiritualIntegrate ?? value;
          }
          if (errors.SHSpiritualIntegrate?.hasError) {
            runValidationTasks("SHSpiritualIntegrate", value);
          }
          setSHSpiritualIntegrate(value);
        }}
        onBlur={() =>
          runValidationTasks("SHSpiritualIntegrate", SHSpiritualIntegrate)
        }
        errorMessage={errors.SHSpiritualIntegrate?.errorMessage}
        hasError={errors.SHSpiritualIntegrate?.hasError}
        {...getOverrideProps(overrides, "SHSpiritualIntegrate")}
      >
        <option
          children="Strongly Agree"
          value="Strongly Agree"
          {...getOverrideProps(overrides, "SHSpiritualIntegrateoption0")}
        ></option>
        <option
          children="Agree"
          value="Agree"
          {...getOverrideProps(overrides, "SHSpiritualIntegrateoption1")}
        ></option>
        <option
          children="Neither"
          value="Neither"
          {...getOverrideProps(overrides, "SHSpiritualIntegrateoption2")}
        ></option>
        <option
          children="Disagree"
          value="Disagree"
          {...getOverrideProps(overrides, "SHSpiritualIntegrateoption3")}
        ></option>
        <option
          children="Strongly Disagree"
          value="Strongly Disagree"
          {...getOverrideProps(overrides, "SHSpiritualIntegrateoption4")}
        ></option>
      </SelectField>
      <Heading
        children="Within the last four weeks, how often did you:"
        {...getOverrideProps(overrides, "SectionalElement12")}
      ></Heading>
      <SelectField
        label="Pray?"
        placeholder="Please select an option"
        isDisabled={false}
        value={SHPrayer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer: value,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SHPrayer ?? value;
          }
          if (errors.SHPrayer?.hasError) {
            runValidationTasks("SHPrayer", value);
          }
          setSHPrayer(value);
        }}
        onBlur={() => runValidationTasks("SHPrayer", SHPrayer)}
        errorMessage={errors.SHPrayer?.errorMessage}
        hasError={errors.SHPrayer?.hasError}
        {...getOverrideProps(overrides, "SHPrayer")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "SHPrayeroption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "SHPrayeroption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "SHPrayeroption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "SHPrayeroption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "SHPrayeroption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Communicate with like-minded individuals?"
        placeholder="Please select an option"
        isDisabled={false}
        value={SHSpiritualActivity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity: value,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SHSpiritualActivity ?? value;
          }
          if (errors.SHSpiritualActivity?.hasError) {
            runValidationTasks("SHSpiritualActivity", value);
          }
          setSHSpiritualActivity(value);
        }}
        onBlur={() =>
          runValidationTasks("SHSpiritualActivity", SHSpiritualActivity)
        }
        errorMessage={errors.SHSpiritualActivity?.errorMessage}
        hasError={errors.SHSpiritualActivity?.hasError}
        {...getOverrideProps(overrides, "SHSpiritualActivity")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "SHSpiritualActivityoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "SHSpiritualActivityoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "SHSpiritualActivityoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "SHSpiritualActivityoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "SHSpiritualActivityoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Read religious text?"
        placeholder="Please select an option"
        isDisabled={false}
        value={SHReadText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText: value,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SHReadText ?? value;
          }
          if (errors.SHReadText?.hasError) {
            runValidationTasks("SHReadText", value);
          }
          setSHReadText(value);
        }}
        onBlur={() => runValidationTasks("SHReadText", SHReadText)}
        errorMessage={errors.SHReadText?.errorMessage}
        hasError={errors.SHReadText?.hasError}
        {...getOverrideProps(overrides, "SHReadText")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "SHReadTextoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "SHReadTextoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "SHReadTextoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "SHReadTextoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "SHReadTextoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Consciously try to align your life with religious texts?"
        placeholder="Please select an option"
        isDisabled={false}
        value={SHAlignText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText: value,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SHAlignText ?? value;
          }
          if (errors.SHAlignText?.hasError) {
            runValidationTasks("SHAlignText", value);
          }
          setSHAlignText(value);
        }}
        onBlur={() => runValidationTasks("SHAlignText", SHAlignText)}
        errorMessage={errors.SHAlignText?.errorMessage}
        hasError={errors.SHAlignText?.hasError}
        {...getOverrideProps(overrides, "SHAlignText")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "SHAlignTextoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "SHAlignTextoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "SHAlignTextoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "SHAlignTextoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "SHAlignTextoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Participate in religious gatherings / groups / prayer?"
        placeholder="Please select an option"
        isDisabled={false}
        value={SHCommunity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity: value,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SHCommunity ?? value;
          }
          if (errors.SHCommunity?.hasError) {
            runValidationTasks("SHCommunity", value);
          }
          setSHCommunity(value);
        }}
        onBlur={() => runValidationTasks("SHCommunity", SHCommunity)}
        errorMessage={errors.SHCommunity?.errorMessage}
        hasError={errors.SHCommunity?.hasError}
        {...getOverrideProps(overrides, "SHCommunity")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "SHCommunityoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "SHCommunityoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "SHCommunityoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "SHCommunityoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "SHCommunityoption4")}
        ></option>
      </SelectField>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement15")}
      ></Divider>
      <Heading
        level={4}
        children="OUTLOOK ON LIFE"
        {...getOverrideProps(overrides, "SectionalElement21")}
      ></Heading>
      <Heading
        children="Within the last four weeks, how often did you feel:"
        {...getOverrideProps(overrides, "SectionalElement16")}
      ></Heading>
      <SelectField
        label="Hope for the future and sense of purpose?"
        placeholder="Please select an option"
        isDisabled={false}
        value={OLHope}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope: value,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.OLHope ?? value;
          }
          if (errors.OLHope?.hasError) {
            runValidationTasks("OLHope", value);
          }
          setOLHope(value);
        }}
        onBlur={() => runValidationTasks("OLHope", OLHope)}
        errorMessage={errors.OLHope?.errorMessage}
        hasError={errors.OLHope?.hasError}
        {...getOverrideProps(overrides, "OLHope")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "OLHopeoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "OLHopeoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "OLHopeoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "OLHopeoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "OLHopeoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Peace of mind?"
        placeholder="Please select an option"
        isDisabled={false}
        value={OLPeace}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace: value,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.OLPeace ?? value;
          }
          if (errors.OLPeace?.hasError) {
            runValidationTasks("OLPeace", value);
          }
          setOLPeace(value);
        }}
        onBlur={() => runValidationTasks("OLPeace", OLPeace)}
        errorMessage={errors.OLPeace?.errorMessage}
        hasError={errors.OLPeace?.hasError}
        {...getOverrideProps(overrides, "OLPeace")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "OLPeaceoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "OLPeaceoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "OLPeaceoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "OLPeaceoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "OLPeaceoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Willingness to learn and be corrected?"
        placeholder="Please select an option"
        isDisabled={false}
        value={OLLearning}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning: value,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.OLLearning ?? value;
          }
          if (errors.OLLearning?.hasError) {
            runValidationTasks("OLLearning", value);
          }
          setOLLearning(value);
        }}
        onBlur={() => runValidationTasks("OLLearning", OLLearning)}
        errorMessage={errors.OLLearning?.errorMessage}
        hasError={errors.OLLearning?.hasError}
        {...getOverrideProps(overrides, "OLLearning")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "OLLearningoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "OLLearningoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "OLLearningoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "OLLearningoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "OLLearningoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Joy even in trying times?"
        placeholder="Please select an option"
        isDisabled={false}
        value={OLJoy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy: value,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.OLJoy ?? value;
          }
          if (errors.OLJoy?.hasError) {
            runValidationTasks("OLJoy", value);
          }
          setOLJoy(value);
        }}
        onBlur={() => runValidationTasks("OLJoy", OLJoy)}
        errorMessage={errors.OLJoy?.errorMessage}
        hasError={errors.OLJoy?.hasError}
        {...getOverrideProps(overrides, "OLJoy")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "OLJoyoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "OLJoyoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "OLJoyoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "OLJoyoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "OLJoyoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Stable (e.g. housing, finances, etc.)?"
        placeholder="Please select an option"
        isDisabled={false}
        value={OLStable}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable: value,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.OLStable ?? value;
          }
          if (errors.OLStable?.hasError) {
            runValidationTasks("OLStable", value);
          }
          setOLStable(value);
        }}
        onBlur={() => runValidationTasks("OLStable", OLStable)}
        errorMessage={errors.OLStable?.errorMessage}
        hasError={errors.OLStable?.hasError}
        {...getOverrideProps(overrides, "OLStable")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "OLStableoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "OLStableoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "OLStableoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "OLStableoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "OLStableoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Safe and secure?"
        placeholder="Please select an option"
        isDisabled={false}
        value={OLSafety}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety: value,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.OLSafety ?? value;
          }
          if (errors.OLSafety?.hasError) {
            runValidationTasks("OLSafety", value);
          }
          setOLSafety(value);
        }}
        onBlur={() => runValidationTasks("OLSafety", OLSafety)}
        errorMessage={errors.OLSafety?.errorMessage}
        hasError={errors.OLSafety?.hasError}
        {...getOverrideProps(overrides, "OLSafety")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "OLSafetyoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "OLSafetyoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "OLSafetyoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "OLSafetyoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "OLSafetyoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Kindness toward others?"
        placeholder="Please select an option"
        isDisabled={false}
        value={OLKindness}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness: value,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.OLKindness ?? value;
          }
          if (errors.OLKindness?.hasError) {
            runValidationTasks("OLKindness", value);
          }
          setOLKindness(value);
        }}
        onBlur={() => runValidationTasks("OLKindness", OLKindness)}
        errorMessage={errors.OLKindness?.errorMessage}
        hasError={errors.OLKindness?.hasError}
        {...getOverrideProps(overrides, "OLKindness")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "OLKindnessoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "OLKindnessoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "OLKindnessoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "OLKindnessoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "OLKindnessoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Like you were able to forgive yourself and others?"
        placeholder="Please select an option"
        isDisabled={false}
        value={OLForgiveness}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness: value,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.OLForgiveness ?? value;
          }
          if (errors.OLForgiveness?.hasError) {
            runValidationTasks("OLForgiveness", value);
          }
          setOLForgiveness(value);
        }}
        onBlur={() => runValidationTasks("OLForgiveness", OLForgiveness)}
        errorMessage={errors.OLForgiveness?.errorMessage}
        hasError={errors.OLForgiveness?.hasError}
        {...getOverrideProps(overrides, "OLForgiveness")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "OLForgivenessoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "OLForgivenessoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "OLForgivenessoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "OLForgivenessoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "OLForgivenessoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Patience with yourself and others?"
        placeholder="Please select an option"
        isDisabled={false}
        value={OLPatience}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience: value,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.OLPatience ?? value;
          }
          if (errors.OLPatience?.hasError) {
            runValidationTasks("OLPatience", value);
          }
          setOLPatience(value);
        }}
        onBlur={() => runValidationTasks("OLPatience", OLPatience)}
        errorMessage={errors.OLPatience?.errorMessage}
        hasError={errors.OLPatience?.hasError}
        {...getOverrideProps(overrides, "OLPatience")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "OLPatienceoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "OLPatienceoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "OLPatienceoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "OLPatienceoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "OLPatienceoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Supported in your relationships?"
        placeholder="Please select an option"
        isDisabled={false}
        value={OLRelationships}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships: value,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.OLRelationships ?? value;
          }
          if (errors.OLRelationships?.hasError) {
            runValidationTasks("OLRelationships", value);
          }
          setOLRelationships(value);
        }}
        onBlur={() => runValidationTasks("OLRelationships", OLRelationships)}
        errorMessage={errors.OLRelationships?.errorMessage}
        hasError={errors.OLRelationships?.hasError}
        {...getOverrideProps(overrides, "OLRelationships")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "OLRelationshipsoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "OLRelationshipsoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "OLRelationshipsoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "OLRelationshipsoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "OLRelationshipsoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Like you were able to maintain healthy boundaries?"
        placeholder="Please select an option"
        isDisabled={false}
        value={OLBoundaries}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries: value,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.OLBoundaries ?? value;
          }
          if (errors.OLBoundaries?.hasError) {
            runValidationTasks("OLBoundaries", value);
          }
          setOLBoundaries(value);
        }}
        onBlur={() => runValidationTasks("OLBoundaries", OLBoundaries)}
        errorMessage={errors.OLBoundaries?.errorMessage}
        hasError={errors.OLBoundaries?.hasError}
        {...getOverrideProps(overrides, "OLBoundaries")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "OLBoundariesoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "OLBoundariesoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "OLBoundariesoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "OLBoundariesoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "OLBoundariesoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Unpleasant emotions (e.g. frustration, irritability)?"
        placeholder="Please select an option"
        isDisabled={false}
        value={OLEUnpleasant}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant: value,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.OLEUnpleasant ?? value;
          }
          if (errors.OLEUnpleasant?.hasError) {
            runValidationTasks("OLEUnpleasant", value);
          }
          setOLEUnpleasant(value);
        }}
        onBlur={() => runValidationTasks("OLEUnpleasant", OLEUnpleasant)}
        errorMessage={errors.OLEUnpleasant?.errorMessage}
        hasError={errors.OLEUnpleasant?.hasError}
        {...getOverrideProps(overrides, "OLEUnpleasant")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "OLEUnpleasantoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "OLEUnpleasantoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "OLEUnpleasantoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "OLEUnpleasantoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "OLEUnpleasantoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Pleasant emotions (e.g. appreciation, confidence)?"
        placeholder="Please select an option"
        isDisabled={false}
        value={OLEPleasant}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant: value,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.OLEPleasant ?? value;
          }
          if (errors.OLEPleasant?.hasError) {
            runValidationTasks("OLEPleasant", value);
          }
          setOLEPleasant(value);
        }}
        onBlur={() => runValidationTasks("OLEPleasant", OLEPleasant)}
        errorMessage={errors.OLEPleasant?.errorMessage}
        hasError={errors.OLEPleasant?.hasError}
        {...getOverrideProps(overrides, "OLEPleasant")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "OLEPleasantoption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "OLEPleasantoption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "OLEPleasantoption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "OLEPleasantoption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "OLEPleasantoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Control over your emotions?"
        placeholder="Please select an option"
        isDisabled={false}
        value={OLEControl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl: value,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.OLEControl ?? value;
          }
          if (errors.OLEControl?.hasError) {
            runValidationTasks("OLEControl", value);
          }
          setOLEControl(value);
        }}
        onBlur={() => runValidationTasks("OLEControl", OLEControl)}
        errorMessage={errors.OLEControl?.errorMessage}
        hasError={errors.OLEControl?.hasError}
        {...getOverrideProps(overrides, "OLEControl")}
      >
        <option
          children="5+x Week"
          value="5+x Week"
          {...getOverrideProps(overrides, "OLEControloption0")}
        ></option>
        <option
          children="3-4x Week"
          value="3-4x Week"
          {...getOverrideProps(overrides, "OLEControloption1")}
        ></option>
        <option
          children="1-2x Week"
          value="1-2x Week"
          {...getOverrideProps(overrides, "OLEControloption2")}
        ></option>
        <option
          children="1-2x Month"
          value="1-2x Month"
          {...getOverrideProps(overrides, "OLEControloption3")}
        ></option>
        <option
          children="N/A or Rare"
          value="N/A or Rare"
          {...getOverrideProps(overrides, "OLEControloption4")}
        ></option>
      </SelectField>
      <Heading
        children="Within the last four weeks:"
        {...getOverrideProps(overrides, "SectionalElement19")}
      ></Heading>
      <SelectField
        label="Approximately how many emotions did you communicate regularly?"
        placeholder="Please select an option"
        isDisabled={false}
        value={OLENumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber: value,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.OLENumber ?? value;
          }
          if (errors.OLENumber?.hasError) {
            runValidationTasks("OLENumber", value);
          }
          setOLENumber(value);
        }}
        onBlur={() => runValidationTasks("OLENumber", OLENumber)}
        errorMessage={errors.OLENumber?.errorMessage}
        hasError={errors.OLENumber?.hasError}
        {...getOverrideProps(overrides, "OLENumber")}
      >
        <option
          children="0-5"
          value="0-5"
          {...getOverrideProps(overrides, "OLENumberoption0")}
        ></option>
        <option
          children="6-9"
          value="6-9"
          {...getOverrideProps(overrides, "OLENumberoption1")}
        ></option>
        <option
          children="10-19"
          value="10-19"
          {...getOverrideProps(overrides, "OLENumberoption2")}
        ></option>
        <option
          children="20-29"
          value="20-29"
          {...getOverrideProps(overrides, "OLENumberoption3")}
        ></option>
        <option
          children="30+"
          value="30+"
          {...getOverrideProps(overrides, "OLENumberoption4")}
        ></option>
      </SelectField>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement17")}
      ></Divider>
      <Heading
        children="Social Determinant of Health Questions"
        {...getOverrideProps(overrides, "SectionalElement18")}
      ></Heading>
      <SelectField
        label="Age Range"
        placeholder="Please select an option"
        isDisabled={false}
        value={SDoHAgeRange}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange: value,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SDoHAgeRange ?? value;
          }
          if (errors.SDoHAgeRange?.hasError) {
            runValidationTasks("SDoHAgeRange", value);
          }
          setSDoHAgeRange(value);
        }}
        onBlur={() => runValidationTasks("SDoHAgeRange", SDoHAgeRange)}
        errorMessage={errors.SDoHAgeRange?.errorMessage}
        hasError={errors.SDoHAgeRange?.hasError}
        {...getOverrideProps(overrides, "SDoHAgeRange")}
      >
        <option
          children="9-12"
          value="9-12"
          {...getOverrideProps(overrides, "SDoHAgeRangeoption0")}
        ></option>
        <option
          children="13-16"
          value="13-16"
          {...getOverrideProps(overrides, "SDoHAgeRangeoption1")}
        ></option>
        <option
          children="17-19"
          value="17-19"
          {...getOverrideProps(overrides, "SDoHAgeRangeoption2")}
        ></option>
        <option
          children="20-29"
          value="20-29"
          {...getOverrideProps(overrides, "SDoHAgeRangeoption3")}
        ></option>
        <option
          children="30-39"
          value="30-39"
          {...getOverrideProps(overrides, "SDoHAgeRangeoption4")}
        ></option>
        <option
          children="40-49&#x9;"
          value="40-49&#x9;"
          {...getOverrideProps(overrides, "SDoHAgeRangeoption5")}
        ></option>
        <option
          children="50-59"
          value="50-59"
          {...getOverrideProps(overrides, "SDoHAgeRangeoption6")}
        ></option>
        <option
          children="60-69"
          value="60-69"
          {...getOverrideProps(overrides, "SDoHAgeRangeoption7")}
        ></option>
        <option
          children="70-79"
          value="70-79"
          {...getOverrideProps(overrides, "SDoHAgeRangeoption8")}
        ></option>
        <option
          children="80-89"
          value="80-89"
          {...getOverrideProps(overrides, "SDoHAgeRangeoption9")}
        ></option>
        <option
          children="90-99"
          value="90-99"
          {...getOverrideProps(overrides, "SDoHAgeRangeoption10")}
        ></option>
        <option
          children="100+"
          value="100+"
          {...getOverrideProps(overrides, "SDoHAgeRangeoption11")}
        ></option>
      </SelectField>
      <SelectField
        label="I Identify As:"
        placeholder="Please select an option"
        isDisabled={false}
        value={SDoHRace}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace: value,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SDoHRace ?? value;
          }
          if (errors.SDoHRace?.hasError) {
            runValidationTasks("SDoHRace", value);
          }
          setSDoHRace(value);
        }}
        onBlur={() => runValidationTasks("SDoHRace", SDoHRace)}
        errorMessage={errors.SDoHRace?.errorMessage}
        hasError={errors.SDoHRace?.hasError}
        {...getOverrideProps(overrides, "SDoHRace")}
      >
        <option
          children="Black"
          value="Black"
          {...getOverrideProps(overrides, "SDoHRaceoption0")}
        ></option>
        <option
          children="Brown"
          value="Brown"
          {...getOverrideProps(overrides, "SDoHRaceoption1")}
        ></option>
        <option
          children="White"
          value="White"
          {...getOverrideProps(overrides, "SDoHRaceoption2")}
        ></option>
        <option
          children="I Choose Not to Respond"
          value="I Choose Not to Respond"
          {...getOverrideProps(overrides, "SDoHRaceoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="What is your primary nationality/geographic region? (Nationality/geographic region is defined as place of birth or primary citizenship). "
        placeholder="Please select an option"
        isDisabled={false}
        value={SDoHGeographicRegion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion: value,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SDoHGeographicRegion ?? value;
          }
          if (errors.SDoHGeographicRegion?.hasError) {
            runValidationTasks("SDoHGeographicRegion", value);
          }
          setSDoHGeographicRegion(value);
        }}
        onBlur={() =>
          runValidationTasks("SDoHGeographicRegion", SDoHGeographicRegion)
        }
        errorMessage={errors.SDoHGeographicRegion?.errorMessage}
        hasError={errors.SDoHGeographicRegion?.hasError}
        {...getOverrideProps(overrides, "SDoHGeographicRegion")}
      >
        <option
          children="Africa"
          value="Africa"
          {...getOverrideProps(overrides, "SDoHGeographicRegionoption0")}
        ></option>
        <option
          children="Asia       "
          value="Asia       "
          {...getOverrideProps(overrides, "SDoHGeographicRegionoption1")}
        ></option>
        <option
          children="Australia"
          value="Australia"
          {...getOverrideProps(overrides, "SDoHGeographicRegionoption2")}
        ></option>
        <option
          children="Canada"
          value="Canada"
          {...getOverrideProps(overrides, "SDoHGeographicRegionoption3")}
        ></option>
        <option
          children="Europe"
          value="Europe"
          {...getOverrideProps(overrides, "SDoHGeographicRegionoption4")}
        ></option>
        <option
          children="Middle East"
          value="Middle East"
          {...getOverrideProps(overrides, "SDoHGeographicRegionoption5")}
        ></option>
        <option
          children="Russia"
          value="Russia"
          {...getOverrideProps(overrides, "SDoHGeographicRegionoption6")}
        ></option>
        <option
          children="South America"
          value="South America"
          {...getOverrideProps(overrides, "SDoHGeographicRegionoption7")}
        ></option>
        <option
          children="United States"
          value="United States"
          {...getOverrideProps(overrides, "SDoHGeographicRegionoption8")}
        ></option>
        <option
          children="I Don’t Know"
          value="I Don’t Know"
          {...getOverrideProps(overrides, "SDoHGeographicRegionoption9")}
        ></option>
      </SelectField>
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId: value,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.userId ?? value;
          }
          if (errors.userId?.hasError) {
            runValidationTasks("userId", value);
          }
          setUserId(value);
        }}
        onBlur={() => runValidationTasks("userId", userId)}
        errorMessage={errors.userId?.errorMessage}
        hasError={errors.userId?.hasError}
        {...getOverrideProps(overrides, "userId")}
      ></TextField>
      <SelectField
        label="What is your primary ethnicity? (Ethnicity is defined as cultural identity. This list includes larger populated ethnicities from each region and is not an exhaustive list. If you believe an ethnicity should be listed that isn’t or if an ethnicity that's listed isn't applicable to you, please select “other” and state the ethnicity.)"
        placeholder="Please select an option"
        isDisabled={false}
        value={SDoHEthnicity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity: value,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SDoHEthnicity ?? value;
          }
          if (errors.SDoHEthnicity?.hasError) {
            runValidationTasks("SDoHEthnicity", value);
          }
          setSDoHEthnicity(value);
        }}
        onBlur={() => runValidationTasks("SDoHEthnicity", SDoHEthnicity)}
        errorMessage={errors.SDoHEthnicity?.errorMessage}
        hasError={errors.SDoHEthnicity?.hasError}
        {...getOverrideProps(overrides, "SDoHEthnicity")}
      >
        <option
          children="Alaskan"
          value="Alaskan"
          {...getOverrideProps(overrides, "SDoHEthnicityoption0")}
        ></option>
        <option
          children="Algerian"
          value="Algerian"
          {...getOverrideProps(overrides, "SDoHEthnicityoption1")}
        ></option>
        <option
          children="American "
          value="American "
          {...getOverrideProps(overrides, "SDoHEthnicityoption2")}
        ></option>
        <option
          children="Apache "
          value="Apache "
          {...getOverrideProps(overrides, "SDoHEthnicityoption3")}
        ></option>
        <option
          children="Argentinian"
          value="Argentinian"
          {...getOverrideProps(overrides, "SDoHEthnicityoption4")}
        ></option>
        <option
          children="Barbadian"
          value="Barbadian"
          {...getOverrideProps(overrides, "SDoHEthnicityoption5")}
        ></option>
        <option
          children="Brazilian"
          value="Brazilian"
          {...getOverrideProps(overrides, "SDoHEthnicityoption6")}
        ></option>
        <option
          children="Cambodian "
          value="Cambodian "
          {...getOverrideProps(overrides, "SDoHEthnicityoption7")}
        ></option>
        <option
          children="Canadian"
          value="Canadian"
          {...getOverrideProps(overrides, "SDoHEthnicityoption8")}
        ></option>
        <option
          children="Caribbean"
          value="Caribbean"
          {...getOverrideProps(overrides, "SDoHEthnicityoption9")}
        ></option>
        <option
          children="Chamorros   "
          value="Chamorros   "
          {...getOverrideProps(overrides, "SDoHEthnicityoption10")}
        ></option>
        <option
          children="Cherokee  "
          value="Cherokee  "
          {...getOverrideProps(overrides, "SDoHEthnicityoption11")}
        ></option>
        <option
          children="Chinese&#x9;"
          value="Chinese&#x9;"
          {...getOverrideProps(overrides, "SDoHEthnicityoption12")}
        ></option>
        <option
          children="Choctaw  "
          value="Choctaw  "
          {...getOverrideProps(overrides, "SDoHEthnicityoption13")}
        ></option>
        <option
          children="Columbian"
          value="Columbian"
          {...getOverrideProps(overrides, "SDoHEthnicityoption14")}
        ></option>
        <option
          children="Cuban "
          value="Cuban "
          {...getOverrideProps(overrides, "SDoHEthnicityoption15")}
        ></option>
        <option
          children="Dominican  "
          value="Dominican  "
          {...getOverrideProps(overrides, "SDoHEthnicityoption16")}
        ></option>
        <option
          children="Dutch"
          value="Dutch"
          {...getOverrideProps(overrides, "SDoHEthnicityoption17")}
        ></option>
        <option
          children="Ecuadorian"
          value="Ecuadorian"
          {...getOverrideProps(overrides, "SDoHEthnicityoption18")}
        ></option>
        <option
          children="Egyptian "
          value="Egyptian "
          {...getOverrideProps(overrides, "SDoHEthnicityoption19")}
        ></option>
        <option
          children="English   "
          value="English   "
          {...getOverrideProps(overrides, "SDoHEthnicityoption20")}
        ></option>
        <option
          children="Ethiopian"
          value="Ethiopian"
          {...getOverrideProps(overrides, "SDoHEthnicityoption21")}
        ></option>
        <option
          children="Fijians "
          value="Fijians "
          {...getOverrideProps(overrides, "SDoHEthnicityoption22")}
        ></option>
        <option
          children="Filipino  "
          value="Filipino  "
          {...getOverrideProps(overrides, "SDoHEthnicityoption23")}
        ></option>
        <option
          children="French  "
          value="French  "
          {...getOverrideProps(overrides, "SDoHEthnicityoption24")}
        ></option>
        <option
          children="German   "
          value="German   "
          {...getOverrideProps(overrides, "SDoHEthnicityoption25")}
        ></option>
        <option
          children="Ghanian "
          value="Ghanian "
          {...getOverrideProps(overrides, "SDoHEthnicityoption26")}
        ></option>
        <option
          children="Guatemalan "
          value="Guatemalan "
          {...getOverrideProps(overrides, "SDoHEthnicityoption27")}
        ></option>
        <option
          children="Haitian"
          value="Haitian"
          {...getOverrideProps(overrides, "SDoHEthnicityoption28")}
        ></option>
        <option
          children="Hawaiian  "
          value="Hawaiian  "
          {...getOverrideProps(overrides, "SDoHEthnicityoption29")}
        ></option>
        <option
          children="Indian   "
          value="Indian   "
          {...getOverrideProps(overrides, "SDoHEthnicityoption30")}
        ></option>
        <option
          children="Iranian "
          value="Iranian "
          {...getOverrideProps(overrides, "SDoHEthnicityoption31")}
        ></option>
        <option
          children="Iraqi"
          value="Iraqi"
          {...getOverrideProps(overrides, "SDoHEthnicityoption32")}
        ></option>
        <option
          children="Irish"
          value="Irish"
          {...getOverrideProps(overrides, "SDoHEthnicityoption33")}
        ></option>
        <option
          children="Israeli "
          value="Israeli "
          {...getOverrideProps(overrides, "SDoHEthnicityoption34")}
        ></option>
        <option
          children="Italian   "
          value="Italian   "
          {...getOverrideProps(overrides, "SDoHEthnicityoption35")}
        ></option>
        <option
          children="Jamaican "
          value="Jamaican "
          {...getOverrideProps(overrides, "SDoHEthnicityoption36")}
        ></option>
        <option
          children="Japanese  "
          value="Japanese  "
          {...getOverrideProps(overrides, "SDoHEthnicityoption37")}
        ></option>
        <option
          children="Kanaka Maoli   "
          value="Kanaka Maoli   "
          {...getOverrideProps(overrides, "SDoHEthnicityoption38")}
        ></option>
        <option
          children="Korean&#x9;"
          value="Korean&#x9;"
          {...getOverrideProps(overrides, "SDoHEthnicityoption39")}
        ></option>
        <option
          children="Kurdish"
          value="Kurdish"
          {...getOverrideProps(overrides, "SDoHEthnicityoption40")}
        ></option>
        <option
          children="Lebanese "
          value="Lebanese "
          {...getOverrideProps(overrides, "SDoHEthnicityoption41")}
        ></option>
        <option
          children="Lumbee "
          value="Lumbee "
          {...getOverrideProps(overrides, "SDoHEthnicityoption42")}
        ></option>
        <option
          children="Mexican"
          value="Mexican"
          {...getOverrideProps(overrides, "SDoHEthnicityoption43")}
        ></option>
        <option
          children="Moroccan "
          value="Moroccan "
          {...getOverrideProps(overrides, "SDoHEthnicityoption44")}
        ></option>
        <option
          children="Native"
          value="Native"
          {...getOverrideProps(overrides, "SDoHEthnicityoption45")}
        ></option>
        <option
          children="Navajo  "
          value="Navajo  "
          {...getOverrideProps(overrides, "SDoHEthnicityoption46")}
        ></option>
        <option
          children="Nigerian&#x9;"
          value="Nigerian&#x9;"
          {...getOverrideProps(overrides, "SDoHEthnicityoption47")}
        ></option>
        <option
          children="Norwegian "
          value="Norwegian "
          {...getOverrideProps(overrides, "SDoHEthnicityoption48")}
        ></option>
        <option
          children="Ojibwe "
          value="Ojibwe "
          {...getOverrideProps(overrides, "SDoHEthnicityoption49")}
        ></option>
        <option
          children="Polish    "
          value="Polish    "
          {...getOverrideProps(overrides, "SDoHEthnicityoption50")}
        ></option>
        <option
          children="Pueblo Sioux "
          value="Pueblo Sioux "
          {...getOverrideProps(overrides, "SDoHEthnicityoption51")}
        ></option>
        <option
          children="Puerto Rican "
          value="Puerto Rican "
          {...getOverrideProps(overrides, "SDoHEthnicityoption52")}
        ></option>
        <option
          children="Rapanui  "
          value="Rapanui  "
          {...getOverrideProps(overrides, "SDoHEthnicityoption53")}
        ></option>
        <option
          children="Russian&#x9;  "
          value="Russian&#x9;  "
          {...getOverrideProps(overrides, "SDoHEthnicityoption54")}
        ></option>
        <option
          children="Salvadoran"
          value="Salvadoran"
          {...getOverrideProps(overrides, "SDoHEthnicityoption55")}
        ></option>
        <option
          children="Samoan "
          value="Samoan "
          {...getOverrideProps(overrides, "SDoHEthnicityoption56")}
        ></option>
        <option
          children="Somalian"
          value="Somalian"
          {...getOverrideProps(overrides, "SDoHEthnicityoption57")}
        ></option>
        <option
          children="South African"
          value="South African"
          {...getOverrideProps(overrides, "SDoHEthnicityoption58")}
        ></option>
        <option
          children="Spaniard"
          value="Spaniard"
          {...getOverrideProps(overrides, "SDoHEthnicityoption59")}
        ></option>
        <option
          children="Sun'aq  "
          value="Sun'aq  "
          {...getOverrideProps(overrides, "SDoHEthnicityoption60")}
        ></option>
        <option
          children="Syrian  "
          value="Syrian  "
          {...getOverrideProps(overrides, "SDoHEthnicityoption61")}
        ></option>
        <option
          children="Tahitians "
          value="Tahitians "
          {...getOverrideProps(overrides, "SDoHEthnicityoption62")}
        ></option>
        <option
          children="Taiwanese"
          value="Taiwanese"
          {...getOverrideProps(overrides, "SDoHEthnicityoption63")}
        ></option>
        <option
          children="Tibetan "
          value="Tibetan "
          {...getOverrideProps(overrides, "SDoHEthnicityoption64")}
        ></option>
        <option
          children="Tokelau  "
          value="Tokelau  "
          {...getOverrideProps(overrides, "SDoHEthnicityoption65")}
        ></option>
        <option
          children="Tongan "
          value="Tongan "
          {...getOverrideProps(overrides, "SDoHEthnicityoption66")}
        ></option>
        <option
          children="Vietnamese "
          value="Vietnamese "
          {...getOverrideProps(overrides, "SDoHEthnicityoption67")}
        ></option>
        <option
          children="I Don’t Know"
          value="I Don’t Know"
          {...getOverrideProps(overrides, "SDoHEthnicityoption68")}
        ></option>
        <option
          children="Other"
          value="Other"
          {...getOverrideProps(overrides, "SDoHEthnicityoption69")}
        ></option>
        <option
          children="Mixed (Defined as one parent from one primary ethnicity and another parent from a different primary ethnicity)."
          value="Mixed (Defined as one parent from one primary ethnicity and another parent from a different primary ethnicity)."
          {...getOverrideProps(overrides, "SDoHEthnicityoption70")}
        ></option>
      </SelectField>
      <SelectField
        label="State"
        placeholder="Please select an option"
        isDisabled={false}
        value={SDoHState}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState: value,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SDoHState ?? value;
          }
          if (errors.SDoHState?.hasError) {
            runValidationTasks("SDoHState", value);
          }
          setSDoHState(value);
        }}
        onBlur={() => runValidationTasks("SDoHState", SDoHState)}
        errorMessage={errors.SDoHState?.errorMessage}
        hasError={errors.SDoHState?.hasError}
        {...getOverrideProps(overrides, "SDoHState")}
      >
        <option
          children="Alabama"
          value="Alabama"
          {...getOverrideProps(overrides, "SDoHStateoption0")}
        ></option>
        <option
          children="Alaska"
          value="Alaska"
          {...getOverrideProps(overrides, "SDoHStateoption1")}
        ></option>
        <option
          children="Arizona"
          value="Arizona"
          {...getOverrideProps(overrides, "SDoHStateoption2")}
        ></option>
        <option
          children="Arkansas"
          value="Arkansas"
          {...getOverrideProps(overrides, "SDoHStateoption3")}
        ></option>
        <option
          children="California"
          value="California"
          {...getOverrideProps(overrides, "SDoHStateoption4")}
        ></option>
        <option
          children="Colorado"
          value="Colorado"
          {...getOverrideProps(overrides, "SDoHStateoption5")}
        ></option>
        <option
          children="Connecticut"
          value="Connecticut"
          {...getOverrideProps(overrides, "SDoHStateoption6")}
        ></option>
        <option
          children="Delaware"
          value="Delaware"
          {...getOverrideProps(overrides, "SDoHStateoption7")}
        ></option>
        <option
          children="Florida"
          value="Florida"
          {...getOverrideProps(overrides, "SDoHStateoption8")}
        ></option>
        <option
          children="Georgia"
          value="Georgia"
          {...getOverrideProps(overrides, "SDoHStateoption9")}
        ></option>
        <option
          children="Hawaii"
          value="Hawaii"
          {...getOverrideProps(overrides, "SDoHStateoption10")}
        ></option>
        <option
          children="Idaho"
          value="Idaho"
          {...getOverrideProps(overrides, "SDoHStateoption11")}
        ></option>
        <option
          children="Illinois"
          value="Illinois"
          {...getOverrideProps(overrides, "SDoHStateoption12")}
        ></option>
        <option
          children="Indiana"
          value="Indiana"
          {...getOverrideProps(overrides, "SDoHStateoption13")}
        ></option>
        <option
          children="Iowa"
          value="Iowa"
          {...getOverrideProps(overrides, "SDoHStateoption14")}
        ></option>
        <option
          children="Kansas"
          value="Kansas"
          {...getOverrideProps(overrides, "SDoHStateoption15")}
        ></option>
        <option
          children="Kentucky"
          value="Kentucky"
          {...getOverrideProps(overrides, "SDoHStateoption16")}
        ></option>
        <option
          children="Louisiana"
          value="Louisiana"
          {...getOverrideProps(overrides, "SDoHStateoption17")}
        ></option>
        <option
          children="Maine"
          value="Maine"
          {...getOverrideProps(overrides, "SDoHStateoption18")}
        ></option>
        <option
          children="Maryland"
          value="Maryland"
          {...getOverrideProps(overrides, "SDoHStateoption19")}
        ></option>
        <option
          children="Massachusetts"
          value="Massachusetts"
          {...getOverrideProps(overrides, "SDoHStateoption20")}
        ></option>
        <option
          children="Michigan"
          value="Michigan"
          {...getOverrideProps(overrides, "SDoHStateoption21")}
        ></option>
        <option
          children="Minnesota"
          value="Minnesota"
          {...getOverrideProps(overrides, "SDoHStateoption22")}
        ></option>
        <option
          children="Mississippi"
          value="Mississippi"
          {...getOverrideProps(overrides, "SDoHStateoption23")}
        ></option>
        <option
          children="Missouri"
          value="Missouri"
          {...getOverrideProps(overrides, "SDoHStateoption24")}
        ></option>
        <option
          children="Montana"
          value="Montana"
          {...getOverrideProps(overrides, "SDoHStateoption25")}
        ></option>
        <option
          children="Nebraska"
          value="Nebraska"
          {...getOverrideProps(overrides, "SDoHStateoption26")}
        ></option>
        <option
          children="Nevada"
          value="Nevada"
          {...getOverrideProps(overrides, "SDoHStateoption27")}
        ></option>
        <option
          children="New Hampshire"
          value="New Hampshire"
          {...getOverrideProps(overrides, "SDoHStateoption28")}
        ></option>
        <option
          children="New Jersey"
          value="New Jersey"
          {...getOverrideProps(overrides, "SDoHStateoption29")}
        ></option>
        <option
          children="New Mexico"
          value="New Mexico"
          {...getOverrideProps(overrides, "SDoHStateoption30")}
        ></option>
        <option
          children="New York"
          value="New York"
          {...getOverrideProps(overrides, "SDoHStateoption31")}
        ></option>
        <option
          children="North Carolina"
          value="North Carolina"
          {...getOverrideProps(overrides, "SDoHStateoption32")}
        ></option>
        <option
          children="North Dakota"
          value="North Dakota"
          {...getOverrideProps(overrides, "SDoHStateoption33")}
        ></option>
        <option
          children="Ohio"
          value="Ohio"
          {...getOverrideProps(overrides, "SDoHStateoption34")}
        ></option>
        <option
          children="Oklahoma"
          value="Oklahoma"
          {...getOverrideProps(overrides, "SDoHStateoption35")}
        ></option>
        <option
          children="Oregon"
          value="Oregon"
          {...getOverrideProps(overrides, "SDoHStateoption36")}
        ></option>
        <option
          children="Pennsylvania"
          value="Pennsylvania"
          {...getOverrideProps(overrides, "SDoHStateoption37")}
        ></option>
        <option
          children="Rhode Island"
          value="Rhode Island"
          {...getOverrideProps(overrides, "SDoHStateoption38")}
        ></option>
        <option
          children="South Carolina"
          value="South Carolina"
          {...getOverrideProps(overrides, "SDoHStateoption39")}
        ></option>
        <option
          children="South Dakota"
          value="South Dakota"
          {...getOverrideProps(overrides, "SDoHStateoption40")}
        ></option>
        <option
          children="Tennessee"
          value="Tennessee"
          {...getOverrideProps(overrides, "SDoHStateoption41")}
        ></option>
        <option
          children="Texas"
          value="Texas"
          {...getOverrideProps(overrides, "SDoHStateoption42")}
        ></option>
        <option
          children="Utah"
          value="Utah"
          {...getOverrideProps(overrides, "SDoHStateoption43")}
        ></option>
        <option
          children="Vermont"
          value="Vermont"
          {...getOverrideProps(overrides, "SDoHStateoption44")}
        ></option>
        <option
          children="Virginia"
          value="Virginia"
          {...getOverrideProps(overrides, "SDoHStateoption45")}
        ></option>
        <option
          children="Washington"
          value="Washington"
          {...getOverrideProps(overrides, "SDoHStateoption46")}
        ></option>
        <option
          children="West Virginia"
          value="West Virginia"
          {...getOverrideProps(overrides, "SDoHStateoption47")}
        ></option>
        <option
          children="Wisconsin"
          value="Wisconsin"
          {...getOverrideProps(overrides, "SDoHStateoption48")}
        ></option>
        <option
          children="Wyoming"
          value="Wyoming"
          {...getOverrideProps(overrides, "SDoHStateoption49")}
        ></option>
        <option
          children="N/A"
          value="N/A"
          {...getOverrideProps(overrides, "SDoHStateoption50")}
        ></option>
      </SelectField>
      <TextField
        label="Zip Code"
        isRequired={false}
        isReadOnly={false}
        value={SDoHZipCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode: value,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SDoHZipCode ?? value;
          }
          if (errors.SDoHZipCode?.hasError) {
            runValidationTasks("SDoHZipCode", value);
          }
          setSDoHZipCode(value);
        }}
        onBlur={() => runValidationTasks("SDoHZipCode", SDoHZipCode)}
        errorMessage={errors.SDoHZipCode?.errorMessage}
        hasError={errors.SDoHZipCode?.hasError}
        {...getOverrideProps(overrides, "SDoHZipCode")}
      ></TextField>
      <SelectField
        label="Marital Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={SDoHMaritalStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus: value,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SDoHMaritalStatus ?? value;
          }
          if (errors.SDoHMaritalStatus?.hasError) {
            runValidationTasks("SDoHMaritalStatus", value);
          }
          setSDoHMaritalStatus(value);
        }}
        onBlur={() =>
          runValidationTasks("SDoHMaritalStatus", SDoHMaritalStatus)
        }
        errorMessage={errors.SDoHMaritalStatus?.errorMessage}
        hasError={errors.SDoHMaritalStatus?.hasError}
        {...getOverrideProps(overrides, "SDoHMaritalStatus")}
      >
        <option
          children="Single"
          value="Single"
          {...getOverrideProps(overrides, "SDoHMaritalStatusoption0")}
        ></option>
        <option
          children="Married"
          value="Married"
          {...getOverrideProps(overrides, "SDoHMaritalStatusoption1")}
        ></option>
        <option
          children="Divorced"
          value="Divorced"
          {...getOverrideProps(overrides, "SDoHMaritalStatusoption2")}
        ></option>
        <option
          children="Widowed"
          value="Widowed"
          {...getOverrideProps(overrides, "SDoHMaritalStatusoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Military Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={SDoHMilitaryStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus: value,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SDoHMilitaryStatus ?? value;
          }
          if (errors.SDoHMilitaryStatus?.hasError) {
            runValidationTasks("SDoHMilitaryStatus", value);
          }
          setSDoHMilitaryStatus(value);
        }}
        onBlur={() =>
          runValidationTasks("SDoHMilitaryStatus", SDoHMilitaryStatus)
        }
        errorMessage={errors.SDoHMilitaryStatus?.errorMessage}
        hasError={errors.SDoHMilitaryStatus?.hasError}
        {...getOverrideProps(overrides, "SDoHMilitaryStatus")}
      >
        <option
          children="Active"
          value="Active"
          {...getOverrideProps(overrides, "SDoHMilitaryStatusoption0")}
        ></option>
        <option
          children="Discharged"
          value="Discharged"
          {...getOverrideProps(overrides, "SDoHMilitaryStatusoption1")}
        ></option>
        <option
          children="Veteran"
          value="Veteran"
          {...getOverrideProps(overrides, "SDoHMilitaryStatusoption2")}
        ></option>
        <option
          children="Not Applicable"
          value="Not Applicable"
          {...getOverrideProps(overrides, "SDoHMilitaryStatusoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="I Identify As:"
        placeholder="Please select an option"
        isDisabled={false}
        value={SDoHGender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender: value,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SDoHGender ?? value;
          }
          if (errors.SDoHGender?.hasError) {
            runValidationTasks("SDoHGender", value);
          }
          setSDoHGender(value);
        }}
        onBlur={() => runValidationTasks("SDoHGender", SDoHGender)}
        errorMessage={errors.SDoHGender?.errorMessage}
        hasError={errors.SDoHGender?.hasError}
        {...getOverrideProps(overrides, "SDoHGender")}
      >
        <option
          children="A male born as male"
          value="A male born as male"
          {...getOverrideProps(overrides, "SDoHGenderoption0")}
        ></option>
        <option
          children="A female born as female"
          value="A female born as female"
          {...getOverrideProps(overrides, "SDoHGenderoption1")}
        ></option>
        <option
          children="A male born as female"
          value="A male born as female"
          {...getOverrideProps(overrides, "SDoHGenderoption2")}
        ></option>
        <option
          children="A female born as male"
          value="A female born as male"
          {...getOverrideProps(overrides, "SDoHGenderoption3")}
        ></option>
        <option
          children="Other (please specify)"
          value="Other (please specify)"
          {...getOverrideProps(overrides, "SDoHGenderoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Education"
        placeholder="Please select an option"
        isDisabled={false}
        value={SDoHEducation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation: value,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SDoHEducation ?? value;
          }
          if (errors.SDoHEducation?.hasError) {
            runValidationTasks("SDoHEducation", value);
          }
          setSDoHEducation(value);
        }}
        onBlur={() => runValidationTasks("SDoHEducation", SDoHEducation)}
        errorMessage={errors.SDoHEducation?.errorMessage}
        hasError={errors.SDoHEducation?.hasError}
        {...getOverrideProps(overrides, "SDoHEducation")}
      >
        <option
          children="No Diploma"
          value="No Diploma"
          {...getOverrideProps(overrides, "SDoHEducationoption0")}
        ></option>
        <option
          children="HS Diploma"
          value="HS Diploma"
          {...getOverrideProps(overrides, "SDoHEducationoption1")}
        ></option>
        <option
          children="Vocational"
          value="Vocational"
          {...getOverrideProps(overrides, "SDoHEducationoption2")}
        ></option>
        <option
          children="Bachelors"
          value="Bachelors"
          {...getOverrideProps(overrides, "SDoHEducationoption3")}
        ></option>
        <option
          children="Masters"
          value="Masters"
          {...getOverrideProps(overrides, "SDoHEducationoption4")}
        ></option>
        <option
          children="Doctorate"
          value="Doctorate"
          {...getOverrideProps(overrides, "SDoHEducationoption5")}
        ></option>
      </SelectField>
      <SelectField
        label="Job Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={SDoHJobStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus: value,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SDoHJobStatus ?? value;
          }
          if (errors.SDoHJobStatus?.hasError) {
            runValidationTasks("SDoHJobStatus", value);
          }
          setSDoHJobStatus(value);
        }}
        onBlur={() => runValidationTasks("SDoHJobStatus", SDoHJobStatus)}
        errorMessage={errors.SDoHJobStatus?.errorMessage}
        hasError={errors.SDoHJobStatus?.hasError}
        {...getOverrideProps(overrides, "SDoHJobStatus")}
      >
        <option
          children="Employed"
          value="Employed"
          {...getOverrideProps(overrides, "SDoHJobStatusoption0")}
        ></option>
        <option
          children="Unemployed"
          value="Unemployed"
          {...getOverrideProps(overrides, "SDoHJobStatusoption1")}
        ></option>
        <option
          children="Self Employed "
          value="Self Employed "
          {...getOverrideProps(overrides, "SDoHJobStatusoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Income"
        placeholder="Please select an option"
        isDisabled={false}
        value={SDoHIncome}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome: value,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SDoHIncome ?? value;
          }
          if (errors.SDoHIncome?.hasError) {
            runValidationTasks("SDoHIncome", value);
          }
          setSDoHIncome(value);
        }}
        onBlur={() => runValidationTasks("SDoHIncome", SDoHIncome)}
        errorMessage={errors.SDoHIncome?.errorMessage}
        hasError={errors.SDoHIncome?.hasError}
        {...getOverrideProps(overrides, "SDoHIncome")}
      >
        <option
          children="$0-$20K"
          value="$0-$20K"
          {...getOverrideProps(overrides, "SDoHIncomeoption0")}
        ></option>
        <option
          children="$21K-$40K"
          value="$21K-$40K"
          {...getOverrideProps(overrides, "SDoHIncomeoption1")}
        ></option>
        <option
          children="$41K-$70K"
          value="$41K-$70K"
          {...getOverrideProps(overrides, "SDoHIncomeoption2")}
        ></option>
        <option
          children="$71K-100K"
          value="$71K-100K"
          {...getOverrideProps(overrides, "SDoHIncomeoption3")}
        ></option>
        <option
          children="$101K +"
          value="$101K +"
          {...getOverrideProps(overrides, "SDoHIncomeoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Housing Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={SDoHHousingStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus: value,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SDoHHousingStatus ?? value;
          }
          if (errors.SDoHHousingStatus?.hasError) {
            runValidationTasks("SDoHHousingStatus", value);
          }
          setSDoHHousingStatus(value);
        }}
        onBlur={() =>
          runValidationTasks("SDoHHousingStatus", SDoHHousingStatus)
        }
        errorMessage={errors.SDoHHousingStatus?.errorMessage}
        hasError={errors.SDoHHousingStatus?.hasError}
        {...getOverrideProps(overrides, "SDoHHousingStatus")}
      >
        <option
          children="Rent/Own"
          value="Rent/Own"
          {...getOverrideProps(overrides, "SDoHHousingStatusoption0")}
        ></option>
        <option
          children="Homeless"
          value="Homeless"
          {...getOverrideProps(overrides, "SDoHHousingStatusoption1")}
        ></option>
        <option
          children="Friend"
          value="Friend"
          {...getOverrideProps(overrides, "SDoHHousingStatusoption2")}
        ></option>
        <option
          children="Family"
          value="Family"
          {...getOverrideProps(overrides, "SDoHHousingStatusoption3")}
        ></option>
        <option
          children="Shelter"
          value="Shelter"
          {...getOverrideProps(overrides, "SDoHHousingStatusoption4")}
        ></option>
        <option
          children="Prison/Jail"
          value="Prison/Jail"
          {...getOverrideProps(overrides, "SDoHHousingStatusoption5")}
        ></option>
        <option
          children="Other"
          value="Other"
          {...getOverrideProps(overrides, "SDoHHousingStatusoption6")}
        ></option>
      </SelectField>
      <SelectField
        label="What type of home did you grow up in?"
        placeholder="Please select an option"
        isDisabled={false}
        value={SDoHHomeAsChild}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild: value,
              SDoHReligion,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SDoHHomeAsChild ?? value;
          }
          if (errors.SDoHHomeAsChild?.hasError) {
            runValidationTasks("SDoHHomeAsChild", value);
          }
          setSDoHHomeAsChild(value);
        }}
        onBlur={() => runValidationTasks("SDoHHomeAsChild", SDoHHomeAsChild)}
        errorMessage={errors.SDoHHomeAsChild?.errorMessage}
        hasError={errors.SDoHHomeAsChild?.hasError}
        {...getOverrideProps(overrides, "SDoHHomeAsChild")}
      >
        <option
          children="2 Guardians/Parents"
          value="2 Guardians/Parents"
          {...getOverrideProps(overrides, "SDoHHomeAsChildoption0")}
        ></option>
        <option
          children="1 Guardian/Parent"
          value="1 Guardian/Parent"
          {...getOverrideProps(overrides, "SDoHHomeAsChildoption1")}
        ></option>
        <option
          children="Foster Care"
          value="Foster Care"
          {...getOverrideProps(overrides, "SDoHHomeAsChildoption2")}
        ></option>
        <option
          children="Varied/Unstable"
          value="Varied/Unstable"
          {...getOverrideProps(overrides, "SDoHHomeAsChildoption3")}
        ></option>
        <option
          children="Other"
          value="Other"
          {...getOverrideProps(overrides, "SDoHHomeAsChildoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Which religion provides you with strength and hope?"
        placeholder="Please select an option"
        isDisabled={false}
        value={SDoHReligion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion: value,
              SDoHDenomination,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SDoHReligion ?? value;
          }
          if (errors.SDoHReligion?.hasError) {
            runValidationTasks("SDoHReligion", value);
          }
          setSDoHReligion(value);
        }}
        onBlur={() => runValidationTasks("SDoHReligion", SDoHReligion)}
        errorMessage={errors.SDoHReligion?.errorMessage}
        hasError={errors.SDoHReligion?.hasError}
        {...getOverrideProps(overrides, "SDoHReligion")}
      >
        <option
          children="Buddhism"
          value="Buddhism"
          {...getOverrideProps(overrides, "SDoHReligionoption0")}
        ></option>
        <option
          children="Christianity"
          value="Christianity"
          {...getOverrideProps(overrides, "SDoHReligionoption1")}
        ></option>
        <option
          children="Hinduism"
          value="Hinduism"
          {...getOverrideProps(overrides, "SDoHReligionoption2")}
        ></option>
        <option
          children="Islam"
          value="Islam"
          {...getOverrideProps(overrides, "SDoHReligionoption3")}
        ></option>
        <option
          children="Judaism"
          value="Judaism"
          {...getOverrideProps(overrides, "SDoHReligionoption4")}
        ></option>
        <option
          children="None or N/A "
          value="None or N/A "
          {...getOverrideProps(overrides, "SDoHReligionoption5")}
        ></option>
      </SelectField>
      <SelectField
        label="Denomination"
        placeholder="Please select an option"
        isDisabled={false}
        value={SDoHDenomination}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination: value,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.SDoHDenomination ?? value;
          }
          if (errors.SDoHDenomination?.hasError) {
            runValidationTasks("SDoHDenomination", value);
          }
          setSDoHDenomination(value);
        }}
        onBlur={() => runValidationTasks("SDoHDenomination", SDoHDenomination)}
        errorMessage={errors.SDoHDenomination?.errorMessage}
        hasError={errors.SDoHDenomination?.hasError}
        {...getOverrideProps(overrides, "SDoHDenomination")}
      >
        <option
          children="Baptist "
          value="Baptist "
          {...getOverrideProps(overrides, "SDoHDenominationoption0")}
        ></option>
        <option
          children="Jehovah’s Witness "
          value="Jehovah’s Witness "
          {...getOverrideProps(overrides, "SDoHDenominationoption1")}
        ></option>
        <option
          children="Latter Day Saints "
          value="Latter Day Saints "
          {...getOverrideProps(overrides, "SDoHDenominationoption2")}
        ></option>
        <option
          children="Lutheran "
          value="Lutheran "
          {...getOverrideProps(overrides, "SDoHDenominationoption3")}
        ></option>
        <option
          children="Messianic Judaism "
          value="Messianic Judaism "
          {...getOverrideProps(overrides, "SDoHDenominationoption4")}
        ></option>
        <option
          children="Methodist "
          value="Methodist "
          {...getOverrideProps(overrides, "SDoHDenominationoption5")}
        ></option>
        <option
          children="Non-Denominational "
          value="Non-Denominational "
          {...getOverrideProps(overrides, "SDoHDenominationoption6")}
        ></option>
        <option
          children="Presbyterian "
          value="Presbyterian "
          {...getOverrideProps(overrides, "SDoHDenominationoption7")}
        ></option>
        <option
          children="Roman Catholic "
          value="Roman Catholic "
          {...getOverrideProps(overrides, "SDoHDenominationoption8")}
        ></option>
        <option
          children="Seventh Day Adventist "
          value="Seventh Day Adventist "
          {...getOverrideProps(overrides, "SDoHDenominationoption9")}
        ></option>
        <option
          children="Other"
          value="Other"
          {...getOverrideProps(overrides, "SDoHDenominationoption10")}
        ></option>
      </SelectField>
      <SwitchField
        label="Is active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isActive}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CompletedDate,
              CompletedTime,
              TRHurtfulNames,
              TRNoNurturing,
              TRHit,
              TRNeedsNotMet,
              TRForcedSex,
              TRResponsible,
              TRViolence,
              TRSubstanceAbuse,
              TRMentalIllness,
              TRParentDivorce,
              TRParentIncarcerated,
              TRHomelessness,
              TRBodyFunction,
              TRNaturalDisaster,
              TRDirectTerrorism,
              TRIndirectTerrorism,
              TRLovedOne,
              TRBelief,
              TRResponseProfessional,
              TRResponseFamilyFriend,
              TRResponseGod,
              TRResponseNoOne,
              TRNoTrauma,
              CMAlcohol,
              CMDrugs,
              CMOvereating,
              CMSmoking,
              CMGaming,
              CMShopping,
              CMGambling,
              CMSex,
              CMPorn,
              CMBlaming,
              CMHurting,
              CMDisengage,
              CMArt,
              CMMusic,
              CMPoetry,
              CMReading,
              CMGroups,
              CMCounseling,
              CMVenting,
              CMWriting,
              CMSensory,
              CMDancing,
              CMExercising,
              CMWalking,
              CMChange,
              CMAnalyze,
              CMDaydream,
              CMPositive,
              MHDxPTSD,
              MHDxDepression,
              MHDxSUD,
              MHDxOtherMental,
              MHSleeplessness,
              MHAlcoholUse,
              MHAnxiety,
              MHDepression,
              MHDrugUse,
              MHGrief,
              MHGuilt,
              MHIrritability,
              MHStress,
              MHRegret,
              MHSuicidalThoughts,
              MHLoneliness,
              MHWorry,
              PHDxInfertility,
              PHDxCurableSTD,
              PHDxIncurableSTD,
              PHDxCancer,
              PHDxDiabetes,
              PHDxHighBlood,
              PHDxHeartDisease,
              PHDxIrritableBowel,
              PHDxVitA,
              PHDxVitB,
              PHDxVitC,
              PHDxVitD,
              PHDxVitE,
              PHDxVitK,
              PHDxAutoimmune,
              PHDxOtherPhysical,
              PHVegeFruits,
              PHBeanLentils,
              PHGrainBreads,
              PHDairy,
              PHMeat,
              PHFishSeafood,
              PHSweets,
              PHWater,
              PHPhysicalActivity,
              SHSpiritualDefine,
              SHSpiritualIntegrate,
              SHPrayer,
              SHSpiritualActivity,
              SHReadText,
              SHAlignText,
              SHCommunity,
              OLHope,
              OLPeace,
              OLLearning,
              OLJoy,
              OLStable,
              OLSafety,
              OLKindness,
              OLForgiveness,
              OLPatience,
              OLRelationships,
              OLBoundaries,
              OLEUnpleasant,
              OLEPleasant,
              OLEControl,
              OLENumber,
              SDoHAgeRange,
              SDoHRace,
              SDoHGeographicRegion,
              userId,
              SDoHEthnicity,
              SDoHState,
              SDoHZipCode,
              SDoHMaritalStatus,
              SDoHMilitaryStatus,
              SDoHGender,
              SDoHEducation,
              SDoHJobStatus,
              SDoHIncome,
              SDoHHousingStatus,
              SDoHHomeAsChild,
              SDoHReligion,
              SDoHDenomination,
              isActive: value,
            };
            const result = onChange(modelFields);
            value = result?.isActive ?? value;
          }
          if (errors.isActive?.hasError) {
            runValidationTasks("isActive", value);
          }
          setIsActive(value);
        }}
        onBlur={() => runValidationTasks("isActive", isActive)}
        errorMessage={errors.isActive?.errorMessage}
        hasError={errors.isActive?.hasError}
        {...getOverrideProps(overrides, "isActive")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

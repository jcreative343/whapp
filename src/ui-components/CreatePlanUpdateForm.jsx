/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getCreatePlan } from "../graphql/queries";
import { updateCreatePlan } from "../graphql/mutations";
const client = generateClient();
export default function CreatePlanUpdateForm(props) {
  const {
    id: idProp,
    createPlan: createPlanModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userId: "",
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
    BRResponseNote: "",
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
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [PSProblemSolving, setPSProblemSolving] = React.useState(
    initialValues.PSProblemSolving
  );
  const [PSSelfEsteem, setPSSelfEsteem] = React.useState(
    initialValues.PSSelfEsteem
  );
  const [PSChoiceAutonomy, setPSChoiceAutonomy] = React.useState(
    initialValues.PSChoiceAutonomy
  );
  const [PSSelfCare, setPSSelfCare] = React.useState(initialValues.PSSelfCare);
  const [PSSelfAwareness, setPSSelfAwareness] = React.useState(
    initialValues.PSSelfAwareness
  );
  const [PSCreativity, setPSCreativity] = React.useState(
    initialValues.PSCreativity
  );
  const [CSForgiveness, setCSForgiveness] = React.useState(
    initialValues.CSForgiveness
  );
  const [CSKindness, setCSKindness] = React.useState(initialValues.CSKindness);
  const [CSGratitude, setCSGratitude] = React.useState(
    initialValues.CSGratitude
  );
  const [CSPatience, setCSPatience] = React.useState(initialValues.CSPatience);
  const [CSCourage, setCSCourage] = React.useState(initialValues.CSCourage);
  const [CMSCopingChoice, setCMSCopingChoice] = React.useState(
    initialValues.CMSCopingChoice
  );
  const [CMSResilience, setCMSResilience] = React.useState(
    initialValues.CMSResilience
  );
  const [CMSSelfRegulation, setCMSSelfRegulation] = React.useState(
    initialValues.CMSSelfRegulation
  );
  const [CMSOptimism, setCMSOptimism] = React.useState(
    initialValues.CMSOptimism
  );
  const [COMSupportSystem, setCOMSupportSystem] = React.useState(
    initialValues.COMSupportSystem
  );
  const [COMSocialIntelligence, setCOMSocialIntelligence] = React.useState(
    initialValues.COMSocialIntelligence
  );
  const [COMCommunication, setCOMCommunication] = React.useState(
    initialValues.COMCommunication
  );
  const [COMFaithCommunity, setCOMFaithCommunity] = React.useState(
    initialValues.COMFaithCommunity
  );
  const [COMAccomplishments, setCOMAccomplishments] = React.useState(
    initialValues.COMAccomplishments
  );
  const [BRStableHousing, setBRStableHousing] = React.useState(
    initialValues.BRStableHousing
  );
  const [BRQualityHealthcare, setBRQualityHealthcare] = React.useState(
    initialValues.BRQualityHealthcare
  );
  const [BRProfessionalAccess, setBRProfessionalAccess] = React.useState(
    initialValues.BRProfessionalAccess
  );
  const [BRInsuranceCoverage, setBRInsuranceCoverage] = React.useState(
    initialValues.BRInsuranceCoverage
  );
  const [BRFinancialConstraints, setBRFinancialConstraints] = React.useState(
    initialValues.BRFinancialConstraints
  );
  const [BREducationAttainment, setBREducationAttainment] = React.useState(
    initialValues.BREducationAttainment
  );
  const [BRSocialStigma, setBRSocialStigma] = React.useState(
    initialValues.BRSocialStigma
  );
  const [BRUnsupportiveCommunity, setBRUnsupportiveCommunity] = React.useState(
    initialValues.BRUnsupportiveCommunity
  );
  const [BRNonexistentCommunity, setBRNonexistentCommunity] = React.useState(
    initialValues.BRNonexistentCommunity
  );
  const [BRCommunityResources, setBRCommunityResources] = React.useState(
    initialValues.BRCommunityResources
  );
  const [BRProfessionalTrust, setBRProfessionalTrust] = React.useState(
    initialValues.BRProfessionalTrust
  );
  const [BRHealthcareSystemTrust, setBRHealthcareSystemTrust] = React.useState(
    initialValues.BRHealthcareSystemTrust
  );
  const [BRCognitiveImpairments, setBRCognitiveImpairments] = React.useState(
    initialValues.BRCognitiveImpairments
  );
  const [BRDependentCare, setBRDependentCare] = React.useState(
    initialValues.BRDependentCare
  );
  const [BRTransportation, setBRTransportation] = React.useState(
    initialValues.BRTransportation
  );
  const [BRTechnologyAccess, setBRTechnologyAccess] = React.useState(
    initialValues.BRTechnologyAccess
  );
  const [BRLanguage, setBRLanguage] = React.useState(initialValues.BRLanguage);
  const [BRHealthcareProcess, setBRHealthcareProcess] = React.useState(
    initialValues.BRHealthcareProcess
  );
  const [BROther, setBROther] = React.useState(initialValues.BROther);
  const [BRResponseNote, setBRResponseNote] = React.useState(
    initialValues.BRResponseNote
  );
  const [TGBetrayal, setTGBetrayal] = React.useState(initialValues.TGBetrayal);
  const [TGBoundaries, setTGBoundaries] = React.useState(
    initialValues.TGBoundaries
  );
  const [TGDisorder, setTGDisorder] = React.useState(initialValues.TGDisorder);
  const [TGPain, setTGPain] = React.useState(initialValues.TGPain);
  const [TGRejection, setTGRejection] = React.useState(
    initialValues.TGRejection
  );
  const [TGStress, setTGStress] = React.useState(initialValues.TGStress);
  const [TGMemories, setTGMemories] = React.useState(initialValues.TGMemories);
  const [TGUnjustTreatment, setTGUnjustTreatment] = React.useState(
    initialValues.TGUnjustTreatment
  );
  const [TGUnpleasantConversations, setTGUnpleasantConversations] =
    React.useState(initialValues.TGUnpleasantConversations);
  const [TGUnsafeEnvironments, setTGUnsafeEnvironments] = React.useState(
    initialValues.TGUnsafeEnvironments
  );
  const [TGOther, setTGOther] = React.useState(initialValues.TGOther);
  const [WSFlashbacks, setWSFlashbacks] = React.useState(
    initialValues.WSFlashbacks
  );
  const [WSIncreasedAppetite, setWSIncreasedAppetite] = React.useState(
    initialValues.WSIncreasedAppetite
  );
  const [WSDecreasedAppetite, setWSDecreasedAppetite] = React.useState(
    initialValues.WSDecreasedAppetite
  );
  const [WSIntenseEmotions, setWSIntenseEmotions] = React.useState(
    initialValues.WSIntenseEmotions
  );
  const [WSDisconnecting, setWSDisconnecting] = React.useState(
    initialValues.WSDisconnecting
  );
  const [WSTime, setWSTime] = React.useState(initialValues.WSTime);
  const [WSNegativeSelfTalk, setWSNegativeSelfTalk] = React.useState(
    initialValues.WSNegativeSelfTalk
  );
  const [WSNeglectingSelfCare, setWSNeglectingSelfCare] = React.useState(
    initialValues.WSNeglectingSelfCare
  );
  const [WSNightmares, setWSNightmares] = React.useState(
    initialValues.WSNightmares
  );
  const [WSRecklessBehavior, setWSRecklessBehavior] = React.useState(
    initialValues.WSRecklessBehavior
  );
  const [WSOther, setWSOther] = React.useState(initialValues.WSOther);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = createPlanRecord
      ? { ...initialValues, ...createPlanRecord }
      : initialValues;
    setUserId(cleanValues.userId);
    setPSProblemSolving(cleanValues.PSProblemSolving);
    setPSSelfEsteem(cleanValues.PSSelfEsteem);
    setPSChoiceAutonomy(cleanValues.PSChoiceAutonomy);
    setPSSelfCare(cleanValues.PSSelfCare);
    setPSSelfAwareness(cleanValues.PSSelfAwareness);
    setPSCreativity(cleanValues.PSCreativity);
    setCSForgiveness(cleanValues.CSForgiveness);
    setCSKindness(cleanValues.CSKindness);
    setCSGratitude(cleanValues.CSGratitude);
    setCSPatience(cleanValues.CSPatience);
    setCSCourage(cleanValues.CSCourage);
    setCMSCopingChoice(cleanValues.CMSCopingChoice);
    setCMSResilience(cleanValues.CMSResilience);
    setCMSSelfRegulation(cleanValues.CMSSelfRegulation);
    setCMSOptimism(cleanValues.CMSOptimism);
    setCOMSupportSystem(cleanValues.COMSupportSystem);
    setCOMSocialIntelligence(cleanValues.COMSocialIntelligence);
    setCOMCommunication(cleanValues.COMCommunication);
    setCOMFaithCommunity(cleanValues.COMFaithCommunity);
    setCOMAccomplishments(cleanValues.COMAccomplishments);
    setBRStableHousing(cleanValues.BRStableHousing);
    setBRQualityHealthcare(cleanValues.BRQualityHealthcare);
    setBRProfessionalAccess(cleanValues.BRProfessionalAccess);
    setBRInsuranceCoverage(cleanValues.BRInsuranceCoverage);
    setBRFinancialConstraints(cleanValues.BRFinancialConstraints);
    setBREducationAttainment(cleanValues.BREducationAttainment);
    setBRSocialStigma(cleanValues.BRSocialStigma);
    setBRUnsupportiveCommunity(cleanValues.BRUnsupportiveCommunity);
    setBRNonexistentCommunity(cleanValues.BRNonexistentCommunity);
    setBRCommunityResources(cleanValues.BRCommunityResources);
    setBRProfessionalTrust(cleanValues.BRProfessionalTrust);
    setBRHealthcareSystemTrust(cleanValues.BRHealthcareSystemTrust);
    setBRCognitiveImpairments(cleanValues.BRCognitiveImpairments);
    setBRDependentCare(cleanValues.BRDependentCare);
    setBRTransportation(cleanValues.BRTransportation);
    setBRTechnologyAccess(cleanValues.BRTechnologyAccess);
    setBRLanguage(cleanValues.BRLanguage);
    setBRHealthcareProcess(cleanValues.BRHealthcareProcess);
    setBROther(cleanValues.BROther);
    setBRResponseNote(cleanValues.BRResponseNote);
    setTGBetrayal(cleanValues.TGBetrayal);
    setTGBoundaries(cleanValues.TGBoundaries);
    setTGDisorder(cleanValues.TGDisorder);
    setTGPain(cleanValues.TGPain);
    setTGRejection(cleanValues.TGRejection);
    setTGStress(cleanValues.TGStress);
    setTGMemories(cleanValues.TGMemories);
    setTGUnjustTreatment(cleanValues.TGUnjustTreatment);
    setTGUnpleasantConversations(cleanValues.TGUnpleasantConversations);
    setTGUnsafeEnvironments(cleanValues.TGUnsafeEnvironments);
    setTGOther(cleanValues.TGOther);
    setWSFlashbacks(cleanValues.WSFlashbacks);
    setWSIncreasedAppetite(cleanValues.WSIncreasedAppetite);
    setWSDecreasedAppetite(cleanValues.WSDecreasedAppetite);
    setWSIntenseEmotions(cleanValues.WSIntenseEmotions);
    setWSDisconnecting(cleanValues.WSDisconnecting);
    setWSTime(cleanValues.WSTime);
    setWSNegativeSelfTalk(cleanValues.WSNegativeSelfTalk);
    setWSNeglectingSelfCare(cleanValues.WSNeglectingSelfCare);
    setWSNightmares(cleanValues.WSNightmares);
    setWSRecklessBehavior(cleanValues.WSRecklessBehavior);
    setWSOther(cleanValues.WSOther);
    setErrors({});
  };
  const [createPlanRecord, setCreatePlanRecord] =
    React.useState(createPlanModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCreatePlan.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCreatePlan
        : createPlanModelProp;
      setCreatePlanRecord(record);
    };
    queryData();
  }, [idProp, createPlanModelProp]);
  React.useEffect(resetStateValues, [createPlanRecord]);
  const validations = {
    userId: [{ type: "Required" }],
    PSProblemSolving: [],
    PSSelfEsteem: [],
    PSChoiceAutonomy: [],
    PSSelfCare: [],
    PSSelfAwareness: [],
    PSCreativity: [],
    CSForgiveness: [],
    CSKindness: [],
    CSGratitude: [],
    CSPatience: [],
    CSCourage: [],
    CMSCopingChoice: [],
    CMSResilience: [],
    CMSSelfRegulation: [],
    CMSOptimism: [],
    COMSupportSystem: [],
    COMSocialIntelligence: [],
    COMCommunication: [],
    COMFaithCommunity: [],
    COMAccomplishments: [],
    BRStableHousing: [],
    BRQualityHealthcare: [],
    BRProfessionalAccess: [],
    BRInsuranceCoverage: [],
    BRFinancialConstraints: [],
    BREducationAttainment: [],
    BRSocialStigma: [],
    BRUnsupportiveCommunity: [],
    BRNonexistentCommunity: [],
    BRCommunityResources: [],
    BRProfessionalTrust: [],
    BRHealthcareSystemTrust: [],
    BRCognitiveImpairments: [],
    BRDependentCare: [],
    BRTransportation: [],
    BRTechnologyAccess: [],
    BRLanguage: [],
    BRHealthcareProcess: [],
    BROther: [],
    BRResponseNote: [],
    TGBetrayal: [],
    TGBoundaries: [],
    TGDisorder: [],
    TGPain: [],
    TGRejection: [],
    TGStress: [],
    TGMemories: [],
    TGUnjustTreatment: [],
    TGUnpleasantConversations: [],
    TGUnsafeEnvironments: [],
    TGOther: [],
    WSFlashbacks: [],
    WSIncreasedAppetite: [],
    WSDecreasedAppetite: [],
    WSIntenseEmotions: [],
    WSDisconnecting: [],
    WSTime: [],
    WSNegativeSelfTalk: [],
    WSNeglectingSelfCare: [],
    WSNightmares: [],
    WSRecklessBehavior: [],
    WSOther: [],
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
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          userId,
          PSProblemSolving: PSProblemSolving ?? null,
          PSSelfEsteem: PSSelfEsteem ?? null,
          PSChoiceAutonomy: PSChoiceAutonomy ?? null,
          PSSelfCare: PSSelfCare ?? null,
          PSSelfAwareness: PSSelfAwareness ?? null,
          PSCreativity: PSCreativity ?? null,
          CSForgiveness: CSForgiveness ?? null,
          CSKindness: CSKindness ?? null,
          CSGratitude: CSGratitude ?? null,
          CSPatience: CSPatience ?? null,
          CSCourage: CSCourage ?? null,
          CMSCopingChoice: CMSCopingChoice ?? null,
          CMSResilience: CMSResilience ?? null,
          CMSSelfRegulation: CMSSelfRegulation ?? null,
          CMSOptimism: CMSOptimism ?? null,
          COMSupportSystem: COMSupportSystem ?? null,
          COMSocialIntelligence: COMSocialIntelligence ?? null,
          COMCommunication: COMCommunication ?? null,
          COMFaithCommunity: COMFaithCommunity ?? null,
          COMAccomplishments: COMAccomplishments ?? null,
          BRStableHousing: BRStableHousing ?? null,
          BRQualityHealthcare: BRQualityHealthcare ?? null,
          BRProfessionalAccess: BRProfessionalAccess ?? null,
          BRInsuranceCoverage: BRInsuranceCoverage ?? null,
          BRFinancialConstraints: BRFinancialConstraints ?? null,
          BREducationAttainment: BREducationAttainment ?? null,
          BRSocialStigma: BRSocialStigma ?? null,
          BRUnsupportiveCommunity: BRUnsupportiveCommunity ?? null,
          BRNonexistentCommunity: BRNonexistentCommunity ?? null,
          BRCommunityResources: BRCommunityResources ?? null,
          BRProfessionalTrust: BRProfessionalTrust ?? null,
          BRHealthcareSystemTrust: BRHealthcareSystemTrust ?? null,
          BRCognitiveImpairments: BRCognitiveImpairments ?? null,
          BRDependentCare: BRDependentCare ?? null,
          BRTransportation: BRTransportation ?? null,
          BRTechnologyAccess: BRTechnologyAccess ?? null,
          BRLanguage: BRLanguage ?? null,
          BRHealthcareProcess: BRHealthcareProcess ?? null,
          BROther: BROther ?? null,
          BRResponseNote: BRResponseNote ?? null,
          TGBetrayal: TGBetrayal ?? null,
          TGBoundaries: TGBoundaries ?? null,
          TGDisorder: TGDisorder ?? null,
          TGPain: TGPain ?? null,
          TGRejection: TGRejection ?? null,
          TGStress: TGStress ?? null,
          TGMemories: TGMemories ?? null,
          TGUnjustTreatment: TGUnjustTreatment ?? null,
          TGUnpleasantConversations: TGUnpleasantConversations ?? null,
          TGUnsafeEnvironments: TGUnsafeEnvironments ?? null,
          TGOther: TGOther ?? null,
          WSFlashbacks: WSFlashbacks ?? null,
          WSIncreasedAppetite: WSIncreasedAppetite ?? null,
          WSDecreasedAppetite: WSDecreasedAppetite ?? null,
          WSIntenseEmotions: WSIntenseEmotions ?? null,
          WSDisconnecting: WSDisconnecting ?? null,
          WSTime: WSTime ?? null,
          WSNegativeSelfTalk: WSNegativeSelfTalk ?? null,
          WSNeglectingSelfCare: WSNeglectingSelfCare ?? null,
          WSNightmares: WSNightmares ?? null,
          WSRecklessBehavior: WSRecklessBehavior ?? null,
          WSOther: WSOther ?? null,
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
            query: updateCreatePlan.replaceAll("__typename", ""),
            variables: {
              input: {
                id: createPlanRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CreatePlanUpdateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId: value,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
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
      <SwitchField
        label="Ps problem solving"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PSProblemSolving}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving: value,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.PSProblemSolving ?? value;
          }
          if (errors.PSProblemSolving?.hasError) {
            runValidationTasks("PSProblemSolving", value);
          }
          setPSProblemSolving(value);
        }}
        onBlur={() => runValidationTasks("PSProblemSolving", PSProblemSolving)}
        errorMessage={errors.PSProblemSolving?.errorMessage}
        hasError={errors.PSProblemSolving?.hasError}
        {...getOverrideProps(overrides, "PSProblemSolving")}
      ></SwitchField>
      <SwitchField
        label="Ps self esteem"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PSSelfEsteem}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem: value,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.PSSelfEsteem ?? value;
          }
          if (errors.PSSelfEsteem?.hasError) {
            runValidationTasks("PSSelfEsteem", value);
          }
          setPSSelfEsteem(value);
        }}
        onBlur={() => runValidationTasks("PSSelfEsteem", PSSelfEsteem)}
        errorMessage={errors.PSSelfEsteem?.errorMessage}
        hasError={errors.PSSelfEsteem?.hasError}
        {...getOverrideProps(overrides, "PSSelfEsteem")}
      ></SwitchField>
      <SwitchField
        label="Ps choice autonomy"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PSChoiceAutonomy}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy: value,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.PSChoiceAutonomy ?? value;
          }
          if (errors.PSChoiceAutonomy?.hasError) {
            runValidationTasks("PSChoiceAutonomy", value);
          }
          setPSChoiceAutonomy(value);
        }}
        onBlur={() => runValidationTasks("PSChoiceAutonomy", PSChoiceAutonomy)}
        errorMessage={errors.PSChoiceAutonomy?.errorMessage}
        hasError={errors.PSChoiceAutonomy?.hasError}
        {...getOverrideProps(overrides, "PSChoiceAutonomy")}
      ></SwitchField>
      <SwitchField
        label="Ps self care"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PSSelfCare}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare: value,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.PSSelfCare ?? value;
          }
          if (errors.PSSelfCare?.hasError) {
            runValidationTasks("PSSelfCare", value);
          }
          setPSSelfCare(value);
        }}
        onBlur={() => runValidationTasks("PSSelfCare", PSSelfCare)}
        errorMessage={errors.PSSelfCare?.errorMessage}
        hasError={errors.PSSelfCare?.hasError}
        {...getOverrideProps(overrides, "PSSelfCare")}
      ></SwitchField>
      <SwitchField
        label="Ps self awareness"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PSSelfAwareness}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness: value,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.PSSelfAwareness ?? value;
          }
          if (errors.PSSelfAwareness?.hasError) {
            runValidationTasks("PSSelfAwareness", value);
          }
          setPSSelfAwareness(value);
        }}
        onBlur={() => runValidationTasks("PSSelfAwareness", PSSelfAwareness)}
        errorMessage={errors.PSSelfAwareness?.errorMessage}
        hasError={errors.PSSelfAwareness?.hasError}
        {...getOverrideProps(overrides, "PSSelfAwareness")}
      ></SwitchField>
      <SwitchField
        label="Ps creativity"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PSCreativity}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity: value,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.PSCreativity ?? value;
          }
          if (errors.PSCreativity?.hasError) {
            runValidationTasks("PSCreativity", value);
          }
          setPSCreativity(value);
        }}
        onBlur={() => runValidationTasks("PSCreativity", PSCreativity)}
        errorMessage={errors.PSCreativity?.errorMessage}
        hasError={errors.PSCreativity?.hasError}
        {...getOverrideProps(overrides, "PSCreativity")}
      ></SwitchField>
      <SwitchField
        label="Cs forgiveness"
        defaultChecked={false}
        isDisabled={false}
        isChecked={CSForgiveness}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness: value,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.CSForgiveness ?? value;
          }
          if (errors.CSForgiveness?.hasError) {
            runValidationTasks("CSForgiveness", value);
          }
          setCSForgiveness(value);
        }}
        onBlur={() => runValidationTasks("CSForgiveness", CSForgiveness)}
        errorMessage={errors.CSForgiveness?.errorMessage}
        hasError={errors.CSForgiveness?.hasError}
        {...getOverrideProps(overrides, "CSForgiveness")}
      ></SwitchField>
      <SwitchField
        label="Cs kindness"
        defaultChecked={false}
        isDisabled={false}
        isChecked={CSKindness}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness: value,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.CSKindness ?? value;
          }
          if (errors.CSKindness?.hasError) {
            runValidationTasks("CSKindness", value);
          }
          setCSKindness(value);
        }}
        onBlur={() => runValidationTasks("CSKindness", CSKindness)}
        errorMessage={errors.CSKindness?.errorMessage}
        hasError={errors.CSKindness?.hasError}
        {...getOverrideProps(overrides, "CSKindness")}
      ></SwitchField>
      <SwitchField
        label="Cs gratitude"
        defaultChecked={false}
        isDisabled={false}
        isChecked={CSGratitude}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude: value,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.CSGratitude ?? value;
          }
          if (errors.CSGratitude?.hasError) {
            runValidationTasks("CSGratitude", value);
          }
          setCSGratitude(value);
        }}
        onBlur={() => runValidationTasks("CSGratitude", CSGratitude)}
        errorMessage={errors.CSGratitude?.errorMessage}
        hasError={errors.CSGratitude?.hasError}
        {...getOverrideProps(overrides, "CSGratitude")}
      ></SwitchField>
      <SwitchField
        label="Cs patience"
        defaultChecked={false}
        isDisabled={false}
        isChecked={CSPatience}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience: value,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.CSPatience ?? value;
          }
          if (errors.CSPatience?.hasError) {
            runValidationTasks("CSPatience", value);
          }
          setCSPatience(value);
        }}
        onBlur={() => runValidationTasks("CSPatience", CSPatience)}
        errorMessage={errors.CSPatience?.errorMessage}
        hasError={errors.CSPatience?.hasError}
        {...getOverrideProps(overrides, "CSPatience")}
      ></SwitchField>
      <SwitchField
        label="Cs courage"
        defaultChecked={false}
        isDisabled={false}
        isChecked={CSCourage}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage: value,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.CSCourage ?? value;
          }
          if (errors.CSCourage?.hasError) {
            runValidationTasks("CSCourage", value);
          }
          setCSCourage(value);
        }}
        onBlur={() => runValidationTasks("CSCourage", CSCourage)}
        errorMessage={errors.CSCourage?.errorMessage}
        hasError={errors.CSCourage?.hasError}
        {...getOverrideProps(overrides, "CSCourage")}
      ></SwitchField>
      <SwitchField
        label="Cms coping choice"
        defaultChecked={false}
        isDisabled={false}
        isChecked={CMSCopingChoice}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice: value,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.CMSCopingChoice ?? value;
          }
          if (errors.CMSCopingChoice?.hasError) {
            runValidationTasks("CMSCopingChoice", value);
          }
          setCMSCopingChoice(value);
        }}
        onBlur={() => runValidationTasks("CMSCopingChoice", CMSCopingChoice)}
        errorMessage={errors.CMSCopingChoice?.errorMessage}
        hasError={errors.CMSCopingChoice?.hasError}
        {...getOverrideProps(overrides, "CMSCopingChoice")}
      ></SwitchField>
      <SwitchField
        label="Cms resilience"
        defaultChecked={false}
        isDisabled={false}
        isChecked={CMSResilience}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience: value,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.CMSResilience ?? value;
          }
          if (errors.CMSResilience?.hasError) {
            runValidationTasks("CMSResilience", value);
          }
          setCMSResilience(value);
        }}
        onBlur={() => runValidationTasks("CMSResilience", CMSResilience)}
        errorMessage={errors.CMSResilience?.errorMessage}
        hasError={errors.CMSResilience?.hasError}
        {...getOverrideProps(overrides, "CMSResilience")}
      ></SwitchField>
      <SwitchField
        label="Cms self regulation"
        defaultChecked={false}
        isDisabled={false}
        isChecked={CMSSelfRegulation}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation: value,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.CMSSelfRegulation ?? value;
          }
          if (errors.CMSSelfRegulation?.hasError) {
            runValidationTasks("CMSSelfRegulation", value);
          }
          setCMSSelfRegulation(value);
        }}
        onBlur={() =>
          runValidationTasks("CMSSelfRegulation", CMSSelfRegulation)
        }
        errorMessage={errors.CMSSelfRegulation?.errorMessage}
        hasError={errors.CMSSelfRegulation?.hasError}
        {...getOverrideProps(overrides, "CMSSelfRegulation")}
      ></SwitchField>
      <SwitchField
        label="Cms optimism"
        defaultChecked={false}
        isDisabled={false}
        isChecked={CMSOptimism}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism: value,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.CMSOptimism ?? value;
          }
          if (errors.CMSOptimism?.hasError) {
            runValidationTasks("CMSOptimism", value);
          }
          setCMSOptimism(value);
        }}
        onBlur={() => runValidationTasks("CMSOptimism", CMSOptimism)}
        errorMessage={errors.CMSOptimism?.errorMessage}
        hasError={errors.CMSOptimism?.hasError}
        {...getOverrideProps(overrides, "CMSOptimism")}
      ></SwitchField>
      <SwitchField
        label="Com support system"
        defaultChecked={false}
        isDisabled={false}
        isChecked={COMSupportSystem}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem: value,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.COMSupportSystem ?? value;
          }
          if (errors.COMSupportSystem?.hasError) {
            runValidationTasks("COMSupportSystem", value);
          }
          setCOMSupportSystem(value);
        }}
        onBlur={() => runValidationTasks("COMSupportSystem", COMSupportSystem)}
        errorMessage={errors.COMSupportSystem?.errorMessage}
        hasError={errors.COMSupportSystem?.hasError}
        {...getOverrideProps(overrides, "COMSupportSystem")}
      ></SwitchField>
      <SwitchField
        label="Com social intelligence"
        defaultChecked={false}
        isDisabled={false}
        isChecked={COMSocialIntelligence}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence: value,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.COMSocialIntelligence ?? value;
          }
          if (errors.COMSocialIntelligence?.hasError) {
            runValidationTasks("COMSocialIntelligence", value);
          }
          setCOMSocialIntelligence(value);
        }}
        onBlur={() =>
          runValidationTasks("COMSocialIntelligence", COMSocialIntelligence)
        }
        errorMessage={errors.COMSocialIntelligence?.errorMessage}
        hasError={errors.COMSocialIntelligence?.hasError}
        {...getOverrideProps(overrides, "COMSocialIntelligence")}
      ></SwitchField>
      <SwitchField
        label="Com communication"
        defaultChecked={false}
        isDisabled={false}
        isChecked={COMCommunication}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication: value,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.COMCommunication ?? value;
          }
          if (errors.COMCommunication?.hasError) {
            runValidationTasks("COMCommunication", value);
          }
          setCOMCommunication(value);
        }}
        onBlur={() => runValidationTasks("COMCommunication", COMCommunication)}
        errorMessage={errors.COMCommunication?.errorMessage}
        hasError={errors.COMCommunication?.hasError}
        {...getOverrideProps(overrides, "COMCommunication")}
      ></SwitchField>
      <SwitchField
        label="Com faith community"
        defaultChecked={false}
        isDisabled={false}
        isChecked={COMFaithCommunity}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity: value,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.COMFaithCommunity ?? value;
          }
          if (errors.COMFaithCommunity?.hasError) {
            runValidationTasks("COMFaithCommunity", value);
          }
          setCOMFaithCommunity(value);
        }}
        onBlur={() =>
          runValidationTasks("COMFaithCommunity", COMFaithCommunity)
        }
        errorMessage={errors.COMFaithCommunity?.errorMessage}
        hasError={errors.COMFaithCommunity?.hasError}
        {...getOverrideProps(overrides, "COMFaithCommunity")}
      ></SwitchField>
      <SwitchField
        label="Com accomplishments"
        defaultChecked={false}
        isDisabled={false}
        isChecked={COMAccomplishments}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments: value,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.COMAccomplishments ?? value;
          }
          if (errors.COMAccomplishments?.hasError) {
            runValidationTasks("COMAccomplishments", value);
          }
          setCOMAccomplishments(value);
        }}
        onBlur={() =>
          runValidationTasks("COMAccomplishments", COMAccomplishments)
        }
        errorMessage={errors.COMAccomplishments?.errorMessage}
        hasError={errors.COMAccomplishments?.hasError}
        {...getOverrideProps(overrides, "COMAccomplishments")}
      ></SwitchField>
      <SwitchField
        label="Br stable housing"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BRStableHousing}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing: value,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.BRStableHousing ?? value;
          }
          if (errors.BRStableHousing?.hasError) {
            runValidationTasks("BRStableHousing", value);
          }
          setBRStableHousing(value);
        }}
        onBlur={() => runValidationTasks("BRStableHousing", BRStableHousing)}
        errorMessage={errors.BRStableHousing?.errorMessage}
        hasError={errors.BRStableHousing?.hasError}
        {...getOverrideProps(overrides, "BRStableHousing")}
      ></SwitchField>
      <SwitchField
        label="Br quality healthcare"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BRQualityHealthcare}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare: value,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.BRQualityHealthcare ?? value;
          }
          if (errors.BRQualityHealthcare?.hasError) {
            runValidationTasks("BRQualityHealthcare", value);
          }
          setBRQualityHealthcare(value);
        }}
        onBlur={() =>
          runValidationTasks("BRQualityHealthcare", BRQualityHealthcare)
        }
        errorMessage={errors.BRQualityHealthcare?.errorMessage}
        hasError={errors.BRQualityHealthcare?.hasError}
        {...getOverrideProps(overrides, "BRQualityHealthcare")}
      ></SwitchField>
      <SwitchField
        label="Br professional access"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BRProfessionalAccess}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess: value,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.BRProfessionalAccess ?? value;
          }
          if (errors.BRProfessionalAccess?.hasError) {
            runValidationTasks("BRProfessionalAccess", value);
          }
          setBRProfessionalAccess(value);
        }}
        onBlur={() =>
          runValidationTasks("BRProfessionalAccess", BRProfessionalAccess)
        }
        errorMessage={errors.BRProfessionalAccess?.errorMessage}
        hasError={errors.BRProfessionalAccess?.hasError}
        {...getOverrideProps(overrides, "BRProfessionalAccess")}
      ></SwitchField>
      <SwitchField
        label="Br insurance coverage"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BRInsuranceCoverage}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage: value,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.BRInsuranceCoverage ?? value;
          }
          if (errors.BRInsuranceCoverage?.hasError) {
            runValidationTasks("BRInsuranceCoverage", value);
          }
          setBRInsuranceCoverage(value);
        }}
        onBlur={() =>
          runValidationTasks("BRInsuranceCoverage", BRInsuranceCoverage)
        }
        errorMessage={errors.BRInsuranceCoverage?.errorMessage}
        hasError={errors.BRInsuranceCoverage?.hasError}
        {...getOverrideProps(overrides, "BRInsuranceCoverage")}
      ></SwitchField>
      <SwitchField
        label="Br financial constraints"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BRFinancialConstraints}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints: value,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.BRFinancialConstraints ?? value;
          }
          if (errors.BRFinancialConstraints?.hasError) {
            runValidationTasks("BRFinancialConstraints", value);
          }
          setBRFinancialConstraints(value);
        }}
        onBlur={() =>
          runValidationTasks("BRFinancialConstraints", BRFinancialConstraints)
        }
        errorMessage={errors.BRFinancialConstraints?.errorMessage}
        hasError={errors.BRFinancialConstraints?.hasError}
        {...getOverrideProps(overrides, "BRFinancialConstraints")}
      ></SwitchField>
      <SwitchField
        label="Br education attainment"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BREducationAttainment}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment: value,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.BREducationAttainment ?? value;
          }
          if (errors.BREducationAttainment?.hasError) {
            runValidationTasks("BREducationAttainment", value);
          }
          setBREducationAttainment(value);
        }}
        onBlur={() =>
          runValidationTasks("BREducationAttainment", BREducationAttainment)
        }
        errorMessage={errors.BREducationAttainment?.errorMessage}
        hasError={errors.BREducationAttainment?.hasError}
        {...getOverrideProps(overrides, "BREducationAttainment")}
      ></SwitchField>
      <SwitchField
        label="Br social stigma"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BRSocialStigma}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma: value,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.BRSocialStigma ?? value;
          }
          if (errors.BRSocialStigma?.hasError) {
            runValidationTasks("BRSocialStigma", value);
          }
          setBRSocialStigma(value);
        }}
        onBlur={() => runValidationTasks("BRSocialStigma", BRSocialStigma)}
        errorMessage={errors.BRSocialStigma?.errorMessage}
        hasError={errors.BRSocialStigma?.hasError}
        {...getOverrideProps(overrides, "BRSocialStigma")}
      ></SwitchField>
      <SwitchField
        label="Br unsupportive community"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BRUnsupportiveCommunity}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity: value,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.BRUnsupportiveCommunity ?? value;
          }
          if (errors.BRUnsupportiveCommunity?.hasError) {
            runValidationTasks("BRUnsupportiveCommunity", value);
          }
          setBRUnsupportiveCommunity(value);
        }}
        onBlur={() =>
          runValidationTasks("BRUnsupportiveCommunity", BRUnsupportiveCommunity)
        }
        errorMessage={errors.BRUnsupportiveCommunity?.errorMessage}
        hasError={errors.BRUnsupportiveCommunity?.hasError}
        {...getOverrideProps(overrides, "BRUnsupportiveCommunity")}
      ></SwitchField>
      <SwitchField
        label="Br nonexistent community"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BRNonexistentCommunity}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity: value,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.BRNonexistentCommunity ?? value;
          }
          if (errors.BRNonexistentCommunity?.hasError) {
            runValidationTasks("BRNonexistentCommunity", value);
          }
          setBRNonexistentCommunity(value);
        }}
        onBlur={() =>
          runValidationTasks("BRNonexistentCommunity", BRNonexistentCommunity)
        }
        errorMessage={errors.BRNonexistentCommunity?.errorMessage}
        hasError={errors.BRNonexistentCommunity?.hasError}
        {...getOverrideProps(overrides, "BRNonexistentCommunity")}
      ></SwitchField>
      <SwitchField
        label="Br community resources"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BRCommunityResources}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources: value,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.BRCommunityResources ?? value;
          }
          if (errors.BRCommunityResources?.hasError) {
            runValidationTasks("BRCommunityResources", value);
          }
          setBRCommunityResources(value);
        }}
        onBlur={() =>
          runValidationTasks("BRCommunityResources", BRCommunityResources)
        }
        errorMessage={errors.BRCommunityResources?.errorMessage}
        hasError={errors.BRCommunityResources?.hasError}
        {...getOverrideProps(overrides, "BRCommunityResources")}
      ></SwitchField>
      <SwitchField
        label="Br professional trust"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BRProfessionalTrust}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust: value,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.BRProfessionalTrust ?? value;
          }
          if (errors.BRProfessionalTrust?.hasError) {
            runValidationTasks("BRProfessionalTrust", value);
          }
          setBRProfessionalTrust(value);
        }}
        onBlur={() =>
          runValidationTasks("BRProfessionalTrust", BRProfessionalTrust)
        }
        errorMessage={errors.BRProfessionalTrust?.errorMessage}
        hasError={errors.BRProfessionalTrust?.hasError}
        {...getOverrideProps(overrides, "BRProfessionalTrust")}
      ></SwitchField>
      <SwitchField
        label="Br healthcare system trust"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BRHealthcareSystemTrust}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust: value,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.BRHealthcareSystemTrust ?? value;
          }
          if (errors.BRHealthcareSystemTrust?.hasError) {
            runValidationTasks("BRHealthcareSystemTrust", value);
          }
          setBRHealthcareSystemTrust(value);
        }}
        onBlur={() =>
          runValidationTasks("BRHealthcareSystemTrust", BRHealthcareSystemTrust)
        }
        errorMessage={errors.BRHealthcareSystemTrust?.errorMessage}
        hasError={errors.BRHealthcareSystemTrust?.hasError}
        {...getOverrideProps(overrides, "BRHealthcareSystemTrust")}
      ></SwitchField>
      <SwitchField
        label="Br cognitive impairments"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BRCognitiveImpairments}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments: value,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.BRCognitiveImpairments ?? value;
          }
          if (errors.BRCognitiveImpairments?.hasError) {
            runValidationTasks("BRCognitiveImpairments", value);
          }
          setBRCognitiveImpairments(value);
        }}
        onBlur={() =>
          runValidationTasks("BRCognitiveImpairments", BRCognitiveImpairments)
        }
        errorMessage={errors.BRCognitiveImpairments?.errorMessage}
        hasError={errors.BRCognitiveImpairments?.hasError}
        {...getOverrideProps(overrides, "BRCognitiveImpairments")}
      ></SwitchField>
      <SwitchField
        label="Br dependent care"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BRDependentCare}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare: value,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.BRDependentCare ?? value;
          }
          if (errors.BRDependentCare?.hasError) {
            runValidationTasks("BRDependentCare", value);
          }
          setBRDependentCare(value);
        }}
        onBlur={() => runValidationTasks("BRDependentCare", BRDependentCare)}
        errorMessage={errors.BRDependentCare?.errorMessage}
        hasError={errors.BRDependentCare?.hasError}
        {...getOverrideProps(overrides, "BRDependentCare")}
      ></SwitchField>
      <SwitchField
        label="Br transportation"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BRTransportation}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation: value,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.BRTransportation ?? value;
          }
          if (errors.BRTransportation?.hasError) {
            runValidationTasks("BRTransportation", value);
          }
          setBRTransportation(value);
        }}
        onBlur={() => runValidationTasks("BRTransportation", BRTransportation)}
        errorMessage={errors.BRTransportation?.errorMessage}
        hasError={errors.BRTransportation?.hasError}
        {...getOverrideProps(overrides, "BRTransportation")}
      ></SwitchField>
      <SwitchField
        label="Br technology access"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BRTechnologyAccess}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess: value,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.BRTechnologyAccess ?? value;
          }
          if (errors.BRTechnologyAccess?.hasError) {
            runValidationTasks("BRTechnologyAccess", value);
          }
          setBRTechnologyAccess(value);
        }}
        onBlur={() =>
          runValidationTasks("BRTechnologyAccess", BRTechnologyAccess)
        }
        errorMessage={errors.BRTechnologyAccess?.errorMessage}
        hasError={errors.BRTechnologyAccess?.hasError}
        {...getOverrideProps(overrides, "BRTechnologyAccess")}
      ></SwitchField>
      <SwitchField
        label="Br language"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BRLanguage}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage: value,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.BRLanguage ?? value;
          }
          if (errors.BRLanguage?.hasError) {
            runValidationTasks("BRLanguage", value);
          }
          setBRLanguage(value);
        }}
        onBlur={() => runValidationTasks("BRLanguage", BRLanguage)}
        errorMessage={errors.BRLanguage?.errorMessage}
        hasError={errors.BRLanguage?.hasError}
        {...getOverrideProps(overrides, "BRLanguage")}
      ></SwitchField>
      <SwitchField
        label="Br healthcare process"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BRHealthcareProcess}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess: value,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.BRHealthcareProcess ?? value;
          }
          if (errors.BRHealthcareProcess?.hasError) {
            runValidationTasks("BRHealthcareProcess", value);
          }
          setBRHealthcareProcess(value);
        }}
        onBlur={() =>
          runValidationTasks("BRHealthcareProcess", BRHealthcareProcess)
        }
        errorMessage={errors.BRHealthcareProcess?.errorMessage}
        hasError={errors.BRHealthcareProcess?.hasError}
        {...getOverrideProps(overrides, "BRHealthcareProcess")}
      ></SwitchField>
      <SwitchField
        label="Br other"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BROther}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther: value,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.BROther ?? value;
          }
          if (errors.BROther?.hasError) {
            runValidationTasks("BROther", value);
          }
          setBROther(value);
        }}
        onBlur={() => runValidationTasks("BROther", BROther)}
        errorMessage={errors.BROther?.errorMessage}
        hasError={errors.BROther?.hasError}
        {...getOverrideProps(overrides, "BROther")}
      ></SwitchField>
      <TextField
        label="Br response note"
        isRequired={false}
        isReadOnly={false}
        value={BRResponseNote}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote: value,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.BRResponseNote ?? value;
          }
          if (errors.BRResponseNote?.hasError) {
            runValidationTasks("BRResponseNote", value);
          }
          setBRResponseNote(value);
        }}
        onBlur={() => runValidationTasks("BRResponseNote", BRResponseNote)}
        errorMessage={errors.BRResponseNote?.errorMessage}
        hasError={errors.BRResponseNote?.hasError}
        {...getOverrideProps(overrides, "BRResponseNote")}
      ></TextField>
      <SwitchField
        label="Tg betrayal"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TGBetrayal}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal: value,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.TGBetrayal ?? value;
          }
          if (errors.TGBetrayal?.hasError) {
            runValidationTasks("TGBetrayal", value);
          }
          setTGBetrayal(value);
        }}
        onBlur={() => runValidationTasks("TGBetrayal", TGBetrayal)}
        errorMessage={errors.TGBetrayal?.errorMessage}
        hasError={errors.TGBetrayal?.hasError}
        {...getOverrideProps(overrides, "TGBetrayal")}
      ></SwitchField>
      <SwitchField
        label="Tg boundaries"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TGBoundaries}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries: value,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.TGBoundaries ?? value;
          }
          if (errors.TGBoundaries?.hasError) {
            runValidationTasks("TGBoundaries", value);
          }
          setTGBoundaries(value);
        }}
        onBlur={() => runValidationTasks("TGBoundaries", TGBoundaries)}
        errorMessage={errors.TGBoundaries?.errorMessage}
        hasError={errors.TGBoundaries?.hasError}
        {...getOverrideProps(overrides, "TGBoundaries")}
      ></SwitchField>
      <SwitchField
        label="Tg disorder"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TGDisorder}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder: value,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.TGDisorder ?? value;
          }
          if (errors.TGDisorder?.hasError) {
            runValidationTasks("TGDisorder", value);
          }
          setTGDisorder(value);
        }}
        onBlur={() => runValidationTasks("TGDisorder", TGDisorder)}
        errorMessage={errors.TGDisorder?.errorMessage}
        hasError={errors.TGDisorder?.hasError}
        {...getOverrideProps(overrides, "TGDisorder")}
      ></SwitchField>
      <SwitchField
        label="Tg pain"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TGPain}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain: value,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.TGPain ?? value;
          }
          if (errors.TGPain?.hasError) {
            runValidationTasks("TGPain", value);
          }
          setTGPain(value);
        }}
        onBlur={() => runValidationTasks("TGPain", TGPain)}
        errorMessage={errors.TGPain?.errorMessage}
        hasError={errors.TGPain?.hasError}
        {...getOverrideProps(overrides, "TGPain")}
      ></SwitchField>
      <SwitchField
        label="Tg rejection"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TGRejection}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection: value,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.TGRejection ?? value;
          }
          if (errors.TGRejection?.hasError) {
            runValidationTasks("TGRejection", value);
          }
          setTGRejection(value);
        }}
        onBlur={() => runValidationTasks("TGRejection", TGRejection)}
        errorMessage={errors.TGRejection?.errorMessage}
        hasError={errors.TGRejection?.hasError}
        {...getOverrideProps(overrides, "TGRejection")}
      ></SwitchField>
      <SwitchField
        label="Tg stress"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TGStress}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress: value,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.TGStress ?? value;
          }
          if (errors.TGStress?.hasError) {
            runValidationTasks("TGStress", value);
          }
          setTGStress(value);
        }}
        onBlur={() => runValidationTasks("TGStress", TGStress)}
        errorMessage={errors.TGStress?.errorMessage}
        hasError={errors.TGStress?.hasError}
        {...getOverrideProps(overrides, "TGStress")}
      ></SwitchField>
      <SwitchField
        label="Tg memories"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TGMemories}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories: value,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.TGMemories ?? value;
          }
          if (errors.TGMemories?.hasError) {
            runValidationTasks("TGMemories", value);
          }
          setTGMemories(value);
        }}
        onBlur={() => runValidationTasks("TGMemories", TGMemories)}
        errorMessage={errors.TGMemories?.errorMessage}
        hasError={errors.TGMemories?.hasError}
        {...getOverrideProps(overrides, "TGMemories")}
      ></SwitchField>
      <SwitchField
        label="Tg unjust treatment"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TGUnjustTreatment}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment: value,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.TGUnjustTreatment ?? value;
          }
          if (errors.TGUnjustTreatment?.hasError) {
            runValidationTasks("TGUnjustTreatment", value);
          }
          setTGUnjustTreatment(value);
        }}
        onBlur={() =>
          runValidationTasks("TGUnjustTreatment", TGUnjustTreatment)
        }
        errorMessage={errors.TGUnjustTreatment?.errorMessage}
        hasError={errors.TGUnjustTreatment?.hasError}
        {...getOverrideProps(overrides, "TGUnjustTreatment")}
      ></SwitchField>
      <SwitchField
        label="Tg unpleasant conversations"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TGUnpleasantConversations}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations: value,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.TGUnpleasantConversations ?? value;
          }
          if (errors.TGUnpleasantConversations?.hasError) {
            runValidationTasks("TGUnpleasantConversations", value);
          }
          setTGUnpleasantConversations(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "TGUnpleasantConversations",
            TGUnpleasantConversations
          )
        }
        errorMessage={errors.TGUnpleasantConversations?.errorMessage}
        hasError={errors.TGUnpleasantConversations?.hasError}
        {...getOverrideProps(overrides, "TGUnpleasantConversations")}
      ></SwitchField>
      <SwitchField
        label="Tg unsafe environments"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TGUnsafeEnvironments}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments: value,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.TGUnsafeEnvironments ?? value;
          }
          if (errors.TGUnsafeEnvironments?.hasError) {
            runValidationTasks("TGUnsafeEnvironments", value);
          }
          setTGUnsafeEnvironments(value);
        }}
        onBlur={() =>
          runValidationTasks("TGUnsafeEnvironments", TGUnsafeEnvironments)
        }
        errorMessage={errors.TGUnsafeEnvironments?.errorMessage}
        hasError={errors.TGUnsafeEnvironments?.hasError}
        {...getOverrideProps(overrides, "TGUnsafeEnvironments")}
      ></SwitchField>
      <SwitchField
        label="Tg other"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TGOther}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther: value,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.TGOther ?? value;
          }
          if (errors.TGOther?.hasError) {
            runValidationTasks("TGOther", value);
          }
          setTGOther(value);
        }}
        onBlur={() => runValidationTasks("TGOther", TGOther)}
        errorMessage={errors.TGOther?.errorMessage}
        hasError={errors.TGOther?.hasError}
        {...getOverrideProps(overrides, "TGOther")}
      ></SwitchField>
      <SwitchField
        label="Ws flashbacks"
        defaultChecked={false}
        isDisabled={false}
        isChecked={WSFlashbacks}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks: value,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.WSFlashbacks ?? value;
          }
          if (errors.WSFlashbacks?.hasError) {
            runValidationTasks("WSFlashbacks", value);
          }
          setWSFlashbacks(value);
        }}
        onBlur={() => runValidationTasks("WSFlashbacks", WSFlashbacks)}
        errorMessage={errors.WSFlashbacks?.errorMessage}
        hasError={errors.WSFlashbacks?.hasError}
        {...getOverrideProps(overrides, "WSFlashbacks")}
      ></SwitchField>
      <SwitchField
        label="Ws increased appetite"
        defaultChecked={false}
        isDisabled={false}
        isChecked={WSIncreasedAppetite}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite: value,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.WSIncreasedAppetite ?? value;
          }
          if (errors.WSIncreasedAppetite?.hasError) {
            runValidationTasks("WSIncreasedAppetite", value);
          }
          setWSIncreasedAppetite(value);
        }}
        onBlur={() =>
          runValidationTasks("WSIncreasedAppetite", WSIncreasedAppetite)
        }
        errorMessage={errors.WSIncreasedAppetite?.errorMessage}
        hasError={errors.WSIncreasedAppetite?.hasError}
        {...getOverrideProps(overrides, "WSIncreasedAppetite")}
      ></SwitchField>
      <SwitchField
        label="Ws decreased appetite"
        defaultChecked={false}
        isDisabled={false}
        isChecked={WSDecreasedAppetite}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite: value,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.WSDecreasedAppetite ?? value;
          }
          if (errors.WSDecreasedAppetite?.hasError) {
            runValidationTasks("WSDecreasedAppetite", value);
          }
          setWSDecreasedAppetite(value);
        }}
        onBlur={() =>
          runValidationTasks("WSDecreasedAppetite", WSDecreasedAppetite)
        }
        errorMessage={errors.WSDecreasedAppetite?.errorMessage}
        hasError={errors.WSDecreasedAppetite?.hasError}
        {...getOverrideProps(overrides, "WSDecreasedAppetite")}
      ></SwitchField>
      <SwitchField
        label="Ws intense emotions"
        defaultChecked={false}
        isDisabled={false}
        isChecked={WSIntenseEmotions}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions: value,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.WSIntenseEmotions ?? value;
          }
          if (errors.WSIntenseEmotions?.hasError) {
            runValidationTasks("WSIntenseEmotions", value);
          }
          setWSIntenseEmotions(value);
        }}
        onBlur={() =>
          runValidationTasks("WSIntenseEmotions", WSIntenseEmotions)
        }
        errorMessage={errors.WSIntenseEmotions?.errorMessage}
        hasError={errors.WSIntenseEmotions?.hasError}
        {...getOverrideProps(overrides, "WSIntenseEmotions")}
      ></SwitchField>
      <SwitchField
        label="Ws disconnecting"
        defaultChecked={false}
        isDisabled={false}
        isChecked={WSDisconnecting}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting: value,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.WSDisconnecting ?? value;
          }
          if (errors.WSDisconnecting?.hasError) {
            runValidationTasks("WSDisconnecting", value);
          }
          setWSDisconnecting(value);
        }}
        onBlur={() => runValidationTasks("WSDisconnecting", WSDisconnecting)}
        errorMessage={errors.WSDisconnecting?.errorMessage}
        hasError={errors.WSDisconnecting?.hasError}
        {...getOverrideProps(overrides, "WSDisconnecting")}
      ></SwitchField>
      <SwitchField
        label="Ws time"
        defaultChecked={false}
        isDisabled={false}
        isChecked={WSTime}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime: value,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.WSTime ?? value;
          }
          if (errors.WSTime?.hasError) {
            runValidationTasks("WSTime", value);
          }
          setWSTime(value);
        }}
        onBlur={() => runValidationTasks("WSTime", WSTime)}
        errorMessage={errors.WSTime?.errorMessage}
        hasError={errors.WSTime?.hasError}
        {...getOverrideProps(overrides, "WSTime")}
      ></SwitchField>
      <SwitchField
        label="Ws negative self talk"
        defaultChecked={false}
        isDisabled={false}
        isChecked={WSNegativeSelfTalk}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk: value,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.WSNegativeSelfTalk ?? value;
          }
          if (errors.WSNegativeSelfTalk?.hasError) {
            runValidationTasks("WSNegativeSelfTalk", value);
          }
          setWSNegativeSelfTalk(value);
        }}
        onBlur={() =>
          runValidationTasks("WSNegativeSelfTalk", WSNegativeSelfTalk)
        }
        errorMessage={errors.WSNegativeSelfTalk?.errorMessage}
        hasError={errors.WSNegativeSelfTalk?.hasError}
        {...getOverrideProps(overrides, "WSNegativeSelfTalk")}
      ></SwitchField>
      <SwitchField
        label="Ws neglecting self care"
        defaultChecked={false}
        isDisabled={false}
        isChecked={WSNeglectingSelfCare}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare: value,
              WSNightmares,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.WSNeglectingSelfCare ?? value;
          }
          if (errors.WSNeglectingSelfCare?.hasError) {
            runValidationTasks("WSNeglectingSelfCare", value);
          }
          setWSNeglectingSelfCare(value);
        }}
        onBlur={() =>
          runValidationTasks("WSNeglectingSelfCare", WSNeglectingSelfCare)
        }
        errorMessage={errors.WSNeglectingSelfCare?.errorMessage}
        hasError={errors.WSNeglectingSelfCare?.hasError}
        {...getOverrideProps(overrides, "WSNeglectingSelfCare")}
      ></SwitchField>
      <SwitchField
        label="Ws nightmares"
        defaultChecked={false}
        isDisabled={false}
        isChecked={WSNightmares}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares: value,
              WSRecklessBehavior,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.WSNightmares ?? value;
          }
          if (errors.WSNightmares?.hasError) {
            runValidationTasks("WSNightmares", value);
          }
          setWSNightmares(value);
        }}
        onBlur={() => runValidationTasks("WSNightmares", WSNightmares)}
        errorMessage={errors.WSNightmares?.errorMessage}
        hasError={errors.WSNightmares?.hasError}
        {...getOverrideProps(overrides, "WSNightmares")}
      ></SwitchField>
      <SwitchField
        label="Ws reckless behavior"
        defaultChecked={false}
        isDisabled={false}
        isChecked={WSRecklessBehavior}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior: value,
              WSOther,
            };
            const result = onChange(modelFields);
            value = result?.WSRecklessBehavior ?? value;
          }
          if (errors.WSRecklessBehavior?.hasError) {
            runValidationTasks("WSRecklessBehavior", value);
          }
          setWSRecklessBehavior(value);
        }}
        onBlur={() =>
          runValidationTasks("WSRecklessBehavior", WSRecklessBehavior)
        }
        errorMessage={errors.WSRecklessBehavior?.errorMessage}
        hasError={errors.WSRecklessBehavior?.hasError}
        {...getOverrideProps(overrides, "WSRecklessBehavior")}
      ></SwitchField>
      <SwitchField
        label="Ws other"
        defaultChecked={false}
        isDisabled={false}
        isChecked={WSOther}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              PSProblemSolving,
              PSSelfEsteem,
              PSChoiceAutonomy,
              PSSelfCare,
              PSSelfAwareness,
              PSCreativity,
              CSForgiveness,
              CSKindness,
              CSGratitude,
              CSPatience,
              CSCourage,
              CMSCopingChoice,
              CMSResilience,
              CMSSelfRegulation,
              CMSOptimism,
              COMSupportSystem,
              COMSocialIntelligence,
              COMCommunication,
              COMFaithCommunity,
              COMAccomplishments,
              BRStableHousing,
              BRQualityHealthcare,
              BRProfessionalAccess,
              BRInsuranceCoverage,
              BRFinancialConstraints,
              BREducationAttainment,
              BRSocialStigma,
              BRUnsupportiveCommunity,
              BRNonexistentCommunity,
              BRCommunityResources,
              BRProfessionalTrust,
              BRHealthcareSystemTrust,
              BRCognitiveImpairments,
              BRDependentCare,
              BRTransportation,
              BRTechnologyAccess,
              BRLanguage,
              BRHealthcareProcess,
              BROther,
              BRResponseNote,
              TGBetrayal,
              TGBoundaries,
              TGDisorder,
              TGPain,
              TGRejection,
              TGStress,
              TGMemories,
              TGUnjustTreatment,
              TGUnpleasantConversations,
              TGUnsafeEnvironments,
              TGOther,
              WSFlashbacks,
              WSIncreasedAppetite,
              WSDecreasedAppetite,
              WSIntenseEmotions,
              WSDisconnecting,
              WSTime,
              WSNegativeSelfTalk,
              WSNeglectingSelfCare,
              WSNightmares,
              WSRecklessBehavior,
              WSOther: value,
            };
            const result = onChange(modelFields);
            value = result?.WSOther ?? value;
          }
          if (errors.WSOther?.hasError) {
            runValidationTasks("WSOther", value);
          }
          setWSOther(value);
        }}
        onBlur={() => runValidationTasks("WSOther", WSOther)}
        errorMessage={errors.WSOther?.errorMessage}
        hasError={errors.WSOther?.hasError}
        {...getOverrideProps(overrides, "WSOther")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || createPlanModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || createPlanModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

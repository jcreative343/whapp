/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLogin = /* GraphQL */ `
  query GetLogin($id: ID!) {
    getLogin(id: $id) {
      id
      Email
      Password
      LoginDate
      LoginTime
      ProfileType
      GeneralInformation {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLogins = /* GraphQL */ `
  query ListLogins(
    $filter: ModelLoginFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Email
        Password
        LoginDate
        LoginTime
        ProfileType
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCreatePlan = /* GraphQL */ `
  query GetCreatePlan($id: ID!) {
    getCreatePlan(id: $id) {
      id
      userId
      PSProblemSolving
      PSSelfEsteem
      PSChoiceAutonomy
      PSSelfCare
      PSSelfAwareness
      PSCreativity
      CSForgiveness
      CSKindness
      CSGratitude
      CSPatience
      CSCourage
      CMSCopingChoice
      CMSResilience
      CMSSelfRegulation
      CMSOptimism
      COMSupportSystem
      COMSocialIntelligence
      COMCommunication
      COMFaithCommunity
      COMAccomplishments
      BRStableHousing
      BRQualityHealthcare
      BRProfessionalAccess
      BRInsuranceCoverage
      BRFinancialConstraints
      BREducationAttainment
      BRSocialStigma
      BRUnsupportiveCommunity
      BRNonexistentCommunity
      BRCommunityResources
      BRProfessionalTrust
      BRHealthcareSystemTrust
      BRCognitiveImpairments
      BRDependentCare
      BRTransportation
      BRTechnologyAccess
      BRLanguage
      BRHealthcareProcess
      BROther
      BRResponseNote
      TGBetrayal
      TGBoundaries
      TGDisorder
      TGPain
      TGRejection
      TGStress
      TGMemories
      TGUnjustTreatment
      TGUnpleasantConversations
      TGUnsafeEnvironments
      TGOther
      WSFlashbacks
      WSIncreasedAppetite
      WSDecreasedAppetite
      WSIntenseEmotions
      WSDisconnecting
      WSTime
      WSNegativeSelfTalk
      WSNeglectingSelfCare
      WSNightmares
      WSRecklessBehavior
      WSOther
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listCreatePlans = /* GraphQL */ `
  query ListCreatePlans(
    $filter: ModelCreatePlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreatePlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        PSProblemSolving
        PSSelfEsteem
        PSChoiceAutonomy
        PSSelfCare
        PSSelfAwareness
        PSCreativity
        CSForgiveness
        CSKindness
        CSGratitude
        CSPatience
        CSCourage
        CMSCopingChoice
        CMSResilience
        CMSSelfRegulation
        CMSOptimism
        COMSupportSystem
        COMSocialIntelligence
        COMCommunication
        COMFaithCommunity
        COMAccomplishments
        BRStableHousing
        BRQualityHealthcare
        BRProfessionalAccess
        BRInsuranceCoverage
        BRFinancialConstraints
        BREducationAttainment
        BRSocialStigma
        BRUnsupportiveCommunity
        BRNonexistentCommunity
        BRCommunityResources
        BRProfessionalTrust
        BRHealthcareSystemTrust
        BRCognitiveImpairments
        BRDependentCare
        BRTransportation
        BRTechnologyAccess
        BRLanguage
        BRHealthcareProcess
        BROther
        BRResponseNote
        TGBetrayal
        TGBoundaries
        TGDisorder
        TGPain
        TGRejection
        TGStress
        TGMemories
        TGUnjustTreatment
        TGUnpleasantConversations
        TGUnsafeEnvironments
        TGOther
        WSFlashbacks
        WSIncreasedAppetite
        WSDecreasedAppetite
        WSIntenseEmotions
        WSDisconnecting
        WSTime
        WSNegativeSelfTalk
        WSNeglectingSelfCare
        WSNightmares
        WSRecklessBehavior
        WSOther
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGeneralInformation = /* GraphQL */ `
  query GetGeneralInformation($id: ID!) {
    getGeneralInformation(id: $id) {
      id
      userId
      FirstName
      LastName
      Email
      ProfessionalRole
      BusinessName
      BusinessEIN
      BusinessCountry
      BusinessAddress
      BusinessCity
      BusinessState
      BusinessZipCode
      BusinessPhoneNumber
      BusinessWebsite
      OrganizationAdministrator
      OrganizationEmployee
      Department
      Service
      ProgramsUnit
      TrackPlan {
        nextToken
        __typename
      }
      AssessmentAnswers {
        nextToken
        __typename
      }
      ProfileType
      Login {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listGeneralInformations = /* GraphQL */ `
  query ListGeneralInformations(
    $filter: ModelGeneralInformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGeneralInformations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        FirstName
        LastName
        Email
        ProfessionalRole
        BusinessName
        BusinessEIN
        BusinessCountry
        BusinessAddress
        BusinessCity
        BusinessState
        BusinessZipCode
        BusinessPhoneNumber
        BusinessWebsite
        OrganizationAdministrator
        OrganizationEmployee
        Department
        Service
        ProgramsUnit
        ProfileType
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAssessmentAnswers = /* GraphQL */ `
  query GetAssessmentAnswers($id: ID!) {
    getAssessmentAnswers(id: $id) {
      id
      userId
      CompletedDate
      CompletedTime
      TRHurtfulNames
      TRNoNurturing
      TRHit
      TRNeedsNotMet
      TRForcedSex
      TRResponsible
      TRViolence
      TRSubstanceAbuse
      TRMentalIllness
      TRParentDivorce
      TRParentIncarcerated
      TRHomelessness
      TRBodyFunction
      TRNaturalDisaster
      TRDirectTerrorism
      TRIndirectTerrorism
      TRLovedOne
      TRBelief
      TRResponseProfessional
      TRResponseFamilyFriend
      TRResponseGod
      TRResponseNoOne
      TRNoTrauma
      CMAlcohol
      CMDrugs
      CMOvereating
      CMSmoking
      CMGaming
      CMShopping
      CMGambling
      CMSex
      CMPorn
      CMBlaming
      CMHurting
      CMDisengage
      CMArt
      CMMusic
      CMPoetry
      CMReading
      CMGroups
      CMCounseling
      CMVenting
      CMWriting
      CMSensory
      CMDancing
      CMExercising
      CMWalking
      CMChange
      CMAnalyze
      CMDaydream
      CMPositive
      MHDxPTSD
      MHDxDepression
      MHDxSUD
      MHDxOtherMental
      MHSleeplessness
      MHAlcoholUse
      MHAnxiety
      MHDepression
      MHDrugUse
      MHGrief
      MHGuilt
      MHIrritability
      MHStress
      MHRegret
      MHSuicidalThoughts
      MHLoneliness
      MHWorry
      PHDxInfertility
      PHDxCurableSTD
      PHDxIncurableSTD
      PHDxCancer
      PHDxDiabetes
      PHDxHighBlood
      PHDxHeartDisease
      PHDxIrritableBowel
      PHDxVitA
      PHDxVitB
      PHDxVitC
      PHDxVitD
      PHDxVitE
      PHDxVitK
      PHDxAutoimmune
      PHDxOtherPhysical
      PHVegeFruits
      PHBeanLentils
      PHGrainBreads
      PHDairy
      PHMeat
      PHFishSeafood
      PHSweets
      PHWater
      PHPhysicalActivity
      SHSpiritualDefine
      SHSpiritualIntegrate
      SHPrayer
      SHSpiritualActivity
      SHReadText
      SHAlignText
      SHCommunity
      OLHope
      OLPeace
      OLLearning
      OLJoy
      OLStable
      OLSafety
      OLKindness
      OLForgiveness
      OLPatience
      OLRelationships
      OLBoundaries
      OLEUnpleasant
      OLEPleasant
      OLEControl
      OLENumber
      SDoHAgeRange
      SDoHRace
      SDoHGeographicRegion
      SDoHEthnicity
      SDoHState
      SDoHZipCode
      SDoHMaritalStatus
      SDoHMilitaryStatus
      SDoHGender
      SDoHEducation
      SDoHJobStatus
      SDoHIncome
      SDoHHousingStatus
      SDoHHomeAsChild
      TrackPlan {
        nextToken
        __typename
      }
      GeneralInformation {
        nextToken
        __typename
      }
      SDoHReligion
      SDoHDenomination
      isActive
      SHSkip
      ProAssessmentFinalizedReview1
      ProAssessmentFinalizedReviewDate1
      ProAssessmentFinalizedName1
      ProAssessmentFinalizedRole1
      ProAssessmentFinalizedReview2
      ProAssessmentFinalizedReviewDate2
      ProAssessmentFinalizedName2
      ProAssessmentFinalizedRole2
      ProAssessmentFinalizedReview3
      ProAssessmentFinalizedReviewDate3
      ProAssessmentFinalizedName3
      ProAssessmentFinalizedRole3
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listAssessmentAnswers = /* GraphQL */ `
  query ListAssessmentAnswers(
    $filter: ModelAssessmentAnswersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssessmentAnswers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        CompletedDate
        CompletedTime
        TRHurtfulNames
        TRNoNurturing
        TRHit
        TRNeedsNotMet
        TRForcedSex
        TRResponsible
        TRViolence
        TRSubstanceAbuse
        TRMentalIllness
        TRParentDivorce
        TRParentIncarcerated
        TRHomelessness
        TRBodyFunction
        TRNaturalDisaster
        TRDirectTerrorism
        TRIndirectTerrorism
        TRLovedOne
        TRBelief
        TRResponseProfessional
        TRResponseFamilyFriend
        TRResponseGod
        TRResponseNoOne
        TRNoTrauma
        CMAlcohol
        CMDrugs
        CMOvereating
        CMSmoking
        CMGaming
        CMShopping
        CMGambling
        CMSex
        CMPorn
        CMBlaming
        CMHurting
        CMDisengage
        CMArt
        CMMusic
        CMPoetry
        CMReading
        CMGroups
        CMCounseling
        CMVenting
        CMWriting
        CMSensory
        CMDancing
        CMExercising
        CMWalking
        CMChange
        CMAnalyze
        CMDaydream
        CMPositive
        MHDxPTSD
        MHDxDepression
        MHDxSUD
        MHDxOtherMental
        MHSleeplessness
        MHAlcoholUse
        MHAnxiety
        MHDepression
        MHDrugUse
        MHGrief
        MHGuilt
        MHIrritability
        MHStress
        MHRegret
        MHSuicidalThoughts
        MHLoneliness
        MHWorry
        PHDxInfertility
        PHDxCurableSTD
        PHDxIncurableSTD
        PHDxCancer
        PHDxDiabetes
        PHDxHighBlood
        PHDxHeartDisease
        PHDxIrritableBowel
        PHDxVitA
        PHDxVitB
        PHDxVitC
        PHDxVitD
        PHDxVitE
        PHDxVitK
        PHDxAutoimmune
        PHDxOtherPhysical
        PHVegeFruits
        PHBeanLentils
        PHGrainBreads
        PHDairy
        PHMeat
        PHFishSeafood
        PHSweets
        PHWater
        PHPhysicalActivity
        SHSpiritualDefine
        SHSpiritualIntegrate
        SHPrayer
        SHSpiritualActivity
        SHReadText
        SHAlignText
        SHCommunity
        OLHope
        OLPeace
        OLLearning
        OLJoy
        OLStable
        OLSafety
        OLKindness
        OLForgiveness
        OLPatience
        OLRelationships
        OLBoundaries
        OLEUnpleasant
        OLEPleasant
        OLEControl
        OLENumber
        SDoHAgeRange
        SDoHRace
        SDoHGeographicRegion
        SDoHEthnicity
        SDoHState
        SDoHZipCode
        SDoHMaritalStatus
        SDoHMilitaryStatus
        SDoHGender
        SDoHEducation
        SDoHJobStatus
        SDoHIncome
        SDoHHousingStatus
        SDoHHomeAsChild
        SDoHReligion
        SDoHDenomination
        isActive
        SHSkip
        ProAssessmentFinalizedReview1
        ProAssessmentFinalizedReviewDate1
        ProAssessmentFinalizedName1
        ProAssessmentFinalizedRole1
        ProAssessmentFinalizedReview2
        ProAssessmentFinalizedReviewDate2
        ProAssessmentFinalizedName2
        ProAssessmentFinalizedRole2
        ProAssessmentFinalizedReview3
        ProAssessmentFinalizedReviewDate3
        ProAssessmentFinalizedName3
        ProAssessmentFinalizedRole3
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAssessmentScores = /* GraphQL */ `
  query GetAssessmentScores($id: ID!) {
    getAssessmentScores(id: $id) {
      id
      userId
      CompletedDate
      CompletedTime
      TRHurtfulNames
      TRNoNurturing
      TRHit
      TRNeedsNotMet
      TRForcedSex
      TRResponsible
      TRViolence
      TRSubstanceAbuse
      TRMentalIllness
      TRParentDivorce
      TRParentIncarcerated
      TRHomelessness
      TRBodyFunction
      TRNaturalDisaster
      TRDirectTerrorism
      TRIndirectTerrorism
      TRLovedOne
      TRBelief
      TRResponseProfessional
      TRResponseFamilyFriend
      TRResponseGod
      TRResponseNoOne
      TRNoTrauma
      CMAlcohol
      CMDrugs
      CMOvereating
      CMSmoking
      CMGaming
      CMShopping
      CMGambling
      CMSex
      CMPorn
      CMBlaming
      CMHurting
      CMDisengage
      CMArt
      CMMusic
      CMPoetry
      CMReading
      CMGroups
      CMCounseling
      CMVenting
      CMWriting
      CMSensory
      CMDancing
      CMExercising
      CMWalking
      CMChange
      CMAnalyze
      CMDaydream
      CMPositive
      MHDxPTSD
      MHDxDepression
      MHDxSUD
      MHDxOtherMental
      MHSleeplessness
      MHAlcoholUse
      MHAnxiety
      MHDepression
      MHDrugUse
      MHGrief
      MHGuilt
      MHIrritability
      MHStress
      MHRegret
      MHSuicidalThoughts
      MHLoneliness
      MHWorry
      PHDxInfertility
      PHDxCurableSTD
      PHDxIncurableSTD
      PHDxCancer
      PHDxDiabetes
      PHDxHighBlood
      PHDxHeartDisease
      PHDxIrritableBowel
      PHDxVitA
      PHDxVitB
      PHDxVitC
      PHDxVitD
      PHDxVitE
      PHDxVitK
      PHDxAutoimmune
      PHDxOtherPhysical
      PHVegeFruits
      PHBeanLentils
      PHGrainBreads
      PHDairy
      PHMeat
      PHFishSeafood
      PHSweets
      PHWater
      PHPhysicalActivity
      SHSpiritualDefine
      SHSpiritualIntegrate
      SHPrayer
      SHSpiritualActivity
      SHReadText
      SHAlignText
      SHCommunity
      OLHope
      OLPeace
      OLLearning
      OLJoy
      OLStable
      OLSafety
      OLKindness
      OLForgiveness
      OLPatience
      OLRelationships
      OLBoundaries
      OLEUnpleasant
      OLEPleasant
      OLEControl
      OLENumber
      SDoHAgeRange
      SDoHRace
      SDoHGeographicRegion
      SDoHEthnicity
      SDoHState
      SDoHZipCode
      SDoHMaritalStatus
      SDoHMilitaryStatus
      SDoHGender
      SDoHEducation
      SDoHJobStatus
      SDoHIncome
      SDoHHousingStatus
      SDoHHomeAsChild
      SDoHReligion
      SDoHDenomination
      TRScore
      CMScore
      MHScore
      PHScore
      SHScore
      OLScore
      isActive
      SHSkip
      ProAssessmentFinalizedReview1
      ProAssessmentFinalizedReviewDate1
      ProAssessmentFinalizedName1
      ProAssessmentFinalizedRole1
      ProAssessmentFinalizedReview2
      ProAssessmentFinalizedReviewDate2
      ProAssessmentFinalizedName2
      ProAssessmentFinalizedRole2
      ProAssessmentFinalizedReview3
      ProAssessmentFinalizedReviewDate3
      ProAssessmentFinalizedName3
      ProAssessmentFinalizedRole3
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listAssessmentScores = /* GraphQL */ `
  query ListAssessmentScores(
    $filter: ModelAssessmentScoresFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssessmentScores(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        CompletedDate
        CompletedTime
        TRHurtfulNames
        TRNoNurturing
        TRHit
        TRNeedsNotMet
        TRForcedSex
        TRResponsible
        TRViolence
        TRSubstanceAbuse
        TRMentalIllness
        TRParentDivorce
        TRParentIncarcerated
        TRHomelessness
        TRBodyFunction
        TRNaturalDisaster
        TRDirectTerrorism
        TRIndirectTerrorism
        TRLovedOne
        TRBelief
        TRResponseProfessional
        TRResponseFamilyFriend
        TRResponseGod
        TRResponseNoOne
        TRNoTrauma
        CMAlcohol
        CMDrugs
        CMOvereating
        CMSmoking
        CMGaming
        CMShopping
        CMGambling
        CMSex
        CMPorn
        CMBlaming
        CMHurting
        CMDisengage
        CMArt
        CMMusic
        CMPoetry
        CMReading
        CMGroups
        CMCounseling
        CMVenting
        CMWriting
        CMSensory
        CMDancing
        CMExercising
        CMWalking
        CMChange
        CMAnalyze
        CMDaydream
        CMPositive
        MHDxPTSD
        MHDxDepression
        MHDxSUD
        MHDxOtherMental
        MHSleeplessness
        MHAlcoholUse
        MHAnxiety
        MHDepression
        MHDrugUse
        MHGrief
        MHGuilt
        MHIrritability
        MHStress
        MHRegret
        MHSuicidalThoughts
        MHLoneliness
        MHWorry
        PHDxInfertility
        PHDxCurableSTD
        PHDxIncurableSTD
        PHDxCancer
        PHDxDiabetes
        PHDxHighBlood
        PHDxHeartDisease
        PHDxIrritableBowel
        PHDxVitA
        PHDxVitB
        PHDxVitC
        PHDxVitD
        PHDxVitE
        PHDxVitK
        PHDxAutoimmune
        PHDxOtherPhysical
        PHVegeFruits
        PHBeanLentils
        PHGrainBreads
        PHDairy
        PHMeat
        PHFishSeafood
        PHSweets
        PHWater
        PHPhysicalActivity
        SHSpiritualDefine
        SHSpiritualIntegrate
        SHPrayer
        SHSpiritualActivity
        SHReadText
        SHAlignText
        SHCommunity
        OLHope
        OLPeace
        OLLearning
        OLJoy
        OLStable
        OLSafety
        OLKindness
        OLForgiveness
        OLPatience
        OLRelationships
        OLBoundaries
        OLEUnpleasant
        OLEPleasant
        OLEControl
        OLENumber
        SDoHAgeRange
        SDoHRace
        SDoHGeographicRegion
        SDoHEthnicity
        SDoHState
        SDoHZipCode
        SDoHMaritalStatus
        SDoHMilitaryStatus
        SDoHGender
        SDoHEducation
        SDoHJobStatus
        SDoHIncome
        SDoHHousingStatus
        SDoHHomeAsChild
        SDoHReligion
        SDoHDenomination
        TRScore
        CMScore
        MHScore
        PHScore
        SHScore
        OLScore
        isActive
        SHSkip
        ProAssessmentFinalizedReview1
        ProAssessmentFinalizedReviewDate1
        ProAssessmentFinalizedName1
        ProAssessmentFinalizedRole1
        ProAssessmentFinalizedReview2
        ProAssessmentFinalizedReviewDate2
        ProAssessmentFinalizedName2
        ProAssessmentFinalizedRole2
        ProAssessmentFinalizedReview3
        ProAssessmentFinalizedReviewDate3
        ProAssessmentFinalizedName3
        ProAssessmentFinalizedRole3
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTrackPlan = /* GraphQL */ `
  query GetTrackPlan($id: ID!) {
    getTrackPlan(id: $id) {
      id
      userId
      CompletedDate
      CompletedTime
      ActionDomain
      ActionQuestion
      Action
      Frequency
      ActionNote
      Update1Points
      Update1Note
      Update1Date
      Update2Points
      Update2Note
      Update2Date
      Update3Points
      Update3Note
      Update3Date
      Update4Points
      Update4Note
      Update4Date
      Update5Points
      Update5Note
      Update5Date
      Update6Points
      Update6Note
      Update6Date
      Update7Points
      Update7Note
      Update7Date
      Update8Points
      Update8Note
      Update8Date
      Percentage
      Discontinued
      DiscontinuedDate
      Successful
      SuccessfulDate
      AssessmentAnswers {
        nextToken
        __typename
      }
      GeneralInformation {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listTrackPlans = /* GraphQL */ `
  query ListTrackPlans(
    $filter: ModelTrackPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrackPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        CompletedDate
        CompletedTime
        ActionDomain
        ActionQuestion
        Action
        Frequency
        ActionNote
        Update1Points
        Update1Note
        Update1Date
        Update2Points
        Update2Note
        Update2Date
        Update3Points
        Update3Note
        Update3Date
        Update4Points
        Update4Note
        Update4Date
        Update5Points
        Update5Note
        Update5Date
        Update6Points
        Update6Note
        Update6Date
        Update7Points
        Update7Note
        Update7Date
        Update8Points
        Update8Note
        Update8Date
        Percentage
        Discontinued
        DiscontinuedDate
        Successful
        SuccessfulDate
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getConnectionRequest = /* GraphQL */ `
  query GetConnectionRequest($id: ID!) {
    getConnectionRequest(id: $id) {
      id
      requesterId
      requesterFirstName
      requesterLastName
      requesterEmail
      targetEmail
      status
      direction
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listConnectionRequests = /* GraphQL */ `
  query ListConnectionRequests(
    $filter: ModelConnectionRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConnectionRequests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        requesterId
        requesterFirstName
        requesterLastName
        requesterEmail
        targetEmail
        status
        direction
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserLink = /* GraphQL */ `
  query GetUserLink($id: ID!) {
    getUserLink(id: $id) {
      id
      professionalId
      professionalEmail
      professionalFirstName
      professionalLastName
      clientId
      clientEmail
      clientFirstName
      clientLastName
      clientViewable
      subscriptionId
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listUserLinks = /* GraphQL */ `
  query ListUserLinks(
    $filter: ModelUserLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        professionalId
        professionalEmail
        professionalFirstName
        professionalLastName
        clientId
        clientEmail
        clientFirstName
        clientLastName
        clientViewable
        subscriptionId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrganizationInformation = /* GraphQL */ `
  query GetOrganizationInformation($id: ID!) {
    getOrganizationInformation(id: $id) {
      id
      userId
      BusinessName
      BusinessEIN
      BusinessCountry
      BusinessAddress
      BusinessCity
      BusinessState
      BusinessZipCode
      BusinessPhoneNumber
      BusinessWebsite
      Departments
      ProgramsUnits
      Services
      clientsServed
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listOrganizationInformations = /* GraphQL */ `
  query ListOrganizationInformations(
    $filter: ModelOrganizationInformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizationInformations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        BusinessName
        BusinessEIN
        BusinessCountry
        BusinessAddress
        BusinessCity
        BusinessState
        BusinessZipCode
        BusinessPhoneNumber
        BusinessWebsite
        Departments
        ProgramsUnits
        Services
        clientsServed
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrganizationCPs = /* GraphQL */ `
  query GetOrganizationCPs($id: ID!) {
    getOrganizationCPs(id: $id) {
      id
      OrganizationId
      OrganizationCPFirstName
      OrganizationCPLastName
      OrganizationCPEmail
      OrganizationCPRole
      primaryDepartment
      primaryProgramsUnit
      primaryService
      OrganizationAdministrator
      PrimaryOrganizationAdministrator
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listOrganizationCPs = /* GraphQL */ `
  query ListOrganizationCPs(
    $filter: ModelOrganizationCPsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizationCPs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        OrganizationId
        OrganizationCPFirstName
        OrganizationCPLastName
        OrganizationCPEmail
        OrganizationCPRole
        primaryDepartment
        primaryProgramsUnit
        primaryService
        OrganizationAdministrator
        PrimaryOrganizationAdministrator
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNotifications = /* GraphQL */ `
  query GetNotifications($id: ID!) {
    getNotifications(id: $id) {
      id
      RecommedationResult
      RecommedationAction
      RecommedationActionFrequency
      RecommedationType
      RecommedationNote
      RecommendationDate
      SenderId
      SenderFirstName
      SenderLastName
      SenderEmail
      TargetEmail
      NotificationType
      StatusDate
      Status
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        RecommedationResult
        RecommedationAction
        RecommedationActionFrequency
        RecommedationType
        RecommedationNote
        RecommendationDate
        SenderId
        SenderFirstName
        SenderLastName
        SenderEmail
        TargetEmail
        NotificationType
        StatusDate
        Status
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserPayments = /* GraphQL */ `
  query GetUserPayments($id: ID!) {
    getUserPayments(id: $id) {
      id
      userId
      organizationId
      organizationName
      paymentType
      subscriptionId
      paymentStatus
      clientsProjected
      costPerClient
      couponCode
      couponPercent
      paidUntil
      paymentFor
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listUserPayments = /* GraphQL */ `
  query ListUserPayments(
    $filter: ModelUserPaymentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        organizationId
        organizationName
        paymentType
        subscriptionId
        paymentStatus
        clientsProjected
        costPerClient
        couponCode
        couponPercent
        paidUntil
        paymentFor
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCoupon = /* GraphQL */ `
  query GetCoupon($id: ID!) {
    getCoupon(id: $id) {
      id
      type
      value
      isActive
      maxUses
      timesUsed
      expiresAt
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listCoupons = /* GraphQL */ `
  query ListCoupons(
    $filter: ModelCouponFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoupons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        value
        isActive
        maxUses
        timesUsed
        expiresAt
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProfessionalReviews = /* GraphQL */ `
  query GetProfessionalReviews($id: ID!) {
    getProfessionalReviews(id: $id) {
      id
      ReviewedId
      ReviewType
      ProfessionalName
      ProfessionalRole
      ReviewDate
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listProfessionalReviews = /* GraphQL */ `
  query ListProfessionalReviews(
    $filter: ModelProfessionalReviewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfessionalReviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ReviewedId
        ReviewType
        ProfessionalName
        ProfessionalRole
        ReviewDate
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLoginGeneralInformation = /* GraphQL */ `
  query GetLoginGeneralInformation($id: ID!) {
    getLoginGeneralInformation(id: $id) {
      id
      loginId
      generalInformationId
      login {
        id
        Email
        Password
        LoginDate
        LoginTime
        ProfileType
        createdAt
        updatedAt
        __typename
      }
      generalInformation {
        id
        userId
        FirstName
        LastName
        Email
        ProfessionalRole
        BusinessName
        BusinessEIN
        BusinessCountry
        BusinessAddress
        BusinessCity
        BusinessState
        BusinessZipCode
        BusinessPhoneNumber
        BusinessWebsite
        OrganizationAdministrator
        OrganizationEmployee
        Department
        Service
        ProgramsUnit
        ProfileType
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listLoginGeneralInformations = /* GraphQL */ `
  query ListLoginGeneralInformations(
    $filter: ModelLoginGeneralInformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLoginGeneralInformations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        loginId
        generalInformationId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const loginGeneralInformationsByLoginId = /* GraphQL */ `
  query LoginGeneralInformationsByLoginId(
    $loginId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLoginGeneralInformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    loginGeneralInformationsByLoginId(
      loginId: $loginId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        loginId
        generalInformationId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const loginGeneralInformationsByGeneralInformationId = /* GraphQL */ `
  query LoginGeneralInformationsByGeneralInformationId(
    $generalInformationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLoginGeneralInformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    loginGeneralInformationsByGeneralInformationId(
      generalInformationId: $generalInformationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        loginId
        generalInformationId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGeneralInformationTrackPlan = /* GraphQL */ `
  query GetGeneralInformationTrackPlan($id: ID!) {
    getGeneralInformationTrackPlan(id: $id) {
      id
      generalInformationId
      trackPlanId
      generalInformation {
        id
        userId
        FirstName
        LastName
        Email
        ProfessionalRole
        BusinessName
        BusinessEIN
        BusinessCountry
        BusinessAddress
        BusinessCity
        BusinessState
        BusinessZipCode
        BusinessPhoneNumber
        BusinessWebsite
        OrganizationAdministrator
        OrganizationEmployee
        Department
        Service
        ProgramsUnit
        ProfileType
        createdAt
        updatedAt
        owner
        __typename
      }
      trackPlan {
        id
        userId
        CompletedDate
        CompletedTime
        ActionDomain
        ActionQuestion
        Action
        Frequency
        ActionNote
        Update1Points
        Update1Note
        Update1Date
        Update2Points
        Update2Note
        Update2Date
        Update3Points
        Update3Note
        Update3Date
        Update4Points
        Update4Note
        Update4Date
        Update5Points
        Update5Note
        Update5Date
        Update6Points
        Update6Note
        Update6Date
        Update7Points
        Update7Note
        Update7Date
        Update8Points
        Update8Note
        Update8Date
        Percentage
        Discontinued
        DiscontinuedDate
        Successful
        SuccessfulDate
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listGeneralInformationTrackPlans = /* GraphQL */ `
  query ListGeneralInformationTrackPlans(
    $filter: ModelGeneralInformationTrackPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGeneralInformationTrackPlans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        generalInformationId
        trackPlanId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const generalInformationTrackPlansByGeneralInformationId = /* GraphQL */ `
  query GeneralInformationTrackPlansByGeneralInformationId(
    $generalInformationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGeneralInformationTrackPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    generalInformationTrackPlansByGeneralInformationId(
      generalInformationId: $generalInformationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        generalInformationId
        trackPlanId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const generalInformationTrackPlansByTrackPlanId = /* GraphQL */ `
  query GeneralInformationTrackPlansByTrackPlanId(
    $trackPlanId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGeneralInformationTrackPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    generalInformationTrackPlansByTrackPlanId(
      trackPlanId: $trackPlanId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        generalInformationId
        trackPlanId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGeneralInformationAssessmentAnswers = /* GraphQL */ `
  query GetGeneralInformationAssessmentAnswers($id: ID!) {
    getGeneralInformationAssessmentAnswers(id: $id) {
      id
      generalInformationId
      assessmentAnswersId
      generalInformation {
        id
        userId
        FirstName
        LastName
        Email
        ProfessionalRole
        BusinessName
        BusinessEIN
        BusinessCountry
        BusinessAddress
        BusinessCity
        BusinessState
        BusinessZipCode
        BusinessPhoneNumber
        BusinessWebsite
        OrganizationAdministrator
        OrganizationEmployee
        Department
        Service
        ProgramsUnit
        ProfileType
        createdAt
        updatedAt
        owner
        __typename
      }
      assessmentAnswers {
        id
        userId
        CompletedDate
        CompletedTime
        TRHurtfulNames
        TRNoNurturing
        TRHit
        TRNeedsNotMet
        TRForcedSex
        TRResponsible
        TRViolence
        TRSubstanceAbuse
        TRMentalIllness
        TRParentDivorce
        TRParentIncarcerated
        TRHomelessness
        TRBodyFunction
        TRNaturalDisaster
        TRDirectTerrorism
        TRIndirectTerrorism
        TRLovedOne
        TRBelief
        TRResponseProfessional
        TRResponseFamilyFriend
        TRResponseGod
        TRResponseNoOne
        TRNoTrauma
        CMAlcohol
        CMDrugs
        CMOvereating
        CMSmoking
        CMGaming
        CMShopping
        CMGambling
        CMSex
        CMPorn
        CMBlaming
        CMHurting
        CMDisengage
        CMArt
        CMMusic
        CMPoetry
        CMReading
        CMGroups
        CMCounseling
        CMVenting
        CMWriting
        CMSensory
        CMDancing
        CMExercising
        CMWalking
        CMChange
        CMAnalyze
        CMDaydream
        CMPositive
        MHDxPTSD
        MHDxDepression
        MHDxSUD
        MHDxOtherMental
        MHSleeplessness
        MHAlcoholUse
        MHAnxiety
        MHDepression
        MHDrugUse
        MHGrief
        MHGuilt
        MHIrritability
        MHStress
        MHRegret
        MHSuicidalThoughts
        MHLoneliness
        MHWorry
        PHDxInfertility
        PHDxCurableSTD
        PHDxIncurableSTD
        PHDxCancer
        PHDxDiabetes
        PHDxHighBlood
        PHDxHeartDisease
        PHDxIrritableBowel
        PHDxVitA
        PHDxVitB
        PHDxVitC
        PHDxVitD
        PHDxVitE
        PHDxVitK
        PHDxAutoimmune
        PHDxOtherPhysical
        PHVegeFruits
        PHBeanLentils
        PHGrainBreads
        PHDairy
        PHMeat
        PHFishSeafood
        PHSweets
        PHWater
        PHPhysicalActivity
        SHSpiritualDefine
        SHSpiritualIntegrate
        SHPrayer
        SHSpiritualActivity
        SHReadText
        SHAlignText
        SHCommunity
        OLHope
        OLPeace
        OLLearning
        OLJoy
        OLStable
        OLSafety
        OLKindness
        OLForgiveness
        OLPatience
        OLRelationships
        OLBoundaries
        OLEUnpleasant
        OLEPleasant
        OLEControl
        OLENumber
        SDoHAgeRange
        SDoHRace
        SDoHGeographicRegion
        SDoHEthnicity
        SDoHState
        SDoHZipCode
        SDoHMaritalStatus
        SDoHMilitaryStatus
        SDoHGender
        SDoHEducation
        SDoHJobStatus
        SDoHIncome
        SDoHHousingStatus
        SDoHHomeAsChild
        SDoHReligion
        SDoHDenomination
        isActive
        SHSkip
        ProAssessmentFinalizedReview1
        ProAssessmentFinalizedReviewDate1
        ProAssessmentFinalizedName1
        ProAssessmentFinalizedRole1
        ProAssessmentFinalizedReview2
        ProAssessmentFinalizedReviewDate2
        ProAssessmentFinalizedName2
        ProAssessmentFinalizedRole2
        ProAssessmentFinalizedReview3
        ProAssessmentFinalizedReviewDate3
        ProAssessmentFinalizedName3
        ProAssessmentFinalizedRole3
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listGeneralInformationAssessmentAnswers = /* GraphQL */ `
  query ListGeneralInformationAssessmentAnswers(
    $filter: ModelGeneralInformationAssessmentAnswersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGeneralInformationAssessmentAnswers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        generalInformationId
        assessmentAnswersId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const generalInformationAssessmentAnswersByGeneralInformationId = /* GraphQL */ `
  query GeneralInformationAssessmentAnswersByGeneralInformationId(
    $generalInformationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGeneralInformationAssessmentAnswersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    generalInformationAssessmentAnswersByGeneralInformationId(
      generalInformationId: $generalInformationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        generalInformationId
        assessmentAnswersId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const generalInformationAssessmentAnswersByAssessmentAnswersId = /* GraphQL */ `
  query GeneralInformationAssessmentAnswersByAssessmentAnswersId(
    $assessmentAnswersId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGeneralInformationAssessmentAnswersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    generalInformationAssessmentAnswersByAssessmentAnswersId(
      assessmentAnswersId: $assessmentAnswersId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        generalInformationId
        assessmentAnswersId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAssessmentAnswersTrackPlan = /* GraphQL */ `
  query GetAssessmentAnswersTrackPlan($id: ID!) {
    getAssessmentAnswersTrackPlan(id: $id) {
      id
      assessmentAnswersId
      trackPlanId
      assessmentAnswers {
        id
        userId
        CompletedDate
        CompletedTime
        TRHurtfulNames
        TRNoNurturing
        TRHit
        TRNeedsNotMet
        TRForcedSex
        TRResponsible
        TRViolence
        TRSubstanceAbuse
        TRMentalIllness
        TRParentDivorce
        TRParentIncarcerated
        TRHomelessness
        TRBodyFunction
        TRNaturalDisaster
        TRDirectTerrorism
        TRIndirectTerrorism
        TRLovedOne
        TRBelief
        TRResponseProfessional
        TRResponseFamilyFriend
        TRResponseGod
        TRResponseNoOne
        TRNoTrauma
        CMAlcohol
        CMDrugs
        CMOvereating
        CMSmoking
        CMGaming
        CMShopping
        CMGambling
        CMSex
        CMPorn
        CMBlaming
        CMHurting
        CMDisengage
        CMArt
        CMMusic
        CMPoetry
        CMReading
        CMGroups
        CMCounseling
        CMVenting
        CMWriting
        CMSensory
        CMDancing
        CMExercising
        CMWalking
        CMChange
        CMAnalyze
        CMDaydream
        CMPositive
        MHDxPTSD
        MHDxDepression
        MHDxSUD
        MHDxOtherMental
        MHSleeplessness
        MHAlcoholUse
        MHAnxiety
        MHDepression
        MHDrugUse
        MHGrief
        MHGuilt
        MHIrritability
        MHStress
        MHRegret
        MHSuicidalThoughts
        MHLoneliness
        MHWorry
        PHDxInfertility
        PHDxCurableSTD
        PHDxIncurableSTD
        PHDxCancer
        PHDxDiabetes
        PHDxHighBlood
        PHDxHeartDisease
        PHDxIrritableBowel
        PHDxVitA
        PHDxVitB
        PHDxVitC
        PHDxVitD
        PHDxVitE
        PHDxVitK
        PHDxAutoimmune
        PHDxOtherPhysical
        PHVegeFruits
        PHBeanLentils
        PHGrainBreads
        PHDairy
        PHMeat
        PHFishSeafood
        PHSweets
        PHWater
        PHPhysicalActivity
        SHSpiritualDefine
        SHSpiritualIntegrate
        SHPrayer
        SHSpiritualActivity
        SHReadText
        SHAlignText
        SHCommunity
        OLHope
        OLPeace
        OLLearning
        OLJoy
        OLStable
        OLSafety
        OLKindness
        OLForgiveness
        OLPatience
        OLRelationships
        OLBoundaries
        OLEUnpleasant
        OLEPleasant
        OLEControl
        OLENumber
        SDoHAgeRange
        SDoHRace
        SDoHGeographicRegion
        SDoHEthnicity
        SDoHState
        SDoHZipCode
        SDoHMaritalStatus
        SDoHMilitaryStatus
        SDoHGender
        SDoHEducation
        SDoHJobStatus
        SDoHIncome
        SDoHHousingStatus
        SDoHHomeAsChild
        SDoHReligion
        SDoHDenomination
        isActive
        SHSkip
        ProAssessmentFinalizedReview1
        ProAssessmentFinalizedReviewDate1
        ProAssessmentFinalizedName1
        ProAssessmentFinalizedRole1
        ProAssessmentFinalizedReview2
        ProAssessmentFinalizedReviewDate2
        ProAssessmentFinalizedName2
        ProAssessmentFinalizedRole2
        ProAssessmentFinalizedReview3
        ProAssessmentFinalizedReviewDate3
        ProAssessmentFinalizedName3
        ProAssessmentFinalizedRole3
        createdAt
        updatedAt
        owner
        __typename
      }
      trackPlan {
        id
        userId
        CompletedDate
        CompletedTime
        ActionDomain
        ActionQuestion
        Action
        Frequency
        ActionNote
        Update1Points
        Update1Note
        Update1Date
        Update2Points
        Update2Note
        Update2Date
        Update3Points
        Update3Note
        Update3Date
        Update4Points
        Update4Note
        Update4Date
        Update5Points
        Update5Note
        Update5Date
        Update6Points
        Update6Note
        Update6Date
        Update7Points
        Update7Note
        Update7Date
        Update8Points
        Update8Note
        Update8Date
        Percentage
        Discontinued
        DiscontinuedDate
        Successful
        SuccessfulDate
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listAssessmentAnswersTrackPlans = /* GraphQL */ `
  query ListAssessmentAnswersTrackPlans(
    $filter: ModelAssessmentAnswersTrackPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssessmentAnswersTrackPlans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assessmentAnswersId
        trackPlanId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const assessmentAnswersTrackPlansByAssessmentAnswersId = /* GraphQL */ `
  query AssessmentAnswersTrackPlansByAssessmentAnswersId(
    $assessmentAnswersId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAssessmentAnswersTrackPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assessmentAnswersTrackPlansByAssessmentAnswersId(
      assessmentAnswersId: $assessmentAnswersId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assessmentAnswersId
        trackPlanId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const assessmentAnswersTrackPlansByTrackPlanId = /* GraphQL */ `
  query AssessmentAnswersTrackPlansByTrackPlanId(
    $trackPlanId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAssessmentAnswersTrackPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assessmentAnswersTrackPlansByTrackPlanId(
      trackPlanId: $trackPlanId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assessmentAnswersId
        trackPlanId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;

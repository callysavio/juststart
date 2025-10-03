import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Remove BrowserRouter

import LaunchSplashScreen from './pages/LaunchSplashScreen';
import IntroScreen from './pages/IntroScreen';
import UserExperienceLevelSelection from './pages/UserExperienceLevelSelection';
import UserProfessionalDetailsForm from './pages/UserProfessionalDetailsForm';
import DataProcessingPlaceholderBufferScreen from './pages/DataProcessingPlaceholderBufferScreen';
import PreliminaryAnalysis from './pages/PreliminaryAnalysis';
import PreSignUpPopUp from './pages/PreSignUpPopUp';
import SignUpScreen from './pages/SignUpScreen';
import IntroScreen1 from './pages/IntroScreen1';
import PrefilledDataForm from './pages/PrefilledDataForm';
import FinalOnboardingSplashScreen from './pages/FinalOnboardingSplashScreen';
import PayWallScreen from './pages/PayWallScreen';
import HomePageSkillsUserSpecific from './pages/HomePageSkillsUserSpecific';
import SkillsCard from './pages/SkillsCard';
import HomePageOptionsJobOptions from './pages/HomePageOptionsJobOptions';
import JobsCard from './pages/JobsCard';
import JobSkillsDetail from './pages/JobSkillsDetail';
import JobSkillsDetail1 from './pages/JobSkillsDetail1';
import ExplorePopUp from './pages/ExplorePopUp';
import OpportunitiesSkills from './pages/OpportunitiesSkills';
import OpportunitiesJobs from './pages/OpportunitiesJobs';
import OpportunitiesJobs1 from './pages/OpportunitiesJobs1';
import SelectWorkExperience from './pages/SelectWorkExperience';
import UserProfile from './pages/UserProfile';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LaunchSplashScreen />} />
        <Route path="/launchsplashscreen" element={<LaunchSplashScreen />} />
        <Route path="/introscreen" element={<IntroScreen />} />
        <Route path="/userexperiencelevelselection" element={<UserExperienceLevelSelection />} />
        <Route path="/userprofessionaldetailsform" element={<UserProfessionalDetailsForm />} />
        <Route path="/dataprocessingplaceholderbufferscreen" element={<DataProcessingPlaceholderBufferScreen />} />
        <Route path="/preliminaryanalysis" element={<PreliminaryAnalysis />} />
        <Route path="/presignuppopup" element={<PreSignUpPopUp />} />
        <Route path="/signupscreen" element={<SignUpScreen />} />
        <Route path="/introscreen1" element={<IntroScreen1 />} />
        <Route path="/prefilleddataform" element={<PrefilledDataForm />} />
        <Route path="/finalonboardingsplashscreen" element={<FinalOnboardingSplashScreen />} />
        <Route path="/paywallscreen" element={<PayWallScreen />} />
        <Route path="/homepageskillsuserspecific" element={<HomePageSkillsUserSpecific />} />
        <Route path="/skillscard" element={<SkillsCard />} />
        <Route path="/homepageoptionsjoboptions" element={<HomePageOptionsJobOptions />} />
        <Route path="/jobscard" element={<JobsCard />} />
        <Route path="/jobskillsdetail" element={<JobSkillsDetail />} />
        <Route path="/jobskillsdetail1" element={<JobSkillsDetail1 />} />
        <Route path="/explorepopup" element={<ExplorePopUp />} />
        <Route path="/opportunitiesskills" element={<OpportunitiesSkills />} />
        <Route path="/opportunitiesjobs" element={<OpportunitiesJobs />} />
        <Route path="/opportunitiesjobs1" element={<OpportunitiesJobs1 />} />
        <Route path="/selectworkexperience" element={<SelectWorkExperience />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;

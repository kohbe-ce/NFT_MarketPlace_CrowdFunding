import React, { useEffect, useContext, useState } from "react";

//INTERNAL IMPORT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
import {
  Hero,
  CrowdFundingCard,
  PupUp,
  Footer,
} from "../CrowdFundingPage/crowdFundungIndex";
const crowdFunding = () => {
  const {
    fundtitleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
    gasLimit,
  } = useContext(NFTMarketplaceContext);

  const [allcampaign, setAllcampaign] = useState();
  const [usercampaign, setUsercampaign] = useState();

  useEffect(() => {
    const getCampaignsData = getCampaigns();
    const userCampaignsData = getUserCampaigns();
    return async () => {
      const allData = await getCampaignsData;
      const userData = await userCampaignsData;
      setAllcampaign(allData);
      setUsercampaign(userData);
    };
  }, []);

  //DONATE POPUP MODEL
  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  console.log(donateCampaign);
  return (
    <>
      <Hero fundtitleData={fundtitleData} createCampaign={createCampaign} />

      <CrowdFundingCard
        title="All Listed Campaign"
        allcampaign={allcampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />
      <CrowdFundingCard
        title="Your Created Compaign"
        allcampaign={usercampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />

      {openModel && (
        <PupUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
    </>
  );
};

export default crowdFunding;

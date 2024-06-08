import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import OverviewTab from "./OverviewTab/OverviewTab";
import PackagesTab from "./PackagesTab/PackagesTab";
import TourGuidesTab from "./TourGuidesTab/TourGuidesTab";
import { useState } from "react";


const TravelGuideSection = () => {

     const [tabIndex, setTabIndex] = useState(0)
    return (
        <div className="travel-guide-section mt-5 mb-5">
            <Tabs  selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="flex justify-around border-b-2 border-gray-300 pb-2">
                    <Tab className={`cursor-pointer p-3 font-bold text-[#2a4365] ${tabIndex === 0 ? 'text-[#ffffff] bg-blue-500' : ''}`}>Overview</Tab>
                    <Tab className={`cursor-pointer p-3 font-bold text-[#2a4365] ${tabIndex === 1 ? 'text-[#ffffff] bg-blue-500' : ''} ${tabIndex !== 0 ? 'hover:bg-blue-200' : ''}`}>Our Packages</Tab>
                    <Tab className={`cursor-pointer p-3 font-bold text-[#2a4365] ${tabIndex === 2 ? 'text-[#ffffff] bg-blue-500' : ''} ${tabIndex !== 0 ? 'hover:bg-blue-200' : ''}`}>Meet Our Tour Guides</Tab>
                </TabList>

                <TabPanel>
                    <OverviewTab />
                </TabPanel>
                <TabPanel>
                    <PackagesTab />
                </TabPanel>
                <TabPanel>
                    <TourGuidesTab />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TravelGuideSection;
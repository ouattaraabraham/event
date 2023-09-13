import React from "react";
import {Tabs,TabsHeader,TabsBody,Tab,TabPanel,} 
from "@material-tailwind/react";
 
 function TabsTemplate({data}) {
  return (
    <Tabs value="dashboard">
      <TabsHeader>
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className=" decoration-red-900 decoration-dotted	">
              {/* {React.createElement(icon, { className: "w-5 h-5" })} */}
              <label className="" >
                <input type="checkbox" className="absolute w-full opacity-0" />
                <h3 className=" text-lg after:block after:content-['']">
                {label}
                </h3>
              </label>

              
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
export default TabsTemplate
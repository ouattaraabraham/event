import React from "react";
import {Tabs,TabsHeader,TabsBody,Tab,TabPanel,} 
from "@material-tailwind/react";
 
 function TabsTemplate2({data}) {
  return (
    <Tabs value="dashboard">
      <TabsHeader className=" flex  flex-wrap bg-slate-500 gap-2">
        {data.map(({ label, value, icon }) => (
         <label> 
          <Tab key={value} value={value} className=" flex w-[75px] ">
          <input type="checkbox" className="absolute opacity-0 w-full peer "/>
            <div className="peer-checked:bg-slate-700  w-14 h-14 border rounded-full  flex flex-col items-center justify-center	">
              {React.createElement(icon, { className: "w-8 h-8" })}
            </div>
            <h3 className="text-sm	">
            {label}
            </h3>
          </Tab>
          </label>
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
export default TabsTemplate2
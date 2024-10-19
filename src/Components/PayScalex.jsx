import React, { useState } from 'react';
import { TbCircleCheckFilled } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { Table1, Table2, Table3, Table4 } from '../Data';
import ToggleSwitch from './ToggleSwitch';

function PayScalex() {
    const [showtable, setShowTable] = useState(Table3);

    return (
        <div>
            <div>
               <div>
                <ToggleSwitch/>
               </div>

                <div className='grid grid-cols-4 gap-1 m-5'>
                    {/* Table1 */}
                    <div>
                        {Table1.map((item, index) => {
                            const isActive = showtable === Table1;
                            return (
                                <div
                                    onClick={() => setShowTable(Table1)}
                                    className={`border shadow-lg px-4 flex flex-col rounded-lg h-[500px] w-[300px] ${isActive ? 'bg-gradient-to-b from-[#1E429F] to-[#0B1839] text-white' : 'bg-white text-black'}`}
                                    key={index}
                                >
                                    {/* Top content with flex-grow */}
                                    <div className="flex-grow">
                                        <div>
                                            <div className={`text-sm font-semibold py-1 m-1 ${isActive ? 'text-white' : 'text-black'}`}>{item.title}</div>
                                            <div className={`font-bold text-3xl py-1 ${isActive ? 'text-white' : 'text-black'}`}>{item.Price}</div>
                                            <div className={`text-sm py-1 ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>{item.discount}</div>
                                            <div className={`flex gap-1 items-center text-sm ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>
                                                <TbCircleCheckFilled color={isActive ? 'white' : 'black'} /><span>{item.feature1}</span>
                                            </div>
                                            <div className={`flex gap-1 items-center text-sm ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>
                                                <TbCircleCheckFilled color={isActive ? 'white' : 'black'} /><span>{item.feature2}</span>
                                            </div>
                                            <div className={`flex gap-1 items-center text-sm ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>
                                                <TbCircleCheckFilled color={isActive ? 'white' : 'black'} /><span>{item.feature3}</span>
                                            </div>
                                            <div className={`flex gap-1 items-center text-sm ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>
                                                <TbCircleCheckFilled color={isActive ? 'white' : 'black'} /><span>{item.feature4}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Footer content */}
                                    <div>
                                        <div className='border border-[#76A9FA]'></div>
                                        <li className={`font-semibold mb-14 ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>{item.footerFeature}</li>
                                        <div className={`text-center py-1 px-5 rounded-md mt-2 mb-4 ${isActive ? 'bg-white text-[#1A56DB]' : 'bg-[#1A56DB] text-white'}`}>{item.ButtonaData}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Table2 */}
                    <div>
                        {Table2.map((item, index) => {
                            const isActive = showtable === Table2;
                            return (
                                <div
                                    onClick={() => setShowTable(Table2)}
                                    className={`border shadow-lg px-4 flex flex-col rounded-lg h-[500px] w-[300px] ${isActive ? 'bg-gradient-to-b from-[#1E429F] to-[#0B1839] text-white' : 'bg-white text-black'}`}
                                    key={index}
                                >
                                    
                                    <div className="flex-grow">
                                        <div className={`text-sm font-semibold py-1 m-1 ${isActive ? 'text-white' : 'text-black'}`}>{item.title}</div>
                                        <div className={`font-bold text-3xl py-1 ${isActive ? 'text-white' : 'text-black'}`}>{item.Price}</div>
                                        <div className='text-sm py-1 flex gap-2'>
                                            <div className={`bg-[#ECFDF3] w-fit rounded-lg px-4 flex items-center gap-1 ${isActive ? 'text-[#027A48]' : 'text-[#027A48]'}`}><RiDiscountPercentLine /><span>{item.discount}</span></div>
                                            <div className={`font-bold line-through ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>{item.cutoffdiscount}</div>
                                        </div>
                                        <div className={`flex gap-1 font-bold items-center text-sm ${isActive ? 'text-white' : 'text-[#1A56DB]'}`}>
                                            <TbCircleCheckFilled color={isActive ? 'white' : '#1A56DB'} /><span>{item.feature1}</span>
                                        </div>
                                        <div className={`flex gap-1 items-center text-sm ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>
                                            <TbCircleCheckFilled color={isActive ? 'white' : 'black'} /><span>{item.feature2}</span>
                                        </div>
                                        <div className={`flex gap-1 items-center text-sm ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>
                                            <TbCircleCheckFilled color={isActive ? 'white' : 'black'} /><span>{item.feature3}</span>
                                        </div>
                                        <div className={`flex gap-1 items-center text-sm ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>
                                            <TbCircleCheckFilled color={isActive ? 'white' : 'black'} /><span>{item.feature4}</span>
                                        </div>
                                        <div className={`flex gap-1 items-center text-sm ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>
                                            <TbCircleCheckFilled color={isActive ? 'white' : 'black'} /><span>{item.feature5}</span>
                                        </div>
                                    </div>
                                    {/* Footer content */}
                                    <div>
                                        <div className='border border-[#76A9FA]'></div>
                                        <li className={`font-semibold ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>{item.footerFeature1}</li>
                                        <li className={`font-semibold ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>{item.footerFeature2}</li>
                                        <li className={`font-semibold ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>{item.footerFeature3}</li>
                                        <div className={`text-center py-1 px-5 rounded-md mt-2 mb-4 ${isActive ? 'bg-white text-[#1A56DB]' : 'bg-[#1A56DB] text-white'}`}>{item.ButtonaData}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Table3 */}
                    <div>
                        {Table3.map((item, index) => {
                            const isActive = showtable === Table3;
                            return (
                                <div
                                    onClick={() => setShowTable(Table3)}
                                    className={`border shadow-lg px-4 flex flex-col rounded-lg h-[500px] w-[300px] ${isActive ? 'bg-gradient-to-b from-[#1E429F] to-[#0B1839] text-white' : 'bg-white text-black'}`}
                                    key={index}
                                >
                                    <div className="flex-grow">
                                        <div className={`text-sm font-semibold py-1 m-1 ${isActive ? 'text-white' : 'text-black'}`}>{item.title}</div>
                                        <div className={`font-bold text-3xl py-1 ${isActive ? 'text-white' : 'text-black'}`}>{item.Price}</div>
                                        <div className='flex gap-2'>
                                            <div className={`bg-[#ECFDF3] text-[#027A48] w-fit rounded-lg px-4 flex text-sm items-center gap-1 ${isActive ? 'text-[#027A48]' : 'text-[#027A48]'}`}><RiDiscountPercentLine /><span>{item.discount}</span></div>
                                            <div className={`font-bold line-through ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>{item.cutoffdiscount}</div>
                                        </div>
                                        <div className={`flex gap-1 items-center text-sm ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>
                                            <TbCircleCheckFilled color={isActive ? 'white' : 'black'} /><span>{item.feature1}</span>
                                        </div>
                                        <div className={`flex gap-1 items-center text-sm ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>
                                            <TbCircleCheckFilled color={isActive ? 'white' : 'black'} /><span>{item.feature2}</span>
                                        </div>
                                        <div className={`flex gap-1 items-center text-sm ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>
                                            <TbCircleCheckFilled color={isActive ? 'white' : 'black'} /><span>{item.feature3}</span>
                                        </div>
                                        <div className={`flex gap-1  items-center text-sm ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>
                                            <TbCircleCheckFilled color={isActive ? 'white' : 'black'} /><span>{item.feature4}</span>
                                        </div>
                                    </div>
                                    {/* Footer content */}
                                    <div>
                                        <div className='border border-[#76A9FA]'></div>
                                        <li className={`font-semibold ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>{item.footerFeature1}</li>
                                        <li className={`font-semibold ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>{item.footerFeature2}</li>
                                        <li className={`font-semibold ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>{item.footerFeature3}</li>
                                        <div className={`text-center py-1 px-5 rounded-md mt-2 mb-4 ${isActive ? 'bg-white text-[#1A56DB]' : 'bg-[#1A56DB] text-white'}`}>{item.ButtonaData}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Table4 */}
                    <div>
                        {Table4.map((item, index) => {
                            const isActive = showtable === Table4;
                            return (
                                <div
                                    onClick={() => setShowTable(Table4)}
                                    className={`border shadow-lg px-4 flex flex-col rounded-lg h-[500px] w-[300px] ${isActive ? 'bg-gradient-to-b from-[#1E429F] to-[#0B1839] text-white' : 'bg-white text-black'}`}
                                    key={index}
                                >
                                    {/* Top content with flex-grow */}
                                    <div className="flex-grow">
                                        <div className={`text-sm font-semibold py-1 m-1 ${isActive ? 'text-white' : 'text-black'}`}>{item.title}</div>
                                        <div className={`font-bold text-3xl py-1 ${isActive ? 'text-white' : 'text-black'}`}>{item.Price}</div>
                                        <div className={`text-sm py-1 ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>{item.discount}</div>
                                        <div className={`flex gap-1 items-center text-sm ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>
                                            <TbCircleCheckFilled color={isActive ? 'white' : 'black'} /><span>{item.feature1}</span>
                                        </div>
                                        <div className={`flex gap-1 items-center text-sm ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>
                                            <TbCircleCheckFilled color={isActive ? 'white' : 'black'} /><span>{item.feature2}</span>
                                        </div>
                                        <div className={`flex gap-1 items-center text-sm ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>
                                            <TbCircleCheckFilled color={isActive ? 'white' : 'black'} /><span>{item.feature3}</span>
                                        </div>
                                        <div className={`flex gap-1 items-center text-sm ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>
                                            <TbCircleCheckFilled color={isActive ? 'white' : 'black'} /><span>{item.feature4}</span>
                                        </div>
                                    </div>
                                    {/* Footer content */}
                                    <div>
                                        <div className='border border-[#76A9FA]'></div>
                                        <li className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>{item.footerFeature1}</li>
                                        <li className={`font-semibold  text-sm ${isActive ? 'text-white' : 'text-[#6B7280]'}`}>{item.footerFeature2}</li>
                                        <div className={`text-center py-1 px-5 rounded-md mt-2 mb-4 ${isActive ? 'bg-white text-[#1A56DB]' : 'bg-[#1A56DB] text-white'}`}>{item.ButtonaData}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PayScalex;

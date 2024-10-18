import React, { useState } from 'react'
import { TbCircleCheckFilled } from "react-icons/tb";
import { Table1 } from '../Data'
import { Table2 } from '../Data'
import { Table3 } from '../Data'
import { Table4 } from '../Data'

function PayScale() {
    const tableArray = [Table1, Table2, Table3, Table4]
    const [showtable, setShowTable] = useState(Table3)


    return (
        <div>

            <div>
                <div className='flex gap-4 justify-center m-6 bg-[#E1EFFE]'>
                    <div>Monthly</div>
                    <div>Annual</div>
                </div>

                <div className='grid grid-cols-4 gap-2 m-5'>

                    <div>
                        {
                            Table1.map((item, index) => {
                                const isActive = showtable === Table1;
                                return <div onClick={() => setShowTable(Table1)} className={`border shadow-lg px-4 flex flex-col rounded-lg h-[500px] ${isActive ? 'bg-gradient-to-b from-[#1E429F] to-[#0B1839] text-white' : 'bg-white'}`}
                                    key={index}>
                                    <div className='text-sm'>{item.title}</div>
                                    <div className='font-bold'>{item.Price}</div>
                                    <div>{item.discount}</div>
                                    <div className='text-[#6B7280] flex gap-1 items-center text-sm'><TbCircleCheckFilled /><span>{item.feature1}</span></div>
                                    <div className='text-[#6B7280] flex gap-1 items-center text-sm'><TbCircleCheckFilled /><span>{item.feature2}</span></div>
                                    <div className='text-[#6B7280] flex gap-1 items-center text-sm'><TbCircleCheckFilled /><span>{item.feature3}</span></div>
                                    <div className='text-[#6B7280] flex gap-1 items-center text-sm'><TbCircleCheckFilled /><span>{item.feature4}</span></div>
                                    <div className='border border-[#76A9FA]'></div>
                                    <li className='text-[#6B7280] font-semibold'>{item.footerFeature}</li>
                                    <div className='bg-[#1A56DB] text-white text-center py-1 px-5 rounded-xl'>{item.ButtonaData}</div>
                                </div>
                            })
                        }
                    </div>

                    <div>
                        {
                            Table2.map((item, index) => {
                                const isActive = showtable === Table2;
                                return <div onClick={() => setShowTable(Table2)} className={`border shadow-lg px-4 flex flex-col rounded-lg h-[500px] ${isActive ? 'bg-gradient-to-b from-[#1E429F] to-[#0B1839] text-white' : 'bg-white'}`} key={index}>
                                    <div className='text-sm'>{item.title}</div>
                                    <div className='font-bold'>{item.Price}</div>
                                    <div className='flex gap-2'>
                                        <div className='bg-[#ECFDF3] w-fit rounded-lg px-4'><span>{item.discount}</span></div>
                                        <div className='text-[#6B7280]'>{item.cutoffdiscount}</div>
                                    </div>
                                    <div className='text-[#1A56DB] font-bold flex gap-1 items-center text-sm'><TbCircleCheckFilled /><span>{item.feature1}</span></div>
                                    <div className='text-[#6B7280] flex gap-1 items-center text-sm'><TbCircleCheckFilled /><span>{item.feature2}</span></div>
                                    <div className='text-[#6B7280] flex gap-1 items-center text-sm'><TbCircleCheckFilled /><span>{item.feature3}</span></div>
                                    <div className='text-[#6B7280] flex gap-1 items-center text-sm'><TbCircleCheckFilled /><span>{item.feature4}</span></div>
                                    <div className='text-[#6B7280] flex gap-1 items-center text-sm'><TbCircleCheckFilled /><span>{item.feature5}</span></div>
                                    <div className='border border-[#76A9FA]'></div>
                                    <li className='text-[#6B7280] font-semibold'>{item.footerFeature1}</li>
                                    <li className='text-[#6B7280] font-semibold'>{item.footerFeature2}</li>
                                    <li className='text-[#6B7280] font-semibold'>{item.footerFeature3}</li>
                                    <div className='bg-[#1A56DB] text-white text-center py-1 px-5 rounded-xl'>{item.ButtonaData}</div>
                                </div>
                            })
                        }
                    </div>

                    <div>
                        {
                            Table3.map((item, index) => {
                                const isActive = showtable === Table3;
                                return <div onClick={() => setShowTable(Table3)} className={`border shadow-lg px-4 flex flex-col rounded-lg h-[500px] ${isActive ? 'bg-gradient-to-b from-[#1E429F] to-[#0B1839] text-white' : 'bg-white'}`} key={index}>
                                    <div className='text-sm'>{item.title}</div>
                                    <div className='font-bold'>{item.Price}</div>
                                    <div className='flex gap-2'>
                                        <div className='bg-[#ECFDF3] w-fit rounded-lg px-4'><span>{item.discount}</span></div>
                                        <div className='text-[#6B7280]'>{item.cutoffdiscount}</div>
                                    </div>
                                    <div className='text-[#6B7280] flex gap-1 items-center text-sm'><TbCircleCheckFilled /><span>{item.feature1}</span></div>
                                    <div className='text-[#6B7280] flex gap-1 items-center text-sm'><TbCircleCheckFilled /><span>{item.feature2}</span></div>
                                    <div className='text-[#6B7280] flex gap-1 items-center text-sm'><TbCircleCheckFilled /><span>{item.feature3}</span></div>
                                    <div className='text-[#6B7280] flex gap-1 items-center text-sm'><TbCircleCheckFilled /><span>{item.feature4}</span></div>
                                    <div className='border border-[#76A9FA]'></div>
                                    <li className='text-[#6B7280] font-semibold'>{item.footerFeature1}</li>
                                    <li className='text-[#6B7280] font-semibold'>{item.footerFeature2}</li>
                                    <li className='text-[#6B7280] font-semibold'>{item.footerFeature3}</li>
                                    <div className='bg-[#1A56DB] text-white text-center py-1 px-5 rounded-xl'>{item.ButtonaData}</div>
                                </div>
                            })
                        }
                    </div>

                    <div>
                        {
                            Table4.map((item, index) => {
                                const isActive = showtable === Table4;
                                return <div onClick={() => setShowTable(Table4)} className={`border shadow-lg px-4 flex flex-col rounded-lg h-[500px] ${isActive ? 'bg-gradient-to-b from-[#1E429F] to-[#0B1839] text-white' : 'bg-white'}`}
                                    key={index}  >
                                    <div className='text-sm'>{item.title}</div>
                                    <div className='font-bold'>{item.Price}</div>
                                    <div>{item.discount}</div>
                                    <div className='text-[#6B7280] flex gap-1 items-center text-sm'><TbCircleCheckFilled /><span>{item.feature1}</span></div>
                                    <div className='text-[#6B7280] flex gap-1 items-center text-sm'><TbCircleCheckFilled /><span>{item.feature2}</span></div>
                                    <div className='text-[#6B7280] flex gap-1 items-center text-sm'><TbCircleCheckFilled /><span>{item.feature3}</span></div>
                                    <div className='text-[#6B7280] flex gap-1 items-center text-sm'><TbCircleCheckFilled /><span>{item.feature4}</span></div>
                                    <div className='border border-[#76A9FA]'></div>
                                    <li className='text-[#6B7280] font-semibold'>{item.footerFeature1}</li>
                                    <li className='text-[#6B7280] font-semibold'>{item.footerFeature2}</li>
                                    <div className='bg-[#1A56DB] text-white text-center py-1 px-5 rounded-xl'>{item.ButtonaData}</div>
                                </div>
                            })
                        }
                    </div>

                </div>

            </div>

        </div>
    )
}

export default PayScale
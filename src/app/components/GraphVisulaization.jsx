'use client'
import WestIcon from '@mui/icons-material/West';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import moment from 'moment/moment';

ChartJS.register(ArcElement, Tooltip, Legend);



const Graph = ({ resultValue, setResultValue }) => {
    console.log(resultValue, setResultValue, "graph vala console")
    const date=String(resultValue?.updatedDateTime).split("T");
    
    const data = {

        datasets: [
            {
                label: 'No Of Patients ',
                data:
                    [
                        resultValue?.stats?.newDeaths,
                        resultValue?.stats?.newlyConfirmedCases,
                        resultValue?.stats?.newlyRecoveredCases,
                        resultValue?.stats?.totalConfirmedCases,
                        resultValue?.stats?.totalDeaths,
                        resultValue?.stats?.totalRecoveredCases,



                    ],
                backgroundColor: [
                    'rgba(191, 13, 28, 0.2)',
                    'rgba(186, 140, 144, 0.2)',
                    'rgba(24, 214, 84, 0.2)',
                    'rgba(235, 149, 45, 0.2)',
                    'rgba(41, 29, 28, 0.2)',
                    'rgba(74, 240, 29, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 2,
            },
        ],
    };
    return (
        <>


            <div className='flex flex-col gap-5 ml-5 xsm:ml-0 ' >
                <div className='flex items-center mt-2 '  >
                    <div className='w-1/3 xsm:w-1/6 '>
                        <IconButton onClick={() => { setResultValue("") }} >
                            <WestIcon className='text-lg' />
                        </IconButton>
                    </div>

                    <div >
                        <p className='text-center font-sans font-bold font text-xl xsm:text-sm ' >Graph Visuliaztion of COVID-19 IN {resultValue?.location?.countryOrRegion}</p>
                    </div>

                </div>
                <div className='flex justify-around  mt-5 xsm:flex xsm:flex-col ' >
                    <div className='xsm:flex xsm:flex-col xsm:justify-center xsm:items-center' >
                        <div  >
                            <p className='text-left font-semibold xsm:text-sm ' >Covid-19 Graph in {resultValue?.location?.countryOrRegion}:</p>
                        </div>
                        <div className='mt-5   ' >
                            <Pie data={data} className='xsm:h-[158px] xsm:w-[157px]' />
                        </div>
                    </div>
                    <div className='h-96 w-[0.5px] bg-gray-500 xsm:hidden ' >

                    </div>
                    <div className='w-1/2 h-[350px]  overflow-scroll  overflow-x-hidden xsm:mt-4 xsm:h-[150px] xsm:w-full ' >
                        <div   >
                            <p className='font-semibold tracking-wide xsm:text-sm   ' >
                                Graph Explanation:
                            </p>
                        </div>
                        <div className='ml-16 mt-3  '  >
                            <p className='font-sans font-medium text-lg tracking-wide leading-10 xsm:text-sm xsm:tracking-wide xsm:leading-loose'>
                                New Deaths:{resultValue?.stats?.newDeaths}
                            </p>
                            <p className='font-sans font-medium text-lg tracking-wide leading-10 xsm:text-sm xsm:tracking-wide xsm:leading-relaxed'>
                                New Confirmed Cases:{resultValue?.stats?.newlyConfirmedCases}
                            </p>
                            <p className='font-sans font-medium text-lg tracking-wide leading-10 xsm:text-sm xsm:tracking-wide xsm:leading-relaxed'>
                                New Recover Cases:{resultValue?.stats?.newlyRecoveredCases}
                            </p>
                            <p className='font-sans font-medium text-lg tracking-wide leading-10 xsm:text-sm xsm:tracking-wide xsm:leading-relaxed'>
                                Total Confirmed Cases:{resultValue?.stats?.totalConfirmedCases}
                            </p>
                            <p className='font-sans font-medium text-lg tracking-wide leading-10 xsm:text-sm xsm:tracking-wide xsm:leading-relaxed'>
                                Total Deaths:{resultValue?.stats?.totalDeaths}
                            </p>
                            <p className='font-sans font-medium text-lg tracking-wide leading-10 xsm:text-sm xsm:tracking-wide xsm:leading-relaxed'>
                                Total Recoverd Cases:{resultValue?.stats?.totalRecoveredCases}
                            </p>
                        </div>
                        <div className='mt-7' >
                            <div>
                                <p className='font-semibold tracking-wide xsm:text-sm ' >
                                    Locations And Country:
                                </p>
                            </div>
                            <div className='ml-16 mt-3 '   >
                                    <p className='font-sans font-medium text-lg tracking-wide leading-10 xsm:text-sm xsm:leading-relaxed'>Country Name:{resultValue?.location?.countryOrRegion}</p>
                                    <p className='font-sans font-medium text-lg tracking-wide leading-10 xsm:text-sm xsm:leading-relaxed'>isoCode of Country:{resultValue?.location?.isoCode}</p>
                                    <p className='font-sans font-medium text-lg tracking-wide leading-10 xsm:text-sm xsm:leading-relaxed'>Latitude:{resultValue?.location?.lat}</p>
                                    <p className='font-sans font-medium text-lg tracking-wide leading-10 xsm:text-sm xsm:leading-relaxed' >Longitude:{resultValue?.location?.long}</p>
                            </div>
                        </div>
                        <div className='mt-7' >
                            <div>
                                <p className='font-semibold tracking-wide xsm:text-sm xsm:leading-relaxed' >
                                    Last Update On:
                                </p>
                            </div>
                            <div className='ml-16 mt-3 '   >
                                    <p className='font-sans font-medium text-lg tracking-wide leading-10 xsm:text-sm'>Update Date:{moment([date[0]]).fromNow()}</p>
                                   
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Graph

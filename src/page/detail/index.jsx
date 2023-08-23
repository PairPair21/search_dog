import React,{ useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
    const { name } = useParams();
    const [drool, setDrool]=useState(undefined);
    const [groom,setGroom]=useState(undefined);
    const [linkName,setLinkName]= useState('');

    const[dog, setDog] = useState({
            data:undefined, 
            loading: true, 
            error: null 
        })

    const dataDog = async (name) => {

        const run = {
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/dogs',
            params: {
            name: name || null,
            },
            headers: {
            'X-API-Key': 'ncoM+zs5Dj7yTt9n7i6AGA==OCAq9Y5AjQSE3QXX',
            }
        };

        try {
            const response = await axios.request(run);
                setDog({
                    data: { ...response.data },
                    loading: false,
                    error: null
                });
                setLinkName(response.data[0].name)
                if (response.data[0].drooling <= 3) {
                    setDrool('Less Drooling');
                } else {
                    setDrool('Most Drooling');
                }
                if (response.data[0].grooming <= 1) {
                    setGroom('Less Grooming Needs');
                }else if(response.data[0].grooming <= 3){
                    setGroom('Minimal Grooming Needs');
                } else{
                    setGroom('Needs to be Groomed');
                }

        } catch (error) {
        console.error(error.message);
        } 
    };

    useEffect(() => {
        dataDog(name);
    }, [name]);

    return(
        <div >
            <header className="bg-black h-[3em] flex justify-between">
                <div className="flex items-center">
                    <img className="w-[40px] ml-[20px] mr-[15px]" src="https://freesvg.org/img/paw2.png" alt="" />
                    <span className="text-white font-bold text-xl">BokBok</span>
                </div>
                <div className="flex items-center">
                    <Link className="flex items-center" to={`/TH/dog/${linkName}`}>
                        <img className="h-[20px] mr-[5px]" src="https://cdn.pixabay.com/photo/2012/04/10/23/01/thailand-26813_1280.png" alt="" srcset="" />
                        <div className="text-white mr-[20px]">TH</div>
                    </Link>
                </div>
            </header>
            <div className="w-[90%] max-w-[1000px] m-[auto] p-[10px] mt-[20px]">
                {dog.loading && (
                    <div className="w-[100%] h-[85vh] flex justify-center items-center">
                        <img className="w-[100px]" src="/src/assets/image/480 (3).gif" alt="" />
                    </div>
                )}  
                {!dog.loading &&(
                    <div>
                        { dog.data && (
                            <div className="overflow-y-auto m-[auto]">
                                <div className='flex flex-cols bg-[#3C69E8] h-[60px] w-[100%]  p-[10px]'>
                                    <span className="flex items-center hover:bg-sky-700 bg-[#6FC1EA] w-[60px] h-[40px] rounded-[16px] shadow-lg shadow-blue-500/50 opacity-50">
                                        <Link to={'/'} className="text-white text-xl w-[60px] text-center font-bold">&#x3C;</Link>
                                    </span>
                                    <span className=" text-center
                                    capitalize mb-2 text-3xl font-bold tracking-tight m-[auto]">
                                        {dog.data[0].name}
                                    </span>
                                </div>
                                <div className=' relative h-[250px] sm:h-[350px]'> 
                                    <img className="absolute h-[70%] h-[250px] sm:h-[350px] p-[40px] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]" 
                                    src={dog.data[0].image_link}
                                    alt="" />
                                </div>
                                <div className="bg-[#253641] rounded-[20px] my[20px]">
                                    
                                    <div className="grid grid-cols-1 rounded-t-[20px] py-[20px] md:grid-cols-2 bg-[#FCCABF] w-[100%] gap-[15px] px-[30px] py-[10px] font-bold">
                                        <p>Drooling : {drool}</p>
                                        <p>Grooming : {groom}</p>
                                        <p>Min Height : {((dog.data[0].min_height_female)*0.0254).toFixed(2)} m</p>
                                        <p>Max Height : {((dog.data[0].max_height_female)*0.0254).toFixed(2)} m</p>
                                        <p>Min Weight : {((dog.data[0].min_weight_female)*0.4536).toFixed(2)} kg</p>
                                        <p>Max Weight : {((dog.data[0].max_weight_female)*0.4536).toFixed(2)} kg</p>
                                        <p>Min Life : {dog.data[0].min_life_expectancy} years</p>
                                        <p>Max Life : {dog.data[0].max_life_expectancy} years</p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 bg-[#A8C5CD] rounded-b-[20px] gap-[20px] px-[30px] capitalize">
                                    {/* <div className="flex w-[100%] mt-[5px] border-solid border-[0.5px] border-white">
                                        <div className="grow-[0] bg-lime-500 h-[15px]"></div>
                                        <div className="grow-[5] bg-[rgb(224,185,180,0.3)] h-[15px]"></div>
                                    </div>
                                    <div className="flex w-[100%] mt-[5px] border-solid border-[0.5px] border-white">
                                        <div className="grow-[1] bg-lime-500 h-[15px]"></div>
                                        <div className="grow-[4] bg-[rgb(224,185,180,0.3)] h-[15px]"></div>
                                    </div>
                                    <div className="flex w-[100%] mt-[5px] border-solid border-[0.5px] border-white">
                                        <div className="grow-[2] bg-lime-500 h-[15px]"></div>
                                        <div className="grow-[3] bg-[rgb(224,185,180,0.3)] h-[15px]"></div>
                                    </div>
                                    <div className="flex w-[100%] mt-[5px] border-solid border-[0.5px] border-white">
                                        <div className="grow-[3] bg-lime-500 h-[15px]"></div>
                                        <div className="grow-[2] bg-[rgb(224,185,180,0.3)] h-[15px]"></div>
                                    </div>
                                    <div className="flex w-[100%] mt-[5px] border-solid border-[0.5px] border-white">
                                        <div className="grow-[4] bg-lime-500 h-[15px]"></div>
                                        <div className="grow-[1] bg-[rgb(224,185,180,0.3)] h-[15px]"></div>
                                    </div>
                                    <div className="flex w-[100%] mt-[5px] border-solid border-[0.5px] border-white">
                                        <div className="grow-[5] bg-lime-500 h-[15px]"></div>
                                        <div className="grow-[0] bg-[rgb(224,185,180,0.3)] h-[15px]"></div>
                                    </div> */}
                                        <div>
                                            <h5>barking</h5>
                                            <div className="flex w-[100%] mt-[5px] border-solid border-[0.5px] border-white">
                                                <div className={`grow-[${dog.data[0].barking}] bg-lime-500 h-[15px] `}></div>
                                                <div className={`grow-[${(5 - dog.data[0].barking)}] bg-[rgb(224,185,180,0.3)] h-[15px]`}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <h5>energy</h5>
                                            <div className="flex w-[100%] mt-[5px] border-solid border-[0.5px] border-white">
                                                <div className={`grow-[${dog.data[0].energy}] bg-lime-500 h-[15px]`}></div>
                                                <div className={`grow-[${(5 - dog.data[0].energy)}] bg-[rgb(224,185,180,0.3)] h-[15px]`}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <h5>playfulness</h5>
                                            <div className="flex w-[100%] mt-[5px] border-solid border-[0.5px] border-white">
                                                <div className={`grow-[${dog.data[0].playfulness}] bg-lime-500 h-[15px]`}></div>
                                                <div className={`grow-[${(5 - dog.data[0].playfulness)}] bg-[rgb(224,185,180,0.3)] h-[15px]`}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <h5>trainability</h5>
                                            <div className="flex w-[100%] mt-[5px] border-solid border-[0.5px] border-white">
                                                <div className={`grow-[${dog.data[0].trainability}] bg-lime-500 h-[15px]`}></div>
                                                <div className={`grow-[${(5 - dog.data[0].trainability)}] bg-[rgb(224,185,180,0.3)] h-[15px]`}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <h5>Save for Children</h5>
                                            <div className="flex w-[100%] mt-[5px] border-solid border-[0.5px] border-white">
                                                <div className={`grow-[${dog.data[0].good_with_children}] bg-lime-500 h-[15px]`}></div>
                                                <div className={`grow-[${(5 - dog.data[0].good_with_children)}] bg-[rgb(224,185,180,0.3)] h-[15px]`}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <h5>Save for Other dogs</h5>
                                            <div className="flex w-[100%] mt-[5px] border-solid border-[0.5px] border-white">
                                                <div className={`grow-[${dog.data[0].good_with_other_dogs}] bg-lime-500 h-[15px]`}></div>
                                                <div className={`grow-[${(5 - dog.data[0].good_with_other_dogs)}] bg-[rgb(224,185,180,0.3)] h-[15px]`}></div>
                                            </div>
                                        </div>
                                        <div className="mb-[20px]">
                                            <h5>Save for strangers</h5>
                                            <div className="flex w-[100%] mt-[5px] border-solid border-[0.5px] border-white">
                                                <div className={`grow-[${dog.data[0].good_with_strangers}] bg-lime-500 h-[15px]`}></div>
                                                <div className={`grow-[${(5 - dog.data[0].good_with_strangers)}] bg-[rgb(224,185,180,0.3)] h-[15px]`}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )} 
                    </div>
                )}
            </div>
        </div>
    )
}

export default DetailPage;
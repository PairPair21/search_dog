import { useForm } from "react-hook-form";
import {useEffect,useState} from 'react'
import { bark, energy, size, trainability, protectiveness  } from "../../utils/optionList";
import useSearchForm from "./SearchForm.hook";
import { Link } from "react-router-dom";

const SearchFormTH = () => {
    const { register, handleSubmit, watch, reset } = useForm();
    const [searchResult, setSearchResult] = useState(null);
    const watchFields = watch(); 
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await useSearchForm(watchFields);
            setSearchResult(data);
        };
            
    fetchData();
    }, [watchFields]);


    return(
        <div>
            <form  className="p-[10px] h-[195px] grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 grid-rows-2 gap-[10px] bg-[#344051]">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ระบุสายพันธุ์ (ภาษาอังกฤษ)</label>
                    <input {...register("name")} placeholder="Search for Breed..." id="name" className="bg-gray border border-blue text-white text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#344051]">
                    </input>
                </div>
                <div>
                    <label htmlFor="bark" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">การเห่า</label>
                    <select {...register("bark")} id="bark" className="bg-gray border border-blue text-white text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#344051]">
                        <option value={''}>ความถี่...</option>
                        {bark.map((option)=>{
                            return <option key={option.name} value={option.level}>{option.name}</option>
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ขนาด</label>
                    <select {...register("size")} id="size" className="bg-gray border border-blue text-white text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#344051]">
                        <option value={''}>เลือกขนาด</option>
                        {size.map((option)=>{
                            return <option key={option.name} value={option.level}>{option.name}</option>
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="energy" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">พลังงาน</label>
                    <select {...register("energy")} id="energy" className="bg-gray border border-blue text-white text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#344051]">
                        <option value={''}>เลือกระดับพลังงาน</option>
                        {energy.map((option)=>{
                            return <option key={option.name} value={option.level}>{option.name}</option>
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="trainability" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ความยากในการฝึก</label>
                    <select {...register("trainability")} id="trainability" className="bg-gray border border-blue text-white text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#344051]">
                        <option value={''}>เลือกระดับความยาก</option>
                        {trainability.map((option)=>{
                            return <option key={option.name} value={option.level}>{option.name}</option>
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="protectiveness" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">สัญชาตญาณการปกป้อง</label>
                    <select {...register("protectiveness")} id="children" className="bg-gray border border-blue text-white text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#344051]">
                        <option value={''}>เลือกระดับการตื่นตัว</option>
                        {protectiveness.map((option)=>{
                            return <option key={option.name} value={option.level}>{option.name}</option>
                        })}
                    </select>
                </div>
                
            </form>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[10px] m-[10px]">
                    {Array.isArray(searchResult) &&
                        searchResult.map((data) => (
                            <Link to={`/TH/dog/${data.name}`} className="
                            max-w-sm rounded-[10px] overflow-hidden
                            shadow dark:bg-gray-800 dark:border-gray-700 p-[16px] bg-[#253641] max-w-[275px] m-[auto] h-[325px]">
                                
                                    <div className=''>
                                        <img className="h-[200px]" 
                                        src={data.image_link}
                                        alt="" />
                                    </div>
                                
                                <div className="pt-5">
                                    <div className=''>
                                        <h5 className="
                                        capitalize mb-2 text-xl font-bold tracking-tight 
                                        text-white dark:text-white">
                                            {data.name}
                                        </h5>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
        </div>
    )
    
}

export default SearchFormTH
import SearchForm from "@/components/searchForm/SearchForm";
import { useState, useEffect } from "react";
import './SearchForm.css'



const Homepage = () => {

    const [showSearch, setShowSearch] = useState(false);

    const handleClick = () => {
        if(showSearch == false){
            setShowSearch(true);
        }else{
            setShowSearch(false)
        }
    };

    return(
        <div >
            <div className={`dropdown ${showSearch ? 'show' : ''}`}>
                {showSearch && <SearchForm  />}
            </div>
            <section className="bg-bottom bg-cover bg-[url('/source/pexels-david-kittel-838409.jpg')] bg-gray-700 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Find your best friend </h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">One of the great pleasures of being with dogs is their spontaneous expression of what they are feeling.</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a onClick={handleClick} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Let find!
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="#learn" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Learn more
                        </a>  
                    </div>
                </div>
            </section>
            <section className="pt-[30px]" id="learn">
                <div className="pl-[40px] text-start">
                    <h1 className="text-4xl bg-pink" >What's about BokBok...</h1>
                    <p className="mt-[20px]">BokBok is website to matching breed of dog for your personality at least 1 data system will find 20 breeds of dog to recomment you.</p>
                </div>
                <div className="w-[200px] h-[60px] bg-white m-[auto] rounded-2xl my-[30px]">
                    <h1 className="text-center text-2xl pt-[11px] ">How to find...</h1>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
                    <div className="flex flex-col bg-white m-[10px] h-[350px] lg:h-[350px] 2xl:h-[475px] " >
                        <h1 className="m-[10px] border-b-[1px] text-center pb-[10px] font-mono text-2xl font-bold">Breed</h1>
                        <p className="mx-[10px] h-[150px] lg:h-[160px] 2xl:h-[275px] text-lg ">Search breed's name for learn about nature of breed. don't forget every breed have different nature and different treat not just about how cute is it</p>
                        <div className="grid grid-cols-2 grid-rows-2 mb-[10px]">
                            <img className="w-[3em] justify-self-end" src="/source/akitas-svgrepo-com.png"/>
                            <img className="w-[3em]" src="/source/bulterrier-svgrepo-com.png" />
                            <img className="w-[3em] justify-self-end" src="/source/chihuahua-svgrepo-com.png"/>
                            <img className="w-[3em]" src="/source/yorkshire-terrier-svgrepo-com.png" />
                        </div>
                    </div> 
                    <div className="flex flex-col bg-white m-[10px] h-[350px] lg:h-[350px] 2xl:h-[475px]">
                        <h3 className="m-[10px] border-b-[1px] text-center pb-[10px] font-mono text-2xl font-bold">Bark</h3>
                        <p className="mx-[10px] h-[150px] lg:h-[160px] 2xl:h-[275px] text-lg">This's about bark's nature. Lv.1 to Lv.5 is number of level least to high. It's important especially when you live in Apartment</p>
                        <img className="w-[5em] self-center  mb-[10px]" src="/source/guard-dog-svgrepo-com.png" alt="" />
                    </div>
                    <div className="flex flex-col bg-white m-[10px] h-[425px] lg:h-[350px] 2xl:h-[475px]">
                        <h3 className="m-[10px] border-b-[1px] text-center pb-[10px] font-mono text-2xl font-bold">Size</h3>
                        <p className="mx-[10px] h-[225px] lg:h-[160px] 2xl:h-[275px]">You can choose size of dog to match your actibility or your house</p>
                        <div className="flex self-center mb-[10px]">
                            <img className="w-[4em] self-end" src="/source/dachshund-svgrepo-com.png" alt="" />
                            <img className="w-[6em] " src="/source/doberman-svgrepo-com.png" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col bg-white m-[10px] h-[425px] lg:h-[400px] 2xl:h-[475px]">
                        <h3 className="m-[10px] border-b-[1px] text-center pb-[10px] font-mono text-2xl font-bold">Energy</h3>
                        <p className="mx-[10px] h-[225px] lg:h-[195px] 2xl:h-[275px] text-lg">This's about dog's energy. Lv.1 to Lv. 4 is number of level least to high. if dog have high energy it's mean dog need to walk outside and people to play with At the same time when dogs have high energy sometime they play hard and sometime will hurt, so it's not recomment for house have baby </p>
                        <img className="w-[6em] self-center mb-[10px]" src="/source/man-throwing-a-disc-and-dog-jumping-to-catch-it-svgrepo-com.png" alt="" />
                    </div>
                    <div className="flex flex-col bg-white m-[10px] h-[400px] lg:h-[400px] 2xl:h-[475px]">
                        <h3 className="m-[10px] border-b-[1px] text-center pb-[10px] font-mono text-2xl font-bold">Trainability</h3>
                        <p className="mx-[10px] h-[150px] lg:h-[195px] 2xl:h-[300px] text-lg">This's about rate to train Lv. 1 is easy to train and Lv.5 it's not about intelligent but it's about focus ability, solitude and love freedom</p>
                        <img className="w-[5em] mb-[10px] self-center" src="/source/dog-in-front-of-a-man-svgrepo-com.png" alt="" />
                    </div>
                    <div className="flex flex-col bg-white m-[10px] h-[400px] lg:-[400px] 2xl:h-[475px]">
                        <div>
                        <h3 className="m-[10px] border-b-[1px] text-center pb-[10px] font-mono text-2xl font-bold">Protectiveness</h3>
                        <p className="mx-[10px] h-[150px] lg:h-[195px] 2xl:h-[300px] text-lg">This's about rate to alert stranger Lv.1 is calm when saw stanger Lv.5 is alert when saw stanger. But it doesn't mean they will attack stranger that depend on how to treat them</p>
                        </div>
                        <img className="w-[5em] mb-[10px] self-center" src="/source/dog-puppy-and-his-owner-looking-to-opposite-directions-svgrepo-com.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Homepage;
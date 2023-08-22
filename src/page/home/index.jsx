import SearchForm from "@/components/searchForm/SearchForm";
import { useState, useEffect } from "react";
import './SearchForm.css';
import { Link } from "react-router-dom";


const Homepage = () => {

    const [showSearch, setShowSearch] = useState(false);
    const [dogAge,setDogAge] = useState("");
    const [humanAge,setHumanAge] = useState("");

    const handleClick = () => {
        if(showSearch == false){
            setShowSearch(true);
        }else{
            setShowSearch(false)
        }
    };

    const handleDogAgeClick = () => { 
        let calculate = 0
        if( dogAge == 0 ){
            calculate = 0;
        }else if( dogAge == 1 ){
            calculate = 15;
        }else{
            calculate = 4 * dogAge + 16;
        }
        setHumanAge(calculate)
        
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleDogAgeClick();
        }
    };

    return(
        <div>
            <header className="bg-black h-[3em] flex justify-between">
                <div className="flex items-center">
                    <img className="w-[40px] ml-[20px] mr-[15px]" src="https://freesvg.org/img/paw2.png" alt="" />
                    <span className="text-white font-bold text-xl">BokBok</span>
                </div>
                <div className="flex items-center">
                    <Link className="flex items-center" to={'/TH'}>
                        <img className="h-[20px] mr-[5px]" src="https://cdn.pixabay.com/photo/2012/04/10/23/01/thailand-26813_1280.png" alt="" srcset="" />
                        <div className="text-white mr-[20px]">TH</div>
                    </Link>
                </div>
            </header>
            <div className={`dropdown ${showSearch ? 'show' : ''}`}>
                {showSearch && <SearchForm  />}
            </div>
            <section className="bg-bottom h-[95vh] bg-cover bg-[url('/source/pexels-david-kittel-838409.jpg')] bg-gray-700 bg-blend-multiply">
                <div className=" px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-60">
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
            <section className="pt-[40px] h-[100vh]" id="learn">
                <div className="pl-[40px] text-start">
                    <h1 className="text-4xl bg-pink" >What's about BokBok...</h1>
                    <p className="mt-[20px]">BokBok is a website that matches dog breeds to your personality. Using at least one data system, it will recommend 20 dog breeds for you.</p>
                </div>
                <h1 className="m-[auto] my-[30px] text-center text-4xl pt-[11px] ">How to find...</h1>
                <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
                    <div className="flex flex-col bg-white m-[10px] h-[350px] lg:h-[350px] 2xl:h-[500px] " >
                        <h1 className="m-[10px] border-b-[1px] text-center pb-[10px] font-mono text-2xl font-bold">Breed</h1>
                        <p className="mx-[10px] h-[150px] lg:h-[160px] 2xl:h-[275px] text-lg "> Search for the names of dog breeds to learn about their specific characteristics. Remember, each breed has a unique nature and requires different treatment. It's not just about how cute they are.</p>
                        <div className="grid grid-cols-2 grid-rows-2 mb-[10px]">
                            <img className="w-[3em] justify-self-end" src="/source/akitas-svgrepo-com.png"/>
                            <img className="w-[3em]" src="/source/bulterrier-svgrepo-com.png" />
                            <img className="w-[3em] justify-self-end" src="/source/chihuahua-svgrepo-com.png"/>
                            <img className="w-[3em]" src="/source/yorkshire-terrier-svgrepo-com.png" />
                        </div>
                    </div> 
                    <div className="flex flex-col bg-white m-[10px] h-[350px] lg:h-[350px] 2xl:h-[500px]">
                        <h3 className="m-[10px] border-b-[1px] text-center pb-[10px] font-mono text-2xl font-bold">Bark</h3>
                        <p className="mx-[10px] h-[150px] lg:h-[160px] 2xl:h-[275px] text-lg">This is about the nature of barking. Level 1 to Level 5 represents the intensity of barking, ranging from the lowest to the highest level. This is particularly important when you live in an apartment.</p>
                        <img className="w-[5em] self-center  mb-[10px]" src="/source/guard-dog-svgrepo-com.png" alt="" />
                    </div>
                    <div className="flex flex-col bg-white m-[10px] h-[425px] lg:h-[350px] 2xl:h-[500px]">
                        <h3 className="m-[10px] border-b-[1px] text-center pb-[10px] font-mono text-2xl font-bold">Size</h3>
                        <p className="mx-[10px] h-[225px] lg:h-[160px] 2xl:h-[275px]">You can choose a dog size that matches your activity level or the size of your house.</p>
                        <div className="flex self-center mb-[10px]">
                            <img className="w-[4em] self-end" src="/source/dachshund-svgrepo-com.png" alt="" />
                            <img className="w-[6em] " src="/source/doberman-svgrepo-com.png" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col bg-white m-[10px] h-[425px] lg:h-[400px] 2xl:h-[500px]">
                        <h3 className="m-[10px] border-b-[1px] text-center pb-[10px] font-mono text-2xl font-bold">Energy</h3>
                        <p className="mx-[10px] h-[225px] lg:h-[195px] 2xl:h-[275px] text-lg 2xl:leading-[1.4rem]">This is about the energy level of dogs. Level 1 to Level 4 represents the intensity of energy. If a dog has high energy, it means they require regular walks and interaction with people. However, it's important that highly energetic dogs can play vigorously and sometimes unintentionally cause harm.</p>
                        <img className="w-[6em] self-center mb-[10px]" src="/source/man-throwing-a-disc-and-dog-jumping-to-catch-it-svgrepo-com.png" alt="" />
                    </div>
                    <div className="flex flex-col bg-white m-[10px] h-[400px] lg:h-[400px] 2xl:h-[500px]">
                        <h3 className="m-[10px] border-b-[1px] text-center pb-[10px] font-mono text-2xl font-bold">Trainability</h3>
                        <p className="mx-[10px] h-[150px] lg:h-[195px] 2xl:h-[300px] text-lg 2xl:leading-6">This is about the trainability rating of dogs. Level 1 indicates that a dog is easy to train, while Level 5 refers to factors such as focus ability, solitude, and love for freedom. A higher level doesn't necessarily indicate intelligence, but rather the dog's ability to concentrate, be alone, and desire independence.</p>
                        <img className="w-[5em] mb-[10px] self-center" src="/source/dog-in-front-of-a-man-svgrepo-com.png" alt="" />
                    </div>
                    <div className="flex flex-col bg-white m-[10px] h-[400px] lg:-[400px] 2xl:h-[500px]">
                        <div>
                        <h3 className="m-[10px] border-b-[1px] text-center pb-[10px] font-mono text-2xl font-bold">Protectiveness</h3>
                        <p className="mx-[10px] h-[150px] lg:h-[195px] 2xl:h-[300px] text-lg 2xl:leading-[1.4rem]">This is about the rating for a dog's alertness towards strangers. Level 1 to Level 5 represents degrees of alertness when encountering strangers. However, it's important this rating doesn't necessarily imply that the dog will attack strangers. Their response depends on how they are treated and trained.</p>
                        </div>
                        <img className="w-[5em] mb-[10px] self-center" src="/source/dog-puppy-and-his-owner-looking-to-opposite-directions-svgrepo-com.png" alt="" />
                    </div>
                </div>
                <div className="w-[100%] h-[150px] bg-yellow p-[40px]">
                    <div>Do you want to know your dog age to human age?</div>
                    <div className="text-center">Let's find!!</div>
                    <div className=" mx-[20px] flex justify-center h-[100%]  ">
                        <input className="my-[auto] mx-[20px] border-[2px] w-[200px] h-[40px]" type="text" 
                        value={dogAge} onChange={(e)=>setDogAge(e.target.value)} 
                        onKeyPress={handleKeyPress}
                        placeholder="Dog age" />
                        <button className="w-[150px] h-[60px] bg-[#3C69E8] my-[auto] hover:text-gray-900" onClick={handleDogAgeClick}>Transfer&#8652;</button>
                        <span className=" my-[auto] mx-[20px] border-[2px] w-[200px] text-end h-[40px] ">{humanAge}</span>
                    </div>
                </div>
            </section>
           
        </div>
    )
}

export default Homepage;
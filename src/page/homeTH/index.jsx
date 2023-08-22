import SearchFormTH from "../../components/searchFormTH/searchForm";
import { useState, useEffect } from "react";
import './SearchFormTH.css'
import { Link } from "react-router-dom";


const HomepageTH = () => {

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
                    <Link className="flex items-center" to={'/'}>
                        <img className="h-[20px] mr-[5px]" src="https://www.pngall.com/wp-content/uploads/2016/06/United-Kingdom-Flag-PNG-Image.png" alt="" srcset="" />
                        <div className="text-white mr-[20px]">EN</div>
                    </Link>
                </div>
            </header>
            <div className={`dropdown ${showSearch ? 'show' : ''}`}>
                {showSearch && <SearchFormTH  />}
            </div>
            <section className=" bg-bottom h-[95vh] bg-cover bg-[url('/src/assets/pexels-david-kittel-838409.jpg')] bg-gray-700 bg-blend-multiply">
                <div className=" px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-60">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">ค้นหาเพื่อนที่ใช่ </h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-2xl sm:px-16 lg:px-48">ความสุขอย่างหนึ่งของการได้อยู่กับสุนัขคือการแสดงออกอย่างเป็นธรรมชาติในสิ่งที่มันรู้สึก</p>
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
                    <h1 className="text-4xl bg-pink" >BokBok คืออะไร...</h1>
                    <p className="mt-[20px]">BokBok คือเว็บไซต์ที่จะช่วยคุณค้นหาสายพันธุ์ที่ใช่สำหรับตัวตนของคุณ โดยการระบุข้อมูลอย่างน้อยหนึ่งข้อมูล แล้วระบบจะแนะนำสุนัขสูงสุด 20 สายพันธุ์ให้กับคุณ</p>
                </div>
                <h1 className="m-[auto] my-[30px] text-center text-4xl pt-[11px] ">How to find...</h1>
                <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
                    <div className="flex flex-col bg-white m-[10px] h-[350px] lg:h-[350px] 2xl:h-[475px] " >
                        <h1 className="m-[10px] border-b-[1px] text-center pb-[10px] font-mono text-2xl font-bold">Breed</h1>
                        <p className="mx-[15px] h-[150px] lg:h-[160px] 2xl:h-[275px] text-xl font-bold"> ค้นหาข้อมูลสายพันธุ์ด้วยชื่อของสายพันธุ์ด้วยภาษาอังกฤษ เพื่อศึกษาข้อมูลของแต่ละสายพันธุ์ และต้องไม่ลืมว่าแต่ละสายพันธุ์ต้องการการเลี้ยงดูที่แตกต่างกัน ไม่ได้ต่างกันเพียงรูปลักษณ์ภายนอกเท่านั้น</p>
                        <div className="grid grid-cols-2 grid-rows-2 mb-[10px]">
                            <img className="w-[3em] justify-self-end" src="/src/assets/akitas-svgrepo-com.png"/>
                            <img className="w-[3em]" src="/src/assets/bulterrier-svgrepo-com.png" />
                            <img className="w-[3em] justify-self-end" src="/src/assets/chihuahua-svgrepo-com.png"/>
                            <img className="w-[3em]" src="/src/assets/yorkshire-terrier-svgrepo-com.png" />
                        </div>
                    </div> 
                    <div className="flex flex-col bg-white m-[10px] h-[350px] lg:h-[350px] 2xl:h-[475px]">
                        <h3 className="m-[10px] border-b-[1px] text-center pb-[10px] font-mono text-2xl font-bold">Bark</h3>
                        <p className="mx-[15px] h-[150px] lg:h-[160px] 2xl:h-[275px] text-xl font-bold">ระบุเกี่ยวกับธรรมชาติของการเห่าในสายพันธุ์นั้น จากระดับ 1 ถึงระดับ 5 เป็นเรื่องที่ต้องพิจารณาหากมีข้อจำกัดด้านที่อยู่อาศัย</p>
                        <img className="w-[5em] self-center  mb-[10px]" src="/src/assets/guard-dog-svgrepo-com.png" alt="" />
                    </div>
                    <div className="flex flex-col bg-white m-[10px] h-[425px] lg:h-[350px] 2xl:h-[475px]">
                        <h3 className="m-[10px] border-b-[1px] text-center pb-[10px] font-mono text-2xl font-bold">Size</h3>
                        <p className="mx-[10px] h-[225px] lg:h-[160px] 2xl:h-[275px] text-2xl font-bold">เลือกขนาดของสุนัขให้เหมาะกับพื้นที่ที่อยู่อาศัย</p>
                        <div className="flex self-center mb-[10px]">
                            <img className="w-[4em] self-end" src="/src/assets/dachshund-svgrepo-com.png" alt="" />
                            <img className="w-[6em] " src="/src/assets/doberman-svgrepo-com.png" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col bg-white m-[10px] h-[425px] lg:h-[400px] 2xl:h-[475px]">
                        <h3 className="m-[10px] border-b-[1px] text-center pb-[10px] font-mono text-2xl font-bold">Energy</h3>
                        <p className="mx-[15px] h-[225px] lg:h-[195px] 2xl:h-[275px] text-lg font-bold">ค่าพลังงานของสุนัข โดยมีลำดับ 1 ถึง 4 จากน้อยไปมาก หากสุนัขมีพลังงานที่สูงนั้นอาจต้องการการดูแลเรื่องการพาไปเดินเล่นหรือมีการเล่นด้วยที่มากเป็นพิเศษ และสุนัขที่มีพลังงานสูงนั้นอาจเล่นแรงเกิดไปจนทำให้เกิดการบาดเจ็บจากการเล่นโดยที่ไม่ได้ตั้งใจได้</p>
                        <img className="w-[6em] self-center mb-[10px]" src="/src/assets/man-throwing-a-disc-and-dog-jumping-to-catch-it-svgrepo-com.png" alt="" />
                    </div>
                    <div className="flex flex-col bg-white m-[10px] h-[400px] lg:h-[400px] 2xl:h-[475px]">
                        <h3 className="m-[10px] border-b-[1px] text-center pb-[10px] font-mono text-2xl font-bold">Trainability</h3>
                        <p className="mx-[15px] h-[150px] lg:h-[195px] 2xl:h-[300px] text-lg font-bold">เป็นค่าความยากต่อการฝึกฝน จากระดับ 1 ถึง 5 ค่านี้ไม่ได้บ่งบอกถึงความฉลาดของสายพันธุ์เนื่องจากมีข้อพิจารณาเพิ่มเติมอยู่ด้วย อาธิความสามารถในการโฟกัสต่อสิ่งใดสิ่งหนึ่ง ความต้องการเป็นอิสระ หรือแม้แต่ความต้องการอยู่อย่างสันโดษ นั้นก็เป็นปัจจัยหนึ่งในการพิจารณาด้วยเช่นกัน</p>
                        <img className="w-[5em] mb-[10px] self-center" src="/src/assets/dog-in-front-of-a-man-svgrepo-com.png" alt="" />
                    </div>
                    <div className="flex flex-col bg-white m-[10px] h-[400px] lg:-[400px] 2xl:h-[475px]">
                        <div>
                        <h3 className="m-[10px] border-b-[1px] text-center pb-[10px] font-mono text-2xl font-bold">Protectiveness</h3>
                        <p className="mx-[15px] h-[150px] lg:h-[195px] 2xl:h-[300px] text-lg font-bold">ค่าการตอบสนองต่อการปกป้องเจ้าของเมื่อพบเจอสิ่งแปลกหน้า แต่ทั้งนี้ไม่ได้หมายความว่าสุนัขจะจู่โจมไปที่คนแปลกหน้า การต่อสนองนั้นจะขึ้นอยู่กับการฝึกสุนัข</p>
                        </div>
                        <img className="w-[5em] mb-[10px] self-center" src="/src/assets/dog-puppy-and-his-owner-looking-to-opposite-directions-svgrepo-com.png" alt="" />
                    </div>
                </div>
                <div className="w-[100%] h-[200px] p-[10px] mt-[20px]">
                    <div className="m-[10px]">อยากรู้อายุของสุนัขของคุณเมื่อเทียบกับอายุของมนุษย์มั้ย?</div>
                    <div className="text-center">Let's find!!</div>
                    <div className=" mx-[20px] flex justify-center  ">
                        <input className="my-[auto] mx-[20px] border-[2px] w-[200px] h-[40px]" type="text" 
                        value={dogAge} onChange={(e)=>setDogAge(e.target.value)} 
                        onKeyPress={handleKeyPress}
                        placeholder="อายุน้อง" />
                        <button className="w-[150px] h-[60px] bg-[#3C69E8] my-[auto] hover:text-gray-900" onClick={handleDogAgeClick}>Transfer&#8652;</button>
                        <span className=" my-[auto] mx-[20px] border-[2px] w-[200px] text-end h-[40px] ">{humanAge}</span>
                    </div>
                </div>
            </section>
           
        </div>
    )
}

export default HomepageTH;
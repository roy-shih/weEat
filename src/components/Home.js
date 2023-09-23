
'use client';
import { useState } from 'react';
import {Swiper,SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import {CircularProgress} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
function Home(props) {
  // const [title, setTitle] = useState(props.title);
  // rest of the code
  const demo = [
    {
        name: "麥當勞",
        money: 100,
        unit: "NT",
        category: "快餐",
        rating: 4.5,
        image: "https://picsum.photos/200/300",
        selectNum: 60,
        totalProviderNum: 50
    },
    {
        name: "越南河粉",
        money: 100,
        unit: "NT",
        category: "越南料理",
        rating: 4.5,
        image: "https://picsum.photos/200/300",
        selectNum: 10,
        totalProviderNum: 30
    },
    {
        name: "麥當勞",
        money: 100,
        unit: "NT",
        category: "快餐",
        rating: 4.5,
        image: "https://picsum.photos/200/300",
        selectNum: 3,
        totalProviderNum: 10
    },
]
  const [data, setData] = useState(demo)
  console.log(data)
  return (
    <main className="min-h-[100vh] z-0 bg-white" style={{
      marginTop: "53px"
    }}>
      <div className='flex flex-row justify-between py-3 px-4 bg-white text-black'>
        <p className="">Tomorrow&apos;s Meal</p>
      </div>
      <Swiper className="mySwiper">
        {demo.map((item, index) => (
          <SwiperSlide key={index} className="min-h-[570px] w-[100%]  bg-white text-black">
                {/* background image */}
                <div className="w-[100%] h-[100%] flex flex-col items-center justify-center">
                    <img src={item.image} alt="" className="w-[90%] h-[100%]  rounded-xl object-cover" />
                </div>
                {/* 右上角放星級，並重疊在上面的圖上 */}
                <div className="absolute top-2 left-[35px]">
                    <div className="w-[50px] h-[50px] rounded-full bg-white flex flex-row justify-center items-center">
                        {/* <p className="text-black">
                            {item.rating}
                        </p> */}
                          <CircularProgress 
                            className='justify-start'
                            size="lg"
                            value={item.selectNum/item.totalProviderNum*100}
                            color={item.selectNum/item.totalProviderNum*100>50?"success":"primary"}
                            // formatOptions={{ style: "unit", unit: "kilometer" }}
                            showValueLabel={true} 
                          />
                    </div>
                </div>
                {/* 下方文字，並重疊在上面的圖上 */}
                <div className="absolute bottom-16 left-0 mx-10 w-[80%] max-h-[100px] flex flex-row justify-between pl-4 pr-2 py-3  bg-white rounded-lg">
                    <div>
                      <p className="text-black text-xl">{
                          item.name
                      }</p>
                      <p className=" text-lg mt-2 text-blue-500">{
                          item.unit+" "+item.money
                      }</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      
                      <Button radius="full" className={`bg-gradient-to-tr ${item.selectNum<=item.totalProviderNum? 'from-pink-500 to-yellow-500 text-white shadow-lg':'from-purple-500 to-blue-500 text-white shadow-lg'} " size="lg`}>
                      <div className="flex flex-col justify-center items-center">
                        {item.selectNum>item.totalProviderNum? `Add to wish (${item.selectNum-item.totalProviderNum})`:`Queue (${item.selectNum}/${item.totalProviderNum})`}
                        </div>
                      </Button>
                    </div>
                    
                </div>
            </SwiperSlide>
        ))}
      </Swiper>   
        
    </main>
  );
}
export default Home;
import React, { useEffect } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
// import { AppContext } from '@/context/counter.context';


function User() {
    const demo = [
        {
            name: "Zoey Lang",
            role: "User",
            id: "@zoeylang",
            image: "https://picsum.photos/200/300",
            description: "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
        },
        {
            name: "Peggy Peters",
            role: "Meal Provider",
            id: "@peggypeters",
            image: "https://picsum.photos/200/300",
            description: "Meal Provider. I love cooking and sharing my food with others.",

        }       
    ]
    // const [isFollowed, setIsFollowed] = React.useState(false);
    const [Login, setLogin] = React.useState('User');
    // const { message, setMessage } = React.useContext(AppContext);
    // useEffect(() => {
    //     setMessage(Login)
    // }, [Login])
    return (
        <div className="bg-white min-h-[100vh] text-black flex flex-col items-center justify-start z-0" style={{ paddingTop: '65px' }}>
            {demo.map((item, index) => (
                <Card key={index} className="max-w-[340px] mb-5 z-0">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">{
                                item.name
                            }</h4>
                            <h5 className="text-small tracking-tight text-default-400">{
                                item.id
                            }</h5>
                        </div>
                    </div>
                    <Button
                        className={Login==item.role ? "bg-transparent text-foreground border-default-200" : ""}
                        color="primary"
                        radius="full"
                        size="sm"
                        variant={Login==item.role ? "bordered" : "solid"}
                        onPress={() => setLogin(Login=='User'?'Meal Provider':'User' )}
                    >
                        {Login==item.role? `${item.role} Logout` : `${item.role} Login`}
                    </Button>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                    <p>
                        {item.description}
                    </p>
                    
                </CardBody>
                <CardFooter className="gap-3"> 
                     <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">4000</p>
                        <p className=" text-default-400 text-small">NTD</p>
                    </div>
                    <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">9</p>
                        <p className="text-default-400 text-small">優惠卷</p>
                    </div> 
               </CardFooter>
                </Card>
            ))}
            
        </div>
    )
}

export default User
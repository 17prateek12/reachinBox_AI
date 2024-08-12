import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from './Header';
import { LeftCard } from "./LeftCard";
import {ThreadPage} from "./ThreadPage";
import {RightCard} from "./RightCard";

const MainPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedThread, setSelectedThread] = useState(null);

    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get(
                    "https://hiring.reachinbox.xyz/api/v1/onebox/list",
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );
                setData(res.data.data);
                console.log("data", res.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    const loadMail = async (threadId) => {
        setSelectedThread(threadId);
    };

    return (
        <div className='max-w-full h-[100vh] dark:bg-[#000000] bg-[#e3e0e0]'>
            <Header isAuthorized={true} />
            {loading ? (
                <div className="dark:text-white text-gray-600 flex h-full w-full justify-center items-center">
                    Loading ...
                </div>
            ) : (
                <div className="flex items-baseline justify-center mt-16 ml-16 navsm:flex-col">
                    <div className="w-1/4 sm:w-full navsm:w-full">
                        <LeftCard data={data} loadMail={loadMail} />
                    </div>
                    <div className="w-1/2 sm:w-full navsm:w-full">
                    <ThreadPage selectedThread={selectedThread} />
                    </div>
                    <div className='w-1/4 sm:w-full navsm:w-full'>
                    <RightCard />
                    </div>
                </div>
            )}
        </div>
    );
}

export { MainPage };

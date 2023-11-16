import { useRouter } from "next/router";
import { useEffect } from "react";

export const Index = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/forms/form-elements/')
    }, [])
    return (
        <>This is main</>
    );
};

export default Index;

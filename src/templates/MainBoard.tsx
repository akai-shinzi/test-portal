// import Loader from "@/common/Loader";
// import useIsReady from "@/hooks/useIsReady";
import LayoutIndex from "@/layouts/LayoutIndex";
import { type ReactNode } from "react";
import { Toaster } from 'react-hot-toast';

type IMainProps = {
    meta?: ReactNode;
    className?: string;
    children?: ReactNode;
};
const MainBoard = ({ ...props }: IMainProps) => {
    // const isMount = useIsReady();

    // if (!isMount) {
    //     return <Loader />
    // }

    return (
        <div className="w-full antialiased">
             <Toaster
                position="top-right"
                reverseOrder={false}
                containerClassName="overflow-auto"
            />
            {props.meta}

            <LayoutIndex>
                {props.children}
            </LayoutIndex>
        </div>
    );
};

export { MainBoard };
export default MainBoard;

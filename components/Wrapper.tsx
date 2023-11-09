import type { NextPage } from 'next'
import { ReactNode } from 'react';
import Navbar from './Navbar';

interface WrapperProps {
    children: ReactNode
};

const Wrapper: NextPage<WrapperProps> = ({ children }) => {

    return (
        <div className=' bg-slate-200 text-cyan-950 min-h-screen'>
            <Navbar />
            {children}
        </div>
    )
}

export default Wrapper;


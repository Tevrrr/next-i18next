import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LocaleLinkProps {
    localeValue: string
};

const LocaleLink: NextPage<LocaleLinkProps> = ({ localeValue }) => {
    const { locale, asPath } = useRouter()
    return (
        <Link href={asPath} locale={localeValue.toLowerCase()}
            className={` ${localeValue.toLowerCase() === locale ? 'bg-opacity-100 text-slate-200 cursor-default ' : ''}
             hover:text-slate-200 hover:bg-opacity-100 transition-all duration-100 ease-out bg-cyan-950 border border-cyan-950 px-4 py-1 rounded-full bg-opacity-0 text-cyan-950`}>
            {localeValue.toUpperCase()}
        </Link>
    )
}

export default LocaleLink;
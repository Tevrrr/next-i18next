import type { NextPage } from 'next'
import Link from 'next/link';
import LocaleLink from './items/LocaleLink';
import { useTranslation } from 'next-i18next'

interface NavbarProps { };

const Navbar: NextPage<NavbarProps> = () => {
    const { t } = useTranslation('navbar')
    return (
        <nav className='flex w-full justify-center  '>
            <div className=' w-full max-w-screen-xl flex items-center p-2'>
                <div className='flex gap-4 grow text-xl font-bold '>
                    <Link href='/'>{t('home')}</Link>
                    <Link href='/about'>{t('aboutUs')}</Link>
                </div>
                <div className='flex gap-4'>
                    <LocaleLink localeValue='en' />
                    <LocaleLink localeValue='de' />
                    <LocaleLink localeValue='ru' />

                </div>
            </div>
        </nav>
    )
}

export default Navbar;
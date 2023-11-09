import { Inter } from 'next/font/google'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Wrapper from '@/components/Wrapper'
import { GetStaticProps } from 'next'
import { useState } from 'react'

export default function Home() {
    const { t, i18n: { language } } = useTranslation('home')
    const [count, setCount] = useState(0)
    const [date, setDate] = useState<null | Date>(null)

    const add = () => {
        setCount(count + 1)
    }
    return (
        <Wrapper>
            <div className='flex w-full flex-col gap-10 justify-center items-center'>
                <header className=' max-w-screen-xl w-full flex justify-between gap-4 p-4 pt-10'>
                    <div className='flex flex-col gap-4'>
                        <h1 className=' text-[13rem] leading-[10rem] font-black uppercase max-w-2xl break-words '>{t('h1')}</h1>
                    </div>
                    <div className='flex flex-col pt-4 gap-1 '>
                        <p>
                            {t('p1')}
                        </p>
                        <p>
                            {t('p2')}
                        </p>
                        <p>
                            {t('p3')}
                        </p>
                    </div>

                </header>
                <div className='flex flex-col items-center max-w-xs gap-2'>
                    <input type='date' onChange={(e) => { setDate(new Date(e.target.value)) }} className=' bg-slate-200' />
                    <p>{date && t('intlDateTime', {
                        val: date,
                        formatParams: {
                            val: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
                        },
                    })}</p>
                    <h2 className=' text-2xl'>{t('messages', { count })}</h2>
                    <button onClick={add} className='px-6 py-3 rounded-md bg-cyan-600 text-cyan-50'>
                        {t('messagesBtn')}
                    </button>
                </div>
            </div>

        </Wrapper>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || 'en', [
                'home',
                'navbar',
            ], null, ['en', 'no'])),
            // Will be passed to the page component as props
        },
    }
}

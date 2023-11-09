import { Inter } from 'next/font/google'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Wrapper from '@/components/Wrapper'
import { GetStaticProps } from 'next'

export default function Home() {
    const { t } = useTranslation('home')
    return (
        <Wrapper>
            <div className='flex w-full justify-center'>
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

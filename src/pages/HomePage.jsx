import { Header } from '../components/Header.jsx'

export function HomePage() {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-sky-900 px-6 py-10 flex items-center justify-center">
                <div className="flex w-full max-w-6xl flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:text-left">
                    <div className="max-w-2xl text-center md:text-left">
                        <h1 className="text-5xl font-black leading-tight text-white drop-shadow-lg md:text-6xl">
                            Seyon Shanthan
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl">
                            I am an engineering student at NTNU Trondheim. In my free time, I enjoy playing sports,
                            going to social and academic events, and participating in different student organizations.
                        </p>
                    </div>

                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/010/853/654/small/cardiogram-cardiograph-oscilloscope-screen-illustration-background-free-png.png"
                        alt="Student portrait"
                        className="h-64 w-full max-w-sm rounded-[24px] object-cover md:h-40 md:w-80 hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                </div>
            </div>
        </>
    );
}


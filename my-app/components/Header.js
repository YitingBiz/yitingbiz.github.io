import Image from 'next/image'
const Header = () => {
    return (
        <div className="relative flex items-center justify-center text-white overflow-hidden">
            <div className=" top-0 onset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="AI-generated music visuals"
                    layout="fit"
                    width={160}
                    height={90}
                    objectFit="cover"
                    quality={100}
                    priority
                />
            </div>
        </div>
    )
}

export default Header

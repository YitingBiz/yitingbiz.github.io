import Image from 'next/image'
import { Flex, Box, Text, Button } from '@radix-ui/themes'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'

const Header = () => {
    return (
        <>
            <Box className="bg-[#1a2744] text-white py-2 px-4 text-center">
                <Flex align="center" justify="center" gap="2">
                    {/* <Text weight="bold">NEW RELEASE</Text> */}
                    <Text></Text>
                    {/* <Button variant="ghost" className="text-white underline">
                        Learn more
                    </Button>
                    <Button variant="ghost" className="text-white ml-auto">
                        X
                    </Button> */}
                </Flex>
            </Box>
            <Flex className="bg-white py-4 px-6" justify="between" align="center">
                <Flex align="center" gap="6">
                    <Image
                        src="/vibes-logo.png"
                        alt="Vibes Logo"
                        width={40}
                        height={40}
                    />
                    <NavItem>Features</NavItem>
                    <NavItem simple>Pricing</NavItem>
                </Flex>
                <Flex align="center" gap="4">
                    <Button variant="ghost">Book demo</Button>
                    {/* <Button>
                        Get started <FaChevronRight />
                    </Button> */}
                </Flex>
            </Flex>
            <header className="relative w-full h-[60vh] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0 bg-black">
                    {/* Background image or color can be added here */}
                </div>
            </header>
        </>
    )
}

const NavItem = ({ children, simple }) => (
    <Flex align="center" gap="1" className="text-gray-700 cursor-pointer">
        <Text size="2">{children}</Text>
        {!simple && <FaChevronDown />}
    </Flex>
)

export default Header
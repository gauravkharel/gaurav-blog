import { ReactNode } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className=" dark:bg-black mb-4 pt-5 ">
            <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between space-y-4 md:space-y-0 md:flex-row">
                    <p className="text-gray-800 dark:text-gray-300">
                        find me on:
                    </p>
                    <div className="flex space-x-6">
                        <Socials href="https://linkedin.com/gauravkharel">
                            <FaLinkedin size={24} />
                        </Socials>
                        <Socials href="https://github.com/gauravkharel">
                            <FaGithub size={24} />
                        </Socials>
                        <Socials href="https://twitter.com/gauravdoux">
                            <FaXTwitter size={24} />
                        </Socials>
                        <Socials href="https://instagram.com/gauravhuh">
                            <FaInstagram size={24} />
                        </Socials>
                    </div>
                </div>
            </section>
        </footer>
    )
}

type SocialType = {
    children: ReactNode,
    href: string

}
const Socials = ({ children, href }: SocialType) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
        >
            {children}
        </a>
    )
}
export default Footer
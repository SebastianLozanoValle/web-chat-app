import Link from "next/link"

export const LinkIcon = ({ route, children, notifications = 0 }: { route: string, children: any, notifications?: number }) => {
    return (
        <Link href='/' className="relative text-4xl bg-primary p-1 rounded-md transition-all duration-500 text-white group hover:bg-white hover:text-primary">
            {
                notifications > 0 && <span className="absolute -right-2 -top-3 bg-primary transition-all duration-500 group-hover:bg-white text-lg rounded-full p- aspect-square h-6 flex justify-center items-center">{notifications}</span>
            }
            {
                children
            }
        </Link>
    )
}
import { LinkIcon } from "./link-icon"
import { CiChat1, CiSliderHorizontal } from "react-icons/ci";

export const SecondaryBar = () => {
    return (
        <nav className="p-3 flex w-full">
            <div className="flex-1 border-border border p-3 flex justify-around rounded-lg">
                <LinkIcon route='/' notifications={4}>
                    <CiChat1 />
                </LinkIcon>
                <LinkIcon route='/'>
                    <CiChat1 />
                </LinkIcon>
                <LinkIcon route='/'>
                    <CiSliderHorizontal />
                </LinkIcon>
            </div>
        </nav>
    )
}
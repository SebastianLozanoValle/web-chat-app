import { OptionsButton } from "../buttons/options-button";

export const NavBar = () => {
    return (
        <nav className="sticky top-0 left-0 flex bg-background p-4 justify-between items-center">
            <h1 className="text-3xl font-extrabold">ChatRooms</h1>
            <OptionsButton />
        </nav>
    )
}
import {
Cloud,
CreditCard,
Github,
Keyboard,
LifeBuoy,
LogOut,
Mail,
MessageSquare,
Plus,
PlusCircle,
Settings,
User,
UserPlus,
Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuGroup,
DropdownMenuItem,
DropdownMenuLabel,
DropdownMenuPortal,
DropdownMenuSeparator,
DropdownMenuShortcut,
DropdownMenuSub,
DropdownMenuSubContent,
DropdownMenuSubTrigger,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CiSliderHorizontal } from "react-icons/ci";

export function OptionsButton() {
return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Button className="text-4xl bg-transparent p-0 hover:bg-transparent">
            <CiSliderHorizontal />
        </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
        </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Team</span>
        </DropdownMenuItem>
        <DropdownMenuSub>
            <DropdownMenuSubTrigger>
            <UserPlus className="mr-2 h-4 w-4" />
            <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
            <DropdownMenuSubContent>
                <DropdownMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <MessageSquare className="mr-2 h-4 w-4" />
                <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                <span>More...</span>
                </DropdownMenuItem>
            </DropdownMenuSubContent>
            </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>New Team</span>
        </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
        <LifeBuoy className="mr-2 h-4 w-4" />
        <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
        <LogOut className="mr-2 h-4 w-4" />
        <span>Log out</span>
        </DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
)
}
  
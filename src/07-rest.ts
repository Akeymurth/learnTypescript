import { User, UserRole } from "./01-enum";

const currentUser: User = {
    name: "nico",
    role: UserRole.GUEST
}

export const checkAdminRole = () => {
    if (currentUser.role === UserRole.ADMIN) {
        return true
    }
    return false
}

const check = checkAdminRole()
console.log('is admin?:', check)

export const checkRole = (roles: string[]) => {
    if (roles.includes(currentUser.role)) {
        return true
    }
    return false
}

const check1 = checkRole([UserRole.ADMIN, UserRole.USER])
console.log('is admin or user?:', check1)

export const checkRoleV2 = (...roles: string[]) => {
    if (roles.includes(currentUser.role)) {
        return true
    }
    return false
}

const checkV2 = checkRoleV2(UserRole.ADMIN, UserRole.USER, UserRole.GUEST)
console.log('V2: is admin or user?:', checkV2)
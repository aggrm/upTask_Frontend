import type { Project } from "../types";

export const isManager = (managerId: Project['manager'], userId: Project['_id']) => {
    return managerId === userId
}
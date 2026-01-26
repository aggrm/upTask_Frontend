import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AppLayout from '@/layouts/AppLayout'
import DashboardView from '@/views/DashboardView'
import LoginView from '@/views/auth/LoginView'
import CreateProjectView from './views/projects/CreateProjectView'
import EditProjectView from './views/projects/EditProjectView'
import ProjectDetailsView from './views/projects/ProjectDetailsView'
import AuthLayout from './layouts/AuthLayout'
import RegisterView from './views/auth/RegisterView'

export default function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='/' element={<DashboardView />} index></Route>
                    <Route path='/projects/create' element={<CreateProjectView />} index></Route>
                    <Route path='/projects/:projectId' element={<ProjectDetailsView />} index></Route>
                    <Route path='/projects/:projectId/edit' element={<EditProjectView />} index></Route>
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path='/auth/login' element={<LoginView />} index></Route>
                    <Route path='/auth/register' element={<RegisterView />} index></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


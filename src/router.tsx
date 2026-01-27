import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AppLayout from '@/layouts/AppLayout'
import DashboardView from '@/views/DashboardView'
import LoginView from '@/views/auth/LoginView'
import CreateProjectView from './views/projects/CreateProjectView'
import EditProjectView from './views/projects/EditProjectView'
import ProjectDetailsView from './views/projects/ProjectDetailsView'
import AuthLayout from './layouts/AuthLayout'
import RegisterView from './views/auth/RegisterView'
import ConfirmAccountView from './views/auth/ConfirmAccountView'
import RequestNewCodeView from './views/auth/RequestNewCodeView'
import NewPasswordView from './views/auth/NewPasswordView'
import ForgotPasswordView from './views/auth/ForgotPasswordView'


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
                    <Route path='/auth/confirm-account' element={<ConfirmAccountView />} index></Route>
                    <Route path='/auth/request-code' element={<RequestNewCodeView/>} index></Route>
                    <Route path='/auth/forgot-password' element={<ForgotPasswordView/>} index></Route>
                    <Route path='/auth/new-password' element={<NewPasswordView/>} index></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

